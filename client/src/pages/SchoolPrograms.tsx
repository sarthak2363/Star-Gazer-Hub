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
  GraduationCap,
  Calendar,
  Rocket,
  Lightbulb,
} from "lucide-react";
import { useState, useRef, useEffect } from "react";
import heroBgImage from "@assets/generated_images/people_stargazing_under_milky_way.png";
import schoolImg1 from "@assets/school_1768469844860.jpeg";
import schoolImg2 from "@assets/WhatsApp_Image_2026-01-14_at_3.52.20_PM_(1)_1768469844860.jpeg";
import schoolImg3 from "@assets/WhatsApp_Image_2026-01-14_at_3.52.20_PM_1768469844861.jpeg";
import schoolImg4 from "@assets/WhatsApp_Image_2026-01-14_at_3.52.21_PM_1768469844861.jpeg";
import schoolImg5 from "@assets/WhatsApp_Image_2026-01-14_at_3.52.23_PM_(1)_1768469844861.jpeg";
import schoolImg6 from "@assets/WhatsApp_Image_2026-01-14_at_3.52.23_PM_1768469844862.jpeg";
import schoolImg7 from "@assets/WhatsApp_Image_2026-01-14_at_3.52.24_PM_(3)_1768469844862.jpeg";
import schoolImg8 from "@assets/WhatsApp_Image_2026-01-14_at_3.52.24_PM_(4)_1768469844862.jpeg";
import schoolImg9 from "@assets/WhatsApp_Image_2026-01-14_at_3.52.24_PM_(5)_1768469844863.jpeg";
import schoolImg10 from "@assets/WhatsApp_Image_2026-01-14_at_3.52.24_PM_(6)_1768469844863.jpeg";
import schoolImg11 from "@assets/WhatsApp_Image_2026-01-14_at_3.52.24_PM_1768469844864.jpeg";
import schoolImg12 from "@assets/WhatsApp_Image_2026-01-14_at_10.04.56_PM_(1)_1768469844864.jpeg";
import schoolImg13 from "@assets/WhatsApp_Image_2026-01-14_at_10.04.56_PM_(2)_1768469844865.jpeg";

const SCHOOL_OFFERS = [
  {
    title: "Single Session",
    duration: "2 Hours",
    groupSize: "Up to 50 students",
    highlights: ["Interactive Slide Show", "Telescope Demonstration", "Astronomy Basics"],
    desc: "A perfect introduction to space science that brings the universe into the school premises."
  },
  {
    title: "Dual Session",
    duration: "5 hrs (6 PM - 11 PM)",
    groupSize: "Up to 50 students",
    highlights: ["Solar Sunspot Viewing", "Water Rocketry Workshop", "Space Science Quiz"],
    desc: "An immersive day of hands-on science and direct solar observation."
  },
  {
    title: "Overnight Session",
    duration: "Overnight (6 PM - 8 AM)",
    groupSize: "Up to 50 students",
    highlights: ["Deep Sky Observation", "Telescope Handling", "Career Guidance Session"],
    desc: "The ultimate astronomical experience where students learn to navigate the night sky like professionals."
  }
];

const GALLERY_IMAGES = [
  { src: schoolImg1, alt: "School Astronomy Workshop" },
  { src: schoolImg2, alt: "Space Exploration Presentation" },
  { src: schoolImg3, alt: "Hands-on Rocketry Session" },
  { src: schoolImg4, alt: "Astronomy Seminar" },
  { src: schoolImg5, alt: "Stargazing Group Photo" },
  { src: schoolImg6, alt: "Telescope Handling Session" },
  { src: schoolImg7, alt: "Observing the Cosmos" },
  { src: schoolImg8, alt: "Students Observing Stars" },
  { src: schoolImg9, alt: "Night Sky Training" },
  { src: schoolImg10, alt: "Classroom Astronomy Session" },
  { src: schoolImg11, alt: "Solar Observation Workshop" },
  { src: schoolImg12, alt: "Space Science Presentation" },
  { src: schoolImg13, alt: "Astronomy Interaction" },
];

