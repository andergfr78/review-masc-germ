import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

const faqs = [
  {
    q: 'Sind Erexiva und SX66 sicher in der Anwendung?',
    a: 'Ja, beide Produkte bestehen zu 100% aus natürlichen Inhaltsstoffen und werden in zertifizierten Labors in Deutschland hergestellt. Sie sind ohne Rezept erhältlich und haben keine bekannten schwerwiegenden Nebenwirkungen. Bei bestehenden Vorerkrankungen empfehlen wir dennoch eine Rücksprache mit Ihrem Arzt.',
  },
  {
    q: 'Wie schnell wirken die Produkte?',
    a: 'Erexiva zeigt seine Wirkung typischerweise nach 30-45 Minuten, während SX66 dank seiner Schnellwirk-Formel bereits nach 20 Minuten spürbar sein kann. Die volle Wirkung entfaltet sich bei regelmäßiger Einnahme über 2-4 Wochen.',
  },
  {
    q: 'Kann ich beide Produkte gleichzeitig einnehmen?',
    a: 'Wir empfehlen, sich für eines der beiden Produkte zu entscheiden und dieses regelmäßig einzunehmen. Eine gleichzeitige Einnahme ist nicht notwendig, da beide Produkte bereits einzeln hochwirksam sind.',
  },
  {
    q: 'Gibt es eine Geld-zurück-Garantie?',
    a: 'Ja! Erexiva bietet eine 30-Tage Geld-zurück-Garantie, SX66 sogar eine 60-Tage Garantie. Sie können beide Produkte also risikofrei testen.',
  },
  {
    q: 'Ist der Versand diskret?',
    a: 'Absolut. Beide Hersteller versenden in neutraler Verpackung ohne Hinweis auf den Inhalt. Die Zustellung erfolgt innerhalb von 1-3 Werktagen.',
  },
  {
    q: 'Für wen sind die Produkte geeignet?',
    a: 'Erexiva und SX66 sind für erwachsene Männer jeden Alters geeignet, die ihre Potenz, Ausdauer und Virilität auf natürliche Weise steigern möchten. Ob altersbedingte Beschwerden oder stressbedingte Probleme – beide Produkte können helfen.',
  },
  {
    q: 'Welches Produkt soll ich wählen?',
    a: 'Wenn Sie höchste Verträglichkeit und die beste Gesamtleistung suchen, empfehlen wir Erexiva (Testsieger). Wenn Sie eine schnellere Wirkung und das beste Preis-Leistungs-Verhältnis bevorzugen, ist SX66 die richtige Wahl.',
  },
]

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden bg-white">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-gray-50 transition-colors"
      >
        <span className="font-bold text-gray-900 pr-4">{q}</span>
        {open ? (
          <ChevronUp size={20} className="text-gray-400 shrink-0" />
        ) : (
          <ChevronDown size={20} className="text-gray-400 shrink-0" />
        )}
      </button>
      {open && (
        <div className="px-6 pb-4 text-gray-600 leading-relaxed border-t border-gray-100 pt-3">
          {a}
        </div>
      )}
    </div>
  )
}

export function FAQSection() {
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-black text-gray-900 mb-4">
            ❓ Häufig gestellte Fragen
          </h2>
          <p className="text-gray-600">
            Antworten auf die wichtigsten Fragen unserer Leser
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <FAQItem key={i} q={faq.q} a={faq.a} />
          ))}
        </div>

        <div className="mt-10 bg-gradient-to-r from-blue-600 via-purple-600 to-red-600 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-black text-white mb-3">
            Bereit, Ihr Liebesleben zu revolutionieren?
          </h3>
          <p className="text-white/80 mb-6 max-w-lg mx-auto">
            Schließen Sie sich über 50.000 zufriedenen Männern an und bestellen
            Sie noch heute Ihren Favoriten.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://www.earthwolftrack.com/32Z9NG21/23HR4TF4/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-blue-700 font-bold px-8 py-4 rounded-xl hover:bg-gray-100 transition-all hover:scale-105 shadow-lg flex items-center gap-2"
            >
              🏆 Erexiva bestellen
            </a>
            <a
              href="https://www.earthwolftrack.com/32Z9NG21/23C8QGFT/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-red-700 font-bold px-8 py-4 rounded-xl hover:bg-gray-100 transition-all hover:scale-105 shadow-lg flex items-center gap-2"
            >
              ⚡ SX66 bestellen
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
