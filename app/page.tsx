"use client"

import { Suspense } from "react"
import Header from "@/components/header"
import Hero from "@/components/hero"
import FeaturedCars from "@/components/featured-cars"
import CarCatalog from "@/components/car-catalog"
// import FinancingCalculator from "@/components/financing-calculator"
import ContactForm from "@/components/contact-form"
import Footer from "@/components/footer"
import { useLanguage } from "@/contexts/language-context"

export default function Home() {
  const { language } = useLanguage()

  return (
    <div className="min-h-screen bg-zinc-900 text-zinc-100 dark:bg-zinc-900 dark:text-zinc-100">
      <Header />
      <main>
        <Suspense fallback={<div className="h-screen flex items-center justify-center">Loading 3D model...</div>}>
          <Hero />
        </Suspense>
        <FeaturedCars />
        <CarCatalog />
        {/* <FinancingCalculator /> */}
        <ContactForm />
      </main>
      <Footer />
    </div>
  )
}
