export default function WhitePeakHolidays() {
  const packages = [
    {
      title: 'Shimla Tour Package',
      price: '₹4999 onwards',
      desc: 'Hotel stay, Kufri sightseeing, Mall Road visit & local support.'
    },
    {
      title: 'Honeymoon Package',
      price: '₹9999 per couple',
      desc: 'Couple room, candle light dinner & beautiful mountain views.'
    },
    {
      title: 'Snowfall Special Trip',
      price: 'Seasonal Pricing',
      desc: 'Fresh snowfall experience in Kufri & Narkanda.'
    },
    {
      title: 'Cab Service',
      price: '₹2500 starting',
      desc: 'Comfortable cab service for local & outstation travel.'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-slate-900 to-black opacity-95"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-7xl font-black leading-tight">
                WHITE PEAK
                <span className="block text-blue-400">HOLIDAYS</span>
              </h1>

              <p className="mt-6 text-xl text-slate-300 leading-relaxed">
                Explore Himachal With Locals ❄
                <br />
                Affordable tour packages, hotel booking, cab service & honeymoon trips.
              </p>

              <div className="flex flex-wrap gap-4 mt-8">
                <a
                  href="https://wa.me/918219495775"
                  className="bg-green-500 hover:bg-green-600 transition px-6 py-3 rounded-2xl text-lg font-bold shadow-xl"
                >
                  WhatsApp Now
                </a>

                <a
                  href="tel:+918219495775"
                  className="border border-white/30 hover:bg-white/10 transition px-6 py-3 rounded-2xl text-lg font-semibold"
                >
                  Call Now
                </a>
              </div>
            </div>

            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop"
                alt="Himachal"
                className="rounded-3xl shadow-2xl h-[450px] w-full object-cover border border-white/10"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-black">Our Popular Packages</h2>
          <p className="text-slate-400 mt-3">
            Best Himachal travel deals for couples, families & groups.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-6 hover:scale-105 transition"
            >
              <h3 className="text-2xl font-bold mb-3 text-blue-300">
                {pkg.title}
              </h3>

              <p className="text-yellow-400 font-bold text-xl mb-4">
                {pkg.price}
              </p>

              <p className="text-slate-300 leading-relaxed">
                {pkg.desc}
              </p>

              <a
                href="https://wa.me/918219495775"
                className="inline-block mt-6 bg-blue-500 hover:bg-blue-600 px-5 py-2 rounded-xl font-semibold"
              >
                Book Now
              </a>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white/5 border-y border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-8 text-center">
          <div className="bg-slate-900 rounded-3xl p-8 shadow-xl">
            <div className="text-5xl mb-4">🏔</div>
            <h3 className="text-2xl font-bold mb-3">Local Experts</h3>
            <p className="text-slate-400">
              Local Himachal support with trusted travel guidance.
            </p>
          </div>

          <div className="bg-slate-900 rounded-3xl p-8 shadow-xl">
            <div className="text-5xl mb-4">🚖</div>
            <h3 className="text-2xl font-bold mb-3">Comfortable Cab Service</h3>
            <p className="text-slate-400">
              Professional drivers with safe & comfortable rides.
            </p>
          </div>

          <div className="bg-slate-900 rounded-3xl p-8 shadow-xl">
            <div className="text-5xl mb-4">❄</div>
            <h3 className="text-2xl font-bold mb-3">Snowfall Trips</h3>
            <p className="text-slate-400">
              Enjoy snowfall tours in Shimla, Kufri & Narkanda.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-20 text-center">
        <h2 className="text-5xl font-black mb-6">
          Book Your Himachal Trip Today!
        </h2>

        <p className="text-xl text-slate-300 mb-8">
          Shimla • Manali • Kufri • Kasol
        </p>

        <div className="bg-gradient-to-r from-blue-600 to-cyan-500 rounded-3xl p-10 shadow-2xl">
          <h3 className="text-4xl font-black mb-4">
            📞 8219495775
          </h3>

          <p className="text-lg mb-6">
            WhatsApp us for instant booking & travel details.
          </p>

          <a
            href="https://wa.me/918219495775"
            className="bg-white text-slate-900 px-8 py-4 rounded-2xl font-black text-lg inline-block hover:scale-105 transition"
          >
            Chat On WhatsApp
          </a>
        </div>
      </section>

            <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-black">Travel Gallery</h2>
          <p className="text-slate-400 mt-3">Beautiful Himachal destinations & snowfall moments.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <img
            src="https://images.unsplash.com/photo-1516483638261-f4dbaf036963?q=80&w=1200&auto=format&fit=crop"
            className="rounded-3xl h-72 w-full object-cover"
            alt="Shimla"
          />

          <img
            src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop"
            className="rounded-3xl h-72 w-full object-cover"
            alt="Mountains"
          />

          <img
            src="https://images.unsplash.com/photo-1510798831971-661eb04b3739?q=80&w=1200&auto=format&fit=crop"
            className="rounded-3xl h-72 w-full object-cover"
            alt="Snowfall"
          />
        </div>
      </section>

      <section className="bg-white/5 border-y border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black">Customer Reviews</h2>
            <p className="text-slate-400 mt-3">What travellers say about us.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-slate-900 p-6 rounded-3xl border border-white/10">
              <p className="text-slate-300 leading-relaxed">
                “Amazing Shimla trip experience. Hotel and cab service was excellent.”
              </p>
              <h4 className="mt-4 font-bold text-blue-300">— Rahul, Delhi</h4>
            </div>

            <div className="bg-slate-900 p-6 rounded-3xl border border-white/10">
              <p className="text-slate-300 leading-relaxed">
                “Very supportive local team. Snowfall trip was unforgettable.”
              </p>
              <h4 className="mt-4 font-bold text-blue-300">— Priya, Chandigarh</h4>
            </div>

            <div className="bg-slate-900 p-6 rounded-3xl border border-white/10">
              <p className="text-slate-300 leading-relaxed">
                “Affordable packages with quick WhatsApp support. Recommended.”
              </p>
              <h4 className="mt-4 font-bold text-blue-300">— Aman, Punjab</h4>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-4xl font-black mb-6">Quick Booking Form</h2>

            <div className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full bg-slate-900 border border-white/10 rounded-2xl px-5 py-4"
              />

              <input
                type="text"
                placeholder="Phone Number"
                className="w-full bg-slate-900 border border-white/10 rounded-2xl px-5 py-4"
              />

              <input
                type="text"
                placeholder="Destination"
                className="w-full bg-slate-900 border border-white/10 rounded-2xl px-5 py-4"
              />

              <textarea
                placeholder="Trip Details"
                rows="5"
                className="w-full bg-slate-900 border border-white/10 rounded-2xl px-5 py-4"
              ></textarea>

              <a
                href="https://wa.me/918219495775"
                className="inline-block bg-green-500 hover:bg-green-600 px-8 py-4 rounded-2xl font-bold text-lg"
              >
                Submit On WhatsApp
              </a>
            </div>
          </div>

          <div className="bg-slate-900 rounded-3xl p-8 border border-white/10">
            <h3 className="text-3xl font-black mb-6">Contact & Location</h3>

            <div className="space-y-5 text-lg text-slate-300">
              <p>📍 Shimla, Himachal Pradesh</p>
              <p>📞 +91 8219495775</p>
              <p>✉ whitepeakholidays@gmail.com</p>
              <p>📸 Instagram: @whitepeakholidays</p>
            </div>

            <div className="mt-8 bg-white p-5 rounded-2xl text-slate-900 text-center font-bold text-xl">
              Scan & Pay QR
              <div className="mt-3 text-sm font-normal text-slate-600">
                Add your UPI QR image here
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 py-8 text-center text-slate-400">
        © 2026 White Peak Holidays • Safe Journey, Happy Memories ❄
      </footer>
    </div>
  );
}
