import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Plane, Wind, Wrench, Calendar } from "lucide-react";
import aeroHero from "@assets/plane.png";

export default function Aeromodelling() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* ================= HERO ================= */}
      <section className="relative pt-32 pb-32 overflow-hidden bg-[#f2f4e6]">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-90"
          style={{ backgroundImage: `url(${aeroHero})` }}
        />
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold uppercase tracking-tight text-orange-400 mb-6"
          >
            Aeromodelling Lab
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-xl md:text-2xl text-white max-w-3xl mx-auto italic mb-10"
          >
            Build. Fly. Learn. Think Like a Young Aerospace Engineer.
          </motion.p>

          <div className="flex flex-wrap justify-center gap-4">
            <div className="px-6 py-3 bg-white/20 backdrop-blur border border-white/30 rounded-xl text-white font-semibold flex items-center gap-2">
              <Calendar className="w-5 h-5 text-orange-400" />
              01 Feb 2026
            </div>

            <button className="px-8 py-3 bg-orange-400 hover:bg-orange-500 text-white font-bold rounded-xl transition">
              Enquire Now
            </button>
          </div>
        </div>
      </section>

      {/* ================= FEATURES ================= */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-center mb-16"
          >
            What Students Will Experience
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Card 1 */}
            <motion.div
              whileHover={{ y: -6 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center"
            >
              <Wrench className="w-10 h-10 text-orange-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Build Workshops</h3>
              <p className="text-muted-foreground">
                Hands-on DIY aircraft and glider building that introduces
                aerodynamics through real experimentation.
              </p>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              whileHover={{ y: -6 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center"
            >
              <Wind className="w-10 h-10 text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Flight Training</h3>
              <p className="text-muted-foreground">
                Learn how lift, drag, thrust, and control surfaces work with
                guided flying sessions.
              </p>
            </motion.div>

            {/* Card 3 */}
            <motion.div
              whileHover={{ y: -6 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center"
            >
              <Plane className="w-10 h-10 text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Aerospace Exposure</h3>
              <p className="text-muted-foreground">
                Discover aviation & space concepts that inspire curiosity and
                future engineering thinking.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-24 bg-gradient-to-b from-transparent to-black/40">
        <div className="container mx-auto px-4 text-center">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold mb-6"
          >
            Ready to Take Flight?
          </motion.h3>

          <p className="text-muted-foreground max-w-xl mx-auto mb-8">
            Join our Aeromodelling Lab and give your child a powerful introduction
            to STEM, aviation, and creative thinking.
          </p>

          <button className="px-10 py-4 bg-orange-400 hover:bg-orange-500 text-white font-bold rounded-xl transition">
            Register Interest
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
