import type { OrbData } from "./components/orbs/data";

export function getComponentCodeOrb(orb: OrbData): string {
  switch (orb.type) {
    case "particle":
      return `"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";

interface Particle {
  x: number[];
  y: number[];
  opacity: number[];
  scale: number[];
  size: number;
}

interface ParticleOrbProps {
  size?: number;
  color?: string;
  particleCount?: number;
}

export default function ParticleOrb({
  size = 72,
  color = "currentColor",
  particleCount = 72,
}: ParticleOrbProps) {
  const particles = useMemo<Particle[]>(() => {
    const result: Particle[] = [];

    const rings = 9;

    const pointsPerRing = Math.max(
      4,
      Math.floor(particleCount / rings)
    );

    const radius = size * 0.43;

    for (let ring = 0; ring < rings; ring++) {
      const phi =
        Math.PI * (ring + 1) / (rings + 1);

      const ringRadius = Math.sin(phi);
      const yBase = Math.cos(phi);

      for (let point = 0; point < pointsPerRing; point++) {
        const theta =
          (point / pointsPerRing) * Math.PI * 2;

        const keyframes = 16;

        const xFrames: number[] = [];
        const yFrames: number[] = [];
        const opacityFrames: number[] = [];
        const scaleFrames: number[] = [];

        for (let frame = 0; frame < keyframes; frame++) {
          const rotation =
            theta +
            (frame / (keyframes - 1)) * Math.PI * 2;

          const x3d =
            Math.cos(rotation) * ringRadius;

          const z3d =
            Math.sin(rotation) * ringRadius;

          const perspective =
            0.78 + (z3d + 1) * 0.16;

          const x =
            x3d * radius * perspective;

          const y =
            yBase * radius;

          const opacity =
            0.18 + ((z3d + 1) / 2) * 0.82;

          const scale =
            0.65 + ((z3d + 1) / 2) * 0.65;

          xFrames.push(x);
          yFrames.push(y);
          opacityFrames.push(opacity);
          scaleFrames.push(scale);
        }

        const sizeVariation =
          1.2 +
          ((ring * 17 + point * 7) % 10) / 10;

        result.push({
          x: xFrames,
          y: yFrames,
          opacity: opacityFrames,
          scale: scaleFrames,
          size: sizeVariation,
        });
      }
    }

    return result;
  }, [size, particleCount]);

  return (
    <div
      className="relative shrink-0 text-black dark:text-white"
      style={{
        width: size,
        height: size,
      }}
    >
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full blur-xl"
        style={{
          width: size * 0.55,
          height: size * 0.55,
          background: color,
          opacity: 0.06,
        }}
      />

      <div className="absolute inset-0">
        {particles.map((particle, index) => (
          <motion.span
            key={index}
            className="absolute left-1/2 top-1/2 rounded-full"
            style={{
              width: particle.size,
              height: particle.size,
              backgroundColor: color,
              marginLeft: -particle.size / 2,
              marginTop: -particle.size / 2,
            }}
            animate={{
              x: particle.x,
              y: particle.y,
              opacity: particle.opacity,
              scale: particle.scale,
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "linear",
              delay: -(index * 0.035),
            }}
          />
        ))}
      </div>
    </div>
  );
}
`;

    default:
      return "";
  }
}