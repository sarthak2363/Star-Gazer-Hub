import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Link } from "wouter";
import hero1 from "@assets/home_page_stargazing_image_1768287805053.webp";
import hero2 from "@assets/home_page_Astro_tour_image_1768288024510.webp";
import hero3 from "@assets/home_page_Astro_event_image_2_1768373006182.webp";

const FullPageSection = ({
  title,
  subtitle,
  buttonText,
  buttonHref,
  bgImage,
  isFirst = false,
}: {
  title: string;
  subtitle: string;
  buttonText: string;
  buttonHref: string;
  bgImage: string;
  isFirst?: boolean;
}) => (
  <section className="relative h-screen w-full flex items-end pb-24 px-6 md:px-12 overflow-hidden bg-black snap-start">
    <div
      className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 hover:scale-105"
      style={{ backgroundImage: `url(${bgImage})` }}
    />
    <div className="absolute inset-0 bg-black/20" />

    <div className="container relative z-10 mx-auto max-w-6xl">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl"
      >
        <h2 className="text-sm md:text-base font-bold tracking-[0.2em] uppercase mb-4 text-white opacity-90">
          {subtitle}
        </h2>
        <h1 className="text-4xl md:text-6xl font-display font-bold mb-8 text-white uppercase tracking-tight">
          {title}
        </h1>

        <Link href={buttonHref}>
          <button className="px-10 py-4 border-2 border-white text-white font-bold hover:bg-white hover:text-black transition-all duration-300 uppercase tracking-widest text-sm inline-flex items-center gap-2 group text-left">
            {buttonText}
          </button>
        </Link>
      </motion.div>
    </div>

    {isFirst && (
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce opacity-70">
        <ChevronDown className="w-8 h-8 text-white" />
      </div>
    )}
  </section>
);

export default function Home() {
  return (
    <div className="h-screen overflow-y-auto snap-y snap-mandatory scroll-smooth bg-black no-scrollbar text-white">
      <Navbar />

      <FullPageSection
        title="Astro Party Stargazing"
        subtitle="Experience our"
        buttonText="Learn More"
        buttonHref="/stargazing"
        bgImage={hero1}
        isFirst={true}
      />

      <FullPageSection
        title="Astrotour Expeditions"
        subtitle="Now Booking"
        buttonText="View Itinerary"
        buttonHref="/astrotour"
        bgImage={hero2}
      />

      <FullPageSection
        title="AstroEvents"
        subtitle="Experience universe at your place"
        buttonText="Register Now"
        buttonHref="/aeromodelling"
        bgImage={hero3}
      />

      <section className="snap-start h-screen w-full flex flex-col items-center justify-center bg-emerald-950 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-emerald-500 via-transparent to-transparent" />
        </div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="text-center relative z-10"
        >
          <h2 className="text-emerald-400 font-bold tracking-[0.3em] uppercase mb-4">Plan Your Stargazing</h2>
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-10 text-white uppercase tracking-tighter">
            Astronomical <br/>Calendar 2026
          </h1>
          <Link href="/calendar">
            <button className="px-12 py-5 bg-white text-emerald-950 font-bold hover:bg-emerald-400 hover:text-white transition-all duration-300 uppercase tracking-widest text-sm shadow-2xl shadow-emerald-500/20">
              Explore 2026 Events
            </button>
          </Link>
        </motion.div>
      </section>

      <div className="snap-start min-h-fit">
        <Footer />
      </div>
    </div>
  );
}
