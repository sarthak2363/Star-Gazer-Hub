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
  HeartHandshake,
  GraduationCap,
  Utensils,
  Tent,
  Flame,
  Toilet,
  Mountain,
  Music,
  Telescope,
  Camera,
  Eye,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  X,
} from "lucide-react";
import { useState, useEffect } from "react";
import { DayPicker } from "react-day-picker";
import { format, isSameDay, addDays } from "date-fns";
import "react-day-picker/dist/style.css";
import eventImg from "@assets/13th_event_1767776866680.jpeg";
import heroBgImage from "@assets/generated_images/people_stargazing_under_milky_way.png";
import videoFeedback from "@assets/Sweet,_true_and_very_very_encouraging_feedback_our_participant_1768372460674.mp4";

const GALLERY_IMAGES = [
  { src: eventImg, alt: "Stargazing Event 1" },
  { src: eventImg, alt: "Stargazing Event 2" },
  { src: eventImg, alt: "Stargazing Event 3" },
];

const LOCATION_EVENTS: Record<string, Date[]> = {
  Panshet: [
    new Date(2026, 0, 24),
    new Date(2026, 0, 25),
    new Date(2026, 1, 14),
  ],
  Velhe: [new Date(2026, 0, 16), new Date(2026, 1, 7), new Date(2026, 1, 28)],
  Mumbai: [],
  Bhandardara: [],
};

