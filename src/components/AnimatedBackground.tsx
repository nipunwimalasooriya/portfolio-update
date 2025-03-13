import { useEffect, useRef } from "react";
import { useTheme } from "@/components/ThemeProvider";

interface Star {
  element: HTMLDivElement;
  x: number;
  y: number;
  vx: number;
  vy: number;
  fadePeriod: number; // in milliseconds
  fadePhase: number;
  size: number;
}

const AnimatedBackground: React.FC = () => {
  const { theme } = useTheme();
  const starsRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = starsRef.current;
    if (!container) return;
    container.innerHTML = ""; // Clear existing stars

    // Use container dimensions to position stars in pixels
    const { width, height } = container.getBoundingClientRect();
    const starCount = 150;
    const stars: Star[] = [];

    for (let i = 0; i < starCount; i++) {
      const starElem = document.createElement("div");
      starElem.classList.add("absolute", "rounded-full");

      const size = Math.random() * 3 + 1;
      starElem.style.width = `${size}px`;
      starElem.style.height = `${size}px`;

      // Set initial position (in pixels)
      const x = Math.random() * width;
      const y = Math.random() * height;
      starElem.style.left = `${x}px`;
      starElem.style.top = `${y}px`;

      // Apply theme-dependent styling
      if (theme === "light") {
        starElem.style.boxShadow = `0 0 ${size * 2}px rgba(168,85,247,0.8)`;
        starElem.style.backgroundColor =
          Math.random() > 0.3
            ? "rgba(168,85,247,0.9)"
            : "rgba(139,92,246,0.9)";
      } else {
        starElem.style.boxShadow = `0 0 ${size * 2}px rgba(255,255,255,0.8)`;
        starElem.style.backgroundColor =
          Math.random() > 0.6
            ? "rgba(168,85,247,0.8)"
            : "rgba(255,255,255,0.8)";
      }

      container.appendChild(starElem);

      // Random velocity: choose an angle and speed (pixels per second)
      const angle = Math.random() * 2 * Math.PI;
      const speed = 10 + Math.random() * 40; // from 10 to 50 px/s
      const vx = Math.cos(angle) * speed;
      const vy = Math.sin(angle) * speed;

      // Each star gets a random fade cycle: period between 2000 and 4000 ms and a random phase offset
      const fadePeriod = 2000 + Math.random() * 2000;
      const fadePhase = Math.random() * 2 * Math.PI;

      stars.push({ element: starElem, x, y, vx, vy, fadePeriod, fadePhase, size });
    }

    let lastTimestamp = performance.now();

    const animate = (timestamp: number) => {
      const dt = timestamp - lastTimestamp;
      lastTimestamp = timestamp;

      stars.forEach((star) => {
        // Update star's position based on its velocity
        star.x += star.vx * (dt / 1000);
        star.y += star.vy * (dt / 1000);

        // Wrap around the container if out of bounds
        if (star.x < 0) star.x += width;
        if (star.x > width) star.x -= width;
        if (star.y < 0) star.y += height;
        if (star.y > height) star.y -= height;

        star.element.style.left = `${star.x}px`;
        star.element.style.top = `${star.y}px`;

        // Compute opacity using a sine function for fade in/out
        const fadeProgress = (timestamp % star.fadePeriod) / star.fadePeriod;
        const opacity = 0.5 + 0.5 * Math.sin(2 * Math.PI * fadeProgress + star.fadePhase);
        star.element.style.opacity = opacity.toString();
      });

      requestAnimationFrame(animate);
    };

    const animationId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationId);
      container.innerHTML = "";
    };
  }, [theme]);

  return (
    <div
      ref={starsRef}
      className="stars-container absolute inset-0 overflow-hidden pointer-events-none"
    />
  );
};

export default AnimatedBackground;
