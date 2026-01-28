import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";

import {
  ChevronDown,
  ShieldCheck,
  Bus,
  GraduationCap,
  MoonStar,
  Calendar,
} from "lucide-react";
import { Link } from "wouter";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

import hero from "@assets/studentshero.png";

// Import student images from College folder
import studentImg1 from "@assets/College/studentimg1.jpeg";
import studentImg2 from "@assets/College/studentimg2.jpeg";
import studentImg3 from "@assets/College/studentimg3.jpeg";
import studentImg4 from "@assets/College/studentimg4.jpeg";
import studentImg5 from "@assets/College/studentimg5.jpeg";
import studentImg6 from "@assets/College/studentimg6.jpeg";
import studentImg7 from "@assets/College/studentimg7.jpeg";
import studentImg8 from "@assets/College/studentimg8.jpeg";
import studentImg9 from "@assets/College/studentimg9.jpeg";
import studentImg11 from "@assets/College/studentimg11.jpeg";
import studentImg12 from "@assets/College/studentimg12.jpeg";
import studentImg13 from "@assets/College/studentimg13.jpeg";
import studentImg14 from "@assets/College/studentimg14.jpeg";

const collegeImages = [
  studentImg1, studentImg2, studentImg3, studentImg4, studentImg5,
  studentImg6, studentImg7, studentImg8, studentImg9, studentImg11,
  studentImg12, studentImg13, studentImg14
];

