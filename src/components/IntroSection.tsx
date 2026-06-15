import { AlertTriangle, CheckCircle2 } from 'lucide-react'

export function IntroSection() {
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-lg mb-8 flex items-start gap-3">
          <AlertTriangle className="text-amber-500 shrink-0 mt-0.5" size={20} />
          <p className="text-sm text-amber-800">
            <strong>Redaktioneller Hinweis:</strong> Unsere Bewertungen basieren auf unabhängigen Tests
            und echten Nutzererfahrungen.
          </p>
        </div>

        <div className="prose prose-lg max-w-none">
          <p className="text-gray-500 text-sm mb-2 uppercase tracking-wider font-semibold">
            Von der Redaktion · Lesezeit: 8 Minuten
          </p>
          <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-6">
            Erektionsprobleme betreffen Millionen Männer – doch welches
            natürliche Mittel hilft wirklich?
          </h2>

          <div className="flex flex-col md:flex-row gap-6 mb-8">
            <div className="flex-1">
              <img
                src="/images/couple-happy.jpg"
                alt="Glückliches Paar"
                className="w-full h-48 md:h-64 object-cover rounded-xl shadow-lg"
              />
              <p className="text-xs text-gray-400 mt-2 italic text-center">
                Natürliche Potenzmittel können die Lebensqualität deutlich verbessern
              </p>
            </div>
            <div className="flex-1 flex flex-col justify-center">
              <p className="text-gray-700 leading-relaxed mb-4">
                Laut einer aktuellen Studie der Deutschen Gesellschaft für
                Urologie leiden <strong>über 6 Millionen Männer</strong> in
                Deutschland an Erektionsstörungen. Viele scheuen den Gang zum
                Arzt und suchen nach natürlichen Alternativen.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Wir haben die zwei beliebtesten natürlichen Potenzmittel –{' '}
                <strong>Erexiva</strong> und <strong>SX66</strong> – einem
                umfassenden 90-Tage-Test unterzogen und präsentieren Ihnen hier
                die Ergebnisse.
              </p>
            </div>
          </div>

          <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
            <h3 className="text-lg font-bold text-blue-900 mb-4">
              Was wir getestet haben:
            </h3>
            <div className="grid md:grid-cols-2 gap-3">
              {[
                'Wirksamkeit bei Erektionsproblemen',
                'Steigerung der Libido und Ausdauer',
                'Qualität der Inhaltsstoffe',
                'Geschwindigkeit der Wirkung',
                'Preis-Leistungs-Verhältnis',
                'Kundenzufriedenheit & Bewertungen',
                'Nebenwirkungsprofil',
                'Langzeitwirkung nach 90 Tagen',
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-blue-800">
                  <CheckCircle2 size={18} className="text-green-500 shrink-0" />
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
