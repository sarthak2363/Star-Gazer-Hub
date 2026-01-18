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
    <div className="min-h-screen bg-slate-950 text-white selection:bg-blue-500/30">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden min-h-[90vh] flex items-center justify-center">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1596464846428-208362be649d?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center bg-no-repeat opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/50 via-slate-950/20 to-slate-950" />
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="inline-block px-4 py-1 rounded-full bg-blue-600/20 border border-blue-500/30 text-blue-400 text-xs font-bold uppercase tracking-widest mb-6 backdrop-blur-sm">
              The Himalayan Star Safari
            </span>
            <h1 className="text-5xl md:text-8xl font-display font-bold mb-6 tracking-tighter uppercase leading-none drop-shadow-2xl">
              Leh Ladakh <br/><span className="text-blue-500">Astro-Tour</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 font-medium max-w-3xl mx-auto italic mb-10 drop-shadow-lg">
              "Witness the universe's vastness from the roof of the world."
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <div className="px-8 py-4 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl text-white font-bold flex items-center gap-3">
                <CalendarIcon className="w-5 h-5 text-blue-400" /> 
                8 Days / 7 Nights Journey
              </div>
              <button className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-2xl transition-all shadow-[0_0_30px_rgba(37,99,235,0.3)]">
                Secure Your Spot
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Attractions */}
      <section className="py-24 container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold uppercase mb-4">Celestial <span className="text-blue-500">Highlights</span></h2>
          <div className="h-1.5 w-24 bg-blue-600 mx-auto rounded-full" />
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { 
              icon: <Telescope className="w-10 h-10 text-blue-400" />, 
              title: "Guided IAO Tour", 
              desc: "Delve into the inner workings of Hanle Observatory with expert-led tours of advanced telescopes." 
            },
            { 
              icon: <Star className="w-10 h-10 text-yellow-400" />, 
              title: "Bortle 1 Skies", 
              desc: "Experience some of the clearest skies on Earth at Hanle Village, free from light pollution." 
            },
            { 
              icon: <Camera className="w-10 h-10 text-purple-400" />, 
              title: "Astrophotography", 
              desc: "Master night sky photography with professional guidance in the Himalayan foothills." 
            },
          ].map((item, i) => (
            <motion.div 
              key={i} 
              whileHover={{ y: -10 }} 
              className="p-10 bg-slate-900/50 border border-slate-800 rounded-[2.5rem] backdrop-blur-sm hover:border-blue-500/30 transition-all"
            >
              <div className="mb-6">{item.icon}</div>
              <h3 className="text-2xl font-display font-bold mb-4 text-white">{item.title}</h3>
              <p className="text-slate-400 leading-relaxed text-left">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Cultural & Adventure */}
      <section className="py-24 bg-slate-900/30">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative aspect-video lg:aspect-square rounded-[3rem] overflow-hidden border border-slate-800 shadow-2xl">
            <img src="https://images.unsplash.com/photo-1589412227329-4119859f518e?q=80&w=2070&auto=format&fit=crop" alt="Ladakh Landscape" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent" />
          </div>
          <div className="space-y-8">
            <h2 className="text-4xl md:text-6xl font-display font-bold uppercase tracking-tighter text-white">Beyond the <br/><span className="text-blue-500">Stars</span></h2>
            <p className="text-lg text-slate-300 leading-relaxed text-left">
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
                <div key={i} className="flex items-center gap-2 text-slate-400">
                  <CheckCircle2 className="w-4 h-4 text-blue-500" />
                  <span className="text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>
            <p className="text-slate-400 italic text-left">
              "Experience the tranquility of Hanle village and explore the mysteries of the universe."
            </p>
          </div>
        </div>
      </section>

      {/* Itinerary */}
      <section className="py-24 container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-display font-bold uppercase tracking-widest text-white">The Expedition Itinerary</h2>
          <p className="text-slate-500 mt-2 uppercase text-xs tracking-[0.3em]">Day by Day Breakdown</p>
        </div>
        
        <div className="space-y-12">
          {itinerary.map((item, i) => (
            <div key={i} className="relative pl-12 border-l-2 border-blue-500/20">
              <div className="absolute -left-[11px] top-0 w-5 h-5 rounded-full bg-blue-600 shadow-[0_0_15px_rgba(37,99,235,0.5)]" />
              <div className="mb-2">
                <span className="text-blue-500 font-display font-bold text-xl uppercase">{item.day}</span>
                <h3 className="text-3xl font-display font-bold text-white uppercase text-left">{item.title}</h3>
              </div>
              <div className="grid gap-4 mt-6">
                {item.events.map((event, j) => (
                  <div key={j} className="flex flex-col md:flex-row md:items-center gap-4 p-6 bg-slate-900/50 border border-slate-800 rounded-3xl hover:bg-slate-900 transition-colors">
                    <span className="font-mono text-blue-400 w-32 shrink-0 text-left font-bold text-xs uppercase">{event.time}</span>
                    <span className="text-slate-300 font-medium text-lg text-left">{event.activity}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Essential Kits */}
      <section className="py-24 bg-blue-600/5 border-y border-white/5">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-display font-bold text-center mb-16 uppercase text-white">Your Personal Kit List</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Personal", items: ["Personal Medicine", "Handbag / Backpack", "UV Sunglasses", "Cap / Hat"] },
              { title: "Clothing", items: ["Windproof Overcoat", "Thermal Innerwear", "Sweater / Poncho", "Waterproof Sports Shoes"] },
              { title: "Winter Gear", items: ["Woolen Cap & Gloves", "Woolen Socks", "Woolen Scarf", "Extra Layering"] },
              { title: "Skincare", items: ["Cold Cream", "Sun Screen (SPF 35+)", "Lip Balm", "Moisturizer"] },
            ].map((cat, i) => (
              <div key={i} className="p-8 bg-slate-950/50 rounded-3xl border border-slate-800">
                <h4 className="text-blue-500 font-bold uppercase mb-4 text-left border-b border-blue-500/20 pb-2">{cat.title}</h4>
                <ul className="space-y-3">
                  {cat.items.map((item, j) => (
                    <li key={j} className="text-slate-400 text-sm flex items-center gap-2">
                      <ChevronRight className="w-3 h-3 text-blue-500/50" />
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
        <div className="bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 rounded-[3rem] p-12 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 blur-[120px] -z-10" />
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl font-display font-bold mb-8 uppercase text-left text-white">What's Included</h2>
              <ul className="space-y-4">
                {[
                  { icon: <Home className="w-5 h-5" />, text: "Accommodation: Hotels, homestays and camps" },
                  { icon: <Plane className="w-5 h-5" />, text: "Transportation: Tempo Traveller from Leh" },
                  { icon: <Utensils className="w-5 h-5" />, text: "Daily Meals: Breakfast and Dinner" },
                  { icon: <Compass className="w-5 h-5" />, text: "Expert astronomy and location guidance" },
                  { icon: <Zap className="w-5 h-5" />, text: "Entrance Fees: IAO, Monasteries, Wildlife" }
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-slate-300 text-left">
                    <div className="p-2 bg-blue-600/20 rounded-lg text-blue-400 shrink-0">{item.icon}</div>
                    {item.text}
                  </li>
                ))}
              </ul>
              
              <div className="mt-12 p-6 bg-slate-950/50 rounded-2xl border border-slate-800">
                <div className="flex gap-3 mb-4">
                  <Info className="w-5 h-5 text-blue-400 shrink-0" />
                  <h4 className="font-bold text-white uppercase text-sm">Exclusions</h4>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed text-left">
                  Airfare to Leh, Daily Lunch, Travel Insurance, Personal Expenses (Souvenirs, snacks), Tips & Gratuities.
                </p>
              </div>
            </div>
            
            <div className="bg-slate-950 border border-slate-800 rounded-[2.5rem] p-10 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4">
                <span className="px-3 py-1 bg-yellow-500/10 text-yellow-500 text-[10px] font-bold uppercase rounded-full border border-yellow-500/20">
                  Best Value
                </span>
              </div>
              <span className="text-blue-400 font-bold uppercase tracking-widest text-sm mb-4 block text-left">Investment</span>
              <div className="space-y-6 mb-10">
                <div className="flex justify-between items-center pb-6 border-b border-white/5">
                  <span className="text-slate-400 text-lg">Standard Adult</span>
                  <span className="text-3xl font-display font-bold text-white">₹39,990</span>
                </div>
                <div className="flex justify-between items-center pb-6 border-b border-white/5">
                  <div className="text-left">
                    <span className="text-slate-400 text-lg block">Early Bird</span>
                    <span className="text-xs text-blue-400 uppercase font-bold">Before June 20, 2026</span>
                  </div>
                  <span className="text-4xl font-display font-bold text-blue-500">₹36,990</span>
                </div>
                <div className="p-4 bg-blue-600/10 rounded-2xl border border-blue-500/20 text-blue-400 text-sm text-left">
                  <strong>Group Discount (4+):</strong> ₹36,990 per participant
                </div>
              </div>
              <button className="w-full py-5 bg-blue-600 text-white font-bold rounded-2xl hover:bg-blue-500 transition-all uppercase tracking-widest shadow-[0_0_20px_rgba(37,99,235,0.2)]">
                Enquire for Booking
              </button>
              <p className="text-center mt-6 text-[10px] text-slate-500 uppercase tracking-widest leading-relaxed">
                *20% Advance for booking | Rates exclude GST
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Contact */}
      <section className="py-24 container mx-auto px-4 text-center">
        <h2 className="text-2xl font-display font-bold mb-8 uppercase text-slate-400">Ready for the Star Safari?</h2>
        <div className="flex flex-wrap justify-center gap-12">
          <div className="text-left">
            <span className="block text-xs uppercase tracking-widest text-slate-600 mb-1">WhatsApp / Call</span>
            <span className="text-xl font-bold text-white">+91 76665 19425</span>
          </div>
          <div className="text-left">
            <span className="block text-xs uppercase tracking-widest text-slate-600 mb-1">Email Inquiry</span>
            <span className="text-xl font-bold text-white">axcamps@gmail.com</span>
          </div>
          <div className="text-left">
            <span className="block text-xs uppercase tracking-widest text-slate-600 mb-1">Official Site</span>
            <span className="text-xl font-bold text-white">www.axsx.in</span>
          </div>
        </div>
      </section>
    </div>
  );
}
