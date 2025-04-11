"use client"

import { createContext, useContext, useEffect, useState, type ReactNode } from "react"

type Language = "en" | "es"

type Translations = {
  [key in Language]: {
    [key: string]: string
  }
}

const translations: Translations = {
  en: {
    // Navigation
    home: "Home",
    inventory: "Inventory",
    featured: "Featured",
    financing: "Financing",
    contact: "Contact",
    bookTestDrive: "Book a Test Drive",

    // Hero
    experienceLuxury: "Experience Luxury Like Never Before",
    discoverThrill: "Discover the thrill of driving a Porsche 911 GT3RS, where performance meets unparalleled luxury.",
    exploreCollection: "Explore Our Collection",
    bookTestDriveBtn: "Book a Test Drive",

    // Featured
    featuredCollection: "Featured Collection",
    exploreHandpicked: "Explore our handpicked selection of exceptional vehicles",
    viewDetails: "View Details",

    // Car specs
    power: "POWER",
    acceleration: "0-60 MPH",
    topSpeed: "TOP SPEED",

    // Catalog
    exploreInventory: "Explore Our Inventory",
    browseCollection:
      "Browse our extensive collection of premium vehicles and find the perfect match for your lifestyle",
    filters: "Filters",
    priceRange: "Price Range",
    category: "Category",
    brand: "Brand",
    all: "All",
    sports: "Sports",
    luxury: "Luxury",
    suv: "SUV",
    electric: "Electric",
    applyFilters: "Apply Filters",
    showing: "Showing",
    vehicles: "vehicles",
    sortBy: "Sort by",
    priceLowHigh: "Price: Low to High",
    priceHighLow: "Price: High to Low",
    nameAZ: "Name: A to Z",
    nameZA: "Name: Z to A",
    noVehicles: "No vehicles match your current filters",
    resetFilters: "Reset Filters",
    details: "Details",
    testDrive: "Test Drive",

    // Financing
    financingCalculator: "Financing Calculator",
    planPurchase:
      "Plan your purchase with our interactive financing calculator and find the perfect payment plan for your dream car",
    paymentEstimator: "Payment Estimator",
    vehiclePrice: "Vehicle Price",
    downPayment: "Down Payment",
    loanTerm: "Loan Term",
    interestRate: "Interest Rate",
    paymentFrequency: "Payment Frequency",
    monthly: "Monthly",
    biweekly: "Bi-Weekly",
    weekly: "Weekly",
    estimatedPayment: "Your Estimated Payment",
    perMonth: "per month",
    everyTwoWeeks: "every two weeks",
    perWeek: "per week",
    loanAmount: "Loan Amount",
    disclaimer:
      "This is an estimate. Your actual payment may vary based on your credit score, taxes, and additional fees.",
    applyFinancing: "Apply for Financing",
    contactSpecialist: "Contact a Specialist",

    // Contact
    contactUs: "Contact Us",
    haveQuestions: "Have questions or ready to schedule a test drive? Our team is here to assist you",
    fullName: "Full Name",
    emailAddress: "Email Address",
    phoneNumber: "Phone Number",
    interestedIn: "I'm Interested In",
    selectOption: "Select an option",
    schedulingTestDrive: "Scheduling a Test Drive",
    vehiclePurchase: "Vehicle Purchase",
    financingOptions: "Financing Options",
    serviceDepartment: "Service Department",
    otherInquiry: "Other Inquiry",
    message: "Message",
    messagePlaceholder: "Tell us more about your inquiry...",
    sendMessage: "Send Message",
    getInTouch: "Get in Touch",
    phone: "Phone",
    email: "Email",
    location: "Location",
    businessHours: "Business Hours",
    mondayFriday: "Monday - Friday",
    saturday: "Saturday",
    sunday: "Sunday",

    // Footer
    experienceLuxuryFooter:
      "Experience luxury and performance like never before. Our handpicked collection of premium vehicles awaits your discovery.",
    quickLinks: "Quick Links",
    services: "Services",
    vehicleSales: "Vehicle Sales",
    premiumService: "Premium Service",
    vehicleTradeIn: "Vehicle Trade-In",
    customOrders: "Custom Orders",
    newsletter: "Newsletter",
    subscribeNewsletter: "Subscribe to our newsletter to receive updates on new arrivals and special offers.",
    yourEmail: "Your email address",
    subscribe: "Subscribe",
    allRightsReserved: "All rights reserved.",
    privacyPolicy: "Privacy Policy",
    termsOfService: "Terms of Service",
    cookiePolicy: "Cookie Policy",
  },
  es: {
    // Navigation
    home: "Inicio",
    inventory: "Inventario",
    featured: "Destacados",
    financing: "Financiación",
    contact: "Contacto",
    bookTestDrive: "Reservar Prueba",

    // Hero
    experienceLuxury: "Experimenta el Lujo Como Nunca Antes",
    discoverThrill:
      "Descubre la emoción de conducir un Porsche 911 GT3RS, donde el rendimiento se une al lujo sin igual.",
    exploreCollection: "Explorar Nuestra Colección",
    bookTestDriveBtn: "Reservar Prueba de Manejo",

    // Featured
    featuredCollection: "Colección Destacada",
    exploreHandpicked: "Explora nuestra selección de vehículos excepcionales",
    viewDetails: "Ver Detalles",

    // Car specs
    power: "POTENCIA",
    acceleration: "0-100 KM/H",
    topSpeed: "VEL. MÁXIMA",

    // Catalog
    exploreInventory: "Explora Nuestro Inventario",
    browseCollection:
      "Navega por nuestra extensa colección de vehículos premium y encuentra el match perfecto para tu estilo de vida",
    filters: "Filtros",
    priceRange: "Rango de Precio",
    category: "Categoría",
    brand: "Marca",
    all: "Todos",
    sports: "Deportivos",
    luxury: "Lujo",
    suv: "SUV",
    electric: "Eléctricos",
    applyFilters: "Aplicar Filtros",
    showing: "Mostrando",
    vehicles: "vehículos",
    sortBy: "Ordenar por",
    priceLowHigh: "Precio: Menor a Mayor",
    priceHighLow: "Precio: Mayor a Menor",
    nameAZ: "Nombre: A a Z",
    nameZA: "Nombre: Z a A",
    noVehicles: "Ningún vehículo coincide con tus filtros actuales",
    resetFilters: "Restablecer Filtros",
    details: "Detalles",
    testDrive: "Prueba de Manejo",

    // Financing
    financingCalculator: "Calculadora de Financiación",
    planPurchase:
      "Planifica tu compra con nuestra calculadora interactiva y encuentra el plan de pago perfecto para tu auto soñado",
    paymentEstimator: "Estimador de Pagos",
    vehiclePrice: "Precio del Vehículo",
    downPayment: "Pago Inicial",
    loanTerm: "Plazo del Préstamo",
    interestRate: "Tasa de Interés",
    paymentFrequency: "Frecuencia de Pago",
    monthly: "Mensual",
    biweekly: "Quincenal",
    weekly: "Semanal",
    estimatedPayment: "Tu Pago Estimado",
    perMonth: "por mes",
    everyTwoWeeks: "cada dos semanas",
    perWeek: "por semana",
    loanAmount: "Monto del Préstamo",
    disclaimer:
      "Esto es un estimado. Tu pago real puede variar según tu puntaje crediticio, impuestos y tarifas adicionales.",
    applyFinancing: "Solicitar Financiación",
    contactSpecialist: "Contactar Especialista",

    // Contact
    contactUs: "Contáctanos",
    haveQuestions:
      "¿Tienes preguntas o estás listo para programar una prueba de manejo? Nuestro equipo está aquí para ayudarte",
    fullName: "Nombre Completo",
    emailAddress: "Correo Electrónico",
    phoneNumber: "Número de Teléfono",
    interestedIn: "Estoy Interesado En",
    selectOption: "Selecciona una opción",
    schedulingTestDrive: "Programar Prueba de Manejo",
    vehiclePurchase: "Compra de Vehículo",
    financingOptions: "Opciones de Financiación",
    serviceDepartment: "Departamento de Servicio",
    otherInquiry: "Otra Consulta",
    message: "Mensaje",
    messagePlaceholder: "Cuéntanos más sobre tu consulta...",
    sendMessage: "Enviar Mensaje",
    getInTouch: "Ponte en Contacto",
    phone: "Teléfono",
    email: "Correo",
    location: "Ubicación",
    businessHours: "Horario Comercial",
    mondayFriday: "Lunes - Viernes",
    saturday: "Sábado",
    sunday: "Domingo",

    // Footer
    experienceLuxuryFooter:
      "Experimenta el lujo y rendimiento como nunca antes. Nuestra colección seleccionada de vehículos premium espera tu descubrimiento.",
    quickLinks: "Enlaces Rápidos",
    services: "Servicios",
    vehicleSales: "Venta de Vehículos",
    premiumService: "Servicio Premium",
    vehicleTradeIn: "Intercambio de Vehículos",
    customOrders: "Pedidos Personalizados",
    newsletter: "Boletín",
    subscribeNewsletter:
      "Suscríbete a nuestro boletín para recibir actualizaciones sobre nuevas llegadas y ofertas especiales.",
    yourEmail: "Tu correo electrónico",
    subscribe: "Suscribirse",
    allRightsReserved: "Todos los derechos reservados.",
    privacyPolicy: "Política de Privacidad",
    termsOfService: "Términos de Servicio",
    cookiePolicy: "Política de Cookies",
  },
}

type LanguageContextType = {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as Language
    if (savedLanguage && (savedLanguage === "en" || savedLanguage === "es")) {
      setLanguage(savedLanguage)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("language", language)
  }, [language])

  const t = (key: string): string => {
    return translations[language][key] || key
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
