import { Star, CheckCircle2, ArrowRight, ShieldCheck, Clock, Zap, Heart, TrendingUp, Award } from 'lucide-react'
import { RatingBar } from './RatingBar'

interface ProductReviewProps {
  product: 'erexiva' | 'sx66'
  name: string
  link: string
}

const productData = {
  erexiva: {
    image: '/images/erexiva-product.png',
    tagline: 'Der Marktführer für natürliche Potenzsteigerung',
    overallRating: 4.9,
    description:
      'Erexiva ist das meistverkaufte natürliche Potenzmittel in Deutschland und hat sich durch seine hochwirksame Formel einen exzellenten Ruf erarbeitet. Die einzigartige Kombination aus 12 klinisch getesteten Inhaltsstoffen sorgt für eine schnelle und nachhaltige Wirkung.',
    color: 'blue',
    gradientFrom: 'from-blue-600',
    gradientTo: 'to-blue-800',
    bgLight: 'bg-blue-50',
    borderColor: 'border-blue-200',
    textColor: 'text-blue-700',
    badge: '🏆 TESTSIEGER 2025',
    badgeBg: 'bg-blue-600',
    ingredients: [
      { name: 'L-Arginin (1500mg)', desc: 'Fördert die Durchblutung und Stickstoffmonoxid-Produktion' },
      { name: 'Maca-Extrakt (800mg)', desc: 'Steigert Libido und sexuelle Leistungsfähigkeit' },
      { name: 'Tribulus Terrestris (600mg)', desc: 'Unterstützt natürliche Testosteronproduktion' },
      { name: 'Zink (15mg)', desc: 'Essentiell für die Testosteronsynthese' },
      { name: 'Ginseng-Extrakt (500mg)', desc: 'Verbessert Energie und Ausdauer' },
      { name: 'Bockshornklee (400mg)', desc: 'Steigert Libido und Vitalität' },
    ],
    ratings: {
      wirksamkeit: 98,
      inhaltsstoffe: 97,
      vertraeglichkeit: 99,
      preisLeistung: 95,
      kundenzufriedenheit: 98,
    },
    pros: [
      'Schnelle Wirkung – bereits nach 30-45 Minuten spürbar',
      'Höchste Dosierung am Markt',
      '100% natürliche Inhaltsstoffe',
      'Klinisch getestet und zugelassen',
      'Keine bekannten Nebenwirkungen',
      'Diskreter Versand innerhalb 24h',
      '30-Tage Geld-zurück-Garantie',
      'Über 30.000 positive Bewertungen',
    ],
    cons: [
      'Nur online erhältlich',
      'Hohe Nachfrage – teilweise ausverkauft',
    ],
    testimonials: [
      {
        name: 'Markus W.',
        age: 52,
        location: 'München',
        text: 'Nach nur 2 Wochen Erexiva hat sich mein Liebesleben komplett verändert. Meine Frau und ich sind begeistert! Die Wirkung ist beeindruckend und hält stundenlang an.',
        rating: 5,
        verified: true,
      },
      {
        name: 'Thomas K.',
        age: 47,
        location: 'Hamburg',
        text: 'Ich war skeptisch, aber Erexiva hat alle meine Erwartungen übertroffen. Endlich wieder volle Manneskraft – und das ganz ohne Nebenwirkungen!',
        rating: 5,
        verified: true,
      },
      {
        name: 'Stefan B.',
        age: 61,
        location: 'Berlin',
        text: 'Mit 61 dachte ich, meine besten Tage wären vorbei. Erexiva hat mir das Gegenteil bewiesen. Fühle mich wie 30! Absolut empfehlenswert.',
        rating: 5,
        verified: true,
      },
    ],
  },
  sx66: {
    image: '/images/sx66-product.png',
    tagline: 'Die Power-Formel für maximale Virilität',
    overallRating: 4.8,
    description:
      'SX66 ist das innovative Potenzmittel der neuesten Generation. Mit seiner patentierten Schnellwirk-Formel und dem Fokus auf maximale Stärke hat sich SX66 als starke Alternative auf dem Markt etabliert. Besonders Männer, die eine intensive Wirkung suchen, schwören auf dieses Produkt.',
    color: 'red',
    gradientFrom: 'from-red-600',
    gradientTo: 'to-red-800',
    bgLight: 'bg-red-50',
    borderColor: 'border-red-200',
    textColor: 'text-red-700',
    badge: '⚡ POWER-FORMEL',
    badgeBg: 'bg-red-600',
    ingredients: [
      { name: 'L-Citrullin (1200mg)', desc: 'Stärkerer Blutfluss und härte Erektionen' },
      { name: 'Tongkat Ali (700mg)', desc: 'Kraftvoller Testosteron-Booster' },
      { name: 'Yohimbin-Extrakt (300mg)', desc: 'Schnelle Erregungssteigerung' },
      { name: 'Schwarzer Pfeffer (20mg)', desc: 'Verbessert Bioverfügbarkeit um 30%' },
      { name: 'Selen (100mcg)', desc: 'Unterstützt Spermienproduktion' },
      { name: 'Vitamin D3 (2000 IE)', desc: 'Optimiert Hormonhaushalt' },
    ],
    ratings: {
      wirksamkeit: 96,
      inhaltsstoffe: 94,
      vertraeglichkeit: 95,
      preisLeistung: 97,
      kundenzufriedenheit: 96,
    },
    pros: [
      'Extrem schnelle Wirkung – ab 20 Minuten',
      'Patentierte Power-Formel',
      'Bestes Preis-Leistungs-Verhältnis',
      'Intensive und lang anhaltende Wirkung',
      'Natürliche Premium-Inhaltsstoffe',
      'Kostenloser Expressversand',
      '60-Tage Geld-zurück-Garantie',
      'Über 20.000 positive Bewertungen',
    ],
    cons: [
      'Nicht für Männer mit Bluthochdruck geeignet',
      'Jüngeres Produkt am Markt',
    ],
    testimonials: [
      {
        name: 'Andreas M.',
        age: 44,
        location: 'Köln',
        text: 'SX66 ist der Hammer! Schon nach der ersten Einnahme habe ich einen deutlichen Unterschied gespürt. Die Power-Formel macht ihrem Namen alle Ehre.',
        rating: 5,
        verified: true,
      },
      {
        name: 'Jürgen H.',
        age: 55,
        location: 'Frankfurt',
        text: 'Habe vieles probiert, aber SX66 hat mich am meisten überzeugt. Die schnelle Wirkung ist sensationell und der Preis ist fair. Klare Kaufempfehlung!',
        rating: 5,
        verified: true,
      },
      {
        name: 'Klaus R.',
        age: 49,
        location: 'Stuttgart',
        text: 'Mein Selbstvertrauen ist dank SX66 zurück! Die Wirkung ist zuverlässig und ich fühle mich wieder als ganzer Mann. Meine Partnerin merkt den Unterschied.',
        rating: 5,
        verified: true,
      },
    ],
  },
}

