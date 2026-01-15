import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { motion, AnimatePresence } from "framer-motion";
import {
  Star,
  Users,
  Clock,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  MessageSquare,
  Compass,
  Zap,
  Heart,
  Calendar,
} from "lucide-react";
import { useState, useRef } from "react";
import heroBgImage from "@assets/generated_images/people_stargazing_under_milky_way.png";
import eventImg from "@assets/13th_event_1767776866680.jpeg";

const CORPORATE_OFFERS = [
  {
    title: "Single Session",
    duration: "3 Hours (6 PM - 9 PM)",
    groupSize: "Up to 50 people",
    highlights: ["Interactive Sky Tour", "Telescope Viewing", "Mythology Stories"],
    desc: "A focused, high-impact introduction to the cosmos perfect for an evening team mixer."
  },
  {
    title: "Dual Session",
    duration: "6 Hours (6 Pm - 11 PM)",
    groupSize: "Up to 100 people",
    highlights: ["Deep Sky Objects", "Planetary Observation", "Science Workshops"],
    customization: "Custom catering & photography",
    desc: "Two deep-dive sessions covering different celestial regions and scientific concepts."
  },
  {
    title: "Overnight Session",
    duration: "Overnight (5PM - 9AM)",
    groupSize: "Flexible",
    highlights: ["Luxury Tent Stay", "Midnight Jamming", "Morning Solar Viewing"],
    customization: "Full corporate branding & hospitality",
    desc: "The ultimate team bonding experience under a blanket of stars with full hospitality."
  }
];

const GALLERY_IMAGES = [
  { src: eventImg, alt: "Corporate Event 1" },
  { src: eventImg, alt: "Corporate Event 2" },
  { src: eventImg, alt: "Corporate Event 3" },
  { src: eventImg, alt: "Corporate Event 4" },
];

const CLIENT_LOGOS = [
  { name: "TechCorp", logo: "https://placehold.co/200x100/020617/ffffff?text=TechCorp" },
  { name: "InnovateX", logo: "https://placehold.co/200x100/020617/ffffff?text=InnovateX" },
  { name: "GlobalSys", logo: "https://placehold.co/200x100/020617/ffffff?text=GlobalSys" },
  { name: "ApexSolutions", logo: "https://placehold.co/200x100/020617/ffffff?text=Apex" },
];

