import Navbar from "@/components/layout/Navbar";
import { motion } from "framer-motion";
import { MapPin, Calendar, Tent } from "lucide-react";
import bgImage from "@assets/generated_images/deep_space_starry_background.png";

export default function Astrotour() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      <div className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${bgImage})`, filter: 'hue-rotate(30deg)' }}
        />
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative z-10 text-center px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-display font-bold text-white mb-4"
          >
            Astrotour
          </motion.h1>
          <p className="text-xl text-cyan-200/80 font-light"> Journey to the darkest places on Earth </p>
        </div>
      </div>

      <div className="container mx-auto max-w-6xl py-20 px-4">
        <div className="grid md:grid-cols-2 gap-12">
           <motion.div 
             initial={{ opacity: 0, x: -50 }}
             whileInView={{ opacity: 1, x: 0 }}
             className="bg-white/5 border border-white/10 rounded-3xl p-8"
           >
             <h2 className="text-3xl font-display font-bold mb-6 flex items-center gap-3">
               <Tent className="text-purple-400" /> Desert Expedition
             </h2>
             <div className="space-y-4 mb-8">
               <div className="flex items-center gap-3 text-muted-foreground">
                 <Calendar className="w-5 h-5" /> <span>Oct 15 - Oct 20, 2024</span>
               </div>
               <div className="flex items-center gap-3 text-muted-foreground">
                 <MapPin className="w-5 h-5" /> <span>Atacama Desert, Chile</span>
               </div>
             </div>
             <p className="text-muted-foreground mb-6">
               Experience the clearest skies on the planet. High altitude, zero light pollution, and southern hemisphere constellations.
             </p>
             <button className="w-full py-3 bg-purple-600 hover:bg-purple-500 rounded-xl font-bold transition-colors">
               Book Now
             </button>
           </motion.div>

           <motion.div 
             initial={{ opacity: 0, x: 50 }}
             whileInView={{ opacity: 1, x: 0 }}
             className="bg-white/5 border border-white/10 rounded-3xl p-8"
           >
             <h2 className="text-3xl font-display font-bold mb-6 flex items-center gap-3">
               <Tent className="text-cyan-400" /> Mountain Retreat
             </h2>
             <div className="space-y-4 mb-8">
               <div className="flex items-center gap-3 text-muted-foreground">
                 <Calendar className="w-5 h-5" /> <span>Nov 10 - Nov 12, 2024</span>
               </div>
               <div className="flex items-center gap-3 text-muted-foreground">
                 <MapPin className="w-5 h-5" /> <span>Ladakh, Himalayas</span>
               </div>
             </div>
             <p className="text-muted-foreground mb-6">
               Stargazing from the roof of the world. Astrophotography workshops included amidst breathtaking mountain peaks.
             </p>
             <button className="w-full py-3 bg-cyan-600 hover:bg-cyan-500 rounded-xl font-bold transition-colors">
               Book Now
             </button>
           </motion.div>
        </div>
      </div>
    </div>
  );
}
