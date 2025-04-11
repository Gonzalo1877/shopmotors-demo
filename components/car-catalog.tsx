"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Filter } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useLanguage } from "@/contexts/language-context"

const cars = [
  {
    id: 1,
    name: "911 GT3RS",
    price: 223800,
    category: "sports",
    brand: "Porsche",
    year: 2023,
    image: "/911_gt3rs.jpg?height=300&width=500",
    specs: {
      power: "518 hp",
      acceleration: "3.0s",
      topSpeed: "184 mph",
    },
  },
  {
    id: 2,
    name: "Taycan Turbo S",
    price: 187400,
    category: "electric",
    brand: "Porsche",
    year: 2023,
    image: "/taycan_turbo_s.jpg?height=300&width=500",
    specs: {
      power: "750 hp",
      acceleration: "2.6s",
      topSpeed: "161 mph",
    },
  },
  {
    id: 3,
    name: "Cayenne Turbo GT",
    price: 197950,
    category: "suv",
    brand: "Porsche",
    year: 2024,
    image: "/cayenne_turbo_gt.jpg?height=300&width=500",
    specs: {
      power: "631 hp",
      acceleration: "3.1s",
      topSpeed: "186 mph",
    },
  },
  {
    id: 4,
    name: "M4 Competition",
    price: 79100,
    category: "sports",
    brand: "BMW",
    year: 2023,
    image: "/m4_competition.jpg?height=300&width=500",
    specs: {
      power: "503 hp",
      acceleration: "3.4s",
      topSpeed: "180 mph",
    },
  },
  {
    id: 5,
    name: "i7 xDrive60",
    price: 119300,
    category: "luxury",
    brand: "BMW",
    year: 2023,
    image: "/i7_xdrive60.jpg?height=300&width=500",
    specs: {
      power: "536 hp",
      acceleration: "4.5s",
      topSpeed: "149 mph",
    },
  },
  {
    id: 6,
    name: "GT-R Nismo",
    price: 215690,
    category: "sports",
    brand: "Nissan",
    year: 2023,
    image: "/gt_r_nismo.jpg?height=300&width=500",
    specs: {
      power: "600 hp",
      acceleration: "2.5s",
      topSpeed: "205 mph",
    },
  },
  {
    id: 7,
    name: "Model S Plaid",
    price: 129990,
    category: "electric",
    brand: "Tesla",
    year: 2023,
    image: "/tesla_model_s.jpg?height=300&width=500",
    specs: {
      power: "1,020 hp",
      acceleration: "1.99s",
      topSpeed: "200 mph",
    },
  },
  {
    id: 8,
    name: "Aventador SVJ",
    price: 517770,
    category: "sports",
    brand: "Lamborghini",
    year: 2022,
    image: "/aventador_svj.jpg?height=300&width=500",
    specs: {
      power: "770 hp",
      acceleration: "2.8s",
      topSpeed: "217 mph",
    },
  },
  {
    id: 9,
    name: "718 Cayman GT4 RS",
    price: 149100,
    category: "sports",
    brand: "Porsche",
    year: 2023,
    image: "/718_cayman_gt4rs.jpg?height=300&width=500",
    specs: {
      power: "493 hp",
      acceleration: "3.2s",
      topSpeed: "196 mph",
    },
  },
]

