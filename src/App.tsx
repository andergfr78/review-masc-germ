import { Header } from './components/Header'
import { HeroSection } from './components/HeroSection'
import { IntroSection } from './components/IntroSection'
import { ProductReview } from './components/ProductReview'
import { ComparisonTable } from './components/ComparisonTable'
import { TestimonialsSection } from './components/TestimonialsSection'
import { DoctorSection } from './components/DoctorSection'
import { FinalVerdict } from './components/FinalVerdict'
import { FAQSection } from './components/FAQSection'
import { Footer } from './components/Footer'
import { FloatingCTA } from './components/FloatingCTA'
import { SocialProofBanner } from './components/SocialProofBanner'

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans antialiased">
      <Header />
      <HeroSection />
      <SocialProofBanner />
      <IntroSection />
      <ProductReview
        product="erexiva"
        name="Erexiva"
        link="https://www.earthwolftrack.com/32Z9NG21/23HR4TF4/"
      />
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 py-8 text-center">
        <p className="text-white text-xl md:text-2xl font-bold px-4">
          ⚡ Weiter zum nächsten Produkt im Vergleich...
        </p>
      </div>
      <ProductReview
        product="sx66"
        name="SX66"
        link="https://www.earthwolftrack.com/32Z9NG21/23C8QGFT/"
      />
      <ComparisonTable />
      <TestimonialsSection />
      <DoctorSection />
      <FinalVerdict />
      <FAQSection />
      <Footer />
      <FloatingCTA />
    </div>
  )
}
