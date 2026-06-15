import { useState, useEffect } from 'react'
import { ArrowRight, X } from 'lucide-react'

export function FloatingCTA() {
  const [visible, setVisible] = useState(false)
  const [dismissed, setDismissed] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 600) {
        setVisible(true)
      } else {
        setVisible(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (dismissed || !visible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-lg border-t border-gray-200 shadow-2xl shadow-black/20 px-4 py-3 animate-slide-up">
      <div className="max-w-4xl mx-auto flex items-center justify-between gap-4">
        <button
          onClick={() => setDismissed(true)}
          className="text-gray-400 hover:text-gray-600 shrink-0"
        >
          <X size={18} />
        </button>

        <div className="hidden md:block text-sm text-gray-600">
          <strong className="text-gray-900">🔥 Sonderangebot:</strong> Jetzt
          bestellen und bis zu 40% sparen!
        </div>

        <div className="flex items-center gap-3">
          <a
            href="https://www.earthwolftrack.com/32Z9NG21/23HR4TF4/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-4 py-2.5 rounded-lg text-sm transition-all hover:scale-105 flex items-center gap-1 whitespace-nowrap"
          >
            🏆 Erexiva
            <ArrowRight size={14} />
          </a>
          <a
            href="https://www.earthwolftrack.com/32Z9NG21/23C8QGFT/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-red-600 hover:bg-red-700 text-white font-bold px-4 py-2.5 rounded-lg text-sm transition-all hover:scale-105 flex items-center gap-1 whitespace-nowrap"
          >
            ⚡ SX66
            <ArrowRight size={14} />
          </a>
        </div>
      </div>
    </div>
  )
}
