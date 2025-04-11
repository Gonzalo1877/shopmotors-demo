"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Phone, Mail, MapPin, Send } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export default function ContactForm() {
  const { t } = useLanguage()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, interest: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log(formData)
    setFormData({
      name: "",
      email: "",
      phone: "",
      interest: "",
      message: "",
    })
    alert("Thank you for your message. We will contact you shortly.") // Mensaje fijo o puedes crear una clave de traducción para esto
  }

  return (
    <section id="contact" className="py-20 bg-zinc-900">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-white">
            {t("contactUs")}
          </h2>
          <p className="text-zinc-400 mt-2 max-w-2xl mx-auto font-inter">
            {t("haveQuestions")}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="bg-zinc-800 rounded-lg p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="text-sm font-medium text-zinc-300 mb-2 block">
                    {t("fullName")}
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                    className="bg-zinc-900 border-zinc-700 focus-visible:ring-gold-500"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="text-sm font-medium text-zinc-300 mb-2 block">
                    {t("emailAddress")}
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                    className="bg-zinc-900 border-zinc-700 focus-visible:ring-gold-500"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="text-sm font-medium text-zinc-300 mb-2 block">
                    {t("phoneNumber")}
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="(123) 456-7890"
                    className="bg-zinc-900 border-zinc-700 focus-visible:ring-gold-500"
                  />
                </div>
                <div>
                  <label htmlFor="interest" className="text-sm font-medium text-zinc-300 mb-2 block">
                    {t("interestedIn")}
                  </label>
                  <Select value={formData.interest} onValueChange={handleSelectChange}>
                    <SelectTrigger className="bg-zinc-900 border-zinc-700 focus:ring-gold-500">
                      <SelectValue placeholder={t("selectOption")} />
                    </SelectTrigger>
                    <SelectContent className="bg-zinc-800 border-zinc-700">
                      <SelectItem value="test-drive">{t("schedulingTestDrive")}</SelectItem>
                      <SelectItem value="purchase">{t("vehiclePurchase")}</SelectItem>
                      <SelectItem value="financing">{t("financingOptions")}</SelectItem>
                      <SelectItem value="service">{t("serviceDepartment")}</SelectItem>
                      <SelectItem value="other">{t("otherInquiry")}</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="text-sm font-medium text-zinc-300 mb-2 block">
                  {t("message")}
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder={t("messagePlaceholder")}
                  rows={5}
                  className="bg-zinc-900 border-zinc-700 focus-visible:ring-gold-500 resize-none"
                />
              </div>

              <Button type="submit" className="w-full bg-gold-500 text-zinc-900 hover:bg-gold-600">
                <Send className="h-4 w-4 mr-2" />
                {t("sendMessage")}
              </Button>
            </form>
          </div>

          <div>
            <div className="bg-zinc-800 rounded-lg p-8 h-full">
              <h3 className="text-xl font-semibold text-white mb-6">{t("getInTouch")}</h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-gold-500 p-3 rounded-full">
                    <Phone className="h-5 w-5 text-zinc-900" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-zinc-300">{t("phone")}</h4>
                    <p className="text-white mt-1">+54 1234 567890</p>
                    <p className="text-white">+54 1234 567890</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-gold-500 p-3 rounded-full">
                    <Mail className="h-5 w-5 text-zinc-900" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-zinc-300">{t("email")}</h4>
                    <p className="text-white mt-1">info@motorsshops.com</p>
                    <p className="text-white">sales@motorsshop.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-gold-500 p-3 rounded-full">
                    <MapPin className="h-5 w-5 text-zinc-900" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-zinc-300">{t("location")}</h4>
                    <p className="text-white mt-1">123 Luxury Lane</p>
                    <p className="text-white">Beverly Hills, CA 90210</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="text-sm font-medium text-zinc-300 mb-3">{t("businessHours")}</h4>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-zinc-400">{t("mondayFriday")}</span>
                    <span className="text-white">9:00 AM - 8:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-zinc-400">{t("saturday")}</span>
                    <span className="text-white">10:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-zinc-400">{t("sunday")}</span>
                    <span className="text-white">11:00 AM - 5:00 PM</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}