const ALL_EVENT_DATES = Object.values(LOCATION_EVENTS).flat();

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
  const prevSlide = () =>
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

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
          <div
            key={i}
            className="min-w-full h-[420px] md:h-[520px] lg:h-[600px]"
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover"
            />
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
                className={`w-2 h-2 rounded-full transition-all ${
                  i === currentIndex
                    ? "bg-cyan-400 w-6"
                    : "bg-white/30 hover:bg-white/50"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
export default function Stargazing() {
  const [isTimelineOpen, setIsTimelineOpen] = useState(false);
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (
        !target.closest(".calendar-container") &&
        !target.closest(".calendar-trigger")
      ) {
        setShowCalendar(false);
      }
      if (
        !target.closest(".location-container") &&
        !target.closest(".location-trigger")
      ) {
        setShowLocations(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const [selectedLocation, setSelectedLocation] = useState("Panshet");
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(
    LOCATION_EVENTS["Panshet"][0],
  );
  const [showCalendar, setShowCalendar] = useState(false);
  const [showLocations, setShowLocations] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const locations = ["Panshet", "Velhe", "Mumbai", "Bhandardara"];

  const handleDateSelect = (date: Date | undefined) => {
    if (!date) return;
    const locationDates = LOCATION_EVENTS[selectedLocation] || [];
    const isEventInLocation = locationDates.some((d) => isSameDay(d, date));

    if (isEventInLocation) {
      setSelectedDate(date);
      setShowCalendar(false);
    } else {
      setShowAlert(true);
    }
  };

  const handleLocationSelect = (loc: string) => {
    setSelectedLocation(loc);
    setShowLocations(false);
    // Auto-select the first available date for the new location if current date isn't valid there
    const locationDates = LOCATION_EVENTS[loc] || [];
    if (locationDates.length > 0) {
      const isCurrentDateValid =
        selectedDate && locationDates.some((d) => isSameDay(d, selectedDate));
      if (!isCurrentDateValid) {
        setSelectedDate(locationDates[0]);
      }
    } else {
      setSelectedDate(undefined);
    }
  };

  const checkInDate = selectedDate || ALL_EVENT_DATES[0];
  const departureDate = addDays(checkInDate, 1);

  const testimonials = [
    {
      name: "Rahul Sharma",
      review:
        "Absolutely mind-blowing experience! The detail we could see through the 12-inch telescope was incredible.",
      rating: 5,
    },
    {
      name: "Priya Patil",
      review:
        "The bonfire jamming session was the highlight for me. Great music, great stars.",
      rating: 5,
    },
    {
      name: "Amit Verma",
      review:
        "Expert knowledge shared by the team was fascinating. I learned so much.",
      rating: 5,
    },
  ];

  const highlights = [
    {
      icon: <Utensils className="w-6 h-6 text-green-400" />,
      title: "Food",
      desc: "Full package including tasty meals.",
    },
    {
      icon: <Tent className="w-6 h-6 text-cyan-400" />,
      title: "Tent Stay",
      desc: "Stay overnight in the lap of nature.",
    },
    {
      icon: <Toilet className="w-5 h-5 text-emerald-400" />,
      title: "Facilities",
      desc: "Well Maintained Hygiene",
    },
    {
      icon: <Music className="w-6 h-6 text-orange-400" />,
      title: "Jamming",
      desc: "Cozy musical evening.",
    },
    {
      icon: <Flame className="w-5 h-5 text-orange-400" />,
      title: "Bonfire",
      desc: "A warm bonfire.",
    },
    {
      icon: <Mountain className="w-5 h-5 text-teal-400" />,
      title: "Trek",
      desc: "A gentle morning trek.",
    },
  ];

  const timeline = [
    { time: "5:00 PM – 6:30 PM", event: "Check in at location" },
    { time: "5:00 PM – 6:00 PM", event: "Snacks and tea" },
    {
      time: "6:30 PM – 8:45 PM",
      event: "Session 1 – West region sky observation",
    },
    { time: "9:00 PM – 9:30 PM", event: "PPT Presentation" },
    { time: "9:30 PM – 10:30 PM", event: "Dinner" },
    {
      time: "10:45 PM – 1:00 AM",
      event: "Session 2: Constellation & Deep Sky Observation",
    },
    { time: "1:00 AM – 5:00 AM", event: "Break for Sleep" },
    { time: "5:00 AM – 6:00 AM", event: "Session 3: Morning Object Watching" },
    { time: "6:00 AM – 7:30 AM", event: "Break and refreshment" },
    { time: "7:30 AM – 8:30 AM", event: "Solar spot observation" },
    { time: "8:30 AM – 9:30 AM", event: "Breakfast" },
    { time: "9:30 AM onwards", event: "Departure process starts" },
  ];

  const equipment = [
    "A 12-Inch Telescope",
    "A 8-Inch Telescope",
    "A 6-Inch Telescope",
    "Solar Filter",
    "Projector Facts",
    "Camera Attachment",
    "Binoculars",
  ];

  const takeaways = [
    "Exploration of the Cosmos",
    "Inspires career paths",
    "Guided Observation",
    "Astrophotography",
    "Astronomy Tools",
    "Fellow Stargazers",
    "Knowledge",
    "Outdoor activities",
  ];

  return (
    <div className="min-h-screen bg-[#020617] text-white selection:bg-cyan-500/30">
      <Navbar />

      <div className="relative pt-32 pb-24 overflow-hidden min-h-[70vh] flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroBgImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-[#020617]" />

        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-7xl font-display font-bold mb-4 tracking-tight drop-shadow-2xl">
              Stargazing Astro Party
            </h1>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="relative calendar-container">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowCalendar(!showCalendar);
                    setShowLocations(false);
                  }}
                  className="px-4 py-2 bg-black/50 backdrop-blur-sm border border-white-500/30 rounded-full text-white-400 text-sm font-medium flex items-center gap-2 hover:bg-white-500/10 transition-colors calendar-trigger"
                >
                  <CalendarIcon className="w-4 h-4" />{" "}
                  {selectedDate
                    ? format(selectedDate, "dd MMMM yyyy")
                    : "Select Date"}
                </button>

                <AnimatePresence>
                  {showCalendar && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      className="absolute top-full left-1/2 -translate-x-1/2 md:left-0 md:translate-x-0 mt-4 z-50 bg-black/95 border border-white/10 p-4 rounded-3xl backdrop-blur-xl shadow-2xl w-[320px]"
                    >
                      <DayPicker
                        mode="single"
                        selected={selectedDate}
                        onSelect={handleDateSelect}
                        showOutsideDays
                        fixedWeeks
                        modifiers={{
                          event: LOCATION_EVENTS[selectedLocation] || [],
                        }}
                        modifiersStyles={{
                          event: {
                            border: "2px solid #06b6d4",
                            color: "#06b6d4",
                            borderRadius: "50%",
                          },
                        }}
                        styles={{
                          caption: { color: "white" },
                          head_cell: { color: "rgba(255,255,255,0.4)" },
                          day: { color: "white" },
                          day_selected: {
                            backgroundColor: "#06b6d4",
                            color: "black",
                          },
                        }}
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div className="relative location-container">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowLocations(!showLocations);
                    setShowCalendar(false);
                  }}
                  className="px-4 py-2 bg-black/50 backdrop-blur-sm border border-blue-500/30 rounded-full text-blue-400 text-sm font-medium flex items-center gap-2 hover:bg-blue-500/10 transition-colors location-trigger"
                >
                  <MapPin className="w-4 h-4" /> {selectedLocation} (45 Km From
                  Pune)
                </button>

                <AnimatePresence>
                  {showLocations && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      className="absolute top-full left-1/2 -translate-x-1/2 md:left-0 md:translate-x-0 mt-4 z-50 bg-black/95 border border-white/10 p-2 rounded-2xl backdrop-blur-xl shadow-2xl min-w-[160px]"
                    >
                      {locations.map((loc) => (
                        <button
                          key={loc}
                          onClick={() => handleLocationSelect(loc)}
                          className={`w-full text-left px-4 py-2 rounded-xl text-sm transition-colors ${
                            selectedLocation === loc
                              ? "bg-blue-500/20 text-blue-400"
                              : "hover:bg-white/5 text-white/70 hover:text-white"
                          }`}
                        >
                          {loc}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
            <p className="text-xl md:text-2xl text-white/80 font-light max-w-3xl mx-auto italic drop-shadow-lg">
              "Because Your Soul Deserves A Sky Full Of Stars"
            </p>
          </motion.div>
        </div>
      </div>

      <AnimatePresence>
        {showAlert && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="bg-black/90 border border-white/10 p-8 rounded-3xl max-w-md w-full text-center shadow-2xl"
            >
              <div className="w-16 h-16 bg-red-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <X className="w-8 h-8 text-red-400" />
              </div>
              <h3 className="text-2xl font-display font-bold mb-4">
                No Event Scheduled
              </h3>
              <p className="text-white/60 mb-8">
                We don't have event on this date in this location, kindly change
                the location or select any other date.
              </p>
              <button
                onClick={() => setShowAlert(false)}
                className="w-full py-3 bg-white text-black font-bold rounded-2xl hover:bg-white/90 transition-colors"
              >
                Got it
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <section className="py-24 container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-1 gap-12">
            {/* Public Stargazing Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white/5 border border-white/10 rounded-[2.5rem] p-12 relative overflow-hidden group hover:border-blue-500/50 transition-all duration-500"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/5 blur-[80px] -z-10" />
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-600/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest">
                    <Star className="w-4 h-4" />
                    Open to Everyone
                  </div>
                  <h2 className="text-4xl font-display font-bold text-white uppercase tracking-tight">
                    Public <span className="text-blue-500">Stargazing</span>
                  </h2>
                  <p className="text-white/60 text-lg leading-relaxed text-left">
                    Join our community of night-sky enthusiasts for an
                    unforgettable evening under the stars. Perfect for
                    individuals, couples, and families looking to explore the
                    cosmos through our professional telescopes.
                  </p>
                  <ul className="space-y-3">
                    {[
                      "Guided observation of planets & constellations",
                      "Deep-sky exploration through 12-inch telescopes",
                      "Expert talks on astronomy and mythology",
                      "Introduction to astrophotography",
                    ].map((feature, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-3 text-white/80"
                      >
                        <Zap className="w-4 h-4 text-blue-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className="mt-8 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-2xl transition-all shadow-lg shadow-blue-600/20 uppercase tracking-widest text-sm">
                    Book Public Session
                  </button>
                </div>
                <div className="relative aspect-video rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                  <img
                    src={eventImg}
                    alt="Public Stargazing Session"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 pb-20 mt-12">
        <div className="grid lg:grid-cols-12 gap-12 max-w-7xl mx-auto">
          <div className="lg:col-span-7 space-y-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="prose prose-invert prose-blue max-w-none"
            >
              <h2 className="text-3xl font-display font-bold text-white mb-6">
                Welcome to our Stargazing program
              </h2>
              <p className="text-lg text-white/70 leading-relaxed text-left">
                A premium stargazing experience near Pune — where the night sky
                becomes more than just a view.
              </p>
              <p className="text-lg text-white/70 leading-relaxed text-left">
                Beyond observation, AstroParty offers something deeper — calm,
                perspective, and wonder. It’s a pause from city noise, a moment
                to slow down, and a chance to feel connected to the vast
                universe above.
              </p>
              <p className="text-lg text-white/70 leading-relaxed text-left">
                AstroParty is curated by Aeronautics and Space Exploration
                (AXSX), working in astronomy and space science since 2010.
                Brought to you by AXCamps, a dedicated division for outdoor
                stargazing experiences, corporate events, and school astronomy
                programs.
              </p>
              <p className="text-lg text-white/70 leading-relaxed text-left">
                AstroParty isn’t just an event —it’s a memory written in
                starlight.{" "}
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              {highlights.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500/30 transition-all group"
                >
                  <div className="mb-4 transform group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-bold mb-2 font-display text-white">
                    {item.title}
                  </h3>
                  <p className="text-sm text-white/50 text-left">{item.desc}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden"
            >
              <button
                onClick={() => setIsTimelineOpen(!isTimelineOpen)}
                className="w-full p-8 flex items-center justify-between hover:bg-white/5 transition-colors group text-left"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-blue-500/10 rounded-2xl">
                    <Clock className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-display font-bold text-white">
                      Astro – Party Event Timeline
                    </h3>
                    <p className="text-white/40 text-sm mt-1 uppercase tracking-widest">
                      Click to view complete schedule
                    </p>
                  </div>
                </div>
                <motion.div
                  animate={{ rotate: isTimelineOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-6 h-6 text-white/40 group-hover:text-white transition-colors" />
                </motion.div>
              </button>
              <AnimatePresence>
                {isTimelineOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="p-8 pt-0 space-y-4 border-t border-white/5">
                      <div className="mt-8 space-y-4">
                        {timeline.map((item, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.05 }}
                            className="flex gap-4 items-start group"
                          >
                            <div className="w-2 h-2 rounded-full bg-blue-500 mt-2 flex-shrink-0 group-hover:scale-150 transition-transform" />
                            <div className="flex-1 pb-4 border-b border-white/5 last:border-0">
                              <span className="text-blue-400 font-mono text-sm block mb-1">
                                {item.time}
                              </span>
                              <span className="text-white/80 text-left block">
                                {item.event}
                              </span>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-white/10 rounded-3xl p-8"
            >
              <h3 className="text-2xl font-display font-bold mb-6 flex items-center gap-3">
                <CalendarIcon className="w-6 h-6 text-purple-400" /> Check In
                Date & Time
              </h3>
              <p className="text-white/70 mb-6 text-left">
                Overnight Sky Watching Session held close to the New Moon, near
                Pune.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-4 bg-white/5 rounded-2xl border border-white/5">
                  <span className="text-xs text-white/40 uppercase tracking-wider block mb-2">
                    Check In
                  </span>
                  <span className="text-xl font-bold text-white">
                    {format(checkInDate, "dd MMMM yyyy")}
                  </span>
                  <span className="text-blue-400 block">5:00 PM</span>
                </div>
                <div className="p-4 bg-white/5 rounded-2xl border border-white/5">
                  <span className="text-xs text-white/40 uppercase tracking-wider block mb-2">
                    Departure
                  </span>
                  <span className="text-xl font-bold text-white">
                    {format(departureDate, "dd MMMM yyyy")}
                  </span>
                  <span className="text-blue-400 block">9:30 AM</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white/5 border border-white/10 rounded-3xl p-8"
            >
              <h3 className="text-2xl font-display font-bold mb-6 flex items-center gap-3">
                <Telescope className="w-6 h-6 text-yellow-400" /> Equipment
              </h3>
              <ul className="grid md:grid-cols-2 gap-4">
                {equipment.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 text-white/70 text-left"
                  >
                    <Eye className="w-4 h-4 text-blue-400 flex-shrink-0" />{" "}
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white/5 border border-white/10 rounded-3xl p-8"
            >
              <h4 className="text-xl font-display font-bold mb-2 flex items-center gap-2">
                <Users className="w-5 h-5 text-blue-400" /> Testimonials
              </h4>
              <div className="space-y-4">
                {testimonials.map((t, i) => (
                  <div
                    key={i}
                    className="p-4 bg-white/5 rounded-2xl border border-white/5"
                  >
                    <div className="flex items-center gap-1 mb-2 text-yellow-400">
                      {[...Array(t.rating)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-current" />
                      ))}
                    </div>
                    <p className="text-sm text-white/70 italic mb-2 text-left">
                      "{t.review}"
                    </p>
                    <span className="text-xs font-bold text-blue-400">
                      — {t.name}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-5">
            <div className="sticky top-32 space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-gradient-to-b from-white/10 to-transparent border border-white/10 rounded-3xl p-8 backdrop-blur-xl"
              >
                <div className="mb-8">
                  <span className="text-orange-400 text-sm font-bold uppercase tracking-widest block mb-2">
                    Time's Ticking!
                  </span>
                  <h3 className="text-2xl font-display font-bold text-white mb-2">
                    Only a Few Days Left!
                  </h3>
                  <p className="text-white/60 text-sm text-left">
                    Book Now - Don't Miss Out!
                  </p>
                </div>
                <div className="space-y-6 mb-8">
                  <div className="flex justify-between items-center p-4 bg-white/5 rounded-2xl border border-white/5">
                    <div>
                      <span className="block text-xs text-white/40 uppercase tracking-wider">
                        Age Above 10
                      </span>
                      <span className="text-2xl font-bold text-white">
                        2190 ₹
                      </span>
                    </div>
                    <span className="text-xs text-blue-400 font-bold bg-blue-400/10 px-2 py-1 rounded">
                      Per Participant
                    </span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-white/5 rounded-2xl border border-white/5">
                    <div>
                      <span className="block text-xs text-white/40 uppercase tracking-wider">
                        Age Below 10
                      </span>
                      <span className="text-2xl font-bold text-white">
                        1790 ₹
                      </span>
                    </div>
                    <span className="text-xs text-blue-400 font-bold bg-blue-400/10 px-2 py-1 rounded">
                      Per Participant
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => {
                    const dateText = selectedDate
                      ? format(selectedDate, "dd MMMM yyyy")
                      : "not selected";

                    const message = `Can I get more details about this event? Date entered: ${dateText}`;
                    const whatsappUrl = `https://wa.me/917666519425?text=${encodeURIComponent(
                      message,
                    )}`;

                    window.open(whatsappUrl, "_blank");
                  }}
                  className="w-full py-4 bg-blue-500 hover:bg-blue-400 text-black font-bold rounded-2xl transition-all shadow-[0_0_20px_rgba(6,182,212,0.3)] transform hover:-translate-y-1 active:scale-[0.98]"
                >
                  Enquire Now!!
                </button>
              </motion.div>

              <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
                <h4 className="text-xl font-display font-bold mb-6 flex items-center gap-2">
                  <Star className="w-5 h-5 text-yellow-400" /> Key Takeaways
                </h4>
                <ul className="grid grid-cols-1 gap-3">
                  {takeaways.map((text, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-3 text-sm text-white/60 text-left"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500/50" />{" "}
                      {text}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
                <h4 className="text-xl font-display font-bold mb-6 flex items-center gap-2">
                  <Camera className="w-5 h-5 text-purple-400" /> Review Videos
                </h4>
                <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                  <video
                    controls
                    className="w-full h-auto aspect-video object-cover"
                    poster={eventImg}
                  >
                    <source src={videoFeedback} type="video/mp4" />
                  </video>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
