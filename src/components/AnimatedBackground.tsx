import { useEffect, useState } from "react";
import type { CSSProperties } from "react";

const AnimatedBackground = () => {
  const [position, setPosition] = useState<{ x: number; y: number } | null>(null);

  useEffect(() => {
    const handlePointerMove = (event: PointerEvent) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("pointermove", handlePointerMove);
    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, []);

  return (
    <div
      className="site-background"
      style={
        position
          ? ({
              "--cursor-x": `${position.x}px`,
              "--cursor-y": `${position.y}px`,
            } as CSSProperties)
          : undefined
      }
      aria-hidden="true"
    >
      <div className="cursor-glow" />
      <div className="site-grid" />
      <div className="site-angle site-angle-one" />
      <div className="site-angle site-angle-two" />
    </div>
  );
};

export default AnimatedBackground;
