import { cn } from "@/lib/utils";
import { Badge } from "../ui/badge";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

export function NumberSection() {
    return (
        <section className="relative py-20 m-3">

            <div className="relative flex flex-col h-full space-y-6 justify-center items-center">
                <Badge>
                    What we treat?
                </Badge>

                <div className="max-w-md md:max-w-3xl text-center px-8">
                    <h1
                        className="font-heading text-2xl font-semibold text-black leading-tight md:text-3xl">
                        If it hurts, we probably <br /> have a number for it
                    </h1>

                </div>
                <div className="grid md:gap-3 rounded-3xl bg-primary max-w-5xl mt-10 md:grid-cols-2 ">
                    <div className="grid p-3 md:pr-0 gap-3 h-full w-full grid-cols-2">
                        <div className="flex rounded-xl flex-col items-center justify-center h-full w-full bg-[#D5BBEA] text-center aspect-square  px-6">
                            <h1
                                className="font-heading text-2xl font-semibold text-white leading-tight md:text-3xl">
                                8 yrs
                            </h1>
                            <p className="mt-4 text-md leading-6 text-white/80">
                                average reduction in inflammatory biological age at 90 days
                            </p>

                        </div>
                        <div className="flex rounded-xl flex-col items-center justify-center h-full w-full bg-[#D5BBEA] text-center aspect-square  px-6">
                            <h1
                                className="font-heading text-2xl font-semibold text-white leading-tight md:text-3xl">
                                93%
                            </h1>
                            <p className="mt-4 text-md leading-6 text-white/80">
                                of patients report significant pain reduction at day 90
                            </p>

                        </div>
                        <div className="flex rounded-xl flex-col items-center justify-center h-full w-full bg-[#D5BBEA] text-center aspect-square  px-6">
                            <h1
                                className="font-heading text-2xl font-semibold text-white leading-tight md:text-3xl">
                                ↓ 44%
                            </h1>
                            <p className="mt-4 text-md leading-6 text-white/80">
                                average drop in CRP within 3 weeks of GLP-1
                            </p>

                        </div>
                        <div className="flex rounded-xl flex-col items-center justify-center h-full w-full bg-[#D5BBEA] text-center aspect-square  px-6">
                            <h1
                                className="font-heading text-2xl font-semibold text-white leading-tight md:text-3xl">
                                3X
                            </h1>
                            <p className="mt-4 text-md leading-6 text-white/80">
                                biomarker retests confirm biological reversal - not symptom relief
                            </p>

                        </div>
                    </div>
                    <Carousel className="h-full p-3 pt-0 md:pt-3 md:pl-0 w-full">
                        <CarouselContent>
                            <CarouselItem>
                                <div className="flex rounded-xl flex-col h-full w-full bg-white aspect-square p-8">
                                    <h1
                                        className="font-heading text-xl font-semibold text-black leading-tight md:text-3xl">
                                        "When I was told I might need knee replacement surgery, I felt like I had run out of options. OPTM helped me understand my condition and guided me through a personalized recovery journey."
                                    </h1>
                                    <p className="mt-10 text-lg leading-6 text-black">
                                        Ravi Mehta, 51
                                    </p>

                                    <p className="mt-4 text-sm leading-6 text-black/60">
                                        South Delhi · Osteoarthritis + metabolic syndrome
                                    </p> 
                                </div>
                            </CarouselItem>
                            <CarouselItem>
                                <div className="flex rounded-xl flex-col h-full w-full bg-white aspect-square p-8">
                                    <h1
                                        className="font-heading text-xl font-semibold text-black leading-tight md:text-3xl">
                                        "When I was told I might need knee replacement surgery, I felt like I had run out of options. OPTM helped me understand my condition and guided me through a personalized recovery journey."
                                    </h1>
                                    <p className="mt-10 text-lg leading-6 text-black">
                                        Ravi Mehta, 51
                                    </p>

                                    <p className="mt-4 text-sm leading-6 text-black/60">
                                        South Delhi · Osteoarthritis + metabolic syndrome
                                    </p> 
                                </div>
                            </CarouselItem>
                            
                        </CarouselContent>
                        <div className="absolute w-full flex -bottom-20 right-0 z-50 flex md:justify-end justify-center items-center gap-3">
                            <CarouselPrevious className="static size-12 shadow-none translate-y-0" />
                            <CarouselNext className="static size-12 shadow-none translate-y-0" />
                        </div>
                    </Carousel>

                </div>
            </div> 
        </section>
    );
}
