
import { Button } from "@/components/ui/button";
import Image from "next/image"; 
import { GaugeDemo1, GaugeDemo2, GaugeDemo3 } from "./gauge-demo";
 
 
export function HeroSection1() {
    return (
        <section className="relative h-[920px] w-full overflow-hidden">
            <div className="absolute inset-0 ring ring-[#D5BBEA] rounded-3xl m-3">
             <Image
                    src="/new/hero-1.jpg"
                    alt="Hero"
                    width={1600}
                    height={1000}
                    className="object-cover rounded-3xl h-full w-full"
                />
            </div> 
            <GaugeDemo1 /> 
            <div className="absolute block md:hidden inset-3 rounded-3xl bg-black/40" />
 
            <div className="relative z-10 flex h-full items-center">
                <div className="container mx-auto mt-20">
                    <div className="max-w-sm md:max-w-lg px-8">
                        <h1
                            className="font-heading text-4xl font-semibold text-white leading-tight md:text-5xl">
                            Pain that keeps coming back ends here at OPTM.
                        </h1>

                        <p className="mt-6 max-w-sm text-sm leading-6 text-white/60">
                            Using proprietary MuscleAGE™ biomarker technology,
                            plant medicine, and GLP-1 therapy, OPTM reverses
                            pain, muscle degeneration, and metabolic decline at
                            the source—not the symptom.
                        </p>

                        <div className="mt-8">
                            <Button size="lg">
                                Book Your Assessment
                            </Button>
                        </div>

                        <div className="flex">
                        
                            <p className="pt-40 max-w-md text-xs leading-7 text-white/60">
                                Chronic pain & metabolic health · Delhi NCR
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export function HeroSection2() {
    return (
        <section className="relative h-[920px] w-full overflow-hidden">
            <div className="absolute inset-0 m-3">
                <Image
                    src="/new/hero-2.jpg"
                    alt="Hero"
                    width={1600}
                    height={1000}
                    className="object-cover rounded-3xl h-full w-full"
                />
            </div>

            <GaugeDemo2 />

            <div className="absolute block  md:hidden inset-3 rounded-3xl bg-white/40" />

             

            <div className="relative z-10 flex h-full items-center">
                <div className="container mx-auto mt-20">
                    <div className="max-w-sm md:max-w-lg px-8">
                        <h1
                            className="font-heading text-4xl font-semibold leading-tight text-black md:text-5xl">
                            What If <br/>
                            Your Pain Isn't the Real Problem?

                        </h1>

                        <p className="mt-6 max-w-md text-sm leading-6 text-black/60">
                            Most treatments focus on where you feel pain.
                            <br/>

                            At OPTM, we start by understanding why it exists.
                        </p>

                        <div className="mt-8">
                            <Button size="lg">
                                Book Your Assessment
                            </Button>
                        </div>

                        <div className="flex">

                            <p className="pt-40 max-w-sm text-xs leading-7 text-black/60">
                                Chronic pain & metabolic health · Delhi NCR
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export function HeroSection3() {
    return (
        <section className="relative h-[920px] w-full overflow-hidden">
            <div className="absolute inset-0 m-3">
                <Image
                    src="/new/hero-3.jpg"
                    alt="Hero"
                    width={1600}
                    height={1000}
                    className="object-cover rounded-3xl h-full w-full"
                />
            </div>

            <GaugeDemo3 />

            <div className="absolute block md:hidden inset-3 rounded-3xl bg-white/40" />

             

            <div className="relative z-10 flex h-full items-center">
                <div className="container mx-auto mt-20">
                    <div className="max-w-sm md:max-w-lg px-8">
                        <h1
                            className="font-heading text-4xl font-semibold leading-tight text-black  md:text-5xl">
                            We don't
                            start with treatment.
                            We start with understanding.
                        </h1>

                        <p className="mt-6 max-w-sm text-sm leading-6 text-black/60">
                            OPTM helps you understand how your muscles, metabolism, and overall health are connected, so every decision starts with deeper insight.
                        </p>

                        <div className="mt-8">
                            <Button size="lg">
                                Book Your Assessment
                            </Button>
                        </div>

                        <div className="flex">

                            <p className="pt-40 max-w-md text-xs leading-7  text-black/60">
                                Chronic pain & metabolic health · Delhi NCR
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}