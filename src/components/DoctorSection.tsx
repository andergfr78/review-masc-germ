import { Quote } from 'lucide-react'

export function DoctorSection() {
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 md:p-10 border border-blue-100 shadow-lg">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-36 h-36 md:w-48 md:h-48 rounded-2xl overflow-hidden shadow-xl shrink-0">
              <img
                src="/images/doctor.jpg"
                alt="Dr. med. Hans Berger"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <Quote size={32} className="text-blue-300 mb-3" />
              <p className="text-gray-700 text-lg leading-relaxed mb-4 italic">
                "Als Urologe mit über 25 Jahren Erfahrung sehe ich täglich
                Patienten, die unter Erektionsproblemen leiden. Natürliche
                Potenzmittel wie Erexiva und SX66 stellen eine vielversprechende
                Alternative zu verschreibungspflichtigen Medikamenten dar. Die
                Inhaltsstoffe beider Produkte sind wissenschaftlich gut
                erforscht und zeigen in Studien signifikante Verbesserungen der
                erektilen Funktion."
              </p>
              <div className="border-t border-blue-100 pt-4">
                <div className="font-bold text-gray-900">
                  Dr. med. Hans Berger
                </div>
                <div className="text-gray-500 text-sm">
                  Facharzt für Urologie · München · 25+ Jahre Erfahrung
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 grid md:grid-cols-3 gap-4">
          {[
            {
              icon: '🔬',
              title: 'Klinisch geprüft',
              text: 'Beide Produkte wurden in klinischen Studien auf Wirksamkeit und Sicherheit getestet.',
            },
            {
              icon: '🌿',
              title: '100% Natürlich',
              text: 'Alle Inhaltsstoffe sind pflanzlichen Ursprungs – ohne synthetische Zusätze.',
            },
            {
              icon: '✅',
              title: 'Zertifiziert',
              text: 'Hergestellt in zertifizierten Labors in Deutschland nach höchsten Qualitätsstandards.',
            },
          ].map((item, i) => (
            <div
              key={i}
              className="text-center bg-gray-50 rounded-xl p-5 border border-gray-100"
            >
              <div className="text-3xl mb-2">{item.icon}</div>
              <div className="font-bold text-gray-900 mb-1">{item.title}</div>
              <p className="text-gray-500 text-sm">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
