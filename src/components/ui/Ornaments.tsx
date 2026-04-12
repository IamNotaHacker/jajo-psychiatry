/* Subtle decorative ornaments for the warm editorial aesthetic */

interface OrnamentProps {
  className?: string;
}

/* Inline horizontal flourish — line, circle, line */
export function FlourishOrnament({ className = "" }: OrnamentProps) {
  return (
    <div
      className={`flex items-center gap-3 text-[#8B6F4E]/60 ${className}`}
      aria-hidden="true"
    >
      <div className="h-px w-16 bg-[#8B6F4E]/40" />
      <svg width="10" height="10" viewBox="0 0 10 10" className="shrink-0">
        <circle
          cx="5"
          cy="5"
          r="3"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.8"
        />
      </svg>
      <div className="h-px w-4 bg-[#8B6F4E]/40" />
    </div>
  );
}

/* Botanical sprig — fine line eucalyptus */
export function BotanicalSprig({ className = "" }: OrnamentProps) {
  return (
    <svg
      className={`pointer-events-none ${className}`}
      viewBox="0 0 400 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M200 30 Q195 200 200 370"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      {[60, 95, 130, 165, 200, 235, 270, 305, 340].map((y, i) => {
        const side = i % 2 === 0 ? 1 : -1;
        const tipX = 200 + side * (60 + (i % 3) * 10);
        const tipY = y - 10;
        const ctrl1X = 200 + side * 20;
        const ctrl1Y = y - 5;
        const ctrl2X = 200 + side * 45;
        const ctrl2Y = y - 18;
        return (
          <g key={y}>
            <path
              d={`M200 ${y} Q${ctrl1X} ${ctrl1Y} ${ctrl2X} ${ctrl2Y} Q${tipX - side * 5} ${tipY - 5} ${tipX} ${tipY} Q${ctrl2X + side * 5} ${ctrl2Y + 10} 200 ${y}`}
              stroke="currentColor"
              strokeWidth="1"
              strokeLinejoin="round"
              fill="none"
            />
            <path
              d={`M200 ${y} Q${ctrl2X - side * 5} ${ctrl2Y + 2} ${tipX - side * 8} ${tipY - 2}`}
              stroke="currentColor"
              strokeWidth="0.6"
              fill="none"
            />
          </g>
        );
      })}
    </svg>
  );
}

/* Tiny decorative star/asterism */
export function StarOrnament({ className = "" }: OrnamentProps) {
  return (
    <svg
      className={className}
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M7 0V14M0 7H14M2 2L12 12M12 2L2 12"
        stroke="currentColor"
        strokeWidth="0.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

/* Vertical decorative rule with center diamond */
export function VerticalOrnament({ className = "" }: OrnamentProps) {
  return (
    <div
      className={`flex flex-col items-center gap-2 ${className}`}
      aria-hidden="true"
    >
      <div className="h-12 w-px bg-current opacity-30" />
      <svg width="6" height="6" viewBox="0 0 6 6">
        <rect
          x="3"
          y="0"
          width="4.24"
          height="4.24"
          transform="rotate(45 3 0)"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.6"
        />
      </svg>
      <div className="h-12 w-px bg-current opacity-30" />
    </div>
  );
}

/* Massive serif J watermark — for backgrounds */
export function GlyphWatermark({
  className = "",
  glyph = "J",
  color = "#8B6F4E",
  opacity = 0.05,
  size = "32rem",
}: OrnamentProps & {
  glyph?: string;
  color?: string;
  opacity?: number;
  size?: string;
}) {
  return (
    <div
      className={`pointer-events-none absolute select-none font-editorial ${className}`}
      style={{
        fontSize: size,
        lineHeight: 1,
        color,
        opacity,
      }}
      aria-hidden="true"
    >
      {glyph}
    </div>
  );
}

/* Repeating dot grid background pattern */
export function DotGridPattern({
  className = "",
  color = "#8B6F4E",
  opacity = 0.08,
  dotSize = 1.5,
  spacing = 28,
}: OrnamentProps & {
  color?: string;
  opacity?: number;
  dotSize?: number;
  spacing?: number;
}) {
  return (
    <div
      className={`pointer-events-none absolute inset-0 ${className}`}
      style={{
        backgroundImage: `radial-gradient(${color} ${dotSize}px, transparent ${dotSize}px)`,
        backgroundSize: `${spacing}px ${spacing}px`,
        opacity,
      }}
      aria-hidden="true"
    />
  );
}