export default function CarCatalog() {
  const { t } = useLanguage()
  const [priceRange, setPriceRange] = useState([50000, 550000])
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedBrand, setSelectedBrand] = useState("all")
  const [sortBy, setSortBy] = useState("price-asc")

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(price)
  }

  // Get unique brands from cars array
  const brands = ["all", ...Array.from(new Set(cars.map((car) => car.brand)))].sort()

  const filteredCars = cars
    .filter((car) => {
      const matchesPrice = car.price >= priceRange[0] && car.price <= priceRange[1]
      const matchesCategory = selectedCategory === "all" || car.category === selectedCategory
      const matchesBrand = selectedBrand === "all" || car.brand === selectedBrand
      return matchesPrice && matchesCategory && matchesBrand
    })
    .sort((a, b) => {
      if (sortBy === "price-asc") return a.price - b.price
      if (sortBy === "price-desc") return b.price - a.price
      if (sortBy === "name-asc") return a.name.localeCompare(b.name)
      if (sortBy === "name-desc") return b.name.localeCompare(a.name)
      return 0
    })

  return (
    <section id="catalog" className="py-20 bg-black text-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="font-archivo text-3xl md:text-4xl font-bold text-white tracking-tight">
            {t("exploreInventory")}
          </h2>
          <p className="text-gray-400 mt-2 max-w-2xl mx-auto font-barlow">{t("browseCollection")}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <div className="bg-zinc-900 rounded-none p-6 sticky top-20">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold text-white font-archivo">{t("filters")}</h3>
                <Filter className="h-5 w-5 text-white" />
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="text-sm font-medium text-gray-300 mb-3 font-archivo">{t("priceRange")}</h4>
                  <Slider
                    defaultValue={[50000, 550000]}
                    min={50000}
                    max={550000}
                    step={10000}
                    value={priceRange}
                    onValueChange={setPriceRange}
                    className="my-6"
                  />
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-400">{formatPrice(priceRange[0])}</span>
                    <span className="text-gray-400">{formatPrice(priceRange[1])}</span>
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-medium text-gray-300 mb-3 font-archivo">{t("brand")}</h4>
                  <Select value={selectedBrand} onValueChange={setSelectedBrand}>
                    <SelectTrigger className="w-full bg-zinc-800 border-zinc-700">
                      <SelectValue placeholder={t("all")} />
                    </SelectTrigger>
                    <SelectContent className="bg-zinc-800 border-zinc-700">
                      {brands.map((brand) => (
                        <SelectItem key={brand} value={brand}>
                          {brand === "all" ? t("all") : brand}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <h4 className="text-sm font-medium text-gray-300 mb-3 font-archivo">{t("category")}</h4>
                  <Tabs defaultValue="all" value={selectedCategory} onValueChange={setSelectedCategory}>
                    <TabsList className="grid grid-cols-2 h-auto bg-zinc-800">
                      <TabsTrigger value="all" className="data-[state=active]:bg-white data-[state=active]:text-black">
                        {t("all")}
                      </TabsTrigger>
                      <TabsTrigger
                        value="sports"
                        className="data-[state=active]:bg-white data-[state=active]:text-black"
                      >
                        {t("sports")}
                      </TabsTrigger>
                      <TabsTrigger
                        value="luxury"
                        className="data-[state=active]:bg-white data-[state=active]:text-black"
                      >
                        {t("luxury")}
                      </TabsTrigger>
                      <TabsTrigger value="suv" className="data-[state=active]:bg-white data-[state=active]:text-black">
                        {t("suv")}
                      </TabsTrigger>
                      <TabsTrigger
                        value="electric"
                        className="data-[state=active]:bg-white data-[state=active]:text-black"
                      >
                        {t("electric")}
                      </TabsTrigger>
                    </TabsList>
                  </Tabs>
                </div>

                <Button className="w-full bg-white text-black hover:bg-gray-200">{t("applyFilters")}</Button>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="flex justify-between items-center mb-6">
              <p className="text-gray-300 font-barlow">
                {t("showing")} <span className="text-white font-medium">{filteredCars.length}</span> {t("vehicles")}
              </p>

              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-[180px] bg-zinc-800 border-zinc-700">
                  <SelectValue placeholder={t("sortBy")} />
                </SelectTrigger>
                <SelectContent className="bg-zinc-800 border-zinc-700">
                  <SelectItem value="price-asc">{t("priceLowHigh")}</SelectItem>
                  <SelectItem value="price-desc">{t("priceHighLow")}</SelectItem>
                  <SelectItem value="name-asc">{t("nameAZ")}</SelectItem>
                  <SelectItem value="name-desc">{t("nameZA")}</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredCars.map((car) => (
                <Card key={car.id} className="bg-zinc-900 border-none rounded-none overflow-hidden">
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
                  <CardContent className="p-5">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-archivo text-lg font-bold text-white">{car.name}</h3>
                      <span className="text-white font-semibold">{formatPrice(car.price)}</span>
                    </div>

                    <div className="grid grid-cols-3 gap-2 mt-4 mb-4 text-sm">
                      <div className="text-center py-2 bg-black rounded-none">
                        <p className="text-gray-400 text-xs">{t("power")}</p>
                        <p className="text-white">{car.specs.power}</p>
                      </div>
                      <div className="text-center py-2 bg-black rounded-none">
                        <p className="text-gray-400 text-xs">{t("acceleration")}</p>
                        <p className="text-white">{car.specs.acceleration}</p>
                      </div>
                      <div className="text-center py-2 bg-black rounded-none">
                        <p className="text-gray-400 text-xs">{t("topSpeed")}</p>
                        <p className="text-white">{car.specs.topSpeed}</p>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Button className="flex-1 bg-white text-black hover:bg-gray-200">{t("details")}</Button>
                      <Button variant="outline" className="flex-1 border-white text-white hover:bg-white/10">
                        {t("testDrive")}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredCars.length === 0 && (
              <div className="text-center py-12 bg-zinc-900">
                <p className="text-gray-400 text-lg font-barlow">{t("noVehicles")}</p>
                <Button
                  variant="link"
                  className="text-white mt-2"
                  onClick={() => {
                    setPriceRange([50000, 550000])
                    setSelectedCategory("all")
                    setSelectedBrand("all")
                  }}
                >
                  {t("resetFilters")}
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
