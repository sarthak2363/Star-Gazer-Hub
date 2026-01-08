import { useState } from "react";
import { Link, useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { Telescope, Plane, Star, Users, Building, School, Map, Compass, Tent, Rocket, Wrench, Wind, ArrowRight, Calendar } from "lucide-react";
import { cn } from "@/lib/utils";
import logoImg from "@assets/A-camps_1767778433537.png";
import starGazingLogo from "@assets/StarGazing_white_1767861107932.png";
import astroToursLogo from "@assets/Astrotours_1767855727508.png";
import astroEventsLogo from "@assets/astroevents_1767855802920.png";

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
        { 
          title: "Public Stargazing", 
          href: "/stargazing/public", 
          icon: <Users className="w-4 h-4" />,
          nested: [
            { title: "10th Jan 2026", href: "/stargazing/public/jan-10" },
            { title: "24th Jan 2026", href: "/stargazing/public/jan-24" },
            { title: "25th Jan 2026", href: "/stargazing/public/jan-25" },
          ]
        },
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
        { title: "Pench Astro-Wildlife", href: "/astrotour/pench", icon: <Tent className="w-4 h-4" /> },
        { title: "Tadoba Astro-Wildlife", href: "/astrotour/tadoba", icon: <Compass className="w-4 h-4" /> },
        { title: "Ladakh & Hanle", href: "/astrotour/ladakh", icon: <Map className="w-4 h-4" /> },
      ]
    },
    {
      id: "aeromodelling",
      title: "Aeromodelling",
      href: "/aeromodelling",
      icon: <Plane className="w-5 h-5 text-purple-400" />,
      subItems: [
        { 
          title: "Events", 
          href: "/aeromodelling/events", 
          icon: <Calendar className="w-4 h-4" />,
          nested: [
            { title: "14th Jan 2026", href: "/aeromodelling/events/jan-14" },
            { title: "17th Jan 2026", href: "/aeromodelling/events/jan-17" },
          ]
        },
        { title: "RC Workshops", href: "/aeromodelling/workshops", icon: <Wrench className="w-4 h-4" /> },
        { title: "Flight School", href: "/aeromodelling/school", icon: <Rocket className="w-4 h-4" /> },
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
        <Link href="/">
          <div 
            className={cn(
              "relative z-50 flex items-center justify-center px-4 py-2 rounded-full cursor-pointer transition-all duration-300 backdrop-blur-md border",
              isHovering 
                ? "bg-black/80 border-[#93a5ff]/50 shadow-[0_0_30px_rgba(147,165,255,0.6)] scale-105" 
                : "bg-background/50 border-white/10"
            )}
          >
            <img 
              src={logoImg} 
              alt="Stargazer Logo" 
              className={cn(
                "h-8 w-auto object-contain transition-all duration-300",
                isHovering && "drop-shadow-[0_0_8px_rgba(147,165,255,0.8)]"
              )} 
            />
          </div>
        </Link>

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
                      {item.id === "stargazing" ? (
                        <img 
                          src={starGazingLogo} 
                          alt="StarGazing" 
                          className={cn(
                            "h-5 w-auto object-contain transition-all duration-300",
                            (location === item.href || activeMenu === item.id) && "drop-shadow-[0_0_8px_rgba(59,130,246,0.8)]"
                          )}
                        />
                      ) : item.id === "astrotour" ? (
                        <img 
                          src={astroToursLogo} 
                          alt="AstroTours" 
                          className={cn(
                            "h-5 w-auto object-contain transition-all duration-300",
                            (location === item.href || activeMenu === item.id) && "drop-shadow-[0_0_8px_rgba(59,130,246,0.8)]"
                          )}
                        />
                      ) : item.id === "aeromodelling" ? (
                        <img 
                          src={astroEventsLogo} 
                          alt="AstroEvents" 
                          className={cn(
                            "h-5 w-auto object-contain transition-all duration-300",
                            (location === item.href || activeMenu === item.id) && "drop-shadow-[0_0_8px_rgba(59,130,246,0.8)]"
                          )}
                        />
                      ) : (
                        <>
                          {item.icon}
                          <span className="font-display font-medium text-sm">{item.title}</span>
                        </>
                      )}
                    </div>
                  </Link>

                  {/* Vertical Submenu */}
                  <AnimatePresence>
                    {activeMenu === item.id && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute top-full left-0 mt-3 w-64 bg-black/95 border border-white/10 rounded-2xl overflow-visible shadow-2xl p-2"
                      >
                        {item.subItems.map((sub) => (
                          <div key={sub.title} className="relative group/sub">
                            <Link href={sub.href}>
                              <div className="flex items-center justify-between p-3 rounded-xl hover:bg-white/10 transition-colors cursor-pointer group/item">
                                <div className="flex items-center gap-3">
                                  <div className="text-muted-foreground group-hover/item:text-primary transition-colors">
                                    {sub.icon}
                                  </div>
                                  <span className="text-xs font-medium text-muted-foreground group-hover/item:text-white transition-colors">
                                    {sub.title}
                                  </span>
                                </div>
                                {sub.nested && (
                                  <ArrowRight className="w-3 h-3 text-muted-foreground/50 group-hover/item:text-white" />
                                )}
                              </div>
                            </Link>

                            {/* Level 3 Submenu */}
                            {sub.nested && (
                              <div className="absolute left-full top-0 ml-2 hidden group-hover/sub:block w-48 bg-black/95 border border-white/10 rounded-xl p-2 shadow-2xl">
                                {sub.nested.map((nest) => (
                                  <Link key={nest.title} href={nest.href}>
                                    <div className="p-2 rounded-lg hover:bg-white/10 transition-colors cursor-pointer text-[10px] text-muted-foreground hover:text-white font-medium">
                                      {nest.title}
                                    </div>
                                  </Link>
                                ))}
                              </div>
                            )}
                          </div>
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
