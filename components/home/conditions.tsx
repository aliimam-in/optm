"use client";

import {
    Marquee,
    MarqueeContent,
    MarqueeEdge,
    MarqueeItem,
} from "@/components/ui/marquee";
import { Badge } from "../ui/badge";

const tricks1 = [
    { title: "Knee Pain" },
    { title: "Back Pain" },
    { title: "Neck Pain" },
    { title: "Shoulder Pain" },
    { title: "Hip Pain" },
    { title: "Sciatica" },
    { title: "Frozen Shoulder" },
    { title: "Arthritis" },
    { title: "Osteoarthritis" },
    { title: "Muscle Weakness" },
    { title: "Sports Injury" },
    { title: "Fibromyalgia" },
    { title: "Joint Pain" },
    { title: "Elbow Pain" },
    { title: "Wrist Pain" },
    { title: "Ankle Pain" },
    { title: "Foot Pain" },
    { title: "Heel Pain" },
    { title: "Plantar Fasciitis" },
    { title: "Tennis Elbow" },
  ];
  
  const tricks2 = [
    { title: "Golfer's Elbow" },
    { title: "Rotator Cuff Injury" },
    { title: "ACL Injury" },
    { title: "Meniscus Tear" },
    { title: "Ligament Injury" },
    { title: "Muscle Strain" },
    { title: "Muscle Stiffness" },
    { title: "Joint Stiffness" },
    { title: "Chronic Pain" },
    { title: "Nerve Pain" },
    { title: "Lower Back Pain" },
    { title: "Upper Back Pain" },
    { title: "Posture Issues" },
    { title: "Disc Problems" },
    { title: "Spondylosis" },
    { title: "Cervical Pain" },
    { title: "Lumbar Pain" },
    { title: "Mobility Issues" },
    { title: "Balance Problems" },
    { title: "Age-Related Weakness" },
  ];

export function ConditionsSection() {
    return (
        <div className="mt-20">
            <div className="max-w-md my-20 flex flex-col justify-center mx-auto md:max-w-3xl text-center px-8">
                <h1
                    className="font-heading text-2xl font-semibold text-black leading-tight md:text-3xl">
                    Conditions We Treat
                </h1>
            </div>
            <Marquee 
                pauseOnHover
                pauseOnKeyboard
            >
                <MarqueeContent>
                    {tricks1.map((trick) => (
                        <MarqueeItem key={trick.title}>
                            <Badge variant={"outline"} className="py-6 text-md border-[#D5BBEA] rounded-full px-10">
                                {trick.title}
                            </Badge> 
                        </MarqueeItem>
                    ))}
                </MarqueeContent>
                <MarqueeEdge side="left" />
                <MarqueeEdge side="right" />
            </Marquee>
            <Marquee 
            className="pt-4"
            dir="rtl"
                pauseOnHover
                pauseOnKeyboard
            >
                <MarqueeContent>
                    {tricks2.map((trick) => (
                        <MarqueeItem key={trick.title}>
                            <Badge variant={"outline"} className="py-6 text-md border-[#D5BBEA] rounded-full px-10">
                                {trick.title}
                            </Badge> 
                        </MarqueeItem>
                    ))}
                </MarqueeContent>
                <MarqueeEdge side="left" />
                <MarqueeEdge side="right" />
            </Marquee>
        </div>
    );
}