export default function AstroPartyStudentEdition() {
  return (
    <div className="snap-y snap-proximity scroll-smooth">
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative pt-32 pb-24 overflow-hidden min-h-[80vh] flex items-center justify-center bg-[#f2f4e6]">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-90"
          style={{ backgroundImage: `url(${hero})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-[#f2f4e6]" />

        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-8xl font-display font-bold mb-6 tracking-tighter uppercase leading-none drop-shadow-xl text-white">
              AstroParty <br /> Student Edition
            </h1>

            <p className="text-lg text-black/70 mb-8 max-w-xl mx-auto">
              Affordable • Safe • Educational stargazing experience under the
              darkest skies near Pune
            </p>

            <div className="mt-10">
              <Link href="#register">
                <button className="px-10 py-4 border-2 border-white uppercase tracking-widest font-bold hover:bg-white hover:text-black transition">
                  Register Now
                </button>
              </Link>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce opacity-70">
          <ChevronDown className="w-8 h-8 text-white" />
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section className="snap-start min-h-screen bg-black px-6 py-24">
        <h2 className="text-center text-4xl font-display font-bold uppercase mb-16">
          What's Special About Student Edition?
        </h2>

        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
            { icon: GraduationCap, text: "Affordable for Students" },
            { icon: ShieldCheck, text: "Safe & Comfortable Environment" },
            { icon: Bus, text: "Transport Service Provided" },
            { icon: MoonStar, text: "Darkest Sky Near Pune" },
            { icon: ShieldCheck, text: "Parents Consent Mandatory" },
            { icon: GraduationCap, text: "Educational & Guided Astronomy" },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="border border-white/10 rounded-2xl p-8 bg-white/5 hover:bg-white/10 transition"
            >
              <item.icon className="w-10 h-10 text-blue-400 mb-4" />
              <p className="text-lg">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CAROUSEL SECTION */}
      <section className="bg-black py-24 border-t border-white/5">
        <div className="container mx-auto px-4 mb-12">
          <h2 className="text-4xl font-display font-bold uppercase text-center text-white tracking-tight">Our Previous College Events</h2>
        </div>
        <div className="max-w-6xl mx-auto px-12 relative group">
          <Carousel
            plugins={[
              Autoplay({
                delay: 3000,
              }),
            ]}
            className="w-full"
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <CarouselContent className="-ml-4">
              {collegeImages.map((img, i) => (
                <CarouselItem key={i} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="rounded-2xl overflow-hidden aspect-[4/3] border border-white/10 group/item relative">
                    <img 
                      src={img} 
                      alt={`College Event ${i + 1}`} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover/item:scale-110" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover/item:opacity-100 transition-opacity duration-300 flex items-end p-6">
                      <p className="text-white font-medium">Student Experience {i + 1}</p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="hidden md:block">
              <CarouselPrevious className="absolute -left-12 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full border-white/20 bg-white/5 text-white hover:bg-white hover:text-black opacity-0 group-hover:opacity-100 transition-opacity" />
              <CarouselNext className="absolute -right-12 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full border-white/20 bg-white/5 text-white hover:bg-white hover:text-black opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </Carousel>
        </div>
      </section>

      {/* EVENT DETAILS */}
      <section className="snap-start min-h-screen bg-black px-6 py-24">
        <h2 className="text-center text-4xl font-display font-bold uppercase mb-16">
          What's Special About Student Edition?
        </h2>

        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
            { icon: GraduationCap, text: "Affordable for Students" },
            { icon: ShieldCheck, text: "Safe & Comfortable Environment" },
            { icon: Bus, text: "Transport Service Provided" },
            { icon: MoonStar, text: "Darkest Sky Near Pune" },
            { icon: ShieldCheck, text: "Parents Consent Mandatory" },
            { icon: GraduationCap, text: "Educational & Guided Astronomy" },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="border border-white/10 rounded-2xl p-8 bg-white/5 hover:bg-white/10 transition"
            >
              <item.icon className="w-10 h-10 text-blue-400 mb-4" />
              <p className="text-lg">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </section>
 
      {/* EVENT DETAILS */}
      <section className="snap-start min-h-screen bg-slate-950 px-6 py-24">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-display font-bold uppercase mb-8">
              Event Details
            </h2>

            <ul className="space-y-4 text-lg text-white/70">
              <li>📍 Location: Velhe, Near Pune</li>
              <li>📅 Date: 21st February 2026</li>
              <li>🚌 Pickup & Drop from Pune</li>
              <li>🌌 Telescope-based Stargazing</li>
              <li>🛏️ Comfortable & Secure Camping</li>
            </ul>
          </div>

          <iframe
            className="w-full h-96 rounded-2xl border border-white/10"
            src="https://maps.google.com/maps?q=Velhe%20Pune&z=11&output=embed"
          />
        </div>
      </section>

      {/* REGISTRATION */}
      <section
        id="register"
        className="snap-start min-h-screen bg-blue-950 px-6 py-24"
      >
        <h2 className="text-center text-4xl font-display font-bold uppercase mb-12">
          Student Registration
        </h2>

        <form className="max-w-3xl mx-auto grid md:grid-cols-2 gap-6 bg-black/40 p-10 rounded-3xl border border-white/10">
          {[
            "Student Name",
            "Contact Number",
            "Parents Contact Number",
            "Email Address",
            "College Name",
            "Year of Study",
            "Branch",
          ].map((placeholder, i) => (
            <input
              key={i}
              placeholder={placeholder}
              className="bg-black/60 border border-white/20 rounded-xl px-4 py-3 outline-none focus:border-blue-500"
            />
          ))}

          <div>
            <label className="text-sm text-white/60">College ID</label>
            <input type="file" className="w-full text-sm text-white" />
          </div>

          <div>
            <label className="text-sm text-white/60">
              Birth Proof (Aadhaar)
            </label>
            <input type="file" className="w-full text-sm text-white" />
          </div>

          <label className="md:col-span-2 flex items-center gap-3 text-sm text-white/70">
            <input type="checkbox" className="accent-blue-500" />I have parents
            consent to attend this event
          </label>

          <button
            type="button"
            className="md:col-span-2 px-12 py-4 bg-white text-black font-bold uppercase tracking-widest hover:bg-blue-500 hover:text-white transition"
          >
            Proceed to Payment
          </button>
        </form>
      </section>

      <div className="snap-start">
        <Footer />
      </div>
    </div>
  );
}
