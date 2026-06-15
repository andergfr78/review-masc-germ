import { ShieldCheck, Award, Users, ThumbsUp } from 'lucide-react'

export function SocialProofBanner() {
  const stats = [
    { icon: Users, value: '50.000+', label: 'Zufriedene Kunden' },
    { icon: Award, value: '4.9/5', label: 'Durchschnittsbewertung' },
    { icon: ShieldCheck, value: '100%', label: 'Natürliche Inhaltsstoffe' },
    { icon: ThumbsUp, value: '97%', label: 'Weiterempfehlungsrate' },
  ]

  return (
    <section className="bg-white border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 py-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <div key={i} className="flex items-center gap-3 justify-center">
              <stat.icon size={28} className="text-blue-600 shrink-0" />
              <div>
                <div className="text-xl font-black text-gray-900">{stat.value}</div>
                <div className="text-xs text-gray-500">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
