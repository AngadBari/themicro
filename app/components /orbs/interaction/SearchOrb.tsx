"use client";

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

    return Array.from({ length: particleCount }, () => {
      const angle = Math.random() * Math.PI * 2;
      const distance = Math.sqrt(Math.random()) * radius;

      return {
        x: Math.cos(angle) * distance,
        y: Math.sin(angle) * distance,
        size: 1.2 + Math.random() * 1.5,
        opacity: 0.25 + Math.random() * 0.75,
      };
    });
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
          marginLeft: -(size * 0.325),
          marginTop: -(size * 0.325),
          background: color,
          opacity: 0.06,
        }}
        animate={{
          scale: [0.85, 1.15, 0.85],
          opacity: [0.04, 0.1, 0.04],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: "easeInOut",
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
              marginLeft: -particle.size / 2,
              marginTop: -particle.size / 2,
              backgroundColor: color,
            }}
            initial={{
              x: particle.x,
              y: particle.y,
              opacity: particle.opacity,
            }}
            animate={{
              x: [
                particle.x,
                particle.x + (Math.random() - 0.5) * 8,
                particle.x,
              ],
              y: [
                particle.y,
                particle.y + (Math.random() - 0.5) * 8,
                particle.y,
              ],
              opacity: [
                particle.opacity,
                particle.opacity * 0.4,
                particle.opacity,
              ],
            }}
            transition={{
              duration: 2.5 + Math.random() * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: -(index * 0.03),
            }}
          />
        ))}
      </div>

     
      <motion.div
        className="absolute left-1/2 top-1/2 rounded-full"
        style={{
          width: size * 0.76,
          height: size * 0.76,
          marginLeft: -(size * 0.38),
          marginTop: -(size * 0.38),
          border: `${Math.max(0.7, size * 0.012)}px solid currentColor`,
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
          boxShadow: `0 0 ${size * 0.08}px ${color}`,
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
          boxShadow: `0 0 ${size * 0.12}px ${color}`,
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
          marginLeft: -(size * 0.035),
          marginTop: -(size * 0.035),
          background: color,
          boxShadow: `0 0 ${size * 0.12}px ${color}`,
        }}
        animate={{
          scale: [0.8, 1.3, 0.8],
          opacity: [0.6, 1, 0.6],
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