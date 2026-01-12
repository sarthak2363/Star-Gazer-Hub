import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Star, Moon, Sun, MapPin, Calendar, Clock, Users, Utensils, Tent, Music, Telescope, Camera, Eye, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import eventImg from "@assets/13th_event_1767776866680.jpeg";
import heroBgImage from "@assets/generated_images/people_stargazing_under_milky_way.png";

const GALLERY_IMAGES = [
  { src: eventImg, alt: "Stargazing Event 1" },
  { src: eventImg, alt: "Stargazing Event 2" },
  { src: eventImg, alt: "Stargazing Event 3" },
];

function ImageCarousel({ images }: { images: { src: string; alt: string }[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="relative w-full overflow-hidden rounded-3xl border border-white/10 shadow-2xl shadow-cyan-500/5">
      <div 
        className="flex transition-transform duration-500 ease-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, i) => (
          <div key={i} className="min-w-full">
            <img src={image.src} alt={image.alt} className="w-full h-auto object-cover" />
          </div>
        ))}
      </div>
      
      {images.length > 1 && (
        <>
          <button 
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-black/50 hover:bg-black/80 rounded-full backdrop-blur-sm border border-white/10 transition-all group"
          >
            <ChevronLeft className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
          </button>
          <button 
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-black/50 hover:bg-black/80 rounded-full backdrop-blur-sm border border-white/10 transition-all group"
          >
            <ChevronRight className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
          </button>
          
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`w-2 h-2 rounded-full transition-all ${i === currentIndex ? 'bg-cyan-400 w-6' : 'bg-white/30 hover:bg-white/50'}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default function Stargazing() {
  const highlights = [
    { icon: <Music className="w-6 h-6 text-orange-400" />, title: "Jamming with Bonfire", desc: "Cozy musical evening under the stars." },
    { icon: <Tent className="w-6 h-6 text-cyan-400" />, title: "Experience Tent Camping", desc: "Stay overnight in the lap of nature." },
    { icon: <Utensils className="w-6 h-6 text-green-400" />, title: "Delicious Dinner", desc: "Full package including meals." },
  ];

  const timeline = [
    { time: "5:00 PM – 6:30 PM", event: "Check in at location" },
    { time: "5:00 PM – 6:00 PM", event: "Snacks and tea" },
    { time: "6:30 PM – 8:45 PM", event: "Session 1 – West region sky observation" },
    { time: "9:00 PM – 9:30 PM", event: "PPT Presentation" },
    { time: "9:30 PM – 10:30 PM", event: "Dinner" },
    { time: "10:45 PM – 1:00 AM", event: "Session 2: Constellation & Deep Sky Observation" },
    { time: "1:00 AM – 5:00 AM", event: "Break for Sleep" },
    { time: "5:00 AM – 6:00 AM", event: "Session 3: Morning Object Watching – Witness New Constellation and celestial objects" },
    { time: "6:00 AM – 7:30 AM", event: "Break and refreshment" },
    { time: "7:30 AM – 8:30 AM", event: "Solar spot observation" },
    { time: "8:30 AM – 9:30 AM", event: "Breakfast" },
    { time: "9:30 AM onwards", event: "Departure process starts" },
  ];

  const equipment = [
    "A 12-Inch Telescope With An Advanced Eyepiece",
    "A 8-Inch Telescope With An Advanced Eyepiece",
    "A 6-Inch Telescope With An Advanced Eyepiece",
    "Solar Filter To Watch Sunspots",
    "Projector To Show Visual Demo Of Facts",
    "Camera Attachment To Take Pictures Of Objects",
    "Binoculars",
  ];

  const takeaways = [
    "Exploration of the Cosmos",
    "Inspires future career paths",
    "Guided Observation Sessions",
    "Astrophotography Techniques",
    "Education on Astronomy Tools",
    "Connection with Fellow Stargazers",
    "Inspiration for Further Exploration",
    "Astronomical Knowledge",
    "Outdoor activities",
    "Community Building"
  ];

  return (
    <div className="min-h-screen bg-[#020617] text-white selection:bg-cyan-500/30">
      <Navbar />
      
      {/* Hero Section with Background Image */}
      <div className="relative pt-32 pb-24 overflow-hidden min-h-[70vh] flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroBgImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-[#020617]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.08)_0,transparent_70%)] pointer-events-none" />
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-7xl font-display font-bold mb-4 tracking-tight drop-shadow-2xl">
              Stargazing Astro Party <span className="text-cyan-400">2026</span>
            </h1>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <span className="px-4 py-2 bg-black/50 backdrop-blur-sm border border-cyan-500/30 rounded-full text-cyan-400 text-sm font-medium flex items-center gap-2">
                <Calendar className="w-4 h-4" /> 10 January 2026
              </span>
              <span className="px-4 py-2 bg-black/50 backdrop-blur-sm border border-orange-500/30 rounded-full text-orange-400 text-sm font-medium flex items-center gap-2 text-left">
                <MapPin className="w-4 h-4" /> Panshet (45 Km From Pune)
              </span>
            </div>
            <p className="text-xl md:text-2xl text-white/80 font-light max-w-3xl mx-auto italic drop-shadow-lg">
              "Astro – Party is a once in a lifetime experience for those who attend it."
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 pb-20">
        <div className="grid lg:grid-cols-12 gap-12 max-w-7xl mx-auto">
          
          {/* Left Column: Details */}
          <div className="lg:col-span-7 space-y-12">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="prose prose-invert prose-cyan max-w-none"
            >
              <h2 className="text-3xl font-display font-bold text-white mb-6">Welcome to our Stargazing program</h2>
              <p className="text-lg text-white/70 leading-relaxed text-left">
                Astro – Party is the complete package of universe gathering, in which you can observe the night sky from one of our biggest telescopes with a 12-inch primary mirror. 
              </p>
              <p className="text-lg text-white/70 leading-relaxed text-left">
                Our experts explain the night sky with interesting facts and theories. <strong>Aeronautics and Space Exploration (AXSX)</strong> and <strong>Astronomy & Aerospace Research Organization (AARO)</strong> have been working in the field since 2010, bringing 12+ years of expertise to your experience.
              </p>
            </motion.div>

            {/* Image Carousel - Right after welcome */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <ImageCarousel images={GALLERY_IMAGES} />
              <p className="text-center text-xs text-white/30 mt-4 uppercase tracking-widest">
                Swipe or click arrows to view more
              </p>
            </motion.div>

            <div className="bg-white/5 border-l-4 border-cyan-500 p-6 rounded-r-xl">
              <p className="italic text-white/80 m-0 text-left">
                "Experience many new and fascinating things like our place in the universe, our solar family, Indian ancient astronomy, and mid-night discussions on the future of astronomy and humanity."
              </p>
            </div>

            {/* Highlights Grid */}
            <div className="grid md:grid-cols-3 gap-6">
              {highlights.map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-500/30 transition-all group"
                >
                  <div className="mb-4 transform group-hover:scale-110 transition-transform">{item.icon}</div>
                  <h3 className="text-lg font-bold mb-2 font-display text-white">{item.title}</h3>
                  <p className="text-sm text-white/50 text-left">{item.desc}</p>
                </motion.div>
              ))}
            </div>

            {/* Timeline Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white/5 border border-white/10 rounded-3xl p-8"
            >
              <h3 className="text-2xl font-display font-bold mb-6 flex items-center gap-3">
                <Clock className="w-6 h-6 text-cyan-400" /> Astro – Party Event Timeline
              </h3>
              <div className="space-y-4">
                {timeline.map((item, i) => (
                  <div key={i} className="flex gap-4 items-start group">
                    <div className="w-2 h-2 rounded-full bg-cyan-500 mt-2 flex-shrink-0 group-hover:scale-150 transition-transform" />
                    <div className="flex-1 pb-4 border-b border-white/5 last:border-0">
                      <span className="text-cyan-400 font-mono text-sm block mb-1">{item.time}</span>
                      <span className="text-white/80 text-left block">{item.event}</span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Check-in Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-white/10 rounded-3xl p-8"
            >
              <h3 className="text-2xl font-display font-bold mb-6 flex items-center gap-3">
                <Calendar className="w-6 h-6 text-purple-400" /> Check In Date & Time
              </h3>
              <p className="text-white/70 mb-6 text-left">
                Every month, Overnight Sky Watching Session is held on a Saturday close to the New Moon, just 35 kilometres from Pune.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-4 bg-white/5 rounded-2xl border border-white/5">
                  <span className="text-xs text-white/40 uppercase tracking-wider block mb-2">Check In</span>
                  <span className="text-xl font-bold text-white">10 January 2026</span>
                  <span className="text-cyan-400 block">5:00 PM</span>
                </div>
                <div className="p-4 bg-white/5 rounded-2xl border border-white/5">
                  <span className="text-xs text-white/40 uppercase tracking-wider block mb-2">Departure</span>
                  <span className="text-xl font-bold text-white">11 January 2026</span>
                  <span className="text-cyan-400 block">9:30 AM</span>
                </div>
              </div>
            </motion.div>

            {/* Equipment Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white/5 border border-white/10 rounded-3xl p-8"
            >
              <h3 className="text-2xl font-display font-bold mb-6 flex items-center gap-3">
                <Telescope className="w-6 h-6 text-yellow-400" /> Stargazing Astro Party Equipment
              </h3>
              <ul className="grid md:grid-cols-2 gap-4">
                {equipment.map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-white/70 text-left">
                    <Eye className="w-4 h-4 text-cyan-500 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Right Column: Booking Card */}
          <div className="lg:col-span-5">
            <div className="sticky top-32 space-y-6">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-gradient-to-b from-white/10 to-transparent border border-white/10 rounded-3xl p-8 backdrop-blur-xl"
              >
                <div className="mb-8">
                  <span className="text-orange-400 text-sm font-bold uppercase tracking-widest block mb-2">Time's Ticking!</span>
                  <h3 className="text-2xl font-display font-bold text-white mb-2">Only a Few Days Left!</h3>
                  <p className="text-white/60 text-sm text-left">Book Now - Don't Miss Out!</p>
                </div>

                <div className="space-y-6 mb-8">
                  <div className="flex justify-between items-center p-4 bg-white/5 rounded-2xl border border-white/5">
                    <div>
                      <span className="block text-xs text-white/40 uppercase tracking-wider">Age Above 10</span>
                      <span className="text-2xl font-bold text-white">2590 ₹</span>
                    </div>
                    <span className="text-xs text-cyan-400 font-bold bg-cyan-400/10 px-2 py-1 rounded">Per Participant</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-white/5 rounded-2xl border border-white/5">
                    <div>
                      <span className="block text-xs text-white/40 uppercase tracking-wider">Age Below 10</span>
                      <span className="text-2xl font-bold text-white">1990 ₹</span>
                    </div>
                    <span className="text-xs text-cyan-400 font-bold bg-cyan-400/10 px-2 py-1 rounded">Per Participant</span>
                  </div>
                </div>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3 text-white/70">
                    <Users className="w-5 h-5 text-cyan-400" />
                    <span className="text-sm text-left">Group Booking Discount Available</span>
                  </div>
                  <div className="flex items-center gap-3 text-white/70">
                    <Clock className="w-5 h-5 text-cyan-400" />
                    <span className="text-sm">Only Few Seats Left</span>
                  </div>
                </div>

                <button className="w-full py-4 bg-cyan-500 hover:bg-cyan-400 text-black font-bold rounded-2xl transition-all shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] transform hover:-translate-y-1 active:scale-[0.98]">
                  Book Now For Payment
                </button>
                
                <p className="text-center mt-4 text-[10px] text-white/30 uppercase tracking-widest cursor-pointer hover:text-white transition-colors">
                  Cancellation and Refund Policy
                </p>
              </motion.div>

              {/* Key Takeaways */}
              <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
                <h4 className="text-xl font-display font-bold mb-6 flex items-center gap-2">
                  <Star className="w-5 h-5 text-yellow-400" /> Key Takeaways
                </h4>
                <ul className="grid grid-cols-1 gap-3">
                  {takeaways.map((text, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-white/60 text-left">
                      <div className="w-1.5 h-1.5 rounded-full bg-cyan-500/50" />
                      {text}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>

      <Footer />
    </div>
  );
}
