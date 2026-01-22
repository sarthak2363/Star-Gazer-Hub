import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, Shield, FileLock, Eye, Lock, ShieldCheck, Info, CheckCircle2 } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const bgImage = "/Ladakh hero/1667471069.png";

const privacyData = [
  {
    section: "Information Collection",
    title: "Data We Collect",
    summary: "Overview of personal and non-personal data collected during your interaction with AXCamps.",
    details: "We collect information you provide directly to us, such as when you register for a camp, sign up for our newsletter, or contact us for inquiries. This may include your name, email address, phone number, and any other information you choose to provide."
  },
  {
    section: "Data Usage",
    title: "How We Use Your Information",
    summary: "Explains the purposes for which we use the collected data, primarily for service delivery and safety.",
    details: "Your information is used to process registrations, communicate event details, ensure participant safety during tours, and improve our services. we do not sell your personal data to third parties."
  },
  {
    section: "Security",
    title: "Data Protection",
    summary: "Measures we take to ensure your personal information remains secure and confidential.",
    details: "We implement a variety of security measures to maintain the safety of your personal information. However, no method of transmission over the Internet or electronic storage is 100% secure."
  },
  {
    section: "Cookies",
    title: "Cookie Policy",
    summary: "Information about how we use cookies to enhance your browsing experience.",
    details: "We may use cookies to understand and save your preferences for future visits and compile aggregate data about site traffic and site interaction so that we can offer better site experiences and tools in the future."
  },
  {
    section: "Third-Party Links",
    title: "External Services",
    summary: "Our policy regarding links to external websites and third-party integrations.",
    details: "Occasionally, at our discretion, we may include or offer third-party products or services on our website. These third-party sites have separate and independent privacy policies. We therefore have no responsibility or liability for the content and activities of these linked sites."
  }
];

export default function PrivacyPolicy() {
  const [openSection, setOpenSection] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-[#0a0c10] text-white">
      <Navbar />

      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={bgImage} alt="Privacy Background" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0a0c10]" />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-4xl md:text-7xl font-display font-bold text-white mb-6 uppercase tracking-tighter">
              Privacy <span className="text-cyan-400">Policy</span>
            </h1>
            <p className="text-xl text-cyan-100 max-w-2xl mx-auto italic">"Your trust is our most valuable constellation."</p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 container mx-auto px-4 max-w-5xl">
        <div className="space-y-6 mb-16">
          {privacyData.map((item, i) => (
            <div key={i} className={`group overflow-hidden border rounded-[2rem] transition-all duration-500 ${openSection === i ? "bg-white/5 border-cyan-500/50 shadow-2xl shadow-cyan-600/10" : "bg-white/[0.02] border-white/10 hover:border-cyan-500/30"}`}>
              <button onClick={() => setOpenSection(openSection === i ? null : i)} className="w-full flex items-center justify-between p-8 text-left transition-colors">
                <div className="flex items-center gap-6">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-colors duration-500 ${openSection === i ? "bg-cyan-600 text-white" : "bg-white/5 text-white/40 group-hover:bg-cyan-600/20 group-hover:text-white"}`}>
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/40 mb-1 block">{item.section}</span>
                    <h3 className="text-xl font-display font-bold text-white uppercase">{item.title}</h3>
                    <p className="text-sm text-white/60 mt-1 line-clamp-2 group-hover:text-white/80 transition-colors">{item.summary}</p>
                  </div>
                </div>
                <div className={`p-2 rounded-full border transition-all duration-500 ${openSection === i ? "bg-cyan-600 border-cyan-600 text-white rotate-180" : "border-white/10 text-white/40"}`}>
                  <ChevronRight className="w-5 h-5" />
                </div>
              </button>
              <AnimatePresence>
                {openSection === i && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.5, ease: [0.04, 0.62, 0.23, 0.98] }}>
                    <div className="px-8 pb-8">
                      <div className="h-px bg-white/10 w-full mb-6" />
                      <div className="bg-white/5 rounded-2xl p-6 border border-white/5">
                        <p className="text-white/80 leading-relaxed">{item.details}</p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        <div className="p-8 bg-cyan-900/10 rounded-[2.5rem] border border-cyan-500/20">
          <div className="flex items-center gap-4 mb-6">
            <Lock className="w-10 h-10 text-cyan-600" />
            <h3 className="text-2xl font-display font-bold text-white uppercase">Data Integrity</h3>
          </div>
          <p className="text-white/60 text-sm leading-relaxed mb-8">AXCamps ensures that your personal information is handled with the highest standards of security and transparency.</p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: <FileLock className="w-4 h-4" />, text: "Secure Storage" },
              { icon: <Eye className="w-4 h-4" />, text: "No Data Selling" },
              { icon: <Shield className="w-4 h-4" />, text: "Strict Compliance" }
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 text-white/80 font-medium text-sm p-4 bg-white/5 rounded-2xl border border-white/10">
                <span className="text-cyan-400">{item.icon}</span>
                {item.text}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
