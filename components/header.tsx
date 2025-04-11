"use client"

import { useState } from "react"
import { Menu, Phone, Moon, Sun, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useTheme } from "next-themes"
import { useLanguage } from "@/contexts/language-context"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export default function Header() {
  const { theme, setTheme } = useTheme()
  const { language, setLanguage, t } = useLanguage()
  const [isSheetOpen, setIsSheetOpen] = useState(false)

  // Función para manejar el desplazamiento suave
  const scrollToSection = (sectionId: string) => {
    // Cerrar el menú móvil si está abierto
    if (isSheetOpen) {
      setIsSheetOpen(false)
    }

    // Pequeño retraso para permitir que el menú se cierre primero en móvil
    setTimeout(() => {
      const section = document.getElementById(sectionId)
      if (section) {
        section.scrollIntoView({ behavior: "smooth" })
      }
    }, 100)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-800 dark:border-zinc-800 bg-white/80 dark:bg-black/80 backdrop-blur-sm">
      <div className="container flex h-16 items-center justify-between">
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault()
            window.scrollTo({ top: 0, behavior: "smooth" })
          }}
          className="flex items-center gap-2 cursor-pointer"
        >
          <span className="text-xl font-bold text-black dark:text-white">MOTORS</span>
          <span className="text-xl font-light text-gray-600 dark:text-gray-400">SHOP</span>
        </a>
        <nav className="hidden md:flex gap-6">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault()
              window.scrollTo({ top: 0, behavior: "smooth" })
            }}
            className="text-sm font-medium text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors cursor-pointer"
          >
            {t("home")}
          </a>
          <a
            href="#catalog"
            onClick={(e) => {
              e.preventDefault()
              scrollToSection("catalog")
            }}
            className="text-sm font-medium text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors cursor-pointer"
          >
            {t("inventory")}
          </a>
          <a
            href="#featured"
            onClick={(e) => {
              e.preventDefault()
              scrollToSection("featured")
            }}
            className="text-sm font-medium text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors cursor-pointer"
          >
            {t("featured")}
          </a>
          {/* <a
            href="#financing"
            onClick={(e) => {
              e.preventDefault()
              scrollToSection("financing")
            }}
            className="text-sm font-medium text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors cursor-pointer"
          >
            {t("financing")}
          </a> */}
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault()
              scrollToSection("contact")
            }}
            className="text-sm font-medium text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors cursor-pointer"
          >
            {t("contact")}
          </a>
        </nav>
        <div className="hidden md:flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Phone className="h-4 w-4 text-black dark:text-white" />
            <span className="text-sm font-medium">+54 1234 567890</span>
          </div>

          {/* Theme Toggle
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="text-black dark:text-white"
          >
            <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button> */}

          {/* Language Toggle */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="text-black dark:text-white">
                <Globe className="h-5 w-5" />
                <span className="sr-only">Change language</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setLanguage("en")}>
                <span className={language === "en" ? "font-bold" : ""}>English</span>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setLanguage("es")}>
                <span className={language === "es" ? "font-bold" : ""}>Español</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Button className="bg-black text-white hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200 rounded-none">
            {t("bookTestDrive")}
          </Button>
        </div>
        <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" className="text-black dark:text-white">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-white dark:bg-black border-gray-200 dark:border-gray-800">
            <div className="flex flex-col gap-6 mt-8">
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault()
                  window.scrollTo({ top: 0, behavior: "smooth" })
                  setIsSheetOpen(false)
                }}
                className="text-lg font-medium text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors cursor-pointer"
              >
                {t("home")}
              </a>
              <a
                href="#catalog"
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection("catalog")
                }}
                className="text-lg font-medium text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors cursor-pointer"
              >
                {t("inventory")}
              </a>
              <a
                href="#featured"
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection("featured")
                }}
                className="text-lg font-medium text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors cursor-pointer"
              >
                {t("featured")}
              </a>
              {/* <a
                href="#financing"
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection("financing")
                }}
                className="text-lg font-medium text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors cursor-pointer"
              >
                {t("financing")}
              </a> */}
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection("contact")
                }}
                className="text-lg font-medium text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors cursor-pointer"
              >
                {t("contact")}
              </a>
              <div className="flex items-center gap-2 mt-4">
                <Phone className="h-4 w-4 text-black dark:text-white" />
                <span className="text-sm font-medium">+1 (888) 555-0123</span>
              </div>

              <div className="flex items-center gap-4 mt-4">
                {/* Theme Toggle */}
                {/* <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  className="text-black dark:text-white"
                >
                  <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                  <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                  <span className="sr-only">Toggle theme</span>
                </Button> */}

                {/* Language Toggle */}
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="text-black dark:text-white">
                      <Globe className="h-5 w-5" />
                      <span className="sr-only">Change language</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem onClick={() => setLanguage("en")}>
                      <span className={language === "en" ? "font-bold" : ""}>English</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setLanguage("es")}>
                      <span className={language === "es" ? "font-bold" : ""}>Español</span>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>

              <Button
                className="bg-black text-white hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200 rounded-none mt-4"
                onClick={() => setIsSheetOpen(false)}
              >
                {t("bookTestDrive")}
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
