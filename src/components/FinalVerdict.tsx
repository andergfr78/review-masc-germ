import { ArrowRight, Star, Trophy, Zap, ShieldCheck, Clock } from 'lucide-react'

export function FinalVerdict() {
  return (
    <section className="py-12 md:py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
            🏆 Das Fazit unserer Redaktion
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Nach 90 Tagen intensiver Tests kommen wir zu einem klaren Ergebnis.
            Beide Produkte überzeugen – mit unterschiedlichen Stärken.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Erexiva Card */}
          <div className="relative bg-white rounded-2xl overflow-hidden shadow-2xl border-2 border-blue-500 hover:scale-[1.02] transition-transform duration-300">
            <div className="absolute top-0 right-0 bg-yellow-400 text-gray-900 font-black text-xs px-4 py-2 rounded-bl-xl flex items-center gap-1">
              <Trophy size={14} />
              TESTSIEGER
            </div>
            <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-6">
              <div className="flex items-center gap-4">
                <div className="w-20 h-20 bg-white rounded-xl p-2 shadow-lg">
                  <img src="/images/erexiva-product.png" alt="Erexiva" className="w-full h-full object-contain" />
                </div>
                <div className="text-white">
                  <h3 className="text-2xl font-black">Erexiva</h3>
                  <div className="flex items-center gap-1 mt-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} size={16} className="text-yellow-400 fill-yellow-400" />
                    ))}
                    <span className="ml-1 font-bold">4.9/5</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-6">
              <div className="space-y-3 mb-6">
                {[
                  { icon: Trophy, text: 'Beste Gesamtbewertung am Markt' },
                  { icon: ShieldCheck, text: 'Höchste Verträglichkeit (99%)' },
                  { icon: Star, text: '30.000+ zufriedene Kunden' },
                  { icon: Zap, text: 'Stärkste Dosierung' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <item.icon size={18} className="text-blue-600 shrink-0" />
                    <span className="text-gray-700 text-sm">{item.text}</span>
                  </div>
                ))}
              </div>
              <p className="text-gray-600 text-sm mb-6 italic">
                "Erexiva ist unser klarer Testsieger mit der besten
                Gesamtperformance, höchster Kundenzufriedenheit und
                erstklassiger Verträglichkeit."
              </p>
              <a
                href="https://www.earthwolftrack.com/32Z9NG21/23HR4TF4/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-gradient-to-r from-blue-600 to-blue-800 text-white font-bold py-4 rounded-xl text-center hover:shadow-xl hover:shadow-blue-500/30 transition-all flex items-center justify-center gap-2 text-lg"
              >
                🏆 Erexiva jetzt bestellen
                <ArrowRight size={20} />
              </a>
              <div className="mt-3 text-center text-xs text-gray-400 flex items-center justify-center gap-1">
                <Clock size={12} />
                Nur noch wenige Packungen verfügbar
              </div>
            </div>
          </div>

          {/* SX66 Card */}
          <div className="relative bg-white rounded-2xl overflow-hidden shadow-2xl border-2 border-red-500 hover:scale-[1.02] transition-transform duration-300">
            <div className="absolute top-0 right-0 bg-green-500 text-white font-black text-xs px-4 py-2 rounded-bl-xl flex items-center gap-1">
              <Zap size={14} />
              PREIS-TIPP
            </div>
            <div className="bg-gradient-to-r from-red-600 to-red-800 p-6">
              <div className="flex items-center gap-4">
                <div className="w-20 h-20 bg-white rounded-xl p-2 shadow-lg">
                  <img src="/images/sx66-product.png" alt="SX66" className="w-full h-full object-contain" />
                </div>
                <div className="text-white">
                  <h3 className="text-2xl font-black">SX66</h3>
                  <div className="flex items-center gap-1 mt-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} size={16} className={i < 4 ? 'text-yellow-400 fill-yellow-400' : 'text-yellow-400 fill-yellow-400'} />
                    ))}
                    <span className="ml-1 font-bold">4.8/5</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-6">
              <div className="space-y-3 mb-6">
                {[
                  { icon: Zap, text: 'Schnellste Wirkung (ab 20 Min)' },
                  { icon: Trophy, text: 'Bestes Preis-Leistungs-Verhältnis' },
                  { icon: ShieldCheck, text: '60-Tage Geld-zurück-Garantie' },
                  { icon: Star, text: '20.000+ zufriedene Kunden' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <item.icon size={18} className="text-red-600 shrink-0" />
                    <span className="text-gray-700 text-sm">{item.text}</span>
                  </div>
                ))}
              </div>
              <p className="text-gray-600 text-sm mb-6 italic">
                "SX66 ist der perfekte Preis-Tipp mit schnellster Wirkung und
                der längsten Geld-zurück-Garantie. Ideal für Einsteiger."
              </p>
              <a
                href="https://www.earthwolftrack.com/32Z9NG21/23C8QGFT/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-gradient-to-r from-red-600 to-red-800 text-white font-bold py-4 rounded-xl text-center hover:shadow-xl hover:shadow-red-500/30 transition-all flex items-center justify-center gap-2 text-lg"
              >
                ⚡ SX66 jetzt bestellen
                <ArrowRight size={20} />
              </a>
              <div className="mt-3 text-center text-xs text-gray-400 flex items-center justify-center gap-1">
                <Clock size={12} />
                Kostenloser Expressversand
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
