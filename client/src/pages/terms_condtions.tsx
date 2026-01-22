import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
  CheckCircle2,
} from "lucide-react";
import Navbar from "@/components/layout/Navbar";


const heroimg ="/Ladakh/454-1-converted-from-jpg.jpeg";

const termsSections = [
  {
    id: 1,
    title: "Eligibility & Participation",
    summary:
      "Defines who can join AXCamps programs and age requirements. Participants must follow all safety and conduct rules.",
    content:
      "Participants must be of legal age or have guardian consent. All attendees must strictly follow safety instructions, event guidelines, and organizer directions. Violation may lead to removal without refund.",
  },
  {
    id: 2,
    title: "Program Modifications",
    summary:
      "Explains changes in schedules, pricing, or inclusions. Events may be modified due to weather or safety.",
    content:
      "AXCamps reserves the right to modify, reschedule, or cancel any program due to weather, safety, or operational reasons. Prices and inclusions are subject to change without prior notice.",
  },
  {
    id: 3,
    title: "Payments & Registration",
    summary:
      "Covers registration confirmation, billing accuracy, and cancellations.",
    content:
      "Registrations are confirmed only after successful payment. AXCamps may cancel registrations with incorrect or misleading information. Accurate contact and payment details are mandatory.",
  },
  {
    id: 4,
    title: "Personal Information",
    summary:
      "Describes how participant data is collected and protected.",
    content:
      "Personal information is collected only for operational, safety, and communication purposes and is handled according to our Privacy Policy.",
  },
];

  

  <div className="min-h-screen bg-[#B0E0E6] text-[#E6D3A3] selection:bg-white/30">
    <Navbar />

    {/* Hero Section */}
          <div className="absolute inset-0 z-0">
            <img
              src={heroimg}
              alt="Ladakh Landscape"
              className="w-full h-full object-cover"
            />

            {/* Overlay for readability */}
            <div className="absolute inset-0 bg-black/50" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-[#B0E0E6]" />
          </div>

          <h1 className="text-5xl md:text-8xl font-display font-bold mb-6 tracking-tighter uppercase leading-none drop-shadow-2xl text-white">
            TERMS & CONDITIONS <br />
            <span className="text-[#F1E2B8]">AXCamps – Axploration Camps</span>
          </h1>
          <p className="text-xl md:text-2xl text-white font-medium max-w-3xl mx-auto italic mb-10 drop-shadow-lg">
            "A Division of AXSX – Aeronautics & Space Exploration"
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <div className="px-8 py-4 bg-white/70 backdrop-blur-md border border-white/30 rounded-2xl text-blue-600 font-bold flex items-center gap-3 shadow-[0_0_25px_rgba(255,255,255,0.35)]">
              <CalendarIcon className="w-5 h-5 text-blue-600" />8 Days / 7
              Nights Journey
            </div>
            <button className="px-8 py-4 bg-blue-700 hover:bg-blue-600 text-white font-bold rounded-2xl transition-all shadow-[0_0_30px_rgba(29,78,216,0.3)]">
              Secure Your Spot
            </button>
          </div>
  </div>

    