import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, Shield, ScrollText, AlertCircle, Scale, FileText, Info, HelpCircle, CheckCircle2 } from "lucide-react";
import Navbar from "@/components/layout/Navbar";

const bgImage = "/attached_assets/454-1_1769059003561.jpeg";

const termsData = [
  {
    section: "Introduction",
    title: "About AXCamps",
    summary: "Overview of our identity and agreement terms. Defines AXCamps as a division of AXSX.",
    details: "This website is operated by AXCamps – Axploration Camps, a division of AXSX – Aeronautics & Space Exploration. AXCamps offers outdoor, educational, and experiential programs related to space, astronomy, exploration, stargazing events, astro-parties, tours, camps, workshops, and related services. By accessing our website or registering for any of our programs, you agree to be bound by these Terms and Conditions."
  },
  {
    section: "Section 1",
    title: "Eligibility & Participation Terms",
    summary: "Defines who can participate in AXCamps programs and confirms age eligibility. Participants must follow safety rules.",
    details: "By agreeing to these Terms, you confirm that you are of legal age in your place of residence or are registering under the consent of a parent or legal guardian. Participants must comply with all safety guidelines, instructions, and rules communicated during camps, events, tours, or workshops. Any violation may result in removal from the activity without refund."
  },
  {
    section: "Section 2",
    title: "General Conditions",
    summary: "AXCamps may refuse service for safety or policy reasons. Misuse of services or content is strictly prohibited.",
    details: "We reserve the right to refuse service or participation to anyone for safety, security, or operational reasons. You agree not to misuse our services, content, or intellectual property, and not to interfere with the smooth operation of events, camps, or digital platforms."
  },
  {
    section: "Section 3",
    title: "Information Accuracy",
    summary: "Website content may change due to operational or safety reasons. Users are responsible for verifying details.",
    details: "All information provided on this website is for general guidance. Event schedules, locations, inclusions, and activities may change due to weather, safety concerns, or operational requirements. AXCamps is not responsible for decisions made solely based on website information without confirmation."
  },
  {
    section: "Section 4",
    title: "Program Modifications & Pricing",
    summary: "Program prices and details may change at any time. Events may be modified or canceled for valid reasons.",
    details: "Prices, schedules, inclusions, or availability of camps and events may change without prior notice. AXCamps reserves the right to modify, reschedule, postpone, or cancel any program due to unforeseen circumstances."
  },
  {
    section: "Section 5",
    title: "Camps, Events & Services",
    summary: "Programs have limited availability and require confirmed registration. Experiences depend on weather conditions.",
    details: "Certain programs are offered exclusively online and may have limited seats. Registrations are confirmed only after successful payment. AXCamps does not guarantee specific outcomes, learning levels, celestial visibility, or experiences, as many activities depend on natural and external conditions."
  },
  {
    section: "Section 6",
    title: "Registration, Billing & Payments",
    summary: "Registrations may be canceled for incorrect information. Accurate billing and contact details are mandatory.",
    details: "AXCamps reserves the right to refuse or cancel registrations if false information is provided or policies are violated. Participants must provide accurate and updated contact and payment details to ensure smooth communication and participation."
  },
  {
    section: "Section 7",
    title: "Feedback, Media & Submissions",
    summary: "AXCamps may use shared feedback or media for promotions. Users are responsible for lawful submissions.",
    details: "Any feedback, testimonials, photos, videos, or content shared with AXCamps may be used for promotional or educational purposes unless explicitly requested otherwise. You agree not to submit unlawful, offensive, or misleading content."
  },
  {
    section: "Section 8",
    title: "Personal Information",
    summary: "Personal data is collected only for service delivery and safety. Information is protected under our Privacy Policy.",
    details: "Personal information collected during registrations or inquiries is handled according to our Privacy Policy and used only for operational, safety, and communication purposes. We do not sell or misuse personal data."
  },
  {
    section: "Section 9",
    title: "Errors & Omissions",
    summary: "Information errors may occur and will be corrected. AXCamps may revise affected registrations.",
    details: "Occasionally, errors related to schedules, pricing, or descriptions may occur. AXCamps reserves the right to correct such errors without prior notice. We may cancel or revise registrations affected by inaccuracies."
  },
  {
    section: "Section 10",
    title: "Prohibited Uses",
    summary: "Illegal, unsafe, or disruptive behavior is prohibited. Violations may lead to removal or service termination.",
    details: "Users must not engage in unlawful activities, harassment, data misuse, disruption of events, or violation of intellectual property rights. Violation may result in immediate termination of services or participation."
  },
  {
    section: "Section 11",
    title: "Indemnification",
    summary: "Participants are responsible for their actions. AXCamps is protected from claims caused by user misconduct.",
    details: "You agree to indemnify and hold harmless AXCamps and AXSX from any claims, damages, or losses arising from your actions, negligence, or violation of these Terms."
  },
  {
    section: "Section 12",
    title: "Severability",
    summary: "Invalid clauses do not affect the rest of the agreement. Remaining Terms continue to apply fully.",
    details: "If any provision of these Terms is found unenforceable, the remaining sections will remain valid and enforceable."
  },
  {
    section: "Section 13",
    title: "Termination",
    summary: "AXCamps may terminate services for policy violations. Prior obligations remain valid after termination.",
    details: "AXCamps may terminate access or participation if Terms are violated. Obligations incurred before termination remain enforceable."
  },
  {
    section: "Section 14",
    title: "Entire Agreement",
    summary: "This document represents the full agreement. Previous communications do not override these Terms.",
    details: "These Terms constitute the complete agreement between you and AXCamps, superseding all prior communications or understandings."
  },
  {
    section: "Section 15",
    title: "Changes to Terms",
    summary: "Terms may be updated periodically. Continued usage means acceptance of updates.",
    details: "AXCamps may update these Terms at any time. Continued use of the website or services indicates acceptance of changes."
  },
  {
    section: "Section 16",
    title: "Contact Information",
    summary: "Contact AXCamps for any Terms-related queries. Official website channels should be used.",
    details: "For any questions regarding these Terms, please contact AXCamps through the official communication channels provided on the website."
  }
];

