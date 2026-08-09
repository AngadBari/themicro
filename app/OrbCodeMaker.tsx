import type { OrbData } from "./components /orbs/data";

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
        (Math.PI * (ring + 1)) / (rings + 1);

      const ringRadius = Math.sin(phi);
      const yBase = Math.cos(phi);

      for (
        let point = 0;
        point < pointsPerRing;
        point++
      ) {
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

          const perspective =
            0.78 +
            (z3d + 1) * 0.16;

          const x =
            x3d *
            radius *
            perspective;

          const y =
            yBase *
            radius;

          const opacity =
            0.18 +
            ((z3d + 1) / 2) *
              0.82;

          const scale =
            0.65 +
            ((z3d + 1) / 2) *
              0.65;

          xFrames.push(x);
          yFrames.push(y);
          opacityFrames.push(opacity);
          scaleFrames.push(scale);
        }

        const sizeVariation =
          1.2 +
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
              marginLeft:
                -particle.size / 2,
              marginTop:
                -particle.size / 2,
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

    case "search":
      return `"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";

interface Particle {
  x: number;
  y: number;
  size: number;
  opacity: number;
}

interface SearchingOrbProps {
  size?: number;
  color?: string;
  particleCount?: number;
}

export default function SearchingOrb({
  size = 72,
  color = "currentColor",
  particleCount = 60,
}: SearchingOrbProps) {
  const particles = useMemo<Particle[]>(() => {
    const radius = size * 0.42;

    return Array.from(
      { length: particleCount },
      () => {
        const angle =
          Math.random() *
          Math.PI *
          2;

        const distance =
          Math.sqrt(Math.random()) *
          radius;

        return {
          x:
            Math.cos(angle) *
            distance,
          y:
            Math.sin(angle) *
            distance,
          size:
            1.2 +
            Math.random() * 1.5,
          opacity:
            0.25 +
            Math.random() * 0.75,
        };
      }
    );
  }, [size, particleCount]);

  return (
    <div
      className="relative shrink-0 text-black dark:text-white"
      style={{
        width: size,
        height: size,
      }}
    >
      <motion.div
        className="absolute left-1/2 top-1/2 rounded-full blur-xl"
        style={{
          width: size * 0.65,
          height: size * 0.65,
          marginLeft:
            -(size * 0.325),
          marginTop:
            -(size * 0.325),
          background: color,
          opacity: 0.06,
        }}
        animate={{
          scale: [0.85, 1.15, 0.85],
          opacity: [
            0.04,
            0.1,
            0.04,
          ],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="absolute inset-0">
        {particles.map(
          (particle, index) => (
            <motion.span
              key={index}
              className="absolute left-1/2 top-1/2 rounded-full"
              style={{
                width: particle.size,
                height: particle.size,
                marginLeft:
                  -particle.size / 2,
                marginTop:
                  -particle.size / 2,
                backgroundColor: color,
              }}
              initial={{
                x: particle.x,
                y: particle.y,
                opacity:
                  particle.opacity,
              }}
              animate={{
                x: [
                  particle.x,
                  particle.x +
                    (Math.random() -
                      0.5) *
                      8,
                  particle.x,
                ],
                y: [
                  particle.y,
                  particle.y +
                    (Math.random() -
                      0.5) *
                      8,
                  particle.y,
                ],
                opacity: [
                  particle.opacity,
                  particle.opacity *
                    0.4,
                  particle.opacity,
                ],
              }}
              transition={{
                duration:
                  2.5 +
                  Math.random() * 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay:
                  -(index * 0.03),
              }}
            />
          )
        )}
      </div>

      <motion.div
        className="absolute left-1/2 top-1/2 rounded-full"
        style={{
          width: size * 0.76,
          height: size * 0.76,
          marginLeft:
            -(size * 0.38),
          marginTop:
            -(size * 0.38),
          border:
            \`\${Math.max(
              0.7,
              size * 0.012
            )}px solid currentColor\`,
          opacity: 0.18,
        }}
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <motion.div
        className="absolute left-1/2 top-1/2 origin-left"
        style={{
          width: size * 0.38,
          height: 1,
          marginTop: -0.5,
          background: color,
          opacity: 0.75,
          boxShadow:
            \`0 0 \${size * 0.08}px \${color}\`,
        }}
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 2.8,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <motion.div
        className="absolute left-1/2 top-1/2 origin-left"
        style={{
          width: size * 0.32,
          height: 1,
          marginTop: -0.5,
          background: color,
          opacity: 0.35,
          boxShadow:
            \`0 0 \${size * 0.12}px \${color}\`,
        }}
        animate={{
          rotate: -360,
        }}
        transition={{
          duration: 4.5,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <motion.div
        className="absolute left-1/2 top-1/2 rounded-full"
        style={{
          width: size * 0.07,
          height: size * 0.07,
          marginLeft:
            -(size * 0.035),
          marginTop:
            -(size * 0.035),
          background: color,
          boxShadow:
            \`0 0 \${size * 0.12}px \${color}\`,
        }}
        animate={{
          scale: [0.8, 1.3, 0.8],
          opacity: [
            0.6,
            1,
            0.6,
          ],
        }}
        transition={{
          duration: 1.8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}
`;

    case "work":
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

