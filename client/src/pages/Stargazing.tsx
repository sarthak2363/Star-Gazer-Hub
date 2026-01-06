import Navbar from "@/components/layout/Navbar";
import { motion } from "framer-motion";
import { Star, Moon, Sun } from "lucide-react";
import bgImage from "@assets/generated_images/deep_space_starry_background.png";

export default function Stargazing() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      {/* Hero */}
      <div className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${bgImage})` }}
        />
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative z-10 text-center px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-display font-bold text-white mb-4"
          >
            Stargazing
          </motion.h1>
          <p className="text-xl text-yellow-200/80 font-light"> reconnect with the night sky </p>
        </div>
      </div>

      <div className="container mx-auto max-w-5xl py-20 px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {[
            { icon: <Moon className="w-8 h-8 text-cyan-400" />, title: "Night Observation", desc: "Telescope sessions under dark skies." },
            { icon: <Star className="w-8 h-8 text-yellow-400" />, title: "Constellation Guide", desc: "Learn to navigate the stars." },
            { icon: <Sun className="w-8 h-8 text-orange-400" />, title: "Solar Viewing", desc: "Safe daytime solar observation." },
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/50 transition-colors"
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold mb-2 font-display">{item.title}</h3>
              <p className="text-muted-foreground">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="prose prose-invert prose-lg max-w-none">
          <h2 className="font-display">The Experience</h2>
          <p>
            Our stargazing events are designed to be immersive and educational. We provide high-end telescopes (Dobsonians, Refractors, and Schmidt-Cassegrains) guided by expert astronomers who can explain the mythology and science behind what you're seeing.
          </p>
          <p>
            From the craters of the Moon to the rings of Saturn and deep-sky nebulae, we bring the universe into focus.
          </p>
        </div>
      </div>
    </div>
  );
}
