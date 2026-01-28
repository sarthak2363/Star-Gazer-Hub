export default function EventDetails() {
  return (
    <section id="details" className="py-20 bg-gradient-to-b from-black to-indigo-950">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10">
        <div>
          <h2 className="text-3xl font-bold mb-6">Event Details</h2>

          <ul className="space-y-4 text-lg text-gray-300">
            <li>📍 <strong>Location:</strong> Velhe, Near Pune</li>
            <li>📅 <strong>Date:</strong> 21st February 2026</li>
            <li>🚌 Transport from Pune Available</li>
            <li>🌌 Guided Astronomy + Telescopes</li>
            <li>🛏️ Comfortable & Safe Camping</li>
          </ul>
        </div>

        <div className="rounded-2xl overflow-hidden border border-white/10">
          <iframe
            className="w-full h-80"
            src="https://maps.google.com/maps?q=Velhe%20Pune&t=&z=11&ie=UTF8&iwloc=&output=embed"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
