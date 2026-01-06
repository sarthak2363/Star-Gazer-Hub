import Navbar from "@/components/layout/Navbar";
import { motion } from "framer-motion";
import { ArrowRight, Star, Globe, Users, Target } from "lucide-react";
import { Link } from "wouter";
import bgImage from "@assets/generated_images/deep_space_starry_background.png";

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${bgImage})` }}
        >
          <div className="absolute inset-0 bg-black/60 backdrop-blur-[1px]" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-background" />
        </div>

        <div className="container relative z-10 px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-5xl md:text-8xl font-display font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-200 to-purple-400 drop-shadow-[0_0_30px_rgba(255,255,255,0.3)]">
              BEYOND THE SKY
            </h1>
            <p className="text-lg md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-10 font-light">
              Experience the universe like never before. From backyard stargazing to professional astrotours.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/stargazing">
                <button className="px-8 py-4 bg-primary text-white rounded-full font-bold hover:bg-primary/80 transition-all hover:scale-105 shadow-[0_0_20px_rgba(124,58,237,0.5)] flex items-center gap-2 mx-auto">
                  Start Exploring <ArrowRight className="w-5 h-5" />
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About / What We Do Section */}
      <section className="py-24 px-4 bg-background relative z-10">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="container mx-auto max-w-6xl"
        >
          <div className="text-center mb-16">
            <motion.h2 variants={itemVariants} className="text-3xl md:text-5xl font-display font-bold mb-4">
              Our Cosmic Mission
            </motion.h2>
            <motion.div variants={itemVariants} className="h-1 w-24 bg-gradient-to-r from-cyan-500 to-purple-600 mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-display font-semibold text-cyan-400">
                Bringing the Universe Closer
              </h3>
              <p className="text-muted-foreground leading-relaxed text-lg">
                At Stargazer, we believe the night sky belongs to everyone. Our mission is to democratize astronomy and make the wonders of the cosmos accessible, educational, and awe-inspiring.
              </p>
              <p className="text-muted-foreground leading-relaxed text-lg">
                We combine cutting-edge optical technology with expert guidance to create unforgettable experiences under the stars. Whether you are a curious beginner or a seasoned enthusiast, we open the window to the infinite.
              </p>
            </motion.div>
            
            <motion.div variants={itemVariants} className="grid grid-cols-2 gap-4">
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <Globe className="w-10 h-10 text-purple-400 mb-4" />
                <h4 className="font-bold mb-2">Global Reach</h4>
                <p className="text-sm text-muted-foreground">Expeditions to the world's darkest skies.</p>
              </div>
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm mt-8">
                <Users className="w-10 h-10 text-cyan-400 mb-4" />
                <h4 className="font-bold mb-2">Community</h4>
                <p className="text-sm text-muted-foreground">Building a network of sky watchers.</p>
              </div>
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <Target className="w-10 h-10 text-pink-400 mb-4" />
                <h4 className="font-bold mb-2">Education</h4>
                <p className="text-sm text-muted-foreground">Workshops and hands-on training.</p>
              </div>
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm mt-8">
                <Star className="w-10 h-10 text-yellow-400 mb-4" />
                <h4 className="font-bold mb-2">Excellence</h4>
                <p className="text-sm text-muted-foreground">Top-tier equipment and guides.</p>
              </div>
            </motion.div>
          </div>

          <motion.div variants={itemVariants} className="bg-gradient-to-r from-purple-900/20 to-blue-900/20 rounded-3xl p-8 md:p-12 border border-white/10 text-center">
             <h3 className="text-2xl md:text-4xl font-display font-bold mb-6">Ready to look up?</h3>
             <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
               Join us on our next expedition or local stargazing event. The universe is waiting.
             </p>
             <Link href="/astrotour">
               <button className="px-8 py-3 rounded-full border border-primary text-primary hover:bg-primary hover:text-white transition-all font-semibold uppercase tracking-wider text-sm">
                 View Upcoming Tours
               </button>
             </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-black border-t border-white/10 text-center text-sm text-muted-foreground">
        <p>&copy; 2024 Stargazer Ventures. All rights reserved.</p>
      </footer>
    </div>
  );
}
