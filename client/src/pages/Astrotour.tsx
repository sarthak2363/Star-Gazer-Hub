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

// Mock images - we'll use generated ones or placeholders that match the vibe
import penchHero from "@assets/generated_images/people_stargazing_under_milky_way.png";
import jungleSafari from "@assets/home_page_Astro_tour_image_1768287084463.png";

const TOUR_DATES = [
  new Date(2025, 11, 26),
  new Date(2026, 0, 24),
];

export default function Astrotour() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(TOUR_DATES[0]);
  const [showCalendar, setShowCalendar] = useState(false);
  const [isTimelineOpen, setIsTimelineOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('.calendar-container') && !target.closest('.calendar-trigger')) {
        setShowCalendar(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
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
    <div className="min-h-screen bg-[#0f172a] text-white selection:bg-orange-500/30">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden min-h-[80vh] flex items-center justify-center">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-80" style={{ backgroundImage: `url(${penchHero})` }} />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-[#0f172a]" />
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="inline-block px-4 py-1 rounded-full bg-orange-500 text-white text-xs font-bold uppercase tracking-widest mb-6 shadow-lg shadow-orange-500/20">
              India's First Dark Sky Park
            </span>
            <h1 className="text-5xl md:text-8xl font-display font-bold mb-6 tracking-tighter uppercase leading-none drop-shadow-2xl">
              Pench Astro <br/><span className="text-orange-400">Wildlife</span> Tour
            </h1>
            <p className="text-xl md:text-2xl text-white font-medium max-w-3xl mx-auto italic mb-10 drop-shadow-lg">
              "Explore the wonders of the night sky and witness the beauty of nature like never before."
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <div className="relative calendar-container">
                <button 
                  onClick={() => setShowCalendar(!showCalendar)}
                  className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl text-white font-bold flex items-center gap-3 hover:bg-white/20 transition-all calendar-trigger"
                >
                  <CalendarIcon className="w-5 h-5 text-orange-400" /> 
                  {selectedDate ? format(selectedDate, "dd MMMM yyyy") : "Select Tour Date"}
                </button>
                <AnimatePresence>
                  {showCalendar && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }}
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-4 z-50 bg-black/95 border border-white/10 p-4 rounded-3xl shadow-2xl"
                    >
                      <DayPicker
                        mode="single"
                        selected={selectedDate}
                        onSelect={(date) => { setSelectedDate(date); setShowCalendar(false); }}
                        modifiers={{ event: TOUR_DATES }}
                        modifiersStyles={{ event: { border: "2px solid #f97316", color: "#f97316" } }}
                        styles={{
                          caption: { color: "white" },
                          head_cell: { color: "rgba(255,255,255,0.4)" },
                          day: { color: "white" },
                          day_selected: { backgroundColor: "#f97316", color: "black" },
                        }}
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              <button className="px-8 py-4 bg-orange-500 hover:bg-orange-400 text-black font-bold rounded-2xl transition-all shadow-[0_0_30px_rgba(249,115,22,0.3)]">
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
            { icon: <Star className="w-8 h-8 text-yellow-400" />, title: "Dark Sky Park", desc: "India's first designated dark sky sanctuary with zero light pollution." },
            { icon: <Binoculars className="w-8 h-8 text-green-500" />, title: "Tiger Safari", desc: "Thrilling morning and afternoon safaris in the land of Mowgli." },
            { icon: <Camera className="w-8 h-8 text-purple-400" />, title: "Astrophotography", desc: "Learn to capture the Milky Way with expert guidance and gear." },
            { icon: <ShieldCheck className="w-8 h-8 text-cyan-400" />, title: "Full Package", desc: "AC stay, meals, and Nagpur-to-Nagpur transport included." },
          ].map((item, i) => (
            <motion.div key={i} whileHover={{ y: -10 }} className="p-8 bg-white shadow-xl shadow-black/10 border border-slate-200 rounded-[2.5rem] hover:bg-slate-50 transition-all">
              <div className="mb-6">{item.icon}</div>
              <h3 className="text-2xl font-display font-bold mb-4 text-slate-900">{item.title}</h3>
              <p className="text-slate-600 leading-relaxed text-left">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* About Pench Section */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl md:text-6xl font-display font-bold uppercase tracking-tighter text-slate-900">The Jungle Book <br/><span className="text-orange-500">Legacy</span></h2>
            <p className="text-lg text-slate-600 leading-relaxed text-left">
              Pench Tiger Reserve, immortalized by Rudyard Kipling's "The Jungle Book," is a haven for wildlife enthusiasts. Encompassing dense forests, open grasslands, and meandering rivers, it provides a picturesque backdrop for thrilling safaris.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed text-left">
              Recently designated as India’s ﬁrst Dark Sky Park, it's the perfect destination for stargazing enthusiasts. Pench offers unparalleled views of the stars, connecting you with the majesty of the cosmos in ways you never thought possible.
            </p>
            <div className="flex gap-8 pt-4 justify-start">
              <div className="text-center">
                <span className="block text-4xl font-bold text-orange-500">2</span>
                <span className="text-xs uppercase tracking-widest text-slate-400">Night Sessions</span>
              </div>
              <div className="text-center">
                <span className="block text-4xl font-bold text-orange-500">2</span>
                <span className="text-xs uppercase tracking-widest text-slate-400">Jungle Safaris</span>
              </div>
              <div className="text-center">
                <span className="block text-4xl font-bold text-orange-500">3</span>
                <span className="text-xs uppercase tracking-widest text-slate-400">Days Adventure</span>
              </div>
            </div>
          </div>
          <div className="relative aspect-square rounded-[3rem] overflow-hidden border border-slate-200 shadow-2xl">
            <img src={jungleSafari} alt="Pench Tiger" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </div>
        </div>
      </section>

      {/* Itinerary Section */}
      <section className="py-24 container mx-auto px-4 max-w-5xl">
        <h2 className="text-4xl font-display font-bold text-center mb-16 uppercase tracking-widest text-slate-900">Tour Itinerary</h2>
        <div className="space-y-12">
          {itinerary.map((day, i) => (
            <div key={i} className="relative pl-12 border-l-2 border-orange-500/30">
              <div className="absolute -left-[11px] top-0 w-5 h-5 rounded-full bg-orange-500 shadow-[0_0_15px_rgba(249,115,22,0.5)]" />
              <h3 className="text-3xl font-display font-bold text-orange-500 mb-8 uppercase text-left">{day.day}</h3>
              <div className="grid gap-6">
                {day.events.map((event, j) => (
                  <div key={j} className="flex flex-col md:flex-row md:items-center gap-4 p-6 bg-white shadow-lg shadow-black/5 border border-slate-100 rounded-3xl">
                    <span className="font-mono text-orange-600 w-48 shrink-0 text-left font-bold">{event.time}</span>
                    <span className="text-slate-800 font-medium text-lg text-left">{event.activity}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Package Details */}
      <section className="py-24 container mx-auto px-4">
        <div className="bg-white shadow-2xl shadow-orange-500/10 border border-slate-200 rounded-[3rem] p-12 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/5 blur-[100px] -z-10" />
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl font-display font-bold mb-8 uppercase text-left text-slate-900">What's Included</h2>
              <ul className="space-y-4">
                {[
                  { icon: <Home className="w-5 h-5" />, text: "Comfortable AC Deluxe Room accommodation" },
                  { icon: <Plane className="w-5 h-5" />, text: "Hassle-free travel Nagpur to Pench & back" },
                  { icon: <Utensils className="w-5 h-5" />, text: "All daily meals, snacks and beverages" },
                  { icon: <Compass className="w-5 h-5" />, text: "Expert astronomy & wildlife guidance" },
                  { icon: <Zap className="w-5 h-5" />, text: "Entry fees for all parks & sessions" }
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-slate-600 text-left">
                    <div className="p-2 bg-orange-500/10 rounded-lg text-orange-500 shrink-0">{item.icon}</div>
                    {item.text}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-slate-900 border border-slate-800 rounded-[2.5rem] p-10 shadow-2xl">
              <span className="text-orange-400 font-bold uppercase tracking-widest text-sm mb-4 block text-left">Pricing Details</span>
              <div className="space-y-6 mb-10">
                <div className="flex justify-between items-center pb-6 border-b border-white/10">
                  <span className="text-white/60 text-lg">Single Sharing</span>
                  <span className="text-3xl font-display font-bold text-white">₹24,900</span>
                </div>
                <div className="flex justify-between items-center pb-6 border-b border-white/10">
                  <span className="text-white/60 text-lg">Double Sharing</span>
                  <div className="text-right">
                    <span className="text-white/40 line-through text-sm block">₹21,900</span>
                    <span className="text-3xl font-display font-bold text-orange-500">₹18,900</span>
                  </div>
                </div>
                <div className="p-4 bg-orange-500/10 rounded-2xl border border-orange-500/20 text-orange-400 text-sm text-left">
                  <strong>Group Discount (4+):</strong> ₹1,500 OFF per participant
                </div>
              </div>
              <button className="w-full py-5 bg-orange-500 text-white font-bold rounded-2xl hover:bg-orange-400 transition-all uppercase tracking-widest">
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
