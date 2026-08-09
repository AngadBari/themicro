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

export default function ListeningOrb({
  size = 72,
  color = "currentColor",
  particleCount = 72,
}: ParticleOrbProps) {
  const particles = useMemo<Particle[]>(() => {
    const result: Particle[] = [];

    // Sphere structure
    const rings = 9;

    const pointsPerRing = Math.max(
      4,
      Math.floor(particleCount / rings)
    );

    const radius = size * 0.43;

    for (let ring = 0; ring < rings; ring++) {
      const phi =
        (Math.PI * (ring + 1)) /
        (rings + 1);

      const ringRadius = Math.sin(phi);
      const yBase = Math.cos(phi);

      for (let point = 0; point < pointsPerRing; point++) {
        const theta =
          (point / pointsPerRing) *
          Math.PI *
          2;

        const keyframes = 16;

        const xFrames: number[] = [];
        const yFrames: number[] = [];
        const opacityFrames: number[] = [];
        const scaleFrames: number[] = [];

        for (
          let frame = 0;
          frame < keyframes;
          frame++
        ) {
          const rotation =
            theta +
            (frame / (keyframes - 1)) *
              Math.PI *
              2;

          const x3d =
            Math.cos(rotation) *
            ringRadius;

          const z3d =
            Math.sin(rotation) *
            ringRadius;

          // Perspective
          const perspective =
            0.78 +
            (z3d + 1) * 0.16;

          const x =
            x3d *
            radius *
            perspective;

          const y =
            yBase * radius;

          // Back blocks are darker
          const opacity =
            0.15 +
            ((z3d + 1) / 2) * 0.85;

          // Front blocks become slightly larger
          const scale =
            0.65 +
            ((z3d + 1) / 2) * 0.65;

          xFrames.push(x);
          yFrames.push(y);
          opacityFrames.push(opacity);
          scaleFrames.push(scale);
        }

        // Cube size variation
        const sizeVariation =
          1.6 +
          ((ring * 17 + point * 7) % 10) /
            10;

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
      className="relative shrink-0"
      style={{
        width: size,
        height: size,
      }}
    >
      {/* Very soft aura */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full blur-2xl"
        style={{
          width: size * 0.40,
          height: size * 0.55,
          background: color,
          opacity: 0.08,
        }}
      />

      {/* Orb */}
      <div className="absolute inset-0">
        {particles.map((particle, index) => (
          <motion.div
            key={index}
            className="absolute left-1/2 top-1/2"
            style={{
              width: particle.size,
              height: particle.size,

              marginLeft:
                -particle.size / 2,

              marginTop:
                -particle.size / 2,

              backgroundColor: color,

              // Cube-like corners
              borderRadius: "1px",

              // Glowing block
              boxShadow: `
                0 0 3px ${color},
                0 0 7px ${color},
                0 0 12px ${color}
              `,

              transformStyle: "preserve-3d",
            }}
            animate={{
              x: particle.x,
              y: particle.y,
              opacity: particle.opacity,
              scale: particle.scale,

              // Very slow cube rotation
              rotateX: [0, 90, 180, 270, 360],
              rotateY: [0, 90, 180, 270, 360],
            }}
            transition={{
              x: {
                duration: 7,
                repeat: Infinity,
                ease: "linear",
                delay: -(index * 0.035),
              },

              y: {
                duration: 7,
                repeat: Infinity,
                ease: "linear",
                delay: -(index * 0.035),
              },

              opacity: {
                duration: 7,
                repeat: Infinity,
                ease: "linear",
                delay: -(index * 0.035),
              },

              scale: {
                duration: 7,
                repeat: Infinity,
                ease: "linear",
                delay: -(index * 0.035),
              },

              rotateX: {
                duration: 8,
                repeat: Infinity,
                ease: "linear",
              },

              rotateY: {
                duration: 11,
                repeat: Infinity,
                ease: "linear",
              },
            }}
          />
        ))}
      </div>
    </div>
  );
}