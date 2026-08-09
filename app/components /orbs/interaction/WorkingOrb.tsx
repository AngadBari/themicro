"use client";

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

export default function WorkingOrb({
  size = 72,
  color = "currentColor",
  particleCount = 72,
}: ParticleOrbProps) {
  const particles = useMemo<Particle[]>(() => {
    const result: Particle[] = [];

    const radius = size * 0.43;
    const keyframes = 16;

    for (let i = 0; i < particleCount; i++) {
      const xFrames: number[] = [];
      const yFrames: number[] = [];
      const opacityFrames: number[] = [];
      const scaleFrames: number[] = [];

      const angle =
        Math.random() * Math.PI * 2;

      const distance =
        Math.sqrt(Math.random()) * radius;

      const startX =
        Math.cos(angle) * distance;

      const startY =
        Math.sin(angle) * distance;

      for (let frame = 0; frame < keyframes; frame++) {
        const randomAngle =
          angle +
          (Math.random() - 0.5) * 2.5;

        const randomDistance =
          radius *
          (0.25 + Math.random() * 0.75);

        let x =
          Math.cos(randomAngle) *
          randomDistance;

        let y =
          Math.sin(randomAngle) *
          randomDistance;

        const maxDistance = radius;

        const currentDistance =
          Math.sqrt(x * x + y * y);

        if (currentDistance > maxDistance) {
          const factor =
            maxDistance / currentDistance;

          x *= factor;
          y *= factor;
        }

        xFrames.push(x);
        yFrames.push(y);

        opacityFrames.push(
          0.25 + Math.random() * 0.75
        );

        scaleFrames.push(
          0.6 + Math.random() * 0.8
        );
      }

      const sizeVariation =
        1.2 + Math.random() * 1.2;

      result.push({
        x: xFrames,
        y: yFrames,
        opacity: opacityFrames,
        scale: scaleFrames,
        size: sizeVariation,
      });
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
          background: "currentColor",
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
              backgroundColor: "currentColor",
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
              duration: 8 + Math.random() * 8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: -(index * 0.050),
            }}
          />
        ))}
      </div>
    </div>
  );
}