import { useState } from "react";
import { Link, useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { Telescope, Plane, Star, Users, Building, School, Map, Compass, Tent, Rocket, Wrench, Wind } from "lucide-react";
import { cn } from "@/lib/utils";
import logoImg from "@assets/axsx_white_water_mark_1767699971826.png";

export default function Navbar() {
  const [isHovering, setIsHovering] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [location] = useLocation();

  const menuItems = [
    {
      id: "stargazing",
      title: "Stargazing",
      href: "/stargazing",
      icon: <Star className="w-5 h-5 text-yellow-400" />,
      subItems: [
        { title: "Public Stargazing", href: "/stargazing/public", icon: <Users className="w-4 h-4" /> },
        { title: "Corporate Events", href: "/stargazing/corporate", icon: <Building className="w-4 h-4" /> },
        { title: "School Programs", href: "/stargazing/school", icon: <School className="w-4 h-4" /> },
      ]
    },
    {
      id: "astrotour",
      title: "Astrotour",
      href: "/astrotour",
      icon: <Telescope className="w-5 h-5 text-cyan-400" />,
      subItems: [
        { title: "Desert Expeditions", href: "/astrotour/desert", icon: <Tent className="w-4 h-4" /> },
        { title: "Mountain Retreats", href: "/astrotour/mountain", icon: <Compass className="w-4 h-4" /> },
        { title: "Dark Sky Maps", href: "/astrotour/maps", icon: <Map className="w-4 h-4" /> },
      ]
    },
    {
      id: "aeromodelling",
      title: "Aeromodelling",
      href: "/aeromodelling",
      icon: <Plane className="w-5 h-5 text-purple-400" />,
      subItems: [
        { title: "RC Workshops", href: "/aeromodelling/workshops", icon: <Wrench className="w-4 h-4" /> },
        { title: "Flight School", href: "/aeromodelling/school", icon: <Rocket className="w-4 h-4" /> },
        { title: "Wind Tunnel", href: "/aeromodelling/wind", icon: <Wind className="w-4 h-4" /> },
      ]
    },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 px-4">
      <div 
        className="relative flex flex-col items-center"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => {
          setIsHovering(false);
          setActiveMenu(null);
        }}
      >
        {/* Logo Container */}
        <div 
          className={cn(
            "relative z-50 flex items-center justify-center px-4 py-2 rounded-full cursor-pointer transition-all duration-300 backdrop-blur-md border",
            isHovering 
              ? "bg-black/80 border-primary/50 shadow-[0_0_20px_rgba(124,58,237,0.3)]" 
              : "bg-background/50 border-white/10"
          )}
        >
          <img src={logoImg} alt="Stargazer Logo" className="h-10 w-auto object-contain" />
        </div>

        {/* Main Horizontal Menu */}
        <AnimatePresence>
          {isHovering && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="mt-4 flex gap-2 p-2 bg-black/90 backdrop-blur-xl border border-white/10 rounded-full shadow-2xl"
            >
              {menuItems.map((item) => (
                <div 
                  key={item.id}
                  className="relative group"
                  onMouseEnter={() => setActiveMenu(item.id)}
                >
                  <Link href={item.href}>
                    <div className={cn(
                      "flex items-center gap-2 px-4 py-2 rounded-full cursor-pointer transition-all whitespace-nowrap",
                      (location === item.href || activeMenu === item.id) ? "bg-white/15 text-white" : "text-muted-foreground hover:text-white"
                    )}>
                      {item.icon}
                      <span className="font-display font-medium text-sm">{item.title}</span>
                    </div>
                  </Link>

                  {/* Vertical Submenu */}
                  <AnimatePresence>
                    {activeMenu === item.id && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute top-full left-0 mt-3 w-56 bg-black/95 border border-white/10 rounded-2xl overflow-hidden shadow-2xl p-2"
                      >
                        {item.subItems.map((sub) => (
                          <Link key={sub.title} href={sub.href}>
                            <div className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/10 transition-colors cursor-pointer group">
                              <div className="text-muted-foreground group-hover:text-primary transition-colors">
                                {sub.icon}
                              </div>
                              <span className="text-xs font-medium text-muted-foreground group-hover:text-white transition-colors">
                                {sub.title}
                              </span>
                            </div>
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
