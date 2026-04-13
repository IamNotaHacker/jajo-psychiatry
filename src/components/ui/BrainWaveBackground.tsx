"use client";

import { useRef, useEffect, useCallback } from "react";

export function BrainWaveBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0, active: false });
  // Smoothed mouse position to prevent jerky response
  const smoothMouseRef = useRef({ x: 0.5, y: 0.5 });
  const animRef = useRef<number>(0);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    mouseRef.current = {
      x: (e.clientX - rect.left) / rect.width,
      y: (e.clientY - rect.top) / rect.height,
      active: true,
    };
  }, []);

  const handleMouseLeave = useCallback(() => {
    mouseRef.current.active = false;
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const parent = canvas.parentElement;
    if (!parent) return;

    parent.addEventListener("mousemove", handleMouseMove);
    parent.addEventListener("mouseleave", handleMouseLeave);

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio, 2);
      const rect = parent.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
      ctx.scale(dpr, dpr);
    };
    resize();
    window.addEventListener("resize", resize);

    const waves = [
      { y: 0.12, amplitude: 14, frequency: 0.003, speed: 0.5, opacity: 0.1, width: 1.3 },
      { y: 0.24, amplitude: 10, frequency: 0.004, speed: -0.35, opacity: 0.07, width: 0.9 },
      { y: 0.36, amplitude: 16, frequency: 0.0025, speed: 0.45, opacity: 0.09, width: 1.1 },
      { y: 0.48, amplitude: 12, frequency: 0.0035, speed: -0.4, opacity: 0.06, width: 0.8 },
      { y: 0.6, amplitude: 15, frequency: 0.003, speed: 0.5, opacity: 0.08, width: 1.2 },
      { y: 0.72, amplitude: 10, frequency: 0.004, speed: -0.3, opacity: 0.06, width: 0.8 },
      { y: 0.84, amplitude: 13, frequency: 0.003, speed: 0.4, opacity: 0.08, width: 1 },
      { y: 0.94, amplitude: 8, frequency: 0.0045, speed: -0.25, opacity: 0.05, width: 0.7 },
    ];

    let time = 0;
    const lerp = 0.04;

    // Random spike system — each wave gets occasional spikes
    const spikes: { waveIdx: number; x: number; strength: number; birth: number; dur: number }[] = [];
    let nextSpikeTime = 0;

    const draw = () => {
      const rect = parent.getBoundingClientRect();
      const w = rect.width;
      const h = rect.height;
      ctx.clearRect(0, 0, w, h);

      const mouse = mouseRef.current;
      const smooth = smoothMouseRef.current;
      time += 0.016;

      // Spawn random spikes
      if (time > nextSpikeTime) {
        const waveIdx = Math.floor(Math.random() * waves.length);
        spikes.push({
          waveIdx,
          x: Math.random(), // normalized 0-1 position
          strength: 15 + Math.random() * 25, // spike height in px
          birth: time,
          dur: 0.3 + Math.random() * 0.4, // spike lifetime
        });
        nextSpikeTime = time + 0.3 + Math.random() * 1.2; // next spike in 0.3-1.5s
      }
      // Clean up expired spikes
      for (let i = spikes.length - 1; i >= 0; i--) {
        if (time - spikes[i].birth > spikes[i].dur) spikes.splice(i, 1);
      }

      // Smoothly interpolate toward actual mouse position
      if (mouse.active) {
        smooth.x += (mouse.x - smooth.x) * lerp;
        smooth.y += (mouse.y - smooth.y) * lerp;
      } else {
        // Slowly drift back to center when mouse leaves
        smooth.x += (0.5 - smooth.x) * 0.01;
        smooth.y += (0.5 - smooth.y) * 0.01;
      }

      for (const wave of waves) {
        const baseY = wave.y * h;

        ctx.beginPath();
        ctx.strokeStyle = `rgba(77, 201, 246, ${wave.opacity})`;
        ctx.lineWidth = wave.width;
        ctx.lineCap = "round";
        ctx.lineJoin = "round";

        const points: { x: number; y: number }[] = [];

        for (let x = 0; x <= w; x += 3) {
          const normalX = x / w;

          // Layered sine waves — broad flow + medium ripple + fine texture
          let y = baseY;
          // Broad slow wave
          y += Math.sin(x * wave.frequency + time * wave.speed) * wave.amplitude;
          // Medium ripple
          y += Math.sin(x * wave.frequency * 2.3 + time * wave.speed * 1.2 + 1.3) * wave.amplitude * 0.5;
          // Faster texture wave
          y += Math.sin(x * wave.frequency * 4.5 + time * wave.speed * 0.8 + 3.1) * wave.amplitude * 0.25;
          // Subtle high-frequency shimmer
          y += Math.sin(x * wave.frequency * 8 + time * wave.speed * 1.5 + 0.7) * wave.amplitude * 0.1;
          // Long slow undulation
          y += Math.sin(x * wave.frequency * 0.4 + time * wave.speed * 0.3 + 5.2) * wave.amplitude * 0.6;

          // Random spikes — sharp up then back down
          for (const spike of spikes) {
            if (spike.waveIdx !== waves.indexOf(wave)) continue;
            const spikeX = spike.x;
            const dx = normalX - spikeX;
            const proximity = Math.exp(-(dx * dx) / 0.0008); // tight gaussian
            const age = (time - spike.birth) / spike.dur; // 0 to 1
            // Quick rise, smooth fall
            const envelope = age < 0.2 ? age / 0.2 : 1 - ((age - 0.2) / 0.8);
            y -= proximity * spike.strength * Math.max(0, envelope);
          }

          // Smooth mouse interaction — gentle displacement
          if (mouse.active || Math.abs(smooth.x - 0.5) > 0.01) {
            const dx = normalX - smooth.x;
            const dy = wave.y - smooth.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            const influence = Math.max(0, 1 - dist / 0.4);
            // Gentle push away instead of harsh ripple
            const push = influence * influence * wave.amplitude * 1.2;
            const angle = Math.atan2(dy, dx);
            y += Math.sin(angle + time * 0.5) * push;
          }

          points.push({ x, y });
        }

        // Draw with smooth quadratic curves instead of straight lines
        if (points.length > 0) {
          ctx.moveTo(points[0].x, points[0].y);
          for (let i = 1; i < points.length - 1; i++) {
            const cpX = (points[i].x + points[i + 1].x) / 2;
            const cpY = (points[i].y + points[i + 1].y) / 2;
            ctx.quadraticCurveTo(points[i].x, points[i].y, cpX, cpY);
          }
          const last = points[points.length - 1];
          ctx.lineTo(last.x, last.y);
        }
        ctx.stroke();
      }

      // Soft floating dots between wave pairs
      for (let i = 0; i < waves.length - 1; i += 2) {
        const wave1 = waves[i];
        const wave2 = waves[i + 1];
        for (let x = 80; x < w; x += 150) {
          const y1 = wave1.y * h + Math.sin(x * wave1.frequency + time * wave1.speed) * wave1.amplitude;
          const y2 = wave2.y * h + Math.sin(x * wave2.frequency + time * wave2.speed) * wave2.amplitude;
          const midY = (y1 + y2) / 2;
          const pulse = 0.5 + Math.sin(time * 0.8 + x * 0.005) * 0.5;

          ctx.beginPath();
          ctx.arc(x, midY, 1.5 + pulse * 0.5, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(77, 201, 246, ${0.06 + pulse * 0.08})`;
          ctx.fill();
        }
      }

      animRef.current = requestAnimationFrame(draw);
    };

    animRef.current = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animRef.current);
      parent.removeEventListener("mousemove", handleMouseMove);
      parent.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("resize", resize);
    };
  }, [handleMouseMove, handleMouseLeave]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
    />
  );
}