export function ProductReview({ product, name, link }: ProductReviewProps) {
  const data = productData[product]

  return (
    <section className={`py-12 md:py-16 ${product === 'sx66' ? 'bg-gray-50' : 'bg-white'}`}>
      <div className="max-w-5xl mx-auto px-4">
        {/* Product Header */}
        <div className={`rounded-2xl overflow-hidden shadow-2xl border ${data.borderColor} mb-10`}>
          <div className={`bg-gradient-to-r ${data.gradientFrom} ${data.gradientTo} p-6 md:p-8`}>
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="w-48 h-48 md:w-56 md:h-56 bg-white rounded-2xl p-4 shadow-xl flex-shrink-0">
                <img
                  src={data.image}
                  alt={name}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="text-center md:text-left text-white">
                <span className={`inline-block ${data.badgeBg} text-white text-xs font-bold px-3 py-1 rounded-full mb-3`}>
                  {data.badge}
                </span>
                <h2 className="text-3xl md:text-4xl font-black mb-2">{name}</h2>
                <p className="text-lg opacity-90 mb-4">{data.tagline}</p>
                <div className="flex items-center justify-center md:justify-start gap-1 mb-3">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      size={22}
                      className={
                        i < Math.floor(data.overallRating)
                          ? 'text-yellow-400 fill-yellow-400'
                          : 'text-yellow-400/40'
                      }
                    />
                  ))}
                  <span className="ml-2 text-lg font-bold">{data.overallRating}/5.0</span>
                </div>
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white text-gray-900 font-bold px-6 py-3 rounded-xl hover:bg-gray-100 transition-all hover:scale-105 shadow-lg"
                >
                  Jetzt {name} bestellen
                  <ArrowRight size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="mb-10">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Über {name}
          </h3>
          <p className="text-gray-700 leading-relaxed text-lg">{data.description}</p>
        </div>

        {/* Ratings */}
        <div className={`${data.bgLight} rounded-xl p-6 md:p-8 mb-10 border ${data.borderColor}`}>
          <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <TrendingUp size={22} className={data.textColor} />
            Bewertung im Detail
          </h3>
          <div className="space-y-4">
            <RatingBar label="Wirksamkeit" value={data.ratings.wirksamkeit} color={data.color} />
            <RatingBar label="Inhaltsstoffe" value={data.ratings.inhaltsstoffe} color={data.color} />
            <RatingBar label="Verträglichkeit" value={data.ratings.vertraeglichkeit} color={data.color} />
            <RatingBar label="Preis-Leistung" value={data.ratings.preisLeistung} color={data.color} />
            <RatingBar label="Kundenzufriedenheit" value={data.ratings.kundenzufriedenheit} color={data.color} />
          </div>
        </div>

        {/* Ingredients */}
        <div className="mb-10">
          <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <Zap size={22} className={data.textColor} />
            Wirkstoffe & Inhaltsstoffe
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {data.ingredients.map((ing, i) => (
              <div
                key={i}
                className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-start gap-3">
                  <div className={`w-8 h-8 rounded-lg ${data.color === 'blue' ? 'bg-blue-100' : 'bg-red-100'} flex items-center justify-center shrink-0`}>
                    <CheckCircle2 size={18} className={data.textColor} />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 text-sm">{ing.name}</div>
                    <div className="text-gray-500 text-sm">{ing.desc}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pros and Cons */}
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          <div className="bg-green-50 rounded-xl p-6 border border-green-200">
            <h4 className="text-lg font-bold text-green-800 mb-4 flex items-center gap-2">
              ✅ Vorteile
            </h4>
            <ul className="space-y-3">
              {data.pros.map((pro, i) => (
                <li key={i} className="flex items-start gap-2 text-green-800">
                  <CheckCircle2 size={16} className="text-green-500 shrink-0 mt-0.5" />
                  <span className="text-sm">{pro}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-orange-50 rounded-xl p-6 border border-orange-200">
            <h4 className="text-lg font-bold text-orange-800 mb-4 flex items-center gap-2">
              ⚠️ Nachteile
            </h4>
            <ul className="space-y-3">
              {data.cons.map((con, i) => (
                <li key={i} className="flex items-start gap-2 text-orange-800">
                  <span className="text-orange-500 shrink-0 mt-0.5">–</span>
                  <span className="text-sm">{con}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Product Testimonials */}
        <div className="mb-10">
          <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <Heart size={22} className={data.textColor} />
            Was Kunden über {name} sagen
          </h3>
          <div className="grid md:grid-cols-3 gap-4">
            {data.testimonials.map((t, i) => (
              <div
                key={i}
                className="bg-white rounded-xl p-5 border border-gray-200 shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center gap-1 mb-3">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} size={14} className="text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 text-sm mb-4 italic">"{t.text}"</p>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-bold text-gray-900 text-sm">{t.name}, {t.age}</div>
                    <div className="text-gray-500 text-xs">{t.location}</div>
                  </div>
                  {t.verified && (
                    <div className="flex items-center gap-1 text-green-600 text-xs font-medium">
                      <ShieldCheck size={14} />
                      Verifiziert
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className={`bg-gradient-to-r ${data.gradientFrom} ${data.gradientTo} rounded-2xl p-8 text-center shadow-xl`}>
          <div className="flex items-center justify-center gap-2 mb-3">
            <Award className="text-yellow-400" size={28} />
            <h3 className="text-2xl font-black text-white">
              Gesamtbewertung: {data.overallRating}/5.0
            </h3>
          </div>
          <p className="text-white/90 mb-6 max-w-xl mx-auto">
            {product === 'erexiva'
              ? 'Erexiva überzeugt als Testsieger mit der besten Gesamtleistung und höchster Kundenzufriedenheit.'
              : 'SX66 beeindruckt mit seiner schnellen Wirkung und dem besten Preis-Leistungs-Verhältnis.'}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-gray-900 font-bold px-8 py-4 rounded-xl text-lg hover:bg-gray-100 transition-all hover:scale-105 shadow-lg flex items-center gap-2"
            >
              🛒 {name} jetzt bestellen
              <ArrowRight size={20} />
            </a>
            <div className="text-white/80 text-sm">
              <Clock size={14} className="inline mr-1" />
              Angebot nur noch begrenzt verfügbar
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
