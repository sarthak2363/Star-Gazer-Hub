import Navbar from "@/components/layout/Navbar";
import { motion } from "framer-motion";
import { Plane, Wrench, Wind } from "lucide-react";
import bgImage from "@assets/generated_images/deep_space_starry_background.png";

export default function Aeromodelling() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      <div className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${bgImage})`, filter: 'hue-rotate(240deg)' }}
        />
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative z-10 text-center px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-display font-bold text-white mb-4"
          >
            Aeromodelling
          </motion.h1>
          <p className="text-xl text-purple-200/80 font-light"> Engineering that takes flight </p>
        </div>
      </div>

      <div className="container mx-auto max-w-5xl py-20 px-4">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="flex gap-4"
            >
              <div className="p-4 bg-purple-500/10 rounded-2xl h-fit">
                <Wrench className="w-8 h-8 text-purple-400" />
              </div>
              <div>
                <h3 className="text-2xl font-bold font-display mb-2">Build Workshops</h3>
                <p className="text-muted-foreground">
                  Learn the aerodynamics and mechanics of flight by building your own RC planes, drones, and gliders.
                </p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="flex gap-4"
            >
              <div className="p-4 bg-purple-500/10 rounded-2xl h-fit">
                <Wind className="w-8 h-8 text-purple-400" />
              </div>
              <div>
                <h3 className="text-2xl font-bold font-display mb-2">Flight Training</h3>
                <p className="text-muted-foreground">
                  Master the controls with our expert instructors. From basic maneuvers to advanced aerobatics.
                </p>
              </div>
            </motion.div>
          </div>

          <motion.div 
             initial={{ opacity: 0, scale: 0.9 }}
             whileInView={{ opacity: 1, scale: 1 }}
             className="bg-white/5 border border-white/10 p-8 rounded-3xl aspect-square flex items-center justify-center relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <Plane className="w-48 h-48 text-white/20 group-hover:text-white/40 transition-colors transform group-hover:-rotate-12 duration-500" />
            <div className="absolute bottom-8 left-8 right-8">
              <h4 className="text-2xl font-bold mb-2">Join the Club</h4>
              <button className="w-full py-3 bg-white text-black font-bold rounded-lg hover:bg-gray-200 transition-colors">
                Register Interest
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
