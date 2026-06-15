import { Clock, TrendingUp, Eye } from 'lucide-react'

export function Header() {
  const today = new Date()
  const formatted = today.toLocaleDateString('de-DE', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  })

  return (
    <header className="bg-white border-b-4 border-red-600 shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between py-3">
          <div className="flex items-center gap-2">
            <div className="bg-red-600 text-white px-3 py-1 rounded font-black text-sm tracking-wider">
              GESUNDHEIT
            </div>
            <span className="text-xl font-black text-gray-900 hidden sm:block">
              MännerGesundheit<span className="text-red-600">Aktuell</span>
            </span>
          </div>
          <div className="flex items-center gap-4 text-xs text-gray-500">
            <span className="flex items-center gap-1">
              <Clock size={14} />
              {formatted}
            </span>
            <span className="flex items-center gap-1 text-red-600 font-semibold">
              <TrendingUp size={14} />
              TRENDING
            </span>
            <span className="flex items-center gap-1 bg-green-100 text-green-700 px-2 py-1 rounded-full font-medium">
              <Eye size={14} />
              <span className="animate-pulse">2.847</span> lesen gerade
            </span>
          </div>
        </div>
      </div>
      <div className="bg-red-600 text-white text-xs py-1 overflow-hidden">
        <div className="animate-marquee whitespace-nowrap flex items-center gap-8 px-4">
          <span>🔥 BREAKING: Neue Studie bestätigt Wirksamkeit natürlicher Potenzmittel</span>
          <span>⚡ Erexiva & SX66 im direkten Vergleich – Ergebnisse überraschen</span>
          <span>📊 Über 50.000 zufriedene Kunden in Deutschland</span>
          <span>🏆 Testsieger 2025 gekürt</span>
          <span>🔥 BREAKING: Neue Studie bestätigt Wirksamkeit natürlicher Potenzmittel</span>
          <span>⚡ Erexiva & SX66 im direkten Vergleich – Ergebnisse überraschen</span>
        </div>
      </div>
    </header>
  )
}
