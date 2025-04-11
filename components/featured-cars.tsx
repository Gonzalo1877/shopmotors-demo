"use client"

import { useRef } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

const featuredCars = [
  {
    id: 1,
    name: "911 GT3RS",
    brand: "Porsche",
    price: "$223,800",
    image: "/911_gt3rs.jpg?height=400&width=600",
    specs: {
      power: "518 hp",
      acceleration: "3.0s",
      topSpeed: "184 mph",
    },
  },
  {
    id: 2,
    name: "Taycan Turbo S",
    brand: "Porsche",
    price: "$187,400",
    image: "/taycan_turbo_s.jpg?height=400&width=600",
    specs: {
      power: "750 hp",
      acceleration: "2.6s",
      topSpeed: "161 mph",
    },
  },
  {
    id: 3,
    name: "M4 Competition",
    brand: "BMW",
    price: "$79,100",
    image: "/m4_competition.jpg?height=400&width=600",
    specs: {
      power: "503 hp",
      acceleration: "3.4s",
      topSpeed: "180 mph",
    },
  },
  {
    id: 4,
    name: "GT-R Nismo",
    brand: "Nissan",
    price: "$215,690",
    image: "/gt_r_nismo.jpg?height=400&width=600",
    specs: {
      power: "600 hp",
      acceleration: "2.5s",
      topSpeed: "205 mph",
    },
  },
  {
    id: 5,
    name: "Model S Plaid",
    brand: "Tesla",
    price: "$129,990",
    image: "/tesla_model_s.jpg?height=400&width=600",
    specs: {
      power: "1,020 hp",
      acceleration: "1.99s",
      topSpeed: "200 mph",
    },
  },
]

export default function FeaturedCars() {
  const { t } = useLanguage()
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -400, behavior: "smooth" })
    }
  }

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 400, behavior: "smooth" })
    }
  }

  return (
    <section id="featured" className="py-20 bg-black text-white">
      <div className="container">
        <div className="flex items-center justify-between mb-10">
          <div>
            <h2 className="font-archivo text-3xl md:text-4xl font-bold text-white tracking-tight">
              {t("featuredCollection")}
            </h2>
            <p className="text-gray-400 mt-2 font-barlow">{t("exploreHandpicked")}</p>
          </div>
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="icon"
              className="border-gray-800 text-gray-400 hover:text-white hover:border-white rounded-none"
              onClick={scrollLeft}
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="border-gray-800 text-gray-400 hover:text-white hover:border-white rounded-none"
              onClick={scrollRight}
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>

        <div
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto pb-6 scrollbar-hide snap-x snap-mandatory"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {featuredCars.map((car) => (
            <Card
              key={car.id}
              className="min-w-[350px] bg-zinc-900 border-none rounded-none overflow-hidden snap-start"
            >
              <div className="relative h-[200px] overflow-hidden">
                <Image
                  src={car.image || "/placeholder.svg"}
                  alt={car.name}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute top-0 left-0 bg-black bg-opacity-70 px-3 py-1">
                  <span className="text-xs font-medium">{car.brand}</span>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="font-archivo text-xl font-bold text-white">{car.name}</h3>
                <p className="text-white text-lg font-semibold mt-1">{car.price}</p>

                <div className="grid grid-cols-3 gap-4 mt-4 mb-6">
                  <div className="text-center">
                    <p className="text-gray-400 text-xs">{t("power")}</p>
                    <p className="text-white font-medium">{car.specs.power}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-gray-400 text-xs">{t("acceleration")}</p>
                    <p className="text-white font-medium">{car.specs.acceleration}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-gray-400 text-xs">{t("topSpeed")}</p>
                    <p className="text-white font-medium">{car.specs.topSpeed}</p>
                  </div>
                </div>

                <Button className="w-full bg-white hover:bg-gray-200 text-black rounded-none">
                  {t("viewDetails")}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
