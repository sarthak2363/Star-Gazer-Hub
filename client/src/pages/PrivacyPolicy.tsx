import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, Shield, FileLock, Eye, Lock, ShieldCheck, Info, CheckCircle2 } from "lucide-react";
import Navbar from "@/components/layout/Navbar";

const bgImage = "/attached_assets/454-1_1769059003561.jpeg";

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
    <div className="min-h-screen bg-white">
      <Navbar />

      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={bgImage} alt="Privacy Background" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white" />
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
            <div key={i} className={`group overflow-hidden border-2 rounded-[2rem] transition-all duration-500 ${openSection === i ? "bg-white border-cyan-600 shadow-2xl shadow-cyan-600/10" : "bg-white border-slate-100 hover:border-cyan-200"}`}>
              <button onClick={() => setOpenSection(openSection === i ? null : i)} className="w-full flex items-center justify-between p-8 text-left transition-colors">
                <div className="flex items-center gap-6">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-colors duration-500 ${openSection === i ? "bg-cyan-600 text-white" : "bg-slate-50 text-slate-400 group-hover:bg-cyan-50 group-hover:text-cyan-400"}`}>
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-slate-400 mb-1 block">{item.section}</span>
                    <h3 className="text-xl font-display font-bold text-slate-900 uppercase">{item.title}</h3>
                    <p className="text-sm text-slate-500 mt-1 line-clamp-2 group-hover:text-slate-600 transition-colors">{item.summary}</p>
                  </div>
                </div>
                <div className={`p-2 rounded-full border transition-all duration-500 ${openSection === i ? "bg-cyan-600 border-cyan-600 text-white rotate-180" : "border-slate-200 text-slate-400"}`}>
                  <ChevronRight className="w-5 h-5" />
                </div>
              </button>
              <AnimatePresence>
                {openSection === i && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.5, ease: [0.04, 0.62, 0.23, 0.98] }}>
                    <div className="px-8 pb-8">
                      <div className="h-px bg-slate-100 w-full mb-6" />
                      <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                        <p className="text-slate-700 leading-relaxed">{item.details}</p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        <div className="p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100">
          <div className="flex items-center gap-4 mb-6">
            <Lock className="w-10 h-10 text-cyan-600" />
            <h3 className="text-2xl font-display font-bold text-slate-900 uppercase">Data Integrity</h3>
          </div>
          <p className="text-slate-600 text-sm leading-relaxed mb-8">AXCamps ensures that your personal information is handled with the highest standards of security and transparency.</p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: <FileLock className="w-4 h-4" />, text: "Secure Storage" },
              { icon: <Eye className="w-4 h-4" />, text: "No Data Selling" },
              { icon: <Shield className="w-4 h-4" />, text: "Strict Compliance" }
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 text-slate-700 font-medium text-sm p-4 bg-white rounded-2xl shadow-sm border border-slate-100">
                {item.icon}
                {item.text}
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="py-12 bg-slate-50 border-t border-slate-200 text-center">
        <div className="container mx-auto px-4">
          <div className="flex justify-center gap-6 text-[10px] uppercase tracking-widest text-slate-400 mb-6">
            <a href="/terms" className="hover:text-cyan-600 transition-colors">Terms & Conditions</a>
            <span>•</span>
            <a href="/privacy" className="hover:text-cyan-600 transition-colors">Privacy Policy</a>
          </div>
          <p className="text-[10px] text-slate-400 uppercase tracking-[0.2em]">© 2026 AXSX – Aeronautics & Space Exploration.</p>
        </div>
      </footer>
    </div>
  );
}
