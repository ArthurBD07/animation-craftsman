import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface InfiniteGridProps {
  className?: string;
  children?: React.ReactNode;
}

interface WaveConfig {
  offset: number;
  amplitude: number;
  frequency: number;
  color: string;
  opacity: number;
}

interface ThemeColors {
  backgroundTop: string;
  backgroundBottom: string;
  glowPrimary: string;
  glowAccent: string;
  wavePalette: WaveConfig[];
}

export const InfiniteGrid: React.FC<InfiniteGridProps> = ({ className, children }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const targetMouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId = 0;
    let time = 0;

    const computeThemeColors = (): ThemeColors => {
      const rootStyles = getComputedStyle(document.documentElement);

      const resolveColor = (variables: string[], alpha = 1) => {
        const tempEl = document.createElement("div");
        tempEl.style.position = "absolute";
        tempEl.style.visibility = "hidden";
        tempEl.style.width = "1px";
        tempEl.style.height = "1px";
        document.body.appendChild(tempEl);

        let color = `rgba(33, 14, 70, ${alpha})`;

        for (const variable of variables) {
          const value = rootStyles.getPropertyValue(variable).trim();
          if (!value) continue;

          tempEl.style.backgroundColor = `hsl(var(${variable}) / ${alpha})`;
          const computedColor = getComputedStyle(tempEl).backgroundColor;

          if (computedColor && computedColor !== "rgba(0, 0, 0, 0)") {
            color = computedColor;
            break;
          }
        }

        document.body.removeChild(tempEl);
        return color;
      };

      const primary = resolveColor(["--primary"], 0.82);
      const accent = resolveColor(["--accent"], 0.72);
      const primarySoft = resolveColor(["--primary"], 0.46);
      const accentSoft = resolveColor(["--accent"], 0.36);
      const foregroundSoft = resolveColor(["--primary-foreground", "--foreground"], 0.2);

      return {
        backgroundTop: resolveColor(["--primary", "--background"], 1),
        backgroundBottom: resolveColor(["--muted", "--background"], 0.96),
        glowPrimary: resolveColor(["--primary"], 0.32),
        glowAccent: resolveColor(["--accent"], 0.22),
        wavePalette: [
          { offset: 0, amplitude: 70, frequency: 0.003, color: primary, opacity: 0.45 },
          { offset: Math.PI / 2, amplitude: 90, frequency: 0.0026, color: accent, opacity: 0.35 },
          { offset: Math.PI, amplitude: 60, frequency: 0.0034, color: primarySoft, opacity: 0.3 },
          { offset: Math.PI * 1.5, amplitude: 80, frequency: 0.0022, color: accentSoft, opacity: 0.24 },
          { offset: Math.PI * 2, amplitude: 55, frequency: 0.004, color: foregroundSoft, opacity: 0.18 },
        ],
      };
    };

    let themeColors = computeThemeColors();

    const observer = new MutationObserver(() => {
      themeColors = computeThemeColors();
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class", "data-theme"],
    });

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const mouseInfluence = prefersReducedMotion ? 10 : 70;
    const influenceRadius = prefersReducedMotion ? 160 : 320;
    const smoothing = prefersReducedMotion ? 0.04 : 0.1;

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    const recenterMouse = () => {
      const center = { x: canvas.width / 2, y: canvas.height / 2 };
      mouseRef.current = center;
      targetMouseRef.current = center;
    };

    const handleResize = () => {
      resizeCanvas();
      recenterMouse();
    };

    const handleMouseMove = (event: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      targetMouseRef.current = {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top,
      };
    };

    const handleMouseLeave = () => {
      recenterMouse();
    };

    const drawWave = (wave: WaveConfig) => {
      ctx.save();
      ctx.beginPath();

      for (let x = 0; x <= canvas.width; x += 4) {
        const dx = x - mouseRef.current.x;
        const dy = canvas.height / 2 - mouseRef.current.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const influence = Math.max(0, 1 - distance / influenceRadius);
        const mouseEffect =
          influence * mouseInfluence * Math.sin(time * 0.001 + x * 0.01 + wave.offset);

        const y =
          canvas.height / 2 +
          Math.sin(x * wave.frequency + time * 0.002 + wave.offset) * wave.amplitude +
          Math.sin(x * wave.frequency * 0.4 + time * 0.003) * (wave.amplitude * 0.45) +
          mouseEffect;

        if (x === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      }

      ctx.lineWidth = 2.5;
      ctx.strokeStyle = wave.color;
      ctx.globalAlpha = wave.opacity;
      ctx.shadowBlur = 35;
      ctx.shadowColor = wave.color;
      ctx.stroke();
      ctx.restore();
    };

    resizeCanvas();
    recenterMouse();

    window.addEventListener("resize", handleResize);
    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseleave", handleMouseLeave);

    const animate = () => {
      time += 1;

      mouseRef.current.x += (targetMouseRef.current.x - mouseRef.current.x) * smoothing;
      mouseRef.current.y += (targetMouseRef.current.y - mouseRef.current.y) * smoothing;

      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
      gradient.addColorStop(0, themeColors.backgroundTop);
      gradient.addColorStop(1, themeColors.backgroundBottom);
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const glowRadius = Math.max(canvas.width, canvas.height) * 0.42;
      const glow = ctx.createRadialGradient(
        mouseRef.current.x,
        mouseRef.current.y,
        0,
        mouseRef.current.x,
        mouseRef.current.y,
        glowRadius,
      );
      glow.addColorStop(0, themeColors.glowPrimary);
      glow.addColorStop(0.5, themeColors.glowAccent);
      glow.addColorStop(1, "rgba(0, 0, 0, 0)");

      ctx.save();
      ctx.globalCompositeOperation = "screen";
      ctx.fillStyle = glow;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.restore();

      ctx.globalAlpha = 1;
      ctx.shadowBlur = 0;
      themeColors.wavePalette.forEach(drawWave);

      animationId = window.requestAnimationFrame(animate);
    };

    animationId = window.requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("resize", handleResize);
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationId);
      observer.disconnect();
    };
  }, []);

  return (
    <div className={cn("absolute inset-0 overflow-hidden", className)}>
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />
      {children}
    </div>
  );
};

export default InfiniteGrid;
