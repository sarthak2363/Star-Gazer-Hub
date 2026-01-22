import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, RefreshCw, XCircle, Ticket, Calendar, AlertTriangle, CheckCircle2, FileText } from "lucide-react";
import Navbar from "@/components/layout/Navbar";

const bgImage = "/attached_assets/454-1_1769059003561.jpeg";

const refundData = [
  {
    section: "Section 1",
    title: "Non-Attendance by Participant",
    summary: "Policy for participants unable to attend due to personal reasons or delays.",
    details: "If a participant is unable to attend an event, camp, or program due to personal reasons, health issues, travel delays, or any other circumstances: No monetary refund will be provided. A participation voucher will be issued instead, which can be redeemed for any upcoming AXCamps/AXSX event within 1 month from the original event date. The voucher is non-transferable and cannot be exchanged for cash."
  },
  {
    section: "Section 2",
    title: "Cancellation by Participant",
    summary: "Time-limited cancellation window and official request channels.",
    details: "Cancellations are allowed only within 2 days of registration. Any cancellation request made after 2 days from the date of registration will not be accepted. After this period, no refunds, credits, or vouchers will be issued. Cancellation requests must be made through official AXCamps communication channels only."
  },
  {
    section: "Section 3",
    title: "Event Cancellation by AXCamps / AXSX",
    summary: "Refund policy for events cancelled by the organizers due to external factors.",
    details: "In rare cases where an event is cancelled by AXCamps or AXSX due to unavoidable circumstances such as extreme weather, safety concerns, government restrictions, or logistical issues: A 100% refund of the registration amount will apply. Refunds will be processed to the original payment method within 5 working days."
  },
  {
    section: "Section 4",
    title: "Important Notes",
    summary: "Additional details regarding timelines and expense responsibilities.",
    details: "Refund timelines may vary depending on banking processing. AXCamps is not responsible for any travel, accommodation, or personal expenses incurred by participants. Decisions regarding refunds and vouchers are final and binding."
  },
  {
    section: "Section 5",
    title: "Acceptance of Policy",
    summary: "Confirmation of agreement upon registration for any program.",
    details: "By registering for any AXCamps or AXSX event, you acknowledge that you have read, understood, and agreed to this Refund & Cancellation Policy."
  }
];

export default function RefundPolicy() {
  const [openSection, setOpenSection] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-[#0a0c10] text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={bgImage} 
            alt="Refund Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/70 backdrop-blur-[2px]" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0a0c10]" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-7xl font-display font-bold text-white mb-6 uppercase tracking-tighter">
              Refund <span className="text-orange-400">Policy</span>
            </h1>
            <p className="text-xl text-orange-100 max-w-2xl mx-auto italic">
              "Ensuring fair and transparent policies for our explorers."
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24 container mx-auto px-4 max-w-5xl">
        {/* Accordion List */}
        <div className="space-y-6 mb-16">
          {refundData.map((item, i) => (
            <div 
              key={i} 
              className={`group overflow-hidden border transition-all duration-500 rounded-[2rem] ${
                openSection === i 
                ? "bg-white/5 border-orange-500/50 shadow-2xl shadow-orange-500/10" 
                : "bg-white/[0.02] border-white/10 hover:border-orange-500/30"
              }`}
            >
              <button 
                onClick={() => setOpenSection(openSection === i ? null : i)}
                className="w-full flex items-center justify-between p-8 text-left transition-colors"
                data-testid={`button-refund-section-${i}`}
              >
                <div className="flex items-center gap-6">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-colors duration-500 ${
                    openSection === i ? "bg-orange-600 text-white" : "bg-white/5 text-white/40 group-hover:bg-orange-600/20 group-hover:text-white"
                  }`}>
                    <RefreshCw className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/40 mb-1 block">
                      {item.section}
                    </span>
                    <h3 className="text-xl font-display font-bold text-white uppercase">
                      {item.title}
                    </h3>
                    <p className="text-sm text-white/60 mt-1 line-clamp-2 group-hover:text-white/80 transition-colors">
                      {item.summary}
                    </p>
                  </div>
                </div>
                <div className={`p-2 rounded-full border transition-all duration-500 ${
                  openSection === i 
                  ? "bg-orange-600 border-orange-600 text-white rotate-180" 
                  : "border-white/10 text-white/40"
                }`}>
                  <ChevronRight className="w-5 h-5" />
                </div>
              </button>

              <AnimatePresence>
                {openSection === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.5, ease: [0.04, 0.62, 0.23, 0.98] }}
                  >
                    <div className="px-8 pb-8">
                      <div className="h-px bg-white/10 w-full mb-6" />
                      <div className="bg-white/5 rounded-2xl p-6 border border-white/5">
                        <p className="text-white/80 leading-relaxed">
                          {item.details}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* Quick Reference */}
        <div className="p-8 bg-orange-900/10 rounded-[2.5rem] border border-orange-500/20">
          <div className="flex items-center gap-4 mb-6">
            <AlertTriangle className="w-10 h-10 text-orange-500" />
            <h3 className="text-2xl font-display font-bold text-white uppercase">Policy Summary</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: <XCircle className="w-4 h-4" />, text: "No Monetary Refunds for No-Shows", color: "text-red-400" },
              { icon: <Ticket className="w-4 h-4" />, text: "Vouchers Issued (1 Month Validity)", color: "text-orange-400" },
              { icon: <CheckCircle2 className="w-4 h-4" />, text: "100% Organiser Cancellation Refund", color: "text-green-400" }
            ].map((item, i) => (
              <div key={i} className="flex flex-col gap-3 p-6 bg-white/5 rounded-2xl border border-white/10">
                <span className={item.color}>{item.icon}</span>
                <span className="text-white/80 font-medium text-sm leading-tight">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Contact */}
      <footer className="py-12 bg-black/40 border-t border-white/10 text-center">
        <div className="container mx-auto px-4">
          <div className="flex justify-center gap-6 text-[10px] uppercase tracking-widest text-white/40 mb-6 font-medium">
            <a href="/terms" className="hover:text-orange-400 transition-colors">Terms & Conditions</a>
            <span>•</span>
            <a href="/privacy" className="hover:text-orange-400 transition-colors">Privacy Policy</a>
            <span>•</span>
            <a href="/refund" className="hover:text-orange-400 transition-colors font-bold text-white">Refund Policy</a>
          </div>
          <p className="text-[10px] text-white/20 uppercase tracking-[0.2em]">
            © 2026 AXSX – Aeronautics & Space Exploration.
          </p>
        </div>
      </footer>
    </div>
  );
}
