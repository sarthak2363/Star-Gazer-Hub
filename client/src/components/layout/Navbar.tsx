import { useState } from "react";
import { Link, useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { Telescope, Plane, Star } from "lucide-react";
import { cn } from "@/lib/utils";
import logoImg from "@assets/axsx_white_water_mark_1767699971826.png";

export default function Navbar() {
  const [isHovering, setIsHovering] = useState(false);
  const [location] = useLocation();

  const menuItems = [
    {
      title: "Stargazing",
      href: "/stargazing",
      icon: <Star className="w-5 h-5 text-yellow-400" />,
      description: "Witness the cosmos",
    },
    {
      title: "Astrotour",
      href: "/astrotour",
      icon: <Telescope className="w-5 h-5 text-cyan-400" />,
      description: "Guided space journeys",
    },
    {
      title: "Aeromodelling",
      href: "/aeromodelling",
      icon: <Plane className="w-5 h-5 text-purple-400" />,
      description: "Build and fly",
    },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 px-4">
      <div 
        className="relative"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        {/* Logo Container */}
        <div 
          className={cn(
            "relative z-50 flex items-center justify-center gap-3 px-6 py-2 rounded-full cursor-pointer transition-all duration-300 backdrop-blur-md border",
            isHovering 
              ? "bg-black/80 border-primary/50 shadow-[0_0_20px_rgba(124,58,237,0.3)]" 
              : "bg-background/50 border-white/10"
          )}
        >
          <img src={logoImg} alt="Stargazer Logo" className="h-8 w-auto object-contain" />
          <span className="font-display font-bold text-xl tracking-wider text-white">
            STARGAZER
          </span>
        </div>

        {/* Dropdown Menu */}
        <AnimatePresence>
          {isHovering && (
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-72 bg-black/90 backdrop-blur-xl border border-white/10 rounded-xl overflow-hidden shadow-2xl"
            >
              <div className="p-2 flex flex-col gap-1">
                {menuItems.map((item) => (
                  <Link key={item.title} href={item.href}>
                    <div className={cn(
                      "flex items-center gap-3 p-3 rounded-lg hover:bg-white/10 transition-colors cursor-pointer group",
                      location === item.href && "bg-primary/20"
                    )}>
                      <div className="p-2 rounded-md bg-white/5 group-hover:bg-white/10 transition-colors">
                        {item.icon}
                      </div>
                      <div>
                        <div className="font-display font-bold text-sm text-white group-hover:text-primary transition-colors">
                          {item.title}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {item.description}
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
