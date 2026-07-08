"use client";

import * as React from "react";

import {
    Carousel,
    CarouselApi,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

import { HeroSection1, HeroSection2, HeroSection3 } from "./hero";
import { cn } from "@/lib/utils";
import Autoplay from "embla-carousel-autoplay";

export function CarouselHero() {
    const [api, setApi] = React.useState<CarouselApi>();
    const [current, setCurrent] = React.useState(0);
    const [count, setCount] = React.useState(0);

    const plugin = React.useRef(
        Autoplay({ delay: 7000, stopOnInteraction: true })
    )

    React.useEffect(() => {
        if (!api) return;

        setCount(api.scrollSnapList().length);
        setCurrent(api.selectedScrollSnap());

        const onSelect = () => {
            setCurrent(api.selectedScrollSnap());
        };

        api.on("select", onSelect);
        api.on("reInit", onSelect);

        return () => {
            api.off("select", onSelect);
            api.off("reInit", onSelect);
        };
    }, [api]);

    return (
        <Carousel
            plugins={[plugin.current]}
            setApi={setApi}
            opts={{
                loop: true,
            }}
            className="relative -mt-17"
        >
            <CarouselContent className="h-[920px]">
                <CarouselItem>
                    <HeroSection1 />
                </CarouselItem>

                <CarouselItem>
                    <HeroSection2 />
                </CarouselItem>

                <CarouselItem>
                    <HeroSection3 />
                </CarouselItem>
            </CarouselContent>

            {/* Navigation */}
            <div className="absolute hidden md:flex bottom-8 right-8 z-50 flex items-center gap-3">
                <CarouselPrevious className="static size-12 shadow-none translate-y-0" />
                <CarouselNext className="static size-12 shadow-none translate-y-0" />
            </div>

            {/* Indicators */}
            <div className="absolute bottom-10 left-1/2 z-50 flex -translate-x-1/2 gap-2">
                {Array.from({ length: count }).map((_, index) => (
                    <button
                        key={index}
                        onClick={() => api?.scrollTo(index)}
                        className={cn(
                            "h-2 rounded-full transition-all duration-300",
                            current === index
                                ? "w-8 bg-white"
                                : "w-2 bg-white/40 hover:bg-white/70"
                        )}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </Carousel>
    );
}