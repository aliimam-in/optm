 
import { FourStepSection } from "@/components/home/four-step"
import { CarouselHero } from "@/components/home/hero-carousel"
import { MuscleAgeSection } from "@/components/home/muscleage"
import { ProblemSection } from "@/components/home/problem"
import { ProtocolSection } from "@/components/home/protocol"
import { TrustSection } from "@/components/home/trust"
import { Dithering } from "@paper-design/shaders-react"

export default function Page() {
  return (
    <div className="">
      <Dithering className="absolute top-0 -z-50 w-full h-full"
        colorBack="#ffffff00"
        colorFront="#D5BBEA"
        shape="wave"
        type="8x8"
        size={1}
        speed={0.2}
        scale={0.8}
        rotation={180}
        offsetY={-0.4}
      />
      <CarouselHero/>
       
      <TrustSection />
      <MuscleAgeSection />
      <ProblemSection />
      <FourStepSection />
      <ProtocolSection/>
      <ProblemSection />
    </div>
  )
}
