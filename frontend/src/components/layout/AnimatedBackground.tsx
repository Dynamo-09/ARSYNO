import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { motion } from "framer-motion";

export default function AnimatedBackground() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  return (
    <div className="fixed inset-0 w-full h-full -z-20 bg-gradient-to-br from-white to-gray-50 overflow-hidden pointer-events-none">
      
      {/* Floating Shapes using Framer Motion */}
      
      {/* Abstract Leaf-like shape 1 */}
      <motion.div
        animate={{ y: [0, -30, 0], x: [0, 20, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-techblue/10 blur-3xl opacity-40"
        style={{ borderRadius: '40% 60% 70% 30% / 40% 50% 60% 50%' }}
      />
      
      {/* Abstract Leaf-like shape 2 */}
      <motion.div
        animate={{ y: [0, 40, 0], x: [0, -20, 0], rotate: [0, -5, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-[-10%] right-[-5%] w-[60%] h-[60%] bg-navy-900/5 blur-3xl opacity-50"
        style={{ borderRadius: '60% 40% 30% 70% / 50% 40% 50% 60%' }}
      />

      {/* Rectangular-like geometric shape */}
      <motion.div
        animate={{ y: [0, -20, 0], rotate: [-12, -8, -12] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[20%] right-[10%] w-[30%] h-[40%] border border-techblue/10 rounded-[3rem] backdrop-blur-sm bg-white/5 opacity-70"
      />

      {/* Rectangular-like geometric shape 2 */}
      <motion.div
        animate={{ y: [0, 20, 0], rotate: [15, 10, 15] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-[20%] left-[5%] w-[20%] h-[30%] border border-navy-900/5 rounded-[2rem] backdrop-blur-sm bg-white/5 opacity-70"
      />

      {/* Particles (Blinking Dots and Moving Lines) */}
      {init && (
        <Particles
          id="tsparticles"
          options={{
            background: {
              color: {
                value: "transparent",
              },
            },
            fpsLimit: 60,
            interactivity: {
              events: {
                onClick: { enable: false },
                onHover: { enable: false },
                resize: { enable: true },
              },
            },
            particles: {
              color: {
                value: "#64748b", // slate-500 (grey blue)
              },
              links: {
                color: "#94a3b8", // slate-400
                distance: 150,
                enable: true,
                opacity: 0.2,
                width: 1,
              },
              move: {
                direction: "none",
                enable: true,
                outModes: {
                  default: "bounce",
                },
                random: true,
                speed: 0.6, // Slow movement
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  width: 800,
                  height: 800
                },
                value: 50,
              },
              opacity: {
                value: { min: 0.1, max: 0.5 },
                animation: {
                  enable: true,
                  speed: 0.8, // Blinking speed
                  sync: false, // Independent blinking
                },
              },
              shape: {
                type: "circle",
              },
              size: {
                value: { min: 2, max: 4 },
              },
            },
            detectRetina: true,
          }}
          className="absolute inset-0 z-0 opacity-70"
        />
      )}
    </div>
  );
}
