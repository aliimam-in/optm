
import Image from "next/image";
import { Badge } from "../ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card"

export function FourStepSection() {
    return (
        <section className="relative">
            <Tabs defaultValue="1">
                <div className="relative w-full mx-auto max-w-5xl border border-b-0 py-10 mx-auto border-[#D5BBEA]/60 rounded-t-[40px]">
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
                    <div className="flex flex-col justify-center items-center mt-6">

                        <TabsList>
                            <TabsTrigger value="1">Knee pain</TabsTrigger>
                            <TabsTrigger value="2">Back pain</TabsTrigger>
                            <TabsTrigger value="3">Muscle longevity</TabsTrigger>
                            <TabsTrigger value="4">Obesity & GLP-1</TabsTrigger>
                        </TabsList>

                    </div>
                </div>
                <TabsContent value="1" className={"relative h-full -mt-3 w-full mx-auto max-w-7xl"}>
                    <div className="rounded-3xl">
                        <Image
                            src="/new/knee-pain-1.jpg"
                            alt="Hero"
                            width={1600}
                            height={1000}
                            className="object-cover rounded-3xl h-full w-full"
                        />
                    </div>
                </TabsContent>
                <TabsContent value="2" className={"relative h-full -mt-3 w-full mx-auto max-w-7xl"}><div className="rounded-3xl">
                    <Image
                        src="/new/knee-pain-1.jpg"
                        alt="Hero"
                        width={1600}
                        height={1000}
                        className="object-cover rounded-3xl h-full w-full"
                    />
                </div>
                </TabsContent>
                <TabsContent value="3" className={"relative h-full -mt-3 w-full mx-auto max-w-7xl"}><div className="rounded-3xl">
                    <Image
                        src="/new/knee-pain-1.jpg"
                        alt="Hero"
                        width={1600}
                        height={1000}
                        className="object-cover rounded-3xl h-full w-full"
                    />
                </div>
                </TabsContent>
                <TabsContent value="4" className={"relative h-full -mt-3 w-full mx-auto max-w-7xl"}><div className="rounded-3xl">
                    <Image
                        src="/new/knee-pain-1.jpg"
                        alt="Hero"
                        width={1600}
                        height={1000}
                        className="object-cover rounded-3xl h-full w-full"
                    />
                </div>
                </TabsContent>
            </Tabs>
            <div className="w-full border border-t-0 py-10 border-[#D5BBEA]/60 rounded-b-[40px] mx-auto max-w-5xl flex flex-wrap gap-1 justify-center mb-6">
                <HoverCard>
                    <HoverCardTrigger delay={40} className={"cursor-pointer"}>
                        <Badge variant={"outline"}>
                            CTX-II
                        </Badge>
                    </HoverCardTrigger>
                    <HoverCardContent>
                        A fragment of cross-linked type II collagen, reflecting cartilage degradation and enabling assessment of joint tissue turnover. Key features and values.
                    </HoverCardContent>
                    <HoverCardTrigger delay={40} className={"cursor-pointer"}>
                        <Badge variant={"outline"}>
                            COMP
                        </Badge>
                    </HoverCardTrigger>
                    <HoverCardContent>
                        A fragment of cross-linked type II collagen, reflecting cartilage degradation and enabling assessment of joint tissue turnover. Key features and values.
                    </HoverCardContent>
                    <HoverCardTrigger delay={40} className={"cursor-pointer"}>
                        <Badge variant={"outline"}>
                            IL-6
                        </Badge>
                    </HoverCardTrigger>
                    <HoverCardContent>
                        A fragment of cross-linked type II collagen, reflecting cartilage degradation and enabling assessment of joint tissue turnover. Key features and values.
                    </HoverCardContent>
                    <HoverCardTrigger delay={40} className={"cursor-pointer"}>
                        <Badge variant={"outline"}>
                            hs-CRP
                        </Badge>
                    </HoverCardTrigger>
                    <HoverCardContent>
                        A fragment of cross-linked type II collagen, reflecting cartilage degradation and enabling assessment of joint tissue turnover. Key features and values.
                    </HoverCardContent>
                    <HoverCardTrigger delay={40} className={"cursor-pointer"}>
                        <Badge variant={"outline"}>
                            CK-MM
                        </Badge>
                    </HoverCardTrigger>
                    <HoverCardContent>
                        A fragment of cross-linked type II collagen, reflecting cartilage degradation and enabling assessment of joint tissue turnover. Key features and values.
                    </HoverCardContent>
                    <HoverCardTrigger delay={40} className={"cursor-pointer"}>
                        <Badge variant={"outline"}>
                            Aldolase A
                        </Badge>
                    </HoverCardTrigger>
                    <HoverCardContent>
                        A fragment of cross-linked type II collagen, reflecting cartilage degradation and enabling assessment of joint tissue turnover. Key features and values.
                    </HoverCardContent>
                    <HoverCardTrigger delay={40} className={"cursor-pointer"}>
                        <Badge variant={"outline"}>
                            OrthoAGE™
                        </Badge>
                    </HoverCardTrigger>
                    <HoverCardContent>
                        A fragment of cross-linked type II collagen, reflecting cartilage degradation and enabling assessment of joint tissue turnover. Key features and values.
                    </HoverCardContent>
                </HoverCard> 
            </div>
        </section>
    );
}
