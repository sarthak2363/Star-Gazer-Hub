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
import wildlife1 from "@assets/1_1768817394594.jpeg";
import wildlife2 from "@assets/2_1768817394596.jpeg";
import wildlife3 from "@assets/3_1768817394597.jpeg";
import wildlife4 from "@assets/4_1768817394597.jpeg";
import wildlife5 from "@assets/5_1768817394598.jpeg";
import wildlife6 from "@assets/6_1768817394598.jpeg";
import wildlife7 from "@assets/7_1768817394599.jpeg";
import wildlife8 from "@assets/8_1768817394599.jpeg";
import wildlife9 from "@assets/9_1768817394599.jpeg";
import wildlife10 from "@assets/17_1768817394600.jpeg";
import wildlife11 from "@assets/18_1768817394600.jpeg";
import wildlife12 from "@assets/19_1768817394600.jpeg";
import wildlife13 from "@assets/20_1768817394600.jpeg";
import star1 from "@assets/21_1768817394601.jpeg";
import star2 from "@assets/22_1768817394601.jpeg";
import star3 from "@assets/23_1768817394601.jpeg";
import milkyWay1 from "@assets/WhatsApp_Image_2024-08-24_at_6.18.23_PM_(1)_1768817394602.jpeg";
import milkyWay2 from "@assets/WhatsApp_Image_2024-08-24_at_6.18.25_PM_1768817394602.jpeg";
import nebula1 from "@assets/25_1768817394603.jpeg";

// Accommodation Images
import room1 from "@assets/room_1768818760213.jpeg";
import room2 from "@assets/room_2_1768818760213.jpeg";
import acRoom1 from "@assets/VRK_AC_Room_1_1768818760214.jpg";
import acRoom2 from "@assets/VRK_AC_Room_2_1768818760214.jpg";
import restaurant1 from "@assets/VRK_Restaurant_1768818760215.jpg";
import restaurant2 from "@assets/VRK_Restaurant_2_1768818760215.jpg";
import cottage1 from "@assets/VRK_1768818760216.jpg";

const ACCOMMODATION_PHOTOS = [
  { url: cottage1, caption: "Eco-friendly Cottages at Pench" },
  { url: acRoom1, caption: "Spacious AC Deluxe Rooms" },
  { url: acRoom2, caption: "Double/Triple Sharing Options" },
  { url: restaurant1, caption: "The Dining Hall" },
  { url: restaurant2, caption: "Outdoor Restaurant Seating" },
  { url: room1, caption: "Cozy Interiors" },
  { url: room2, caption: "Traditional Decor" }
];

const TOUR_DATES = [
  new Date(2025, 11, 26),
  new Date(2026, 0, 24),
];

const WILDLIFE_PHOTOS = [
  wildlife1, wildlife2, wildlife3, wildlife4, wildlife5, wildlife6, wildlife7, wildlife8, wildlife9, wildlife10, wildlife11, wildlife12, wildlife13, star1, star2, star3, milkyWay1, milkyWay2, nebula1
];

const PENCH_PHOTOS = [
  { url: groupPhoto1, caption: "Stargazing Batch 001 at Pench" },
  { url: groupPhoto2, caption: "Sillari Horizon - The Dark Sky Sanctuary" }
];