export default function WorkingOrb({
  size = 72,
  color = "currentColor",
  particleCount = 72,
}: ParticleOrbProps) {
  const particles = useMemo<Particle[]>(() => {
    const result: Particle[] = [];

    const radius = size * 0.43;
    const keyframes = 16;

    for (
      let i = 0;
      i < particleCount;
      i++
    ) {
      const xFrames: number[] = [];
      const yFrames: number[] = [];
      const opacityFrames: number[] = [];
      const scaleFrames: number[] = [];

      const angle =
        Math.random() *
        Math.PI *
        2;

      const distance =
        Math.sqrt(Math.random()) *
        radius;

      for (
        let frame = 0;
        frame < keyframes;
        frame++
      ) {
        const randomAngle =
          angle +
          (Math.random() -
            0.5) *
            2.5;

        const randomDistance =
          radius *
          (0.25 +
            Math.random() *
              0.75);

        let x =
          Math.cos(randomAngle) *
          randomDistance;

        let y =
          Math.sin(randomAngle) *
          randomDistance;

        const currentDistance =
          Math.sqrt(
            x * x +
            y * y
          );

        if (
          currentDistance >
          radius
        ) {
          const factor =
            radius /
            currentDistance;

          x *= factor;
          y *= factor;
        }

        xFrames.push(x);
        yFrames.push(y);

        opacityFrames.push(
          0.25 +
            Math.random() *
              0.75
        );

        scaleFrames.push(
          0.6 +
            Math.random() *
              0.8
        );
      }

      const sizeVariation =
        1.2 +
        Math.random() * 1.2;

      result.push({
        x: xFrames,
        y: yFrames,
        opacity:
          opacityFrames,
        scale:
          scaleFrames,
        size:
          sizeVariation,
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
          background: color,
          opacity: 0.06,
        }}
      />

      <div className="absolute inset-0">
        {particles.map(
          (particle, index) => (
            <motion.span
              key={index}
              className="absolute left-1/2 top-1/2 rounded-full"
              style={{
                width: particle.size,
                height: particle.size,
                backgroundColor:
                  color,
                marginLeft:
                  -particle.size / 2,
                marginTop:
                  -particle.size / 2,
              }}
              animate={{
                x: particle.x,
                y: particle.y,
                opacity:
                  particle.opacity,
                scale:
                  particle.scale,
              }}
              transition={{
                duration:
                  8 +
                  Math.random() * 8,
                repeat: Infinity,
                ease: "easeInOut",
                delay:
                  -(index * 0.05),
              }}
            />
          )
        )}
      </div>
    </div>
  );
}
`;

    case "listen":
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

export default function ListeningOrb({
  size = 72,
  color = "currentColor",
  particleCount = 72,
}: ParticleOrbProps) {
  const particles = useMemo<Particle[]>(() => {
    const result: Particle[] = [];

    const rings = 9;

    const pointsPerRing = Math.max(
      4,
      Math.floor(
        particleCount / rings
      )
    );

    const radius = size * 0.43;

    for (
      let ring = 0;
      ring < rings;
      ring++
    ) {
      const phi =
        (Math.PI * (ring + 1)) /
        (rings + 1);

      const ringRadius =
        Math.sin(phi);

      const yBase =
        Math.cos(phi);

      for (
        let point = 0;
        point < pointsPerRing;
        point++
      ) {
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
            (frame /
              (keyframes - 1)) *
              Math.PI *
              2;

          const x3d =
            Math.cos(rotation) *
            ringRadius;

          const z3d =
            Math.sin(rotation) *
            ringRadius;

          const perspective =
            0.78 +
            (z3d + 1) *
              0.16;

          const x =
            x3d *
            radius *
            perspective;

          const y =
            yBase *
            radius;

          const opacity =
            0.15 +
            ((z3d + 1) / 2) *
              0.85;

          const scale =
            0.65 +
            ((z3d + 1) / 2) *
              0.65;

          xFrames.push(x);
          yFrames.push(y);
          opacityFrames.push(
            opacity
          );
          scaleFrames.push(scale);
        }

        const sizeVariation =
          1.6 +
          ((ring * 17 +
            point * 7) %
            10) /
            10;

        result.push({
          x: xFrames,
          y: yFrames,
          opacity:
            opacityFrames,
          scale:
            scaleFrames,
          size:
            sizeVariation,
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
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full blur-2xl"
        style={{
          width: size * 0.4,
          height: size * 0.55,
          background: color,
          opacity: 0.08,
        }}
      />

      <div className="absolute inset-0">
        {particles.map(
          (particle, index) => (
            <motion.div
              key={index}
              className="absolute left-1/2 top-1/2"
              style={{
                width:
                  particle.size,
                height:
                  particle.size,

                marginLeft:
                  -particle.size / 2,

                marginTop:
                  -particle.size / 2,

                backgroundColor:
                  color,

                borderRadius: "1px",

                boxShadow: \`
                  0 0 3px \${color},
                  0 0 7px \${color},
                  0 0 12px \${color}
                \`,

                transformStyle:
                  "preserve-3d",
              }}
              animate={{
                x: particle.x,
                y: particle.y,
                opacity:
                  particle.opacity,
                scale:
                  particle.scale,

                rotateX: [
                  0,
                  90,
                  180,
                  270,
                  360,
                ],

                rotateY: [
                  0,
                  90,
                  180,
                  270,
                  360,
                ],
              }}
              transition={{
                x: {
                  duration: 7,
                  repeat: Infinity,
                  ease: "linear",
                  delay:
                    -(index * 0.035),
                },

                y: {
                  duration: 7,
                  repeat: Infinity,
                  ease: "linear",
                  delay:
                    -(index * 0.035),
                },

                opacity: {
                  duration: 7,
                  repeat: Infinity,
                  ease: "linear",
                  delay:
                    -(index * 0.035),
                },

                scale: {
                  duration: 7,
                  repeat: Infinity,
                  ease: "linear",
                  delay:
                    -(index * 0.035),
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
          )
        )}
      </div>
    </div>
  );
}
`;

    default:
      return "";
  }
}