function ImageCarousel({ images }: { images: { src: string; alt: string }[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % images.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className="relative w-full overflow-hidden rounded-3xl border border-white/10 shadow-2xl shadow-blue-500/5">
      <div className="flex transition-transform duration-500 ease-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {images.map((image, i) => (
          <div key={i} className="min-w-full">
            <img src={image.src} alt={image.alt} className="w-full h-auto object-cover" />
          </div>
        ))}
      </div>
      {images.length > 1 && (
        <>
          <button onClick={prevSlide} className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-black/50 hover:bg-black/80 rounded-full backdrop-blur-sm border border-white/10 transition-all group">
            <ChevronLeft className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
          </button>
          <button onClick={nextSlide} className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-black/50 hover:bg-black/80 rounded-full backdrop-blur-sm border border-white/10 transition-all group">
            <ChevronRight className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
          </button>
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {images.map((_, i) => (
              <button key={i} onClick={() => setCurrentIndex(i)} className={`w-2 h-2 rounded-full transition-all ${i === currentIndex ? "bg-blue-400 w-6" : "bg-white/30 hover:bg-white/50"}`} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default function CorporateStargazing() {
  const [expandedOffer, setExpandedOffer] = useState<number | null>(null);
  const galleryRef = useRef<HTMLDivElement>(null);

  const scrollGallery = (direction: 'left' | 'right') => {
    if (galleryRef.current) {
      const { scrollLeft, clientWidth } = galleryRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      galleryRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#020617] text-white selection:bg-blue-500/30">
      <Navbar />

      {/* Hero Section */}
      <div className="relative pt-32 pb-24 overflow-hidden min-h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${heroBgImage})` }} />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-[#020617]" />
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-4xl md:text-7xl font-display font-bold mb-2 tracking-tight uppercase">Corporate Stargazing</h1>
            <p className="text-xl md:text-2xl text-blue-400 font-light max-w-3xl mx-auto italic tracking-widest uppercase mb-0">
              Where Corporate Meets the Cosmic
            </p>
          </motion.div>
        </div>
      </div>

      <section className="py-0 container mx-auto px-4">
      <h2 className="text-3xl md:text-5xl font-display font-bold mb-8 text-center">Our Offers:</h2>

      {/* Offers Section */}
      
        <div className="grid md:grid-cols-3 gap-8">
          {CORPORATE_OFFERS.map((offer, idx) => (
            <motion.div
              key={idx}
              layout
              className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden cursor-pointer hover:border-blue-500/50 transition-colors"
              onClick={() => setExpandedOffer(expandedOffer === idx ? null : idx)}
            >
              <div className="p-8">
                <h3 className="text-2xl font-display font-bold mb-4">{offer.title}</h3>
                <p className="text-white/60 text-sm mb-6">{offer.desc}</p>
                
                <AnimatePresence>
                  {expandedOffer === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="space-y-4 overflow-hidden"
                    >
                      <div className="pt-4 border-t border-white/10 space-y-3">
                        <div className="flex items-center gap-2 text-sm">
                          <Clock className="w-4 h-4 text-blue-400" />
                          <span><strong>Duration:</strong> {offer.duration}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <Users className="w-4 h-4 text-blue-400" />
                          <span><strong>Group Size:</strong> {offer.groupSize}</span>
                        </div>
                        <div className="space-y-2">
                          <p className="text-sm font-bold text-blue-400">Highlights:</p>
                          <ul className="list-disc list-inside text-sm text-white/70">
                            {offer.highlights.map((h, i) => <li key={i}>{h}</li>)}
                          </ul>
                        </div>
                        <p className="text-sm text-white/70"><strong>Customization:</strong> {offer.customization}</p>
                        
                        <button 
                          onClick={(e) => {
                            e.stopPropagation();
                            window.open("https://wa.me/919028174363?text=I'm interested in " + offer.title, "_blank");
                          }}
                          className="w-full mt-6 py-3 bg-green-500 hover:bg-green-600 text-white font-bold rounded-2xl flex items-center justify-center gap-2 transition-colors"
                        >
                          <MessageSquare className="w-4 h-4" /> Enquire Now
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
                
                <div className="mt-4 flex justify-center">
                  <ChevronDown className={`w-6 h-6 text-white/30 transition-transform ${expandedOffer === idx ? 'rotate-180' : ''}`} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* What is Stargazing */}
      <section className="py-20 bg-white/[0.02]">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-8">Why AXSX?</h2>
          <p className="text-lg text-white/70 leading-relaxed italic">
            Stargazing is magical at any age, but AstroParty is rare. Guided by experts and powered by a 12-inch primary mirror telescope, we bring planets, galaxies, and deep-sky wonders to life under truly dark skies.
          </p>
          <p className="text-lg text-white/70 leading-relaxed italic">
            It is curated by Aeronautics and Space Exploration (AXSX), working in astronomy and space science since 2010.
            Brought to you by AXCamps, a dedicated division for outdoor stargazing experiences, corporate events, and school astronomy programs.

          </p>
        </div>
      </section>
      
      <br></br>
      <h2 className="text-3xl md:text-5xl font-display font-bold mb-8 text-center">Past Events at a Glimpse</h2>
      
      
      <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 0.90 }} viewport={{ once: true }}>
        <ImageCarousel images={GALLERY_IMAGES} />
        <p className="text-center text-xs text-white/30 mt-4 uppercase tracking-widest">Swipe or click arrows to view more</p>
      </motion.div>

      {/* Client Logos Carousel */}
      <section className="py-20 border-y border-white/5 overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div 
            animate={{ x: [0, -1000] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="flex gap-20 items-center whitespace-nowrap"
          >
            {[...CLIENT_LOGOS, ...CLIENT_LOGOS, ...CLIENT_LOGOS].map((client, i) => (
              <img key={i} src={client.logo} alt={client.name} className="h-12 w-auto grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all cursor-pointer" />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Importance Section */}
      <section className="py-20 container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16">
          <div className="space-y-8">
            <h2 className="text-3xl font-display font-bold text-blue-400">Importance of Stargazing</h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <Heart className="w-6 h-6 text-pink-400 flex-shrink-0" />
                <div>
                  <h4 className="text-xl font-bold mb-2">Mental Wellness</h4>
                  <p className="text-white/60">The vastness of the sky helps put stressors into perspective, promoting calm and clarity.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Compass className="w-6 h-6 text-green-400 flex-shrink-0" />
                <div>
                  <h4 className="text-xl font-bold mb-2">Connection with Nature</h4>
                  <p className="text-white/60">Reconnect with the rhythmic patterns of our planet and the cosmos.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-8">
            <h2 className="text-3xl font-display font-bold text-orange-400">Why Choose for Corporate?</h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <Users className="w-6 h-6 text-indigo-400 flex-shrink-0" />
                <div>
                  <h4 className="text-xl font-bold mb-2">Team Bonding</h4>
                  <p className="text-white/60">A shared astronomical discovery creates lasting memories and stronger interpersonal ties.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Zap className="w-6 h-6 text-yellow-400 flex-shrink-0" />
                <div>
                  <h4 className="text-xl font-bold mb-2">Uniqueness</h4>
                  <p className="text-white/60">Stand out from traditional off-sites with an experience that is truly out of this world.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enquiry Form */}
      <section className="py-20 container mx-auto px-4 max-w-4xl">
        <div className="bg-white/5 border border-white/10 rounded-[2rem] p-8 md:p-12">
          <h2 className="text-3xl font-display font-bold mb-8 text-center">Enquire for Your Team</h2>
          <form className="grid md:grid-cols-2 gap-6" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest text-white/40 ml-4">Full Name</label>
              <input type="text" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:border-blue-500 outline-none transition-colors" />
            </div>
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest text-white/40 ml-4">Company Name</label>
              <input type="text" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:border-blue-500 outline-none transition-colors" />
            </div>
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest text-white/40 ml-4">Email Address</label>
              <input type="email" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:border-blue-500 outline-none transition-colors" />
            </div>
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest text-white/40 ml-4">Phone Number</label>
              <input type="tel" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:border-blue-500 outline-none transition-colors" />
            </div>
            <div className="md:col-span-2 space-y-2">
              <label className="text-xs uppercase tracking-widest text-white/40 ml-4">Event Requirements</label>
              <textarea rows={4} className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:border-blue-500 outline-none transition-colors resize-none"></textarea>
            </div>
            <button className="md:col-span-2 py-4 bg-blue-500 hover:bg-blue-400 text-black font-bold rounded-2xl transition-all shadow-[0_0_20px_rgba(6,182,212,0.3)] uppercase tracking-widest text-sm">
              Send Enquiry
            </button>
          </form>
          <p className="text-center mt-6 text-[10px] text-white/30 uppercase tracking-widest">
            We will get back to you within 24 hours at info@axsx.in
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
