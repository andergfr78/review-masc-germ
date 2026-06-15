import { CheckCircle2, ArrowRight, Trophy } from 'lucide-react'

export function ComparisonTable() {
  const rows = [
    { category: 'Gesamtbewertung', erexiva: '4.9/5 ⭐', sx66: '4.8/5 ⭐', winner: 'erexiva' },
    { category: 'Wirksamkeit', erexiva: '98%', sx66: '96%', winner: 'erexiva' },
    { category: 'Wirkungseintritt', erexiva: '30-45 Min', sx66: '20 Min', winner: 'sx66' },
    { category: 'Inhaltsstoffe', erexiva: '12 Premium', sx66: '10 Premium', winner: 'erexiva' },
    { category: 'Verträglichkeit', erexiva: '99%', sx66: '95%', winner: 'erexiva' },
    { category: 'Preis-Leistung', erexiva: 'Sehr gut', sx66: 'Hervorragend', winner: 'sx66' },
    { category: 'Kundenbewertungen', erexiva: '30.000+', sx66: '20.000+', winner: 'erexiva' },
    { category: 'Geld-zurück-Garantie', erexiva: '30 Tage', sx66: '60 Tage', winner: 'sx66' },
    { category: 'Klinisch getestet', erexiva: 'yes', sx66: 'yes', winner: 'draw' },
    { category: 'Natürliche Formel', erexiva: 'yes', sx66: 'yes', winner: 'draw' },
    { category: 'Expressversand', erexiva: 'yes', sx66: 'yes', winner: 'draw' },
    { category: 'Diskreter Versand', erexiva: 'yes', sx66: 'yes', winner: 'draw' },
  ]

  const renderCell = (value: string, isWinner: boolean) => {
    if (value === 'yes') {
      return <CheckCircle2 size={20} className="text-green-500 mx-auto" />
    }
    return (
      <span className={`text-sm font-medium ${isWinner ? 'text-green-700 font-bold' : 'text-gray-700'}`}>
        {isWinner && <Trophy size={14} className="inline mr-1 text-yellow-500" />}
        {value}
      </span>
    )
  }

  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
            ⚔️ Der direkte Vergleich
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Erexiva vs. SX66 – Alle wichtigen Kriterien auf einen Blick
          </p>
        </div>

        <div className="overflow-x-auto rounded-2xl shadow-xl border border-gray-200">
          <table className="w-full">
            <thead>
              <tr>
                <th className="bg-gray-900 text-white px-6 py-4 text-left text-sm font-bold">
                  Kriterium
                </th>
                <th className="bg-blue-700 text-white px-6 py-4 text-center text-sm font-bold">
                  🏆 Erexiva
                </th>
                <th className="bg-red-700 text-white px-6 py-4 text-center text-sm font-bold">
                  ⚡ SX66
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr
                  key={i}
                  className={`${i % 2 === 0 ? 'bg-white' : 'bg-gray-50'} border-b border-gray-100`}
                >
                  <td className="px-6 py-4 text-sm font-semibold text-gray-800">
                    {row.category}
                  </td>
                  <td className="px-6 py-4 text-center">
                    {renderCell(row.erexiva, row.winner === 'erexiva')}
                  </td>
                  <td className="px-6 py-4 text-center">
                    {renderCell(row.sx66, row.winner === 'sx66')}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
          <a
            href="https://www.earthwolftrack.com/32Z9NG21/23HR4TF4/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-blue-600 to-blue-800 text-white font-bold px-8 py-4 rounded-xl text-lg hover:shadow-xl hover:scale-105 transition-all flex items-center gap-2"
          >
            🏆 Erexiva – Testsieger bestellen
            <ArrowRight size={18} />
          </a>
          <a
            href="https://www.earthwolftrack.com/32Z9NG21/23C8QGFT/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-red-600 to-red-800 text-white font-bold px-8 py-4 rounded-xl text-lg hover:shadow-xl hover:scale-105 transition-all flex items-center gap-2"
          >
            ⚡ SX66 – Preis-Tipp bestellen
            <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  )
}
