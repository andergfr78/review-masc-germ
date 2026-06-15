import { Star, ShieldCheck, MessageCircle } from 'lucide-react'

const testimonials = [
  {
    name: 'Peter S.',
    age: 58,
    location: 'Dresden',
    product: 'Erexiva',
    productColor: 'blue',
    text: 'Habe beide Produkte getestet. Erexiva hat bei mir besser gewirkt, besonders was die Dauer angeht. Nach 3 Monaten bin ich rundum zufrieden.',
    rating: 5,
    date: 'vor 3 Tagen',
  },
  {
    name: 'Michael F.',
    age: 43,
    location: 'Düsseldorf',
    product: 'SX66',
    productColor: 'red',
    text: 'SX66 wirkt bei mir unfassbar schnell. Innerhalb von 20 Minuten merke ich die volle Wirkung. Genau das, was ich gesucht habe!',
    rating: 5,
    date: 'vor 1 Tag',
  },
  {
    name: 'Wolfgang T.',
    age: 63,
    location: 'Hannover',
    product: 'Erexiva',
    productColor: 'blue',
    text: 'Mit 63 hatte ich kaum noch Hoffnung. Dank Erexiva genieße ich wieder ein erfülltes Liebesleben. Meine Partnerin ist überglücklich!',
    rating: 5,
    date: 'vor 5 Tagen',
  },
  {
    name: 'Christian L.',
    age: 51,
    location: 'Nürnberg',
    product: 'SX66',
    productColor: 'red',
    text: 'Preis-Leistung von SX66 ist unschlagbar. Wirkt zuverlässig und ich habe keinerlei Nebenwirkungen bemerkt. Bestelle schon zum 4. Mal!',
    rating: 5,
    date: 'vor 2 Tagen',
  },
  {
    name: 'Ralf D.',
    age: 47,
    location: 'Leipzig',
    product: 'Erexiva',
    productColor: 'blue',
    text: 'Erexiva hat mein Selbstvertrauen komplett wiederhergestellt. Die natürlichen Inhaltsstoffe überzeugen mich, und die Wirkung ist phänomenal.',
    rating: 5,
    date: 'vor 1 Woche',
  },
  {
    name: 'Dieter M.',
    age: 56,
    location: 'Bremen',
    product: 'SX66',
    productColor: 'red',
    text: 'Bin von Viagra auf SX66 umgestiegen – beste Entscheidung! Keine Kopfschmerzen mehr, dafür eine natürliche, starke Wirkung.',
    rating: 5,
    date: 'vor 4 Tagen',
  },
  {
    name: 'Helmut K.',
    age: 67,
    location: 'München',
    product: 'Erexiva',
    productColor: 'blue',
    text: 'Auch mit 67 ist man noch nicht zum alten Eisen gehörend! Erexiva gibt mir die Kraft und Ausdauer zurück, die ich vermisst habe.',
    rating: 5,
    date: 'vor 6 Tagen',
  },
  {
    name: 'Frank W.',
    age: 39,
    location: 'Dortmund',
    product: 'SX66',
    productColor: 'red',
    text: 'Hatte stressbedingte Probleme. SX66 hat mir geholfen, wieder zur alten Form zurückzufinden. Kann es jedem Mann empfehlen!',
    rating: 4,
    date: 'vor 1 Woche',
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-12 md:py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 text-sm font-bold px-4 py-2 rounded-full mb-4">
            <ShieldCheck size={18} />
            VERIFIZIERTE KUNDENSTIMMEN
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
            💬 Echte Erfahrungsberichte unserer Leser
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Tausende Männer haben ihre Erfahrungen mit uns geteilt. Hier eine
            Auswahl der neuesten Berichte.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white rounded-xl p-5 border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-1">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} size={12} className="text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <span
                  className={`text-xs font-bold px-2 py-1 rounded-full ${
                    t.productColor === 'blue'
                      ? 'bg-blue-100 text-blue-700'
                      : 'bg-red-100 text-red-700'
                  }`}
                >
                  {t.product}
                </span>
              </div>
              <p className="text-gray-700 text-sm mb-4 italic leading-relaxed">
                "{t.text}"
              </p>
              <div className="flex items-center justify-between border-t border-gray-100 pt-3">
                <div>
                  <div className="font-bold text-gray-900 text-xs">
                    {t.name}, {t.age}
                  </div>
                  <div className="text-gray-400 text-xs">{t.location}</div>
                </div>
                <div className="flex items-center gap-1 text-gray-400 text-xs">
                  <MessageCircle size={12} />
                  {t.date}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <p className="text-gray-500 text-sm mb-2">
            Basierend auf über <strong>50.000</strong> verifizierten Kundenbewertungen
          </p>
          <div className="flex items-center justify-center gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} size={20} className="text-yellow-400 fill-yellow-400" />
            ))}
            <span className="ml-2 font-bold text-gray-900">4.9 Durchschnitt</span>
          </div>
        </div>
      </div>
    </section>
  )
}
