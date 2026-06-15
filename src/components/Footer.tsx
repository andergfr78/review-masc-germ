export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="text-white font-black text-lg mb-3">
              MännerGesundheit<span className="text-red-500">Aktuell</span>
            </div>
            <p className="text-sm leading-relaxed">
              Unabhängige Tests und Bewertungen von
              Gesundheitsprodukten für Männer. Vertrauen Sie auf
              über 10 Jahre Expertise.
            </p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-3">Produkte</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://www.earthwolftrack.com/32Z9NG21/23HR4TF4/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  🏆 Erexiva bestellen
                </a>
              </li>
              <li>
                <a
                  href="https://www.earthwolftrack.com/32Z9NG21/23C8QGFT/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  ⚡ SX66 bestellen
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-3">Rechtliches</h4>
            <ul className="space-y-2 text-sm">
              <li><span className="hover:text-white transition-colors cursor-pointer">Impressum</span></li>
              <li><span className="hover:text-white transition-colors cursor-pointer">Datenschutz</span></li>
              <li><span className="hover:text-white transition-colors cursor-pointer">AGB</span></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6">
          <p className="text-xs text-center leading-relaxed">
            <strong>Haftungsausschluss:</strong> Die auf dieser Seite
            dargestellten Informationen dienen ausschließlich zu
            Informationszwecken und ersetzen keine medizinische Beratung.
            Nahrungsergänzungsmittel sind kein Ersatz für eine ausgewogene
            Ernährung und gesunde Lebensweise. Bei gesundheitlichen Beschwerden
            konsultieren Sie bitte Ihren Arzt. Ergebnisse können individuell
            variieren. Diese Seite enthält Affiliate-Links.
          </p>
          <p className="text-xs text-center mt-4 text-gray-600">
            © {new Date().getFullYear()} MännerGesundheitAktuell. Alle Rechte vorbehalten.
          </p>
        </div>
      </div>
    </footer>
  )
}
