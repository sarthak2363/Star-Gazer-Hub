import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { motion, AnimatePresence } from "framer-motion";
import {
  Star,
  MapPin,
  Calendar as CalendarIcon,
  Clock,
  Users,
  Zap,
  Camera,
  Compass,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  Plane,
  Home,
  Utensils,
  Binoculars,
} from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { format, isSameDay } from "date-fns";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

// Images
import penchHero from "@assets/generated_images/people_stargazing_under_milky_way.png";
import jungleSafari from "@assets/home_page_Astro_tour_image_1768287084463.png";
import groupPhoto1 from "@assets/Pench_group_photo_1_1768816310215.png";
import groupPhoto2 from "@assets/Pench_group_photo_2_1768816310217.png";

const TOUR_DATES = [
  new Date(2025, 11, 26),
  new Date(2026, 0, 24),
];

const PENCH_PHOTOS = [
  { url: groupPhoto1, caption: "Stargazing Batch 001 at Pench" },
  { url: groupPhoto2, caption: "Sillari Horizon - The Dark Sky Sanctuary" }
];

export default function Astrotour() {
  const [isTimelineOpen, setIsTimelineOpen] = useState(false);
  const [currentPhoto, setCurrentPhoto] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentPhoto((prev) => (prev + 1) % PENCH_PHOTOS.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const itinerary = [
    { day: "Day 1", events: [
      { time: "9:00 AM - 11:30 AM", activity: "Nagpur Arrival" },
      { time: "11:45 AM - 1:00 PM", activity: "Travel to Pench" },
      { time: "1:00 PM", activity: "Check-in & Lunch" },
      { time: "5:00 PM", activity: "Tour Orientation" },
      { time: "6:30 PM - 9:30 PM", activity: "Night Stargazing Session" }
    ]},
    { day: "Day 2", events: [
      { time: "6:00 AM - 10:00 AM", activity: "Morning Jungle Safari" },
      { time: "1:00 PM", activity: "Lunch" },
      { time: "2:30 PM - 6:00 PM", activity: "Afternoon Jungle Safari" },
      { time: "10:20 PM - 1:00 AM", activity: "Deep Sky Night Stargazing" }
    ]},
    { day: "Day 3", events: [
      { time: "9:30 AM", activity: "Tour Closing Program" },
      { time: "11:30 AM", activity: "Check out" },
      { time: "2:00 PM", activity: "Arrival at Nagpur" }
    ]}
  ];

  return (
    <div className="min-h-screen bg-[#f2f4e6] text-slate-900">

      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden min-h-[80vh] flex items-center justify-center">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-90" style={{ backgroundImage: `url(${penchHero})` }} />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-[#cbcfb6]" />
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="inline-block px-4 py-1 rounded-full bg-emerald-600 text-white text-xs font-bold uppercase tracking-widest mb-6 shadow-lg shadow-emerald-600/20">
              India's First Dark Sky Park
            </span>
            <h1 className="text-5xl md:text-8xl font-display font-bold mb-6 tracking-tighter uppercase leading-none drop-shadow-xl text-white">
              Pench Astro <br/><span className="text-emerald-400">Wildlife</span> Tour
            </h1>
            <p className="text-xl md:text-2xl text-white font-medium max-w-3xl mx-auto italic mb-10 drop-shadow-md">
              "Explore the wonders of the night sky and witness the beauty of nature like never before."
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <div className="relative">
                <button 
                  className="px-8 py-4 bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl text-white font-bold flex items-center gap-3 cursor-default"
                >
                  <CalendarIcon className="w-5 h-5 text-emerald-400" /> 
                  24-26 April and 22-24 May 2026
                </button>
              </div>
              <button className="px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-2xl transition-all shadow-[0_0_30px_rgba(5,150,105,0.3)]">
                Book Adventure Now
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Highlights Grid */}
      <section className="py-24 container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {[
            { icon: <Star className="w-8 h-8 text-blue-500" />, title: "Dark Sky Park", desc: "India's first designated dark sky sanctuary with zero light pollution." },
            { icon: <Binoculars className="w-8 h-8 text-emerald-600" />, title: "Tiger Safari", desc: "Thrilling morning and afternoon safaris in the land of Mowgli." },
            { icon: <Camera className="w-8 h-8 text-indigo-500" />, title: "Astrophotography", desc: "Learn to capture the Milky Way with expert guidance and gear." },
            { icon: <ShieldCheck className="w-8 h-8 text-emerald-500" />, title: "Full Package", desc: "AC stay, meals, and Nagpur-to-Nagpur transport included." },
          ].map((item, i) => (
            <motion.div key={i} whileHover={{ y: -10 }} className="p-8 bg-white shadow-xl shadow-emerald-900/5 border border-emerald-100 rounded-[2.5rem] hover:bg-emerald-50 transition-all">
              <div className="mb-6">{item.icon}</div>
              <h3 className="text-2xl font-display font-bold mb-4 text-slate-800">{item.title}</h3>
              <p className="text-slate-600 leading-relaxed text-left">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* About Pench Section */}
      <section className="py-24 bg-emerald-50/30">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl md:text-6xl font-display font-bold uppercase tracking-tighter text-slate-900">The Jungle Book <br/><span className="text-emerald-600">Legacy</span></h2>
            <p className="text-lg text-slate-600 leading-relaxed text-left">
              Pench Tiger Reserve, immortalised by Rudyard Kipling's "The Jungle Book," is a haven for wildlife enthusiasts. Encompassing dense forests, open grasslands, and meandering rivers, it provides a picturesque backdrop for thrilling safaris.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed text-left">
              Recently designated as India’s ﬁrst Dark Sky Park, it's the perfect destination for stargazing enthusiasts. Pench offers unparalleled views of the stars, connecting you with the majesty of the cosmos in ways you never thought possible.
            </p>
            <div className="flex gap-8 pt-4 justify-start">
              <div className="text-center">
                <span className="block text-4xl font-bold text-emerald-600">2</span>
                <span className="text-xs uppercase tracking-widest text-slate-400">Night Sessions</span>
              </div>
              <div className="text-center">
                <span className="block text-4xl font-bold text-emerald-600">2</span>
                <span className="text-xs uppercase tracking-widest text-slate-400">Jungle Safaris</span>
              </div>
              <div className="text-center">
                <span className="block text-4xl font-bold text-emerald-600">3</span>
                <span className="text-xs uppercase tracking-widest text-slate-400">Days Adventure</span>
              </div>
            </div>
          </div>
          <div className="relative aspect-square rounded-[3rem] overflow-hidden border border-emerald-100 shadow-2xl">
            <img src={jungleSafari} alt="Pench Tiger" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </div>
        </div>
      </section>

      {/* Group Photos Carousel */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-display font-bold uppercase tracking-widest text-slate-800">Our Past Expeditions</h2>
            <p className="text-slate-500 mt-2">Memories from our previous Pench Astro-Wildlife tours</p>
          </div>
          
          <div className="relative max-w-5xl mx-auto aspect-[16/9] rounded-[3rem] overflow-hidden shadow-2xl border border-slate-200">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentPhoto}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="absolute inset-0"
              >
                <img 
                  src={PENCH_PHOTOS[currentPhoto].url} 
                  alt={PENCH_PHOTOS[currentPhoto].caption}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-8 left-8 right-8 text-white text-center">
                  <p className="text-xl font-medium italic">{PENCH_PHOTOS[currentPhoto].caption}</p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Carousel Controls */}
            <div className="absolute inset-0 flex items-center justify-between px-4 opacity-0 hover:opacity-100 transition-opacity">
              <button 
                onClick={() => setCurrentPhoto((prev) => (prev - 1 + PENCH_PHOTOS.length) % PENCH_PHOTOS.length)}
                className="p-3 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white/40 transition-all"
              >
                <ChevronLeft className="w-8 h-8" />
              </button>
              <button 
                onClick={() => setCurrentPhoto((prev) => (prev + 1) % PENCH_PHOTOS.length)}
                className="p-3 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white/40 transition-all"
              >
                <ChevronRight className="w-8 h-8" />
              </button>
            </div>

            {/* Dots */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {PENCH_PHOTOS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentPhoto(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${i === currentPhoto ? "bg-emerald-500 w-8" : "bg-white/50"}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Itinerary Section */}
      <section className="py-24 container mx-auto px-4 max-w-5xl">
        <h2 className="text-4xl font-display font-bold text-center mb-16 uppercase tracking-widest text-slate-800">Tour Itinerary</h2>
        <div className="space-y-12">
          {itinerary.map((day, i) => (
            <div key={i} className="relative pl-12 border-l-2 border-emerald-200">
              <div className="absolute -left-[11px] top-0 w-5 h-5 rounded-full bg-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.5)]" />
              <h3 className="text-3xl font-display font-bold text-emerald-600 mb-8 uppercase text-left">{day.day}</h3>
              <div className="grid gap-6">
                {day.events.map((event, j) => (
                  <div key={j} className="flex flex-col md:flex-row md:items-center gap-4 p-6 bg-white shadow-lg shadow-emerald-900/5 border border-emerald-50 rounded-3xl">
                    <span className="font-mono text-blue-600 w-48 shrink-0 text-left font-bold">{event.time}</span>
                    <span className="text-slate-700 font-medium text-lg text-left">{event.activity}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Package Details */}
      <section className="py-24 container mx-auto px-4">
        <div className="bg-white shadow-2xl shadow-emerald-900/10 border border-emerald-100 rounded-[3rem] p-12 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 blur-[100px] -z-10" />
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl font-display font-bold mb-8 uppercase text-left text-slate-800">What's Included</h2>
              <ul className="space-y-4">
                {[
                  { icon: <Home className="w-5 h-5" />, text: "Comfortable AC Deluxe Room accommodation" },
                  { icon: <Plane className="w-5 h-5" />, text: "Hassle-free travel Nagpur to Pench & back" },
                  { icon: <Utensils className="w-5 h-5" />, text: "All daily meals, snacks and beverages" },
                  { icon: <Compass className="w-5 h-5" />, text: "Expert astronomy & wildlife guidance" },
                  { icon: <Zap className="w-5 h-5" />, text: "Entry fees for all parks & sessions" }
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-slate-600 text-left">
                    <div className="p-2 bg-blue-50 rounded-lg text-blue-600 shrink-0">{item.icon}</div>
                    {item.text}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-[#f2f4e6] border border-slate-700 rounded-[2.5rem] p-10 shadow-2xl">
              <span className="text-emerald-400 font-bold uppercase tracking-widest text-sm mb-4 block text-left">Pricing Details</span>
              <div className="space-y-6 mb-10">
                <div className="flex justify-between items-center pb-6 border-b border-white/10">
                  <span className="text-slate-800 text-lg">Single Sharing</span>
                  <span className="text-3xl font-display font-bold text-slate-800">₹24,900</span>
                </div>
                <div className="flex justify-between items-center pb-6 border-b border-white/10">
                  <span className="text-slate/800 text-lg">Double Sharing</span>
                  <div className="text-right">
                    <span className="text-white/40 line-through text-sm block">₹21,900</span>
                    <span className="text-3xl font-display font-bold text-emerald-400">₹18,900</span>
                  </div>
                </div>
                <div className="p-4 bg-emerald-500/10 rounded-2xl border border-emerald-500/20 text-emerald-400 text-sm text-left">
                  <strong>Group Discount (4+):</strong> ₹1,500 OFF per participant
                </div>
              </div>
              <button className="w-full py-5 bg-emerald-600 text-white font-bold rounded-2xl hover:bg-emerald-500 transition-all uppercase tracking-widest">
                Enquire for Booking
              </button>
              <p className="text-center mt-6 text-[10px] text-white/30 uppercase tracking-widest leading-relaxed">
                *50% Advance for booking | Rates exclude GST
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
