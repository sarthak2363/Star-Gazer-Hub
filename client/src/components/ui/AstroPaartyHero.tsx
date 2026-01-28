"use client";
import { motion } from "framer-motion";

export default function AstroPartyHero() {
  return (
    <section
      className="relative h-[90vh] flex items-center justify-center text-center bg-cover bg-center"
      style={{
        backgroundImage: "url('/images/astroparty-hero.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black"></div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-4xl px-6"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          AstroParty – Student Edition 🌌
        </h1>

        <p className="text-lg md:text-xl text-gray-300 mb-6">
          Affordable • Safe • Educational • The darkest skies near Pune
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#register"
            className="bg-indigo-600 hover:bg-indigo-700 px-8 py-3 rounded-full font-semibold transition"
          >
            Register Now
          </a>

          <a
            href="#details"
            className="border border-white/30 px-8 py-3 rounded-full hover:bg-white/10 transition"
          >
            View Details
          </a>
        </div>
      </motion.div>
    </section>
  );
}
