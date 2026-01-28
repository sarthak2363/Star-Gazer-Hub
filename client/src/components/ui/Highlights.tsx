import {
  ShieldCheck,
  GraduationCap,
  Bus,
  Moon,
  Users,
  Star,
} from "lucide-react";

const highlights = [
  { icon: GraduationCap, text: "Affordable for Students" },
  { icon: ShieldCheck, text: "Safe & Supervised Environment" },
  { icon: Users, text: "Parents Consent Mandatory" },
  { icon: Star, text: "Best Stargazing Experience" },
  { icon: Bus, text: "Transport Service Provided" },
  { icon: Moon, text: "Darkest Sky Near Pune" },
];

export default function Highlights() {
  return (
    <section className="py-20 bg-black">
      <h2 className="text-center text-3xl font-bold mb-12">
        Why AstroParty – Student Edition?
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
        {highlights.map((item, index) => (
          <div
            key={index}
            className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:scale-105 transition"
          >
            <item.icon className="w-8 h-8 text-indigo-400 mb-4" />
            <p className="text-lg">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
