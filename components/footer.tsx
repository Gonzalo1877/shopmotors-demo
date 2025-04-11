"use client"

import Link from "next/link"
import { Facebook, Twitter, Instagram, Youtube, Linkedin } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-zinc-950 border-t border-zinc-800">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="flex items-center gap-2">
              <span className="text-xl font-bold text-gold-500">MOTORS</span>
              <span className="text-xl font-light text-zinc-400">SHOP</span>
            </Link>
            <p className="text-zinc-400 mt-4 text-sm">
              {t("experienceLuxuryFooter")}
            </p>
            <div className="flex gap-4 mt-6">
              <Link href="#" className="text-zinc-400 hover:text-gold-500 transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-zinc-400 hover:text-gold-500 transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-zinc-400 hover:text-gold-500 transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-zinc-400 hover:text-gold-500 transition-colors">
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </Link>
              <Link href="#" className="text-zinc-400 hover:text-gold-500 transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">{t("quickLinks")}</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-zinc-400 hover:text-gold-500 transition-colors text-sm">
                  {t("home")}
                </Link>
              </li>
              <li>
                <Link href="#catalog" className="text-zinc-400 hover:text-gold-500 transition-colors text-sm">
                  {t("inventory")}
                </Link>
              </li>
              <li>
                <Link href="#featured" className="text-zinc-400 hover:text-gold-500 transition-colors text-sm">
                  {t("featured")}
                </Link>
              </li>
              {/* <li>
                <Link href="#financing" className="text-zinc-400 hover:text-gold-500 transition-colors text-sm">
                  {t("financing")}
                </Link>
              </li> */}
              <li>
                <Link href="#contact" className="text-zinc-400 hover:text-gold-500 transition-colors text-sm">
                  {t("contact")}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">{t("services")}</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-zinc-400 hover:text-gold-500 transition-colors text-sm">
                  {t("vehicleSales")}
                </Link>
              </li>
              {/* <li>
                <Link href="#" className="text-zinc-400 hover:text-gold-500 transition-colors text-sm">
                  {t("financingOptions")}
                </Link>
              </li> */}
              <li>
                <Link href="#" className="text-zinc-400 hover:text-gold-500 transition-colors text-sm">
                  {t("premiumService")}
                </Link>
              </li>
              {/* <li>
                <Link href="#" className="text-zinc-400 hover:text-gold-500 transition-colors text-sm">
                  {t("vehicleTradeIn")}
                </Link>
              </li> */}
              {/* <li>
                <Link href="#" className="text-zinc-400 hover:text-gold-500 transition-colors text-sm">
                  {t("customOrders")}
                </Link>
              </li> */}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">{t("newsletter")}</h3>
            <p className="text-zinc-400 text-sm mb-4">
              {t("subscribeNewsletter")}
            </p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder={t("yourEmail")}
                className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-md focus:outline-none focus:ring-2 focus:ring-gold-500 text-white"
              />
              <button
                type="submit"
                className="w-full bg-gold-500 text-zinc-900 py-2 rounded-md font-medium hover:bg-gold-600 transition-colors"
              >
                {t("subscribe")}
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-zinc-800 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-zinc-500 text-sm">
            &copy; {new Date().getFullYear()} gnzdev.com - SITIO WEB DEMO - {t("allRightsReserved")}
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="#" className="text-zinc-500 hover:text-gold-500 transition-colors text-xs">
              {t("privacyPolicy")}
            </Link>
            <Link href="#" className="text-zinc-500 hover:text-gold-500 transition-colors text-xs">
              {t("termsOfService")}
            </Link>
            <Link href="#" className="text-zinc-500 hover:text-gold-500 transition-colors text-xs">
              {t("cookiePolicy")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}