import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Telescope, 
  Star, 
  Map, 
  Camera, 
  Compass, 
  Tent, 
  Calendar as CalendarIcon, 
  ShieldCheck, 
  Home, 
  Plane, 
  Utensils, 
  Zap,
  ChevronRight,
  Info,
  CheckCircle2
} from "lucide-react";
import Navbar from "@/components/layout/Navbar";

export default function LadakhAstrotour() {
  const [openDay, setOpenDay] = useState<number | null>(0);

  const itinerary = [
    { 
      day: "Day 1 & 2", 
      title: "Acclimatization in Leh",
      events: [
        { time: "Day 1", activity: "Arrival in Leh, rest and acclimatization" },
        { time: "Day 2", activity: "Local sightseeing: Shanti Stupa, Leh Palace, and local market" }
      ]
    },
    { 
      day: "Day 3", 
      title: "Nubra Valley",
      events: [
        { time: "Morning", activity: "Drive to Nubra Valley via Khardung La Pass" },
        { time: "Afternoon", activity: "Hunder Sand Dunes & Bactrian Camel Safari" },
        { time: "Night", activity: "First stargazing introduction in high altitude" }
      ]
    },
    { 
      day: "Day 4 & 5", 
      title: "Pangong Lake",
      events: [
        { time: "Day 4", activity: "Travel to Pangong Lake via Shyok" },
        { time: "Night 4", activity: "Stargazing at Pangong Tso" },
        { time: "Day 5", activity: "Lakeside sunrise and photography" }
      ]
    },
    { 
      day: "Day 5 & 6", 
      title: "Hanle Village",
      events: [
        { time: "Day 5", activity: "Journey to Hanle - India's First Dark Sky Reserve" },
        { time: "Night 5", activity: "Deep sky observation & Astrophotography" },
        { time: "Day 6", activity: "Indian Astronomical Observatory (IAO) visit" },
        { time: "Night 6", activity: "Advanced stargazing session" }
      ]
    },
    { 
      day: "Day 7", 
      title: "Return to Leh",
      events: [
        { time: "Morning", activity: "Drive back to Leh" },
        { time: "Evening", activity: "Farewell dinner & sharing experiences" }
      ]
    },
    { 
      day: "Day 8", 
      title: "Departure",
      events: [
        { time: "Morning", activity: "Check-out and airport drop" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-[#B0E0E6] text-[#716040] selection:bg-white/30">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden min-h-[90vh] flex items-center justify-center">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1596464846428-208362be649d?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center bg-no-repeat opacity-100" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-[#B0E0E6]" />
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="inline-block px-4 py-1 rounded-full bg-blue-800 text-white text-xs font-bold uppercase tracking-widest mb-6 shadow-lg shadow-blue-800/20">
              The Himalayan Star Safari
            </span>
            <h1 className="text-5xl md:text-8xl font-display font-bold mb-6 tracking-tighter uppercase leading-none drop-shadow-2xl text-white">
              Leh Ladakh <br/><span className="text-blue-200">Astro-Tour</span>
            </h1>
            <p className="text-xl md:text-2xl text-white font-medium max-w-3xl mx-auto italic mb-10 drop-shadow-lg">
              "Witness the universe's vastness from the roof of the world."
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <div className="px-8 py-4 bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl text-white font-bold flex items-center gap-3">
                <CalendarIcon className="w-5 h-5 text-blue-200" /> 
                8 Days / 7 Nights Journey
              </div>
              <button className="px-8 py-4 bg-blue-700 hover:bg-blue-600 text-white font-bold rounded-2xl transition-all shadow-[0_0_30px_rgba(29,78,216,0.3)]">
                Secure Your Spot
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Attractions */}
      <section className="py-24 container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold uppercase mb-4 text-[#716040]">Celestial <span className="text-blue-800">Highlights</span></h2>
          <div className="h-1.5 w-24 bg-blue-800 mx-auto rounded-full" />
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { 
              icon: <Telescope className="w-10 h-10 text-blue-800" />, 
              title: "Guided IAO Tour", 
              desc: "Delve into the inner workings of Hanle Observatory with expert-led tours of advanced telescopes." 
            },
            { 
              icon: <Star className="w-10 h-10 text-amber-500" />, 
              title: "Bortle 1 Skies", 
              desc: "Experience some of the clearest skies on Earth at Hanle Village, free from light pollution." 
            },
            { 
              icon: <Camera className="w-10 h-10 text-indigo-800" />, 
              title: "Astrophotography", 
              desc: "Master night sky photography with professional guidance in the Himalayan foothills." 
            },
          ].map((item, i) => (
            <motion.div 
              key={i} 
              whileHover={{ y: -10 }} 
              className="p-10 bg-white/80 backdrop-blur-sm border border-blue-200 rounded-[2.5rem] shadow-xl shadow-blue-900/10 hover:border-blue-500 transition-all"
            >
              <div className="mb-6">{item.icon}</div>
              <h3 className="text-2xl font-display font-bold mb-4 text-[#716040]">{item.title}</h3>
              <p className="text-[#716040]/80 leading-relaxed text-left">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Cultural & Adventure */}
      <section className="py-24 bg-blue-100/50">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative aspect-video lg:aspect-square rounded-[3rem] overflow-hidden border border-blue-200 shadow-2xl">
            <img src="https://images.unsplash.com/photo-1589412227329-4119859f518e?q=80&w=2070&auto=format&fit=crop" alt="Ladakh Landscape" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent" />
          </div>
          <div className="space-y-8">
            <h2 className="text-4xl md:text-6xl font-display font-bold uppercase tracking-tighter text-[#716040]">Beyond the <br/><span className="text-blue-800">Stars</span></h2>
            <p className="text-lg text-[#716040]/80 leading-relaxed text-left">
              Ladakh offers a playground for outdoor enthusiasts. From trekking along ancient trails to conquering towering peaks, adventures await in this rugged beauty.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {[
                "Buddhist Monasteries",
                "Nubra Camel Safari",
                "High Altitude Passes",
                "Pangong Lakeside Camping",
                "Local Cultural Insights",
                "Wildlife Spotting"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-[#716040]">
                  <CheckCircle2 className="w-4 h-4 text-blue-700" />
                  <span className="text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>
            <p className="text-[#716040]/70 italic text-left">
              "Experience the tranquility of Hanle village and explore the mysteries of the universe."
            </p>
          </div>
        </div>
      </section>

      {/* Itinerary */}
      <section className="py-24 container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-display font-bold uppercase tracking-widest text-[#716040]">The Expedition Itinerary</h2>
          <p className="text-[#716040]/60 mt-2 uppercase text-xs tracking-[0.3em]">Click on a day to explore</p>
        </div>
        
        <div className="space-y-6">
          {itinerary.map((item, i) => (
            <div 
              key={i} 
              className={`group overflow-hidden border-2 rounded-[2rem] transition-all duration-500 ${
                openDay === i 
                ? "bg-white border-[#716040] shadow-2xl shadow-[#716040]/10" 
                : "bg-white/40 border-[#716040]/10 hover:border-[#716040]/30"
              }`}
            >
              <button 
                onClick={() => setOpenDay(openDay === i ? null : i)}
                className="w-full flex items-center justify-between p-8 md:p-10 text-left transition-colors"
                data-testid={`button-itinerary-day-${i}`}
              >
                <div className="flex items-center gap-8">
                  <span className={`text-5xl font-display font-black transition-colors duration-500 ${
                    openDay === i ? "text-[#716040]" : "text-[#716040]/20 group-hover:text-[#716040]/40"
                  }`}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#716040]/40 mb-1 block">
                      {item.day}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-display font-bold text-[#716040] uppercase group-hover:tracking-wider transition-all">
                      {item.title}
                    </h3>
                  </div>
                </div>
                <div className={`p-3 rounded-full border-2 transition-all duration-500 ${
                  openDay === i 
                  ? "bg-[#716040] border-[#716040] text-white rotate-180" 
                  : "border-[#716040]/10 text-[#716040]"
                }`}>
                  <ChevronRight className="w-6 h-6" />
                </div>
              </button>

              <motion.div
                initial={false}
                animate={{ 
                  height: openDay === i ? "auto" : 0,
                  opacity: openDay === i ? 1 : 0
                }}
                transition={{ duration: 0.5, ease: [0.04, 0.62, 0.23, 0.98] }}
                className="overflow-hidden"
              >
                <div className="p-8 md:p-10 pt-0 space-y-4">
                  <div className="h-px bg-[#716040]/10 w-full mb-8" />
                  {item.events.map((event, j) => (
                    <motion.div 
                      key={j}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: j * 0.1 }}
                      className="flex flex-col md:flex-row md:items-start gap-4 p-6 bg-[#B0E0E6]/10 rounded-3xl border border-[#716040]/5 hover:bg-[#B0E0E6]/20 transition-colors"
                    >
                      <span className="font-mono text-[#716040] w-32 shrink-0 font-bold text-xs uppercase pt-1">
                        {event.time}
                      </span>
                      <span className="text-[#716040] font-medium text-lg">
                        {event.activity}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </section>

      {/* Essential Kits */}
      <section className="py-24 bg-white/20 border-y border-[#716040]/10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-display font-bold text-center mb-16 uppercase text-[#716040]">Your Personal Kit List</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Personal", items: ["Personal Medicine", "Handbag / Backpack", "UV Sunglasses", "Cap / Hat"] },
              { title: "Clothing", items: ["Windproof Overcoat", "Thermal Innerwear", "Sweater / Poncho", "Waterproof Sports Shoes"] },
              { title: "Winter Gear", items: ["Woolen Cap & Gloves", "Woolen Socks", "Woolen Scarf", "Extra Layering"] },
              { title: "Skincare", items: ["Cold Cream", "Sun Screen (SPF 35+)", "Lip Balm", "Moisturizer"] },
            ].map((cat, i) => (
              <div key={i} className="p-8 bg-white/80 backdrop-blur-sm rounded-3xl border border-[#716040]/10 shadow-sm">
                <h4 className="text-[#716040] font-bold uppercase mb-4 text-left border-b border-[#716040]/10 pb-2">{cat.title}</h4>
                <ul className="space-y-3">
                  {cat.items.map((item, j) => (
                    <li key={j} className="text-[#716040]/80 text-sm flex items-center gap-2">
                      <ChevronRight className="w-3 h-3 text-[#716040]/50" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Package Details */}
      <section className="py-24 container mx-auto px-4">
        <div className="bg-white/90 backdrop-blur-sm shadow-2xl shadow-[#716040]/10 border border-[#716040]/20 rounded-[3rem] p-12 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#716040]/5 blur-[120px] -z-10" />
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl font-display font-bold mb-8 uppercase text-left text-[#716040]">What's Included</h2>
              <ul className="space-y-4">
                {[
                  { icon: <Home className="w-5 h-5" />, text: "Accommodation: Hotels, homestays and camps" },
                  { icon: <Plane className="w-5 h-5" />, text: "Transportation: Tempo Traveller from Leh" },
                  { icon: <Utensils className="w-5 h-5" />, text: "Daily Meals: Breakfast and Dinner" },
                  { icon: <Compass className="w-5 h-5" />, text: "Expert astronomy and location guidance" },
                  { icon: <Zap className="w-5 h-5" />, text: "Entrance Fees: IAO, Monasteries, Wildlife" }
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-[#716040] text-left">
                    <div className="p-2 bg-[#716040]/10 rounded-lg text-[#716040] shrink-0">{item.icon}</div>
                    {item.text}
                  </li>
                ))}
              </ul>
              
              <div className="mt-12 p-6 bg-white/50 rounded-2xl border border-[#716040]/10">
                <div className="flex gap-3 mb-4">
                  <Info className="w-5 h-5 text-[#716040] shrink-0" />
                  <h4 className="font-bold text-[#716040] uppercase text-sm">Exclusions</h4>
                </div>
                <p className="text-xs text-[#716040]/70 leading-relaxed text-left">
                  Airfare to Leh, Daily Lunch, Travel Insurance, Personal Expenses (Souvenirs, snacks), Tips & Gratuities.
                </p>
              </div>
            </div>
            
            <div className="bg-[#716040] border border-[#5a4d33] rounded-[2.5rem] p-10 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4">
                <span className="px-3 py-1 bg-white/10 text-white text-[10px] font-bold uppercase rounded-full border border-white/20">
                  Best Value
                </span>
              </div>
              <span className="text-white/60 font-bold uppercase tracking-widest text-sm mb-4 block text-left">Investment</span>
              <div className="space-y-6 mb-10">
                <div className="flex justify-between items-center pb-6 border-b border-white/10">
                  <span className="text-white/80 text-lg">Standard Adult</span>
                  <span className="text-3xl font-display font-bold text-white">₹39,990</span>
                </div>
                <div className="flex justify-between items-center pb-6 border-b border-white/10">
                  <div className="text-left">
                    <span className="text-white/80 text-lg block">Early Bird</span>
                    <span className="text-xs text-white/60 uppercase font-bold">Before June 20, 2026</span>
                  </div>
                  <span className="text-4xl font-display font-bold text-white">₹36,990</span>
                </div>
                <div className="p-4 bg-white/5 rounded-2xl border border-white/10 text-white/90 text-sm text-left">
                  <strong>Group Discount (4+):</strong> ₹36,990 per participant
                </div>
              </div>
              <button className="w-full py-5 bg-white text-[#716040] font-bold rounded-2xl hover:bg-white/90 transition-all uppercase tracking-widest shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                Enquire for Booking
              </button>
              <p className="text-center mt-6 text-[10px] text-white/40 uppercase tracking-widest leading-relaxed">
                *20% Advance for booking | Rates exclude GST
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Contact */}
      <section className="py-24 container mx-auto px-4 text-center">
        <h2 className="text-2xl font-display font-bold mb-8 uppercase text-[#716040]/50">Ready for the Star Safari?</h2>
        <div className="flex flex-wrap justify-center gap-12">
          <div className="text-left">
            <span className="block text-xs uppercase tracking-widest text-[#716040]/60 mb-1">WhatsApp / Call</span>
            <span className="text-xl font-bold text-[#716040]">+91 76665 19425</span>
          </div>
          <div className="text-left">
            <span className="block text-xs uppercase tracking-widest text-[#716040]/60 mb-1">Email Inquiry</span>
            <span className="text-xl font-bold text-[#716040]">axcamps@gmail.com</span>
          </div>
          <div className="text-left">
            <span className="block text-xs uppercase tracking-widest text-[#716040]/60 mb-1">Official Site</span>
            <span className="text-xl font-bold text-[#716040]">www.axsx.in</span>
          </div>
        </div>
      </section>
    </div>

  );
}
