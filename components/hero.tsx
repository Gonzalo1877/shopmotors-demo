"use client"

import { Suspense } from "react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, PerspectiveCamera, Environment, useGLTF } from "@react-three/drei"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

function PorscheModel() {
  const { scene } = useGLTF("/assets/3d/hero_porsche3d.glb")

  const modelScale = 150
  const modelPosition = [0,-0.5,0]
  const modelRotation = [0, Math.PI / 4, 0]


  return <primitive 
  object={scene} 
  position={modelPosition} 
  rotation={modelRotation} 
  scale={modelScale}
  />
}

export default function Hero() {
  const { t } = useLanguage()

  return (
    <section className="relative h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0 z-10">
        <Canvas shadows>
          <PerspectiveCamera makeDefault position={[5, 2, 5]} fov={35} />
          <ambientLight intensity={0.5} />
          <directionalLight
            position={[10, 10, 5]}
            intensity={1}
            castShadow
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
          />
          <spotLight position={[-10, 10, 5]} angle={0.15} penumbra={1} intensity={1} castShadow />
          <Suspense fallback={null}>
            <PorscheModel />
            <Environment preset="night" />
          </Suspense>
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            autoRotate
            autoRotateSpeed={0.5}
            minPolarAngle={Math.PI / 3}
            maxPolarAngle={Math.PI / 2}
          />
        </Canvas>
      </div>

      <div className="absolute inset-0 z-20 bg-gradient-to-r from-black/90 dark:from-black/90 to-transparent">
        <div className="container h-full flex flex-col justify-center">
          <div className="max-w-xl space-y-6">
            <h1 className="font-archivo text-5xl md:text-6xl lg:text-7xl font-bold text-white dark:text-white leading-tight tracking-tight">
              {t("experienceLuxury")}
            </h1>
            <p className="text-lg text-gray-300 dark:text-gray-300 font-barlow">{t("discoverThrill")}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-white text-black hover:bg-gray-200 dark:bg-white dark:text-black dark:hover:bg-gray-200 text-base px-6 py-6 rounded-none">
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
  )
}
