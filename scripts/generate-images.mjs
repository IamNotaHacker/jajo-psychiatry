// Nano Banana 2 image generation for Jajo Psychiatry homepage
// Uses Gemini API (gemini-3-pro-image-preview / fallback to 2.5-flash-image-preview)
// Run with: node scripts/generate-images.mjs

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT_DIR = path.resolve(__dirname, "..", "public", "images", "ai");

// Read API key from .env.local
function loadEnv() {
  const envPath = path.resolve(__dirname, "..", ".env.local");
  if (!fs.existsSync(envPath)) return;
  const content = fs.readFileSync(envPath, "utf8");
  for (const line of content.split("\n")) {
    const match = line.match(/^([A-Z_]+)=(.*)$/);
    if (match) process.env[match[1]] = match[2].trim();
  }
}
loadEnv();

const API_KEY = process.env.GEMINI_API_KEY;
if (!API_KEY) {
  console.error("Missing GEMINI_API_KEY in .env.local");
  process.exit(1);
}

// Nano Banana 2 = gemini-3-pro-image-preview. Fallback to older variants.
const MODELS = [
  "gemini-3-pro-image-preview",
  "gemini-2.5-flash-image-preview",
  "gemini-2.0-flash-exp-image-generation",
];

async function generate(prompt, filename) {
  const outPath = path.join(OUT_DIR, filename);
  if (fs.existsSync(outPath)) {
    console.log(`[skip] ${filename} already exists`);
    return true;
  }

  for (const model of MODELS) {
    const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${API_KEY}`;
    const body = {
      contents: [{ parts: [{ text: prompt }] }],
      generationConfig: {
        responseModalities: ["IMAGE"],
      },
    };

    try {
      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      if (!res.ok) {
        const text = await res.text();
        console.warn(`[${model}] ${res.status}: ${text.slice(0, 200)}`);
        continue;
      }

      const json = await res.json();
      const parts = json?.candidates?.[0]?.content?.parts || [];
      const imagePart = parts.find((p) => p.inlineData?.data);

      if (!imagePart) {
        console.warn(`[${model}] no image in response`);
        continue;
      }

      const buffer = Buffer.from(imagePart.inlineData.data, "base64");
      fs.mkdirSync(path.dirname(outPath), { recursive: true });
      fs.writeFileSync(outPath, buffer);
      console.log(`[ok] ${filename} via ${model} (${Math.round(buffer.length / 1024)} KB)`);
      return true;
    } catch (err) {
      console.warn(`[${model}] error:`, err.message);
    }
  }

  console.error(`[fail] could not generate ${filename}`);
  return false;
}

// Image prompts — designed for a warm, upscale psychiatry practice
const jobs = [
  {
    filename: "hero-main.jpg",
    prompt:
      "Photorealistic cinematic photograph of a serene, upscale psychiatrist's private office interior at golden hour. Warm morning sunlight streaming through tall arched windows casting soft geometric shadows. A comfortable cream linen armchair and a minimalist wood side table with a ceramic vase holding eucalyptus branches. Neutral cream walls with subtle warm textures. Framed abstract art on the wall. A woven wool rug in soft terracotta tones. Calm, inviting, trustworthy atmosphere. Editorial photography, shallow depth of field, f/2.8, natural lighting, architectural digest style. No people. High-end wellness clinic aesthetic. Warm color palette: cream, terracotta, sage, honey. Ultra-realistic, 4K quality.",
  },
  {
    filename: "nature-calm.jpg",
    prompt:
      "Photorealistic soft-focus photograph of morning mist over a tranquil forest with tall golden grass in the foreground, soft warm golden hour light filtering through tree canopies. Calming, meditative, peaceful atmosphere. Warm earthy color palette of sage green, honey gold, and cream. Shot on medium format film, Hasselblad style, editorial nature photography. Serene, healing, restorative feeling. Ultra-realistic, cinematic, shallow depth of field.",
  },
  {
    filename: "texture-warm.jpg",
    prompt:
      "Macro photograph of handmade ceramic textures in warm cream, terracotta, and soft honey tones. Organic imperfect surface with subtle highlights catching soft natural light. Luxurious, tactile, minimal composition. Editorial still life photography, extreme close-up, f/4, soft diffused lighting. Warm neutral earth tones. High-end artisanal craft aesthetic. No text, no objects visible, purely textural and abstract.",
  },
  {
    filename: "window-light.jpg",
    prompt:
      "Photorealistic photograph of soft morning sunlight streaming through a large window into a minimalist cream-colored room. A single potted olive branch plant on a light wood windowsill. Soft diffused light creating warm shadows on a cream linen curtain. Peaceful, meditative, clean aesthetic. Editorial interior photography, shallow depth of field, warm natural lighting. No people. Wellness retreat feeling. Color palette: cream, sage green, warm white, honey gold.",
  },
  {
    filename: "abstract-calm.jpg",
    prompt:
      "Abstract ethereal photograph of soft warm gradient light washing over a textured cream plaster wall. Gentle shadows, organic flowing forms, watercolor-like quality. Warm tones of peach, cream, soft gold, and blush. Meditative, calming, high-end wellness spa aesthetic. Editorial photography, minimalist composition, soft focus, dreamy atmosphere. No text, no subjects, pure atmospheric light study.",
  },
  {
    filename: "office-detail.jpg",
    prompt:
      "Photorealistic editorial photograph of a tastefully arranged wellness desk scene from above. A ceramic cup of herbal tea, a leather-bound journal, a small bouquet of dried lavender, and a vintage brass reading lamp on a natural oak wood desk. Warm natural window light from the side. Calm, intentional, upscale aesthetic. Shot in architectural digest magazine style, top-down flat lay, f/4, warm tones. Cream, honey, sage, and natural wood color palette. Ultra-realistic, high-end lifestyle photography.",
  },
];

async function main() {
  fs.mkdirSync(OUT_DIR, { recursive: true });
  console.log(`Generating ${jobs.length} images to ${OUT_DIR}\n`);

  for (const job of jobs) {
    console.log(`Generating: ${job.filename}`);
    await generate(job.prompt, job.filename);
  }

  console.log("\nDone.");
}

main();
