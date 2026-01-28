import { useState, useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";
import consentpdf from "@assets/consent.pdf";


import {
  ChevronDown,
  IndianRupee,
  ShieldCheck,
  Bus,
  GraduationCap,
  MoonStar,
  Calendar,
  MapPin,
  CalendarHeart,
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
  studentImg1,
  studentImg2,
  studentImg3,
  studentImg4,
  studentImg5,
  studentImg6,
  studentImg7,
  studentImg8,
  studentImg9,
  studentImg11,
  studentImg12,
  studentImg13,
  studentImg14,
];

export default function AstroPartyStudentEdition() {
  const [studentName, setStudentName] = useState("");
  const [age, setAge] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [parentContact, setParentContact] = useState("");
  const [formError, setFormError] = useState("");

  const [showConsent, setShowConsent] = useState(false);
  const [consentAccepted, setConsentAccepted] = useState(false);
  const [collegeIdFile, setCollegeIdFile] = useState<File | null>(null);
  const [aadhaarFile, setAadhaarFile] = useState<File | null>(null);
  const [consentPdf, setConsentPdf] = useState<File | null>(null);
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
              <button
                onClick={() => {
                  document
                    .getElementById("register")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="px-10 py-4 border-2 border-white uppercase tracking-widest font-bold hover:bg-white hover:text-black transition"
              >
                Register Now
              </button>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce opacity-70">
          <ChevronDown className="w-8 h-8 text-white" />
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section className="snap-start bg-black px-6 py-8">
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
              className="border border-black/10 rounded-2xl p-5 bg-white/80 text-black hover:bg-gray-100 transition"
            >
              <item.icon className="w-10 h-10 text-purple-600 mb-4" />
              <p className="text-lg">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CAROUSEL SECTION */}
      <section className="bg-black py-5 border-t border-white/5">
        <div className="container mx-auto px-4 mb-12">
          <h2 className="text-4xl font-display font-bold uppercase text-center text-white tracking-tight">
            Our Previous College Events
          </h2>
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
                <CarouselItem
                  key={i}
                  className="pl-4 md:basis-1/2 lg:basis-1/1"
                >
                  <div className="rounded-2xl overflow-hidden aspect-[16/9] border border-white/10 group/item relative">
                    <img
                      src={img}
                      alt={`College Event ${i + 1}`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover/item:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover/item:opacity-100 transition-opacity duration-300 flex items-end p-6"></div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="hidden md:block">
              <CarouselPrevious className="absolute -left-20 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full border-white/20 bg-white/5 text-white hover:bg-white hover:text-black opacity-0 group-hover:opacity-100 transition-opacity" />
              <CarouselNext className="absolute -right-20 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full border-white/20 bg-white/5 text-white hover:bg-white hover:text-black opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </Carousel>
        </div>
      </section>

      {/* EVENT DETAILS */}
      <section className="snap-start min-h-screen bg-black px-6 py-24">
        <h2 className="text-center text-4xl font-display font-bold uppercase mb-16">
          Event Details
        </h2>

        <section className="py-10 container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                icon: <IndianRupee className="w-8 h-8 text-purple-500" />,
                title: "Just @ ₹849 Per Head",
              },
              {
                icon: <MapPin className="w-8 h-8 text-purple-600" />,
                title: "Location: Velhe, 50 km from Pune",
              },
              {
                icon: <Bus className="w-8 h-8 text-purple-500" />,
                title: "Transport Service Provided",
              },
              {
                icon: <Calendar className="w-8 h-8 text-purple-500" />,
                title: "Date: 21st Feb 2026",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="p-8 bg-white shadow-xl shadow-purple-900/5 border border-purple-100 rounded-[2.5rem] hover:bg-purple-50 transition-all"
              >
                <div className="mb-6">{item.icon}</div>
                <h3 className="text-2xl font-display font-bold mb-4 text-slate-800">
                  {item.title}
                </h3>
              </motion.div>
            ))}
          </div>
        </section>

        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
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
        <iframe
          className="w-full h-96 rounded-2xl border border-white/10"
          src="https://shorturl.at/7BvFY"
        />
      </section>

      {/* REGISTRATION */}
      <section
        id="register"
        className="snap-start scroll-mt-24 min-h-screen bg-blue-950 px-6 py-24"
      >
        <h2 className="text-center text-4xl font-display font-bold uppercase mb-12">
          Student Registration
        </h2>

          <form className="max-w-3xl mx-auto grid md:grid-cols-2 gap-6 bg-black/40 p-10 rounded-3xl border border-white/10">

            {/* TEXT INPUTS */}
              <input
                value={studentName}
                onChange={(e) => setStudentName(e.target.value)}
                placeholder="Student Name *"
                className="bg-black/60 border border-white/20 rounded-xl px-4 py-3 outline-none focus:border-blue-500"
              />

            <input
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              placeholder="Age *"
              className="bg-black/60 border border-white/20 rounded-xl px-4 py-3 outline-none focus:border-blue-500"
            />

            <input
              type="tel"
              value={contactNumber}
              onChange={(e) => setContactNumber(e.target.value)}
              placeholder="Contact Number *"
              className="bg-black/60 border border-white/20 rounded-xl px-4 py-3 outline-none focus:border-blue-500"
            />

            <input
              type="tel"
              value={parentContact}
              onChange={(e) => setParentContact(e.target.value)}
              placeholder="Parent's Contact Number *"
              className="bg-black/60 border border-white/20 rounded-xl px-4 py-3 outline-none focus:border-blue-500"
            />

            
            {[
              "Gender",
              "Blood Group",
              "Email Address",
              "College Name",
              "Year of Study",
              "Branch",
              "Name of your Astro Club (if any)",
              "How did you hear about this event?",
              
            ].map((placeholder, i) => (
              <input
                key={i}
                placeholder={placeholder}
                className="bg-black/60 border border-white/20 rounded-xl px-4 py-3 outline-none focus:border-blue-500"
              />
            ))}

            {/* UPLOAD COLLEGE ID */}
            <div>
              <label className="text-sm text-white/60 mb-2 block">
                Upload College ID
              </label>
              <label className="flex items-center justify-center cursor-pointer px-4 py-3 rounded-xl border border-white/20 bg-black/60 hover:bg-white/10 transition">
                <span className="text-white text-sm">
                  {collegeIdFile ? collegeIdFile.name : "Choose File"}
                </span>
                <input
                  type="file"
                  accept="image/*,application/pdf"
                  className="hidden"
                  onChange={(e) => setCollegeIdFile(e.target.files?.[0] || null)}
                />
              </label>
            </div>

            {/* UPLOAD AADHAAR */}
            <div>
              <label className="text-sm text-white/60 mb-2 block">
                Upload Birth Proof (Aadhaar)
              </label>
              <label className="flex items-center justify-center cursor-pointer px-4 py-3 rounded-xl border border-white/20 bg-black/60 hover:bg-white/10 transition">
                <span className="text-white text-sm">
                  {aadhaarFile ? aadhaarFile.name : "Choose File"}
                </span>
                <input
                  type="file"
                  accept="image/*,application/pdf"
                  className="hidden"
                  onChange={(e) => setAadhaarFile(e.target.files?.[0] || null)}
                />
              </label>
            </div>

            {/* CONSENT TRIGGER */}
            <div className="md:col-span-2">
              <button
                type="button"
                onClick={() => setShowConsent(true)}
                className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/20 text-white hover:border-blue-500 transition"
              >
                View Guardian Consent & Instructions
              </button>
            </div>

            {/* CONSENT CARD */}
            {showConsent && (
              <div className="md:col-span-2 mt-4 p-6 rounded-2xl border border-white/20 bg-black/70">
                <h3 className="text-xl font-bold mb-4 text-white">
                  Guardian Consent Instructions
                </h3>

                <ul className="text-sm text-white/70 space-y-2 mb-4 list-disc list-inside">
                  <li>Guardian permission is mandatory.</li>
                  <li>Guardian is aware of travel & overnight stay.</li>
                  <li>Emergency contact details are accurate.</li>
                  <li>Organizers are not responsible for valuables.</li>
                </ul>

                <div className="flex items-center gap-3 mb-4">
                  <input
                    type="checkbox"
                    checked={consentAccepted}
                    onChange={(e) => setConsentAccepted(e.target.checked)}
                    className="accent-blue-500 w-5 h-5"
                  />
                  <p className="text-sm text-white/80">
                    I confirm my parent / guardian has read and agreed.
                  </p>
                </div>

                <div className="flex justify-between items-center">
                  <a
                    href={consentpdf}
                    target="_blank"
                    className="text-sm underline text-blue-400"
                  >
                    Download Consent PDF
                  </a>

                  {!collegeIdFile && (
                    <p className="text-xs text-red-400 mt-1">
                      College ID is required
                    </p>
                  )}
                  

                  <button
                    type="button"
                    onClick={() => setShowConsent(false)}
                    className="text-sm text-white/60 hover:text-white"
                  >
                    Close
                  </button>
                </div>
              </div>
            )}

            {/* PAYMENT BUTTON */}
            <button
              type="button"
              disabled={!consentAccepted}
              onClick={() => {

                if (!studentName || !age || !contactNumber || !parentContact) {
                  setFormError("Please fill all mandatory fields marked with *");
                  return;
                }
                
                if (!collegeIdFile || !aadhaarFile) {
                  alert("Please upload College ID and Birth Proof before proceeding.");
                  return;
                }

                // ✅ All checks passed — proceed to payment
                console.log("Proceeding to payment...");
              }}
              className={`md:col-span-2 px-12 py-4 font-bold uppercase tracking-widest transition
                ${
                  consentAccepted
                    ? "bg-white text-black hover:bg-blue-500 hover:text-white"
                    : "bg-white/30 text-white/40 cursor-not-allowed"
                }`}
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