export default function TermsConditions() {
  const [openSection, setOpenSection] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={bgImage} 
            alt="Starry Sky Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-7xl font-display font-bold text-white mb-6 uppercase tracking-tighter">
              Terms & <span className="text-blue-400">Conditions</span>
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto italic">
              "The guiding principles of our cosmic journey together."
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24 container mx-auto px-4 max-w-5xl">
        <div className="grid lg:grid-cols-[1fr_2fr] gap-12">
          {/* Quick Info Sidebar */}
          <div className="space-y-8">
            <div className="p-8 bg-blue-50 rounded-[2.5rem] border border-blue-100 sticky top-32">
              <Shield className="w-12 h-12 text-blue-600 mb-6" />
              <h3 className="text-2xl font-display font-bold text-slate-900 mb-4 uppercase">User Protection</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                These terms ensure a safe, educational, and respectful environment for all our participants and staff.
              </p>
              <div className="space-y-4">
                {[
                  { icon: <ScrollText className="w-4 h-4" />, text: "Legal Compliance" },
                  { icon: <AlertCircle className="w-4 h-4" />, text: "Safety First" },
                  { icon: <Scale className="w-4 h-4" />, text: "Fair Participation" }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-slate-700 font-medium text-sm">
                    <div className="p-2 bg-white rounded-lg shadow-sm">{item.icon}</div>
                    {item.text}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Accordion List */}
          <div className="space-y-6">
            {termsData.map((item, i) => (
              <div 
                key={i} 
                className={`group overflow-hidden border-2 rounded-[2rem] transition-all duration-500 ${
                  openSection === i 
                  ? "bg-white border-blue-600 shadow-2xl shadow-blue-600/10" 
                  : "bg-white border-slate-100 hover:border-blue-200"
                }`}
              >
                <button 
                  onClick={() => setOpenSection(openSection === i ? null : i)}
                  className="w-full flex items-center justify-between p-8 text-left transition-colors"
                  data-testid={`button-term-section-${i}`}
                >
                  <div className="flex items-center gap-6">
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-colors duration-500 ${
                      openSection === i ? "bg-blue-600 text-white" : "bg-slate-50 text-slate-400 group-hover:bg-blue-50 group-hover:text-blue-400"
                    }`}>
                      <FileText className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-slate-400 mb-1 block">
                        {item.section}
                      </span>
                      <h3 className="text-xl font-display font-bold text-slate-900 uppercase">
                        {item.title}
                      </h3>
                      <p className="text-sm text-slate-500 mt-1 max-w-md line-clamp-1 group-hover:text-slate-600 transition-colors">
                        {item.summary}
                      </p>
                    </div>
                  </div>
                  <div className={`p-2 rounded-full border transition-all duration-500 ${
                    openSection === i 
                    ? "bg-blue-600 border-blue-600 text-white rotate-180" 
                    : "border-slate-200 text-slate-400"
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
                        <div className="h-px bg-slate-100 w-full mb-6" />
                        <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                          <p className="text-slate-700 leading-relaxed">
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
        </div>
      </section>

      {/* Footer Contact */}
      <footer className="py-24 bg-slate-50 border-t border-slate-200 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-display font-bold mb-12 uppercase text-slate-900">Have Questions?</h2>
          <div className="flex flex-wrap justify-center gap-12">
            <div className="text-left">
              <span className="block text-xs uppercase tracking-widest text-slate-400 mb-1">WhatsApp</span>
              <span className="text-xl font-bold text-slate-900">+91 76665 19425</span>
            </div>
            <div className="text-left">
              <span className="block text-xs uppercase tracking-widest text-slate-400 mb-1">Inquiry Email</span>
              <span className="text-xl font-bold text-slate-900">axcamps@gmail.com</span>
            </div>
            <div className="text-left">
              <span className="block text-xs uppercase tracking-widest text-slate-400 mb-1">Official Site</span>
              <span className="text-xl font-bold text-slate-900">www.axsx.in</span>
            </div>
          </div>
          <p className="mt-16 text-xs text-slate-400 uppercase tracking-[0.2em]">
            © 2026 AXSX – Aeronautics & Space Exploration. All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