export default function Astrotour() {
  const [isTimelineOpen, setIsTimelineOpen] = useState(false);
  const [currentPhoto, setCurrentPhoto] = useState(0);
  const [currentWildlifePhoto, setCurrentWildlifePhoto] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentPhoto((prev) => (prev + 1) % PENCH_PHOTOS.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentWildlifePhoto((prev) => (prev + 1) % WILDLIFE_PHOTOS.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const [currentAccommPhoto, setCurrentAccommPhoto] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentAccommPhoto((prev) => (prev + 1) % ACCOMMODATION_PHOTOS.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  const [activeDay, setActiveDay] = useState<number | null>(0);

  const itinerary = [
    { day: "Day 1", title: "Arrival & Orientation", events: [
      { time: "9:00 AM - 11:30 AM", activity: "Nagpur Arrival" },
      { time: "11:45 AM - 1:00 PM", activity: "Travel to Pench" },
      { time: "1:00 PM", activity: "Check-in & Lunch" },
      { time: "5:00 PM", activity: "Tour Orientation" },
      { time: "6:30 PM - 9:30 PM", activity: "Night Stargazing Session" }
    ]},
    { day: "Day 2", title: "Into the Wild", events: [
      { time: "6:00 AM - 10:00 AM", activity: "Morning Jungle Safari" },
      { time: "1:00 PM", activity: "Lunch" },
      { time: "2:30 PM - 6:00 PM", activity: "Afternoon Jungle Safari" },
      { time: "10:20 PM - 1:00 AM", activity: "Deep Sky Night Stargazing" }
    ]},
    { day: "Day 3", title: "Closing & Departure", events: [
      { time: "9:30 AM", activity: "Tour Closing Program" },
      { time: "11:30 AM", activity: "Check out" },
      { time: "2:00 PM", activity: "Arrival at Nagpur" }
    ]}
  ];

  return (
    <div className="min-h-screen bg-[#f2f4e6] text-slate-900">

      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden min-h-[80vh] flex items-center justify-center bg-[#f2f4e6]">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-90" style={{ backgroundImage: `url(${penchHero})` }} />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-[#f2f4e6]" />
        
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
            <AnimatePresence mode="wait">
              <motion.img 
                key={currentWildlifePhoto}
                src={WILDLIFE_PHOTOS[currentWildlifePhoto]} 
                alt="Pench Wildlife" 
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.8 }}
                className="w-full h-full object-cover" 
              />
            </AnimatePresence>
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 px-3 py-1.5 bg-black/20 backdrop-blur-md rounded-full">
              {WILDLIFE_PHOTOS.map((_, i) => (
                <div 
                  key={i} 
                  className={`w-1.5 h-1.5 rounded-full transition-all ${i === currentWildlifePhoto ? "bg-white scale-125" : "bg-white/40"}`}
                />
              ))}
            </div>
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
      <section className="py-24 container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-display font-bold uppercase tracking-widest text-slate-800">Tour Itinerary</h2>
          <p className="text-slate-500 mt-2">Click on each day to reveal the adventure</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {itinerary.map((day, i) => (
            <button
              key={i}
              onClick={() => setActiveDay(activeDay === i ? null : i)}
              className={`p-8 rounded-[2rem] transition-all text-left relative overflow-hidden group ${
                activeDay === i 
                  ? "bg-emerald-600 text-white shadow-2xl shadow-emerald-200 ring-4 ring-emerald-100" 
                  : "bg-white text-slate-800 shadow-xl shadow-emerald-900/5 border border-emerald-50 hover:bg-emerald-50"
              }`}
            >
              <div className="relative z-10">
                <span className={`text-xs font-bold uppercase tracking-widest mb-2 block ${activeDay === i ? "text-emerald-200" : "text-emerald-600"}`}>
                  {day.day}
                </span>
                <h3 className="text-2xl font-display font-bold uppercase">{day.title}</h3>
                <div className={`mt-4 flex items-center gap-2 text-sm font-medium ${activeDay === i ? "text-emerald-100" : "text-slate-400"}`}>
                  <Clock className="w-4 h-4" />
                  {day.events.length} Activities
                  <ChevronDown className={`w-4 h-4 ml-auto transition-transform duration-300 ${activeDay === i ? "rotate-180" : ""}`} />
                </div>
              </div>
              {activeDay === i && (
                <motion.div 
                  layoutId="active-bg"
                  className="absolute inset-0 bg-emerald-600 -z-0"
                  initial={false}
                />
              )}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          {activeDay !== null && (
            <motion.div
              key={activeDay}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="bg-white rounded-[3rem] p-8 md:p-12 shadow-2xl shadow-emerald-900/10 border border-emerald-100"
            >
              <div className="flex items-center gap-4 mb-10 pb-6 border-b border-emerald-50">
                <div className="w-12 h-12 bg-emerald-100 rounded-2xl flex items-center justify-center text-emerald-600 font-bold">
                  {itinerary[activeDay].day.replace('Day ', '')}
                </div>
                <div>
                  <h3 className="text-3xl font-display font-bold text-slate-800 uppercase tracking-tight">
                    {itinerary[activeDay].title}
                  </h3>
                  <p className="text-slate-500">Scheduled activities and timings</p>
                </div>
              </div>

              <div className="grid gap-6">
                {itinerary[activeDay].events.map((event, j) => (
                  <motion.div 
                    key={j}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: j * 0.1 }}
                    className="flex flex-col md:flex-row md:items-center gap-4 p-6 bg-emerald-50/30 border border-emerald-50 rounded-3xl group hover:bg-emerald-50 transition-colors"
                  >
                    <div className="flex items-center gap-3 w-48 shrink-0">
                      <div className="w-2 h-2 rounded-full bg-emerald-400 group-hover:scale-150 transition-transform" />
                      <span className="font-mono text-blue-600 font-bold">{event.time}</span>
                    </div>
                    <span className="text-slate-700 font-medium text-lg text-left">{event.activity}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* Accommodation Carousel */}
      <section className="py-24 bg-emerald-900/5 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-display font-bold uppercase tracking-widest text-slate-800">Your Stay at Pench</h2>
            <p className="text-slate-500 mt-2">Experience comfort in the heart of the wilderness at Vasundhara Retreat</p>
          </div>

          <div className="relative max-w-6xl mx-auto rounded-[3.5rem] overflow-hidden shadow-2xl border-8 border-white">
            <div className="aspect-[21/9] relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentAccommPhoto}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 1 }}
                  className="absolute inset-0"
                >
                  <img 
                    src={ACCOMMODATION_PHOTOS[currentAccommPhoto].url} 
                    alt={ACCOMMODATION_PHOTOS[currentAccommPhoto].caption}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-10 left-10 right-10">
                    <motion.p 
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.5 }}
                      className="text-2xl font-display font-bold text-white uppercase tracking-wider text-center drop-shadow-lg"
                    >
                      {ACCOMMODATION_PHOTOS[currentAccommPhoto].caption}
                    </motion.p>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Progress Bar */}
              <div className="absolute bottom-0 left-0 h-1.5 bg-white/20 w-full">
                <motion.div 
                  key={currentAccommPhoto}
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 4.5, ease: "linear" }}
                  className="h-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.8)]"
                />
              </div>
            </div>

            {/* Navigation Dots */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {ACCOMMODATION_PHOTOS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentAccommPhoto(i)}
                  className={`w-2 h-2 rounded-full transition-all ${i === currentAccommPhoto ? "bg-white w-6" : "bg-white/40 hover:bg-white/60"}`}
                />
              ))}
            </div>
          </div>
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
                  { icon: <Utensils className="w-5 h-5" />, text: "All daily meals, snacks and beverages (Veg and Non-veg Available)" },
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
