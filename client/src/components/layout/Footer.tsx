import logoImg from "@assets/A-camps_1767778433537.png";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black/90 border-t border-white/10 py-8 px-6 md:px-12 relative z-10">
      <div className="container mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        {/* Left: Logo */}
        <div className="flex justify-center md:justify-start">
          <img src={logoImg} alt="A-CAMPS Logo" className="h-6 w-auto object-contain opacity-80" />
        </div>

        {/* Center: Contact */}
        <div className="flex flex-col items-center gap-2 text-[10px] tracking-widest uppercase text-white/60">
          <div className="flex items-center gap-2 hover:text-white transition-colors">
            <Mail className="w-3 h-3" />
            <span>info@axsx.in</span>
          </div>
          <div className="flex items-center gap-2 hover:text-white transition-colors">
            <Phone className="w-3 h-3" />
            <span>+91-9028174363 / +91-7666519425</span>
          </div>
        </div>

        {/* Right: Address */}
        <div className="flex items-start justify-center md:justify-end gap-2 text-[10px] tracking-widest uppercase text-white/60 text-center md:text-right max-w-xs mx-auto md:ml-auto md:mr-0">
          <MapPin className="w-3 h-3 mt-0.5 flex-shrink-0" />
          <span>Office no 408, Shree Siddhivinayak Angan, Near Navle Bridge, Narhe, pune – 41.</span>
        </div>
      </div>
      
      <div className="mt-8 text-center text-[8px] tracking-[0.3em] uppercase text-white/30">
        Stargazer Ventures &copy; 2026
      </div>
    </footer>
  );
}
