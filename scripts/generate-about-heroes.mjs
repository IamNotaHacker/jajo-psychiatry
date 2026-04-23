import { readFileSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";

const envPath = resolve("./.env.local");
const env = Object.fromEntries(
  readFileSync(envPath, "utf8")
    .split(/\r?\n/)
    .filter((l) => l && !l.startsWith("#") && l.includes("="))
    .map((l) => {
      const i = l.indexOf("=");
      return [l.slice(0, i).trim(), l.slice(i + 1).trim().replace(/^["']|["']$/g, "")];
    })
);

const KEY = env.GEMINI_API_KEY;
if (!KEY) throw new Error("GEMINI_API_KEY missing in .env.local");

const MODEL = "gemini-3-pro-image-preview";
const URL = `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent`;

const jobs = [
  {
    out: "public/images/ai/practice-hero.jpg",
    prompt:
      "Editorial architectural interior photograph of an elegant modern psychiatry practice in a sunlit room. Warm cream walls, natural oak built-in shelving, one wide leather armchair and a linen sofa arranged conversationally, a small ceramic vase with a single green branch on a low walnut side table. Soft golden late-afternoon sidelight streaming through sheer linen curtains casting long gentle shadows. Muted palette of cream, soft navy, warm wood tones, and a subtle pale-blue accent. Calm, spacious, uncluttered, high-end residential feel — not clinical, not a doctor's office. Photorealistic, shallow depth of field, 35mm, Leica aesthetic, architectural-digest quality. No people. No text. 16:9 widescreen.",
  },
  {
    out: "public/images/ai/providers-hero.jpg",
    prompt:
      "Editorial photograph of a softly lit consultation corner inside a boutique psychiatry office. Two empty upholstered chairs facing each other across a small round wooden table with a ceramic mug of tea and an open leather notebook. Wall behind is warm off-white with a single framed botanical illustration. Tall window on the left with sheer curtains diffusing morning light, a healthy potted olive plant catching the light. Palette: cream, deep navy accent, warm oak, soft cyan-blue highlight in the window light. Quiet, human, intimate, unrushed. Photorealistic, medium-format look, shallow depth of field, muted film tones, Kinfolk-magazine aesthetic. No people. No text. No signage. 16:9 widescreen.",
  },
];

for (const job of jobs) {
  console.log(`Generating: ${job.out}`);
  const res = await fetch(`${URL}?key=${KEY}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      contents: [{ parts: [{ text: job.prompt }] }],
      generationConfig: { responseModalities: ["IMAGE"] },
    }),
  });
  if (!res.ok) {
    console.error(`HTTP ${res.status}`, await res.text());
    process.exit(1);
  }
  const data = await res.json();
  const parts = data?.candidates?.[0]?.content?.parts ?? [];
  const img = parts.find((p) => p.inlineData?.data);
  if (!img) {
    console.error("No image in response:", JSON.stringify(data).slice(0, 1000));
    process.exit(1);
  }
  writeFileSync(resolve(job.out), Buffer.from(img.inlineData.data, "base64"));
  console.log(`  wrote ${job.out}`);
}
