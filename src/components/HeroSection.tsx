import { ArrowDown, Star } from 'lucide-react'

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-gray-900 via-blue-950 to-gray-900 overflow-hidden">
      <div
        className="absolute inset-0 opacity-20 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/50 to-gray-900/70" />

      <div className="relative max-w-6xl mx-auto px-4 py-16 md:py-24">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 bg-red-600/90 text-white text-sm font-bold px-4 py-2 rounded-full mb-6 animate-pulse">
            🔬 EXKLUSIVER VERGLEICHSTEST 2025
          </div>

          <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
            Erexiva vs. SX66:{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
              Welches Potenzmittel
            </span>{' '}
            ist der wahre Testsieger?
          </h1>

          <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto mb-8 leading-relaxed">
            Unsere Redaktion hat beide Produkte 90 Tage lang getestet. Die
            Ergebnisse werden Sie überraschen. Lesen Sie den kompletten
            Vergleichsbericht mit echten Nutzererfahrungen.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-10">
            <div className="flex items-center gap-1 bg-white/10 backdrop-blur px-4 py-2 rounded-full text-white text-sm">
              <Star size={16} className="text-yellow-400 fill-yellow-400" />
              <Star size={16} className="text-yellow-400 fill-yellow-400" />
              <Star size={16} className="text-yellow-400 fill-yellow-400" />
              <Star size={16} className="text-yellow-400 fill-yellow-400" />
              <Star size={16} className="text-yellow-400 fill-yellow-400" />
              <span className="ml-2">4.9/5 (2.847 Bewertungen)</span>
            </div>
            <div className="bg-white/10 backdrop-blur px-4 py-2 rounded-full text-white text-sm">
              ✅ Klinisch getestet
            </div>
            <div className="bg-white/10 backdrop-blur px-4 py-2 rounded-full text-white text-sm">
              🇩🇪 Made in Germany
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://www.earthwolftrack.com/32Z9NG21/23HR4TF4/"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold px-8 py-4 rounded-xl text-lg transition-all duration-300 shadow-xl hover:shadow-blue-500/40 hover:scale-105 flex items-center gap-2"
            >
              🏆 Erexiva ansehen
              <ArrowDown size={18} className="group-hover:translate-y-1 transition-transform" />
            </a>
            <a
              href="https://www.earthwolftrack.com/32Z9NG21/23C8QGFT/"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold px-8 py-4 rounded-xl text-lg transition-all duration-300 shadow-xl hover:shadow-red-500/40 hover:scale-105 flex items-center gap-2"
            >
              ⚡ SX66 ansehen
              <ArrowDown size={18} className="group-hover:translate-y-1 transition-transform" />
            </a>
          </div>

          <div className="mt-10 flex items-center justify-center gap-6 text-gray-300 text-sm">
            <div className="flex -space-x-2">
              {['bg-blue-500', 'bg-green-500', 'bg-red-500', 'bg-yellow-500', 'bg-purple-500'].map(
                (c, i) => (
                  <div
                    key={i}
                    className={`w-8 h-8 rounded-full ${c} border-2 border-gray-900 flex items-center justify-center text-white text-xs font-bold`}
                  >
                    {['M', 'T', 'K', 'J', 'P'][i]}
                  </div>
                )
              )}
            </div>
            <span>
              <strong className="text-white">50.000+</strong> Männer vertrauen
              bereits
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
