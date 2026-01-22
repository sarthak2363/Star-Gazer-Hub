import { motion } from "framer-motion";
import { Star, Rocket, Users, Target, Globe, Award, Sparkles, Compass } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const stats = [
  { label: "Programs Conducted", value: "500+", icon: <Rocket className="w-5 h-5" /> },
  { label: "Happy Explorers", value: "25,000+", icon: <Users className="w-5 h-5" /> },
  { label: "Locations Explored", value: "15+", icon: <Globe className="w-5 h-5" /> },
  { label: "Years of Excellence", value: "10+", icon: <Award className="w-5 h-5" /> }
];

const teamImages = [
  "https://images.unsplash.com/photo-1516339901601-2e1b62dc0c45?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1454789548928-9efd52dc4031?auto=format&fit=crop&q=80&w=800"
];

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-[#0a0c10] text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1464802686167-b939a67e06d1?auto=format&fit=crop&q=80&w=2000" 
            alt="Milky Way Background" 
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-[#0a0c10]" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 1 }}
          >
            <span className="text-blue-400 font-display font-bold tracking-[0.3em] uppercase text-sm mb-4 block">Our Story</span>
            <h1 className="text-5xl md:text-8xl font-display font-bold text-white mb-6 uppercase tracking-tighter">
              Beyond The <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Horizon</span>
            </h1>
            <p className="text-xl text-blue-100/80 max-w-2xl mx-auto leading-relaxed">
              AXCamps is a division of AXSX, dedicated to bringing the wonders of space and aeronautics closer to the curious minds of today.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 relative z-10 -mt-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {stats.map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-[2.5rem] text-center group hover:bg-blue-600/10 hover:border-blue-500/30 transition-all duration-500"
              >
                <div className="w-12 h-12 bg-blue-600/20 rounded-2xl flex items-center justify-center mx-auto mb-4 text-blue-400 group-hover:scale-110 transition-transform">
                  {stat.icon}
                </div>
                <div className="text-3xl font-display font-bold text-white mb-1">{stat.value}</div>
                <div className="text-xs uppercase tracking-widest text-white/40">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-600/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest">
                <Compass className="w-4 h-4" />
                Who We Are
              </div>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-white leading-tight uppercase">
                Pioneering <span className="text-blue-400">Astro-Tourism</span> in India
              </h2>
              <p className="text-white/60 text-lg leading-relaxed">
                AXCamps (Axploration Camps) started with a simple vision: to make astronomy and aeronautics accessible to everyone. From high-altitude stargazing in Ladakh to wildlife-astro tours in Pench, we create experiences that blend science with adventure.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-6 bg-white/5 rounded-3xl border border-white/10 group hover:border-blue-500/50 transition-colors">
                  <Star className="w-8 h-8 text-yellow-400 mb-4" />
                  <h4 className="text-white font-bold mb-2 uppercase">Our Mission</h4>
                  <p className="text-white/40 text-sm">To inspire the next generation of space explorers through hands-on learning and immersive stargazing experiences.</p>
                </div>
                <div className="p-6 bg-white/5 rounded-3xl border border-white/10 group hover:border-purple-500/50 transition-colors">
                  <Target className="w-8 h-8 text-purple-400 mb-4" />
                  <h4 className="text-white font-bold mb-2 uppercase">Our Vision</h4>
                  <p className="text-white/40 text-sm">To be India's leading platform for astro-tourism, aeromodelling, and experiential science education.</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="space-y-4">
                <img src={teamImages[0]} alt="Experience 1" className="w-full h-80 object-cover rounded-[3rem] border border-white/10" />
                <div className="bg-blue-600 rounded-[2rem] p-8 text-center flex flex-col items-center justify-center">
                   <Sparkles className="w-10 h-10 text-white mb-4 animate-pulse" />
                   <div className="text-white font-bold uppercase tracking-widest text-xs">Innovation in Education</div>
                </div>
              </div>
              <div className="space-y-4 pt-12">
                <div className="bg-purple-600/20 backdrop-blur-md border border-purple-500/30 rounded-[2rem] p-8 text-center">
                   <div className="text-4xl font-display font-bold text-purple-400 mb-2">100%</div>
                   <div className="text-white/60 text-[10px] uppercase tracking-widest">Hands-on Experience</div>
                </div>
                <img src={teamImages[1]} alt="Experience 2" className="w-full h-80 object-cover rounded-[3rem] border border-white/10" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Interactive Values */}
      <section className="py-24 bg-blue-900/5">
        <div className="container mx-auto px-4 text-center mb-16">
          <h2 className="text-4xl font-display font-bold uppercase mb-4">Core Philosophy</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full" />
        </div>
        <div className="container mx-auto px-4 grid md:grid-cols-3 gap-8">
          {[
            { title: "Inquiry-Based Learning", desc: "We don't just show, we explain. Every program is designed to spark questions and curiosity." },
            { title: "Safety First", desc: "High altitudes or wildlife zones, your safety is our top priority with professional guides." },
            { title: "Community Driven", desc: "Building a network of amateur astronomers and aeromodellers across India." }
          ].map((v, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="p-10 bg-[#0d1117] border border-white/5 rounded-[2.5rem] text-center"
            >
              <div className="text-blue-500 text-5xl font-display font-bold mb-6 opacity-20">{i+1}</div>
              <h3 className="text-xl font-bold text-white mb-4 uppercase">{v.title}</h3>
              <p className="text-white/40 leading-relaxed">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
