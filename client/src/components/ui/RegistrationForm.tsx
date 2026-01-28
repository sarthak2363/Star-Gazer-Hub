"use client";

export default function RegistrationForm() {
  return (
    <section id="register" className="py-24 bg-indigo-950">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-10">
          Student Registration
        </h2>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-black/40 p-8 rounded-3xl border border-white/10">

          <input className="input" placeholder="Student Name" />
          <input className="input" placeholder="Contact Number" />
          <input className="input" placeholder="Email Address" />
          <input className="input" placeholder="Parents Contact Number" />

          <input className="input" placeholder="College Name" />
          <input className="input" placeholder="Year of Study" />
          <input className="input" placeholder="Branch" />

          <div>
            <label className="text-sm text-gray-400">College ID</label>
            <input type="file" className="file-input" />
          </div>

          <div>
            <label className="text-sm text-gray-400">Birth Proof (Aadhaar)</label>
            <input type="file" className="file-input" />
          </div>

          <div className="md:col-span-2 flex items-center gap-3">
            <input type="checkbox" />
            <span className="text-sm">
              I have parents consent to attend this event
            </span>
          </div>

          <button
            type="button"
            className="md:col-span-2 bg-indigo-600 hover:bg-indigo-700 py-4 rounded-xl font-semibold text-lg"
          >
            Proceed to Payment
          </button>
        </form>
      </div>
    </section>
  );
}
