import {
    Card,
    CardAction,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

export function ApproachSection() {
    return (
        <section className="relative bg-primary py-20">

            <div className="relative flex flex-col h-full space-y-6 justify-center items-center">

                <div className="max-w-md md:max-w-3xl text-center px-8">
                    <h1
                        className="font-heading text-2xl font-semibold text-white leading-tight md:text-3xl">
                        Our approach
                    </h1>
                </div>
            </div>

            <div className="mt-20 hidden md:flex grid gap-2 mx-auto max-w-5xl">
                <Card className="relative  bg-transparent shadow-none ring-0 mx-auto w-full max-w-sm pt-0">
                    <img
                        src="/new/approach-3.jpg"
                        alt="Event cover"
                        className="relative border border-[#D5BBEA] rounded-3xl z-20 w-full object-cover"
                    />
                    <CardHeader>
                        <CardTitle className="text-white text-xl font-semibold">
                            The 4-Step Protocol
                        </CardTitle>
                        <CardDescription className="text-white/80">
                            Our systematic approach moves patients from guesswork to proven outcomes through Assessment, Personalised Protocol formulation, Biomarker Monitoring, and Outcome Reporting.
                        </CardDescription>
                    </CardHeader>
                </Card>
                <Card className="relative  bg-transparent shadow-none ring-0 mx-auto w-full max-w-sm pt-0">
                    <img
                        src="/new/approach-2.jpg"
                        alt="Event cover"
                        className="relative border border-[#D5BBEA] rounded-3xl z-20 w-full object-cover"
                    />
                    <CardHeader>
                        <CardTitle className="text-white text-xl font-semibold">
                            Advanced Phytotherapy
                        </CardTitle>
                        <CardDescription className="text-white/80">
                            We utilize targeted, plant-based phytotherapy to address the biological drivers of pain. This intervention is so effective that it boasts a 100% medication-stopped statistic, allowing many to stop their NSAIDs from Day 1.
                        </CardDescription>
                    </CardHeader>
                </Card>
                <Card className="relative  bg-transparent shadow-none ring-0 mx-auto w-full max-w-sm pt-0">
                    <img
                        src="/new/approach-1.jpg"
                        alt="Event cover"
                        className="relative border border-[#D5BBEA] rounded-3xl z-20 w-full object-cover"
                    />
                    <CardHeader>
                        <CardTitle className="text-white text-xl font-semibold">
                            MuscleAGE™ & <br />
                            Bio-Musculo Index
                        </CardTitle>
                        <CardDescription className="text-white/80">
                            Recovery shouldn't be a feeling; it should be a number. We track your biological muscle age versus your chronological age, monitoring the real-time reduction of inflammation markers (like IL-6) from Day 1 to Day 60 to optimize longevity.
                        </CardDescription>
                    </CardHeader>
                </Card>
            </div>

            <Carousel className="my-20  md:hidden grid gap-2 mx-auto max-w-5xl">
                <CarouselContent>
                    <CarouselItem>
                        <Card className="relative  bg-transparent shadow-none ring-0 mx-auto w-full max-w-sm pt-0">
                            <img
                                src="/new/approach-3.jpg"
                                alt="Event cover"
                                className="relative border border-[#D5BBEA] rounded-3xl z-20 w-full object-cover"
                            />
                            <CardHeader>
                                <CardTitle className="text-white text-xl font-semibold">
                                    The 4-Step Protocol
                                </CardTitle>
                                <CardDescription className="text-white/80">
                                    Our systematic approach moves patients from guesswork to proven outcomes through Assessment, Personalised Protocol formulation, Biomarker Monitoring, and Outcome Reporting.
                                </CardDescription>
                            </CardHeader>
                        </Card>
                    </CarouselItem>
                    <CarouselItem>
                        <Card className="relative  bg-transparent shadow-none ring-0 mx-auto w-full max-w-sm pt-0">
                            <img
                                src="/new/approach-2.jpg"
                                alt="Event cover"
                                className="relative border border-[#D5BBEA] rounded-3xl z-20 w-full object-cover"
                            />
                            <CardHeader>
                                <CardTitle className="text-white text-xl font-semibold">
                                    Advanced Phytotherapy
                                </CardTitle>
                                <CardDescription className="text-white/80">
                                    We utilize targeted, plant-based phytotherapy to address the biological drivers of pain. This intervention is so effective that it boasts a 100% medication-stopped statistic, allowing many to stop their NSAIDs from Day 1.
                                </CardDescription>
                            </CardHeader>
                        </Card>
                    </CarouselItem>
                    <CarouselItem><Card className="relative  bg-transparent shadow-none ring-0 mx-auto w-full max-w-sm pt-0">
                        <img
                            src="/new/approach-1.jpg"
                            alt="Event cover"
                            className="relative border border-[#D5BBEA] rounded-3xl z-20 w-full object-cover"
                        />
                        <CardHeader>
                            <CardTitle className="text-white text-xl font-semibold">
                                MuscleAGE™ & <br />
                                Bio-Musculo Index
                            </CardTitle>
                            <CardDescription className="text-white/80">
                                Recovery shouldn't be a feeling; it should be a number. We track your biological muscle age versus your chronological age, monitoring the real-time reduction of inflammation markers (like IL-6) from Day 1 to Day 60 to optimize longevity.
                            </CardDescription>
                        </CardHeader>
                    </Card></CarouselItem>
                </CarouselContent>
                <div className="absolute w-full flex -bottom-20 right-0 z-50 flex md:justify-end justify-center items-center gap-3">
                    <CarouselPrevious className="static size-12 shadow-none translate-y-0" />
                    <CarouselNext className="static size-12 shadow-none translate-y-0" />
                </div>
            </Carousel> 
        </section>
    );
}
