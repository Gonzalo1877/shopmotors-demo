"use client"

import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";
import Image from 'next/image';

function PorscheSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [
    "/porsche_hero1.jpg",
    "/porsche_hero2.jpg",
    "/porsche_hero3.jpg",
    "/porsche_hero4.jpg"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 5000); // Cambia cada 5 segundos

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[90vh] overflow-hidden">
      {images.map((src, index) => (
        <div 
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
        >
          <Image
            src={src}
            alt={`Porsche 911 GT3 RS ${index + 1}`}
            fill
            className="object-cover object-center"
            priority={index === 0} // Solo precarga la primera imagen
            quality={85}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 to-transparent" />
        </div>
      ))}
    </div>
  );
}

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative h-[90vh] w-full overflow-hidden">
      <PorscheSlider />

      {/* Contenido superpuesto (igual que antes) */}
      <div className="absolute inset-0 z-20 bg-gradient-to-r from-black/90 to-transparent">
        <div className="container h-full flex flex-col justify-center">
          <div className="max-w-xl space-y-6">
            <h1 className="font-archivo text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight">
              {t("experienceLuxury")}
            </h1>
            <p className="text-lg text-gray-300 font-barlow">
              {t("discoverThrill")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-white text-black hover:bg-gray-200 text-base px-6 py-6 rounded-none">
                {t("exploreCollection")}
              </Button>
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white/10 text-base px-6 py-6 rounded-none"
              >
                {t("bookTestDriveBtn")} <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