function ImageCarousel({ images }: { images: { src: string; alt: string }[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (images.length <= 1 || isHovered) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length, isHovered]);

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % images.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div
      className="relative w-full overflow-hidden rounded-3xl border border-white/10 shadow-2xl shadow-cyan-500/5"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className="flex transition-transform duration-500 ease-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, i) => (
          <div key={i} className="min-w-full h-[420px] md:h-[520px] lg:h-[600px]">
            <img src={image.src} alt={image.alt} className="w-full h-full object-cover" />
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
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`w-2 h-2 rounded-full transition-all ${
                  i === currentIndex ? "bg-cyan-400 w-6" : "bg-white/30 hover:bg-white/50"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default function SchoolPrograms() {
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
    <div className="min-h-screen bg-[#020617] text-white selection:bg-cyan-500/30">
      <Navbar />

      {/* Hero Section */}
      <div className="relative pt-32 pb-24 overflow-hidden min-h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${heroBgImage})` }} />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-[#020617]" />
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-4xl md:text-7xl font-display font-bold mb-4 tracking-tight uppercase">School Stargazing Programs</h1>
            <p className="text-xl md:text-2xl text-blue-400 font-light max-w-3xl mx-auto italic tracking-widest uppercase">
              Where Science Meets Wonder
            </p>
          </motion.div>
        </div>
      </div>

     

      {/* Offers Section */}
      <section className="py-20 container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {SCHOOL_OFFERS.map((offer, idx) => (
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
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="space-y-4 overflow-hidden"
                    >
                      <div className="pt-4 border-t border-white/10 space-y-3">
                        <div className="flex items-center gap-2 text-sm">
                          <Clock className="w-4 h-4 text-blue-400" />
                          <span><strong>Duration:</strong> {offer.duration}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <Users className="w-4 h-4 text-blue-400" />
                          <span><strong>Ideal for:</strong> {offer.groupSize}</span>
                        </div>
                        <div className="space-y-2">
                          <p className="text-sm font-bold text-blue-400">Key Highlights:</p>
                          <ul className="list-disc list-inside text-sm text-white/70">
                            {offer.highlights.map((h, i) => <li key={i}>{h}</li>)}
                          </ul>
                        </div>
                  
                        <button 
                          onClick={(e) => {
                            e.stopPropagation();
                            window.open("https://wa.me/919028174363?text=I'm interested in school program: " + offer.title, "_blank");
                          }}
                          className="w-full mt-6 py-3 bg-blue-400 hover:bg-blue-500 text-white font-bold rounded-2xl flex items-center justify-center gap-2 transition-colors"
                        >
                          <MessageSquare className="w-4 h-4" /> Enquire for School
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

      {/* Educational Value */}
      <section className="py-20 bg-white/[0.02]">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-8 text-blue-400">Beyond the Books</h2>
          <p className="text-lg text-white/70 leading-relaxed italic">
            Astronomy is the "Gateway Science." Our school programs are designed to take learning out of the 
            four walls of a classroom and under the infinite expanse of the sky. We aim to spark a lifelong 
            passion for STEM, helping students understand physics, mathematics, and geography through the 
            direct, awe-inspiring observation of the universe.
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 0.90 }} viewport={{ once: true }}>
        <ImageCarousel images={GALLERY_IMAGES} />
        <p className="text-center text-xs text-white/30 mt-4 uppercase tracking-widest">Swipe or click arrows to view more</p>
      </motion.div>

      {/* Importance Section for Schools */}
      <section className="py-20 container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16">
          <div className="space-y-8">
            <h2 className="text-3xl font-display font-bold text-blue-400">Importance for Students</h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <Lightbulb className="w-6 h-6 text-blue-400 flex-shrink-0" />
                <div>
                  <h4 className="text-xl font-bold mb-2">Scientific Curiosity</h4>
                  <p className="text-white/60">Asking the big questions about our origins and the nature of space.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Compass className="w-6 h-6 text-blue-400 flex-shrink-0" />
                <div>
                  <h4 className="text-xl font-bold mb-2">Navigation Skills</h4>
                  <p className="text-white/60">Learning to read the stars for direction, just like ancient explorers.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-8">
            <h2 className="text-3xl font-display font-bold text-blue-400">Why Schools Choose AXSX?</h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <Rocket className="w-6 h-6 text-blue-400 flex-shrink-0" />
                <div>
                  <h4 className="text-xl font-bold mb-2">Hands-on Learning</h4>
                  <p className="text-white/60">Practical sessions with professional-grade telescopes and astronomical gear.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <GraduationCap className="w-6 h-6 text-blue-400 flex-shrink-0" />
                <div>
                  <h4 className="text-xl font-bold mb-2">Career Guidance</h4>
                  <p className="text-white/60">Mentorship for students interested in astrophysics, aerospace, and space research.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enquiry Form */}
      <section className="py-20 container mx-auto px-4 max-w-4xl">
        <div className="bg-white/5 border border-white/10 rounded-[2rem] p-8 md:p-12">
          <h2 className="text-3xl font-display font-bold mb-8 text-center">Plan a Session for Your School</h2>
          <form className="grid md:grid-cols-2 gap-6" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest text-white/40 ml-4">Coordinator Name</label>
              <input type="text" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:border-blue-500 outline-none transition-colors" />
            </div>
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest text-white/40 ml-4">School Name</label>
              <input type="text" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:border-blue-500 outline-none transition-colors" />
            </div>
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest text-white/40 ml-4">Email Address</label>
              <input type="email" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:border-blue-500 outline-none transition-colors" />
            </div>
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest text-white/40 ml-4">Expected Student Count</label>
              <input type="number" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:border-blue-500 outline-none transition-colors" />
            </div>
            <div className="md:col-span-2 space-y-2">
              <label className="text-xs uppercase tracking-widest text-white/40 ml-4">Program Requirements</label>
              <textarea rows={4} className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:border-cyan-500 outline-none transition-colors resize-none"></textarea>
            </div>
            <button className="md:col-span-2 py-4 bg-blue-400 hover:bg-blue-500 text-white font-bold rounded-2xl transition-all shadow-[0_0_20px_rgba(147,51,234,0.3)] uppercase tracking-widest text-sm">
              Request School Proposal
            </button>
          </form>
          <p className="text-center mt-6 text-[10px] text-white/30 uppercase tracking-widest">
            Expert academic support at info@axsx.in
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
