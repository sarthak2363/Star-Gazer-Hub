import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const CALENDAR_DATA = [
  {
    month: "January 2026",
    image: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&w=800&q=80",
    days: 31,
    startDay: 4, // Thursday
    events: [
      { date: 1, title: "Discovery of Ceres" },
      { date: 3, title: "Quadrantid Meteor Shower" },
      { date: 4, title: "Birth of Isaac Newton" },
      { date: 11, title: "Jupiter at Opposition" },
      { date: 25, title: "Voyager 2 Flies by Uranus" },
      { date: 31, title: "Explorer 1 Launch" }
    ]
  },
  {
    month: "February 2026",
    image: "https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?auto=format&fit=crop&w=800&q=80",
    days: 28,
    startDay: 0, // Sunday
    events: [
      { date: 1, title: "Full Moon (Snow Moon)" }
    ]
  },
  {
    month: "March 2026",
    image: "https://images.unsplash.com/photo-1464802686167-b939a67e06a1?auto=format&fit=crop&w=800&q=80",
    days: 31,
    startDay: 0, // Sunday
    events: [
      { date: 20, title: "Vernal Equinox" }
    ]
  },
  {
    month: "April 2026",
    image: "https://images.unsplash.com/photo-1502134249126-9f3755a50d78?auto=format&fit=crop&w=800&q=80",
    days: 30,
    startDay: 3, // Wednesday
    events: [
      { date: 22, title: "Lyrids Meteor Shower" }
    ]
  },
  {
    month: "May 2026",
    image: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?auto=format&fit=crop&w=800&q=80",
    days: 31,
    startDay: 5, // Friday
    events: [
      { date: 5, title: "Eta Aquariids Meteor Shower" }
    ]
  },
  {
    month: "June 2026",
    image: "https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?auto=format&fit=crop&w=800&q=80",
    days: 30,
    startDay: 1, // Monday
    events: [
      { date: 21, title: "Summer Solstice" }
    ]
  },
  {
    month: "July 2026",
    image: "https://images.unsplash.com/photo-1506318137071-a8e063b4bcc0?auto=format&fit=crop&w=800&q=80",
    days: 31,
    startDay: 3, // Wednesday
    events: [
      { date: 28, title: "Delta Aquariids" }
    ]
  },
  {
    month: "August 2026",
    image: "https://images.unsplash.com/photo-1475274047050-1d0c0975c63e?auto=format&fit=crop&w=800&q=80",
    days: 31,
    startDay: 6, // Saturday
    events: [
      { date: 12, title: "Perseids Meteor Shower" }
    ]
  },
  {
    month: "September 2026",
    image: "https://images.unsplash.com/photo-1516339901601-2e1b62dc0c45?auto=format&fit=crop&w=800&q=80",
    days: 30,
    startDay: 2, // Tuesday
    events: [
      { date: 23, title: "Autumnal Equinox" }
    ]
  },
  {
    month: "October 2026",
    image: "https://images.unsplash.com/photo-1504333638930-c8787321eee0?auto=format&fit=crop&w=800&q=80",
    days: 31,
    startDay: 4, // Thursday
    events: [
      { date: 21, title: "Orionids Meteor Shower" }
    ]
  },
  {
    month: "November 2026",
    image: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=800&q=80",
    days: 30,
    startDay: 0, // Sunday
    events: [
      { date: 17, title: "Leonids Meteor Shower" }
    ]
  },
  {
    month: "December 2026",
    image: "https://images.unsplash.com/photo-1538370965046-79c0d6907d47?auto=format&fit=crop&w=800&q=80",
    days: 31,
    startDay: 2, // Tuesday
    events: [
      { date: 14, title: "Geminids Meteor Shower" },
      { date: 21, title: "Winter Solstice" }
    ]
  }
];

const DAYS_OF_WEEK = ["M", "T", "W", "T", "F", "S", "S"];

function PolaroidMonth({ data }: { data: typeof CALENDAR_DATA[0] }) {
  const blanks = Array(data.startDay === 0 ? 6 : data.startDay - 1).fill(null);
  const days = Array.from({ length: data.days }, (_, i) => i + 1);
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="bg-white p-4 shadow-2xl rounded-sm transform hover:rotate-1 hover:scale-105 transition-all duration-500"
      style={{ filter: "sepia(0.1)" }}
    >
      {/* Top Part: Image */}
      <div className="aspect-square overflow-hidden mb-6 bg-slate-100 relative">
        <img 
          src={data.image} 
          alt={data.month} 
          className="w-full h-full object-cover"
        />
        <div className="absolute top-2 right-2 bg-black/40 backdrop-blur-md px-3 py-1 rounded-full text-white text-[10px] font-bold tracking-widest uppercase">
          {data.month.split(' ')[0]}
        </div>
      </div>

      {/* Bottom Part: Calendar Grid */}
      <div className="px-1 pb-4">
        <div className="flex justify-between items-baseline mb-4">
           <h3 className="font-display text-2xl font-bold text-slate-800 tracking-tighter uppercase">{data.month}</h3>
        </div>
        
        <div className="grid grid-cols-7 gap-1 mb-2">
          {DAYS_OF_WEEK.map((d, i) => (
            <div key={i} className="text-[10px] font-bold text-slate-400 text-center uppercase">{d}</div>
          ))}
        </div>

        <div className="grid grid-cols-7 gap-1">
          {blanks.map((_, i) => (
            <div key={`blank-${i}`} className="aspect-square" />
          ))}
          {days.map((day) => {
            const hasEvent = data.events.some(e => e.date === day);
            const event = data.events.find(e => e.date === day);
            return (
              <div 
                key={day} 
                className={`aspect-square relative flex items-center justify-center text-xs font-medium rounded-sm ${
                  hasEvent ? "bg-emerald-50 text-emerald-700" : "text-slate-600"
                }`}
                title={event?.title}
              >
                {day}
                {hasEvent && (
                  <motion.div
                    animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="absolute -top-1 -right-1"
                  >
                    <Star className="w-2.5 h-2.5 fill-yellow-400 text-yellow-400" />
                  </motion.div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}

export default function AstronomicalCalendar() {
  return (
    <div className="min-h-screen bg-[#f8f9fa] text-slate-900">
      <Navbar />
      
      <section className="pt-32 pb-20 bg-emerald-900 text-white overflow-hidden relative">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-64 h-64 bg-emerald-500 rounded-full blur-[100px]" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-500 rounded-full blur-[120px]" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="inline-block px-4 py-1 rounded-full bg-white/10 backdrop-blur-md text-emerald-300 text-xs font-bold uppercase tracking-widest mb-6">
              Celestial Guide 2026
            </span>
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 tracking-tighter uppercase">
              Astronomical <span className="text-emerald-400">Calendar</span>
            </h1>
            <p className="text-xl text-emerald-100/60 max-w-2xl mx-auto italic">
              "A roadmap to the heavens. Never miss a meteor shower, conjunction, or celestial milestone."
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {CALENDAR_DATA.map((month, i) => (
            <PolaroidMonth key={i} data={month} />
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
