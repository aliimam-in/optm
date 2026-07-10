
import Image from "next/image";
import { Badge } from "../ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card"
import {
    CompareSlider,
    CompareSliderAfter,
    CompareSliderBefore,
    CompareSliderHandle,
} from "@/components/ui/compare-slider";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";


const biomarkers = [
    {
        title: "CTX-II",
        description:
            "A fragment of cross-linked type II collagen, reflecting cartilage degradation and enabling assessment of joint tissue turnover.",
    },
    {
        title: "COMP",
        description:
            "Cartilage oligomeric matrix protein, a biomarker of cartilage damage and osteoarthritis progression.",
    },
    {
        title: "IL-6",
        description:
            "An inflammatory cytokine associated with joint inflammation and immune response.",
    },
    {
        title: "hs-CRP",
        description:
            "High-sensitivity C-reactive protein, indicating systemic inflammation.",
    },
    {
        title: "CK-MM",
        description:
            "A skeletal muscle enzyme used to assess muscle damage.",
    },
    {
        title: "Aldolase A",
        description:
            "An enzyme involved in muscle metabolism and muscle health assessment.",
    },
    {
        title: "OrthoAGE™",
        description:
            "A proprietary score representing musculoskeletal biological age.",
    },
];


export function FourStepSection() {
    return (
        <section className="relative m-3">
            <Tabs defaultValue="1">
                <div className="relative w-full mx-auto max-w-5xl border border-b-0 py-10 mx-auto border-[#D5BBEA]/60 rounded-t-xl md:rounded-t-[30px]">
                    <div className="relative mt-10 flex flex-col h-full justify-center items-center">

                        <Badge>
                            The Problem
                        </Badge>


                        <div className="max-w-md mt-8 md:max-w-3xl text-center px-8">
                            <h1
                                className="font-heading text-2xl font-semibold text-black leading-tight md:text-3xl">
                                The OPTM Method. <br /> Four steps. No guesswork.
                            </h1>

                            <p className="mt-6 text-sm leading-6 text-black/60">
                                An evidence-based protocol — not generic physio,
                                not a surgery referral.
                            </p>
                        </div>

                    </div>
                    <div className="mt-10">
                        <div className="overflow-x-auto mx-10 rounded-full">
                            <TabsList className="mx-auto flex w-max md:w-fit gap-2 whitespace-nowrap">
                                <TabsTrigger value="1">Knee pain</TabsTrigger>
                                <TabsTrigger value="2">Back pain</TabsTrigger>
                                <TabsTrigger value="3">Muscle longevity</TabsTrigger>
                                <TabsTrigger value="4">Obesity & GLP-1</TabsTrigger>
                            </TabsList>
                        </div>
                    </div>
                </div>
                <TabsContent value="1" className={"relative h-full -mt-3 w-full mx-auto max-w-7xl"}>

                    <CompareSlider
                        defaultValue={40}
                        className="relative w-full aspect-[16/8] overflow-hidden rounded-none md:rounded-[30px]"
                    >
                        <CompareSliderBefore>
                            <img
                                src="/new/knee-pain-1.jpg"
                                alt="Before"
                                className="w-full h-full object-cover"
                            />
                        </CompareSliderBefore>

                        <CompareSliderAfter>
                            <img
                                src="/new/knee-pain-2.jpg"
                                alt="After"
                                className="w-full h-full object-cover"
                            />
                        </CompareSliderAfter>
                        <CompareSliderHandle />
                    </CompareSlider>

                </TabsContent>
                <TabsContent value="2" className={"relative h-full -mt-3 w-full mx-auto max-w-7xl"}>
                    <CompareSlider
                        defaultValue={40}
                        className="relative w-full aspect-[16/8] overflow-hidden rounded-none md:rounded-[30px]"
                    >
                        <CompareSliderBefore>
                            <img
                                src="/new/back-pain-1.jpg"
                                alt="Before"
                                className="w-full h-full object-cover"
                            />
                        </CompareSliderBefore>

                        <CompareSliderAfter>
                            <img
                                src="/new/back-pain-2.jpg"
                                alt="After"
                                className="w-full h-full object-cover"
                            />
                        </CompareSliderAfter>
                        <CompareSliderHandle />
                    </CompareSlider>

                </TabsContent>
                <TabsContent value="3" className={"relative h-full -mt-3 w-full mx-auto max-w-7xl"}>
                    <CompareSlider
                        defaultValue={40}
                        className="relative w-full aspect-[16/8] overflow-hidden rounded-none md:rounded-[30px]"
                    >
                        <CompareSliderBefore>
                            <img
                                src="/new/muscle-pain-1.jpg"
                                alt="Before"
                                className="w-full h-full object-cover"
                            />
                        </CompareSliderBefore>

                        <CompareSliderAfter>
                            <img
                                src="/new/muscle-pain-2.jpg"
                                alt="After"
                                className="w-full h-full object-cover"
                            />
                        </CompareSliderAfter>
                        <CompareSliderHandle />
                    </CompareSlider>

                </TabsContent>
                <TabsContent value="4" className={"relative h-full -mt-3 w-full mx-auto max-w-7xl"}>
                    <CompareSlider
                        defaultValue={40}
                        className="relative w-full aspect-[16/8] overflow-hidden rounded-none md:rounded-[30px]"
                    >
                        <CompareSliderBefore>
                            <img
                                src="/new/obesity-pain-1.jpg"
                                alt="Before"
                                className="w-full h-full object-cover"
                            />
                        </CompareSliderBefore>

                        <CompareSliderAfter>
                            <img
                                src="/new/obesity-pain-2.jpg"
                                alt="After"
                                className="w-full h-full object-cover"
                            />
                        </CompareSliderAfter>
                        <CompareSliderHandle />
                    </CompareSlider>

                </TabsContent>
            </Tabs>
            <div className="w-full border border-t-0 py-10 border-[#D5BBEA]/60 rounded-b-xl md:rounded-b-[30px] mx-auto max-w-5xl flex flex-wrap gap-1 justify-center mb-6">

                <div className="hidden md:flex flex-wrap gap-1 justify-center">
                    {biomarkers.map((item, index) => (
                        <HoverCard key={index}>
                            <HoverCardTrigger delay={40} className={"cursor-pointer"}>
                                <Badge variant="outline" className="cursor-pointer">
                                    {item.title}
                                </Badge>
                            </HoverCardTrigger>
                            <HoverCardContent>
                                <p className="text-sm">{item.description}</p>
                            </HoverCardContent>
                        </HoverCard>
                    ))}
                </div>
                {biomarkers.map((item) => (
                    <div key={item.title} className="md:hidden">
                        <Popover>
                            <PopoverTrigger>
                                <Badge
                                    variant="outline"
                                    className="cursor-pointer"
                                >
                                    {item.title}
                                </Badge>
                            </PopoverTrigger>

                            <PopoverContent className="w-60 shadow-none">
                                <p className="text-sm text-black/60">
                                    {item.description}
                                </p>
                            </PopoverContent>
                        </Popover>
                    </div>
                ))}
            </div>
        </section>
    );
}
