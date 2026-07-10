"use client"
import { Badge } from "../ui/badge";
import Image from "next/image";
import { useState } from "react";

import { Button } from "../ui/button";
import Link from "next/link";

export function DoctorsSection() {
    const [openCard, setOpenCard] = useState<number | null>(null);
    return (
        <section className="relative py-20 m-3"> 
            <div className="relative mx-auto flex max-w-5xl flex-col h-full space-y-6">
                <Badge>
                    Clinical team
                </Badge>

                <div className="max-w-md md:max-w-3xl">
                    <h1
                        className="font-heading text-2xl font-semibold text-black leading-tight md:text-3xl">
                        Specialists who
                        <br />
                        treat the whole system.
                    </h1>
                    <p className="mt-6 text-sm leading-6 text-black/60">
                        Pain, metabolism, movement, and plant medicine — each specialist owns one domain. Every patient protocol is designed by all of them together. No siloed treatment.
                    </p>

                </div>
                <div className="grid md:gap-3 rounded-3xl bg-primary max-w-5xl mt-10 md:grid-cols-2 ">

                </div>
            </div>

            <div className="grid gap-3 md:gap-6 md:grid-cols-2 mx-auto max-w-5xl">
                <div className="group relative h-140 overflow-hidden rounded-3xl border border-[#D5BBEA] bg-black">

                    {/* Image */}
                    <div className="flex justify-center">
                        <Image
                            src="/new/doctor.png"
                            alt="Doctor"
                            width={220}
                            height={220}
                            className="transition-transform h-full w-full duration-500 group-hover:scale-105"
                        />
                        <div className="absolute bottom-4 left-4 right-4 md:hidden z-50">
                            <Button
                                variant={"ghost"}
                                className="w-full text-white shadow-none"
                                onClick={() =>
                                    setOpenCard(openCard === 0 ? null : 0)
                                }
                            >
                                {openCard === 0 ? "Hide Profile" : "View Profile"}
                            </Button>
                        </div>
                    </div>

                    {/* Sliding Content */}
                    <div
                        className={`
                            rounded-3xl
                            absolute
                            inset-x-0
                            h-full
                            bg-[#D5BBEA]/20
                            backdrop-blur-md
                            p-6
                            transition-all
                            duration-700
                            ease-in-out 
                            group-hover:top-0  
                            ${openCard === 0
                                ? "top-0"
                                : "top-[380px] md:top-[440px]"
                            }
                            `}
                    >
                        <h3 className="text-3xl text-white font-semibold">
                            Dr. Apurba Ganguly
                        </h3>

                        <p className="mt-3 text-sm uppercase text-white/60">
                            Founder & Chief Research Officer
                        </p>


                        <div className="absolute bottom-4 left-4 right-4 md:hidden z-20">

                        </div>

                        <div
                            className={`
                                flex flex-col h-full
                                mt-8
                                transition-all
                                duration-500 
                                md:opacity-0
                                md:translate-y-6
                                md:group-hover:opacity-100
                                md:group-hover:translate-y-0
                                
                                ${openCard === 0
                                    ? "opacity-100 translate-y-0"
                                    : "opacity-0 translate-y-6 md:opacity-0"
                                }
                                `}
                        >
                            <h1 className="text-xl md:text-3xl text-white/80">
                                "I didn't want to build another pain clinic.
                                I wanted to build the one thing that was missing — proof."
                            </h1>

                            <div className="mt-10 flex flex-wrap gap-3">
                                <Badge variant={"outline"} className="p-4 text-white">
                                    PhD Biochemistry
                                </Badge>
                                <Badge variant={"outline"} className="p-4 text-white">
                                    Post-Doctorate Fellow
                                </Badge>
                                <Badge variant={"outline"} className="p-4 text-white">
                                    120+ clinical studies
                                </Badge>
                                <Badge variant={"outline"} className="p-4 text-white">
                                    7 patents filed
                                </Badge>
                                <Badge variant={"outline"} className="p-4 text-white">
                                    Published on NIH/PubMed, ResearchGate & IABCR
                                </Badge>

                            </div>
                            <div className="flex gap-6 mt-8 text-sm">
                                <Link
                                    href="#"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="X/Twitter"
                                    className=" hover:text-muted-foreground">
                                    <svg
                                        className="size-6"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="1em"
                                        height="1em"
                                        viewBox="0 0 24 24">
                                        <path
                                            fill="white"
                                            d="M10.488 14.651L15.25 21h7l-7.858-10.478L20.93 3h-2.65l-5.117 5.886L8.75 3h-7l7.51 10.015L2.32 21h2.65zM16.25 19L5.75 5h2l10.5 14z"></path>
                                    </svg>
                                </Link>
                                <Link
                                    href="#"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="LinkedIn"
                                    className="hover:text-muted-foreground">
                                    <svg
                                        className="size-6"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="1em"
                                        height="1em"
                                        viewBox="0 0 24 24">
                                        <path
                                            fill="white"
                                            d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z"></path>
                                    </svg>
                                </Link>

                            </div>

                        </div>
                    </div>

                </div>


                <div className="group relative h-140 overflow-hidden rounded-3xl border border-[#D5BBEA] bg-black">

                    {/* Image */}
                    <div className="flex justify-center">
                        <Image
                            src="/new/doctor.png"
                            alt="Doctor"
                            width={220}
                            height={220}
                            className="transition-transform h-full w-full duration-500 group-hover:scale-105"
                        />
                    </div>

                    {/* Sliding Content */}
                    <div
                        className=" rounded-3xl
    absolute inset-x-0
    top-[440px]
    h-full
    bg-[#D5BBEA]/20 backdrop-blur-md
    p-6
    transition-all duration-700 ease-in-out
    group-hover:top-0
  "
                    >
                        <h3 className="text-3xl text-white font-semibold">
                            Dr. Apurba Ganguly
                        </h3>

                        <p className="mt-3 text-sm uppercase text-white/60">
                            Founder & Chief Research Officer
                        </p>

                        <div
                            className=" flex flex-col h-full
      mt-8
      opacity-0
      translate-y-6
      transition-all
      duration-500
      delay-200
      group-hover:opacity-100
      group-hover:translate-y-0
    "
                        >
                            <h1 className="text-3xl text-white/80">
                                "I didn't want to build another pain clinic.
                                I wanted to build the one thing that was missing — proof."
                            </h1>

                            <div className="mt-20 flex flex-wrap gap-3">
                                <Badge variant={"outline"} className="p-4 text-white">
                                    PhD Biochemistry
                                </Badge>
                                <Badge variant={"outline"} className="p-4 text-white">
                                    Post-Doctorate Fellow
                                </Badge>
                                <Badge variant={"outline"} className="p-4 text-white">
                                    120+ clinical studies
                                </Badge>
                                <Badge variant={"outline"} className="p-4 text-white">
                                    7 patents filed
                                </Badge>
                                <Badge variant={"outline"} className="p-4 text-white">
                                    Published on NIH/PubMed, ResearchGate & IABCR
                                </Badge>

                            </div>
                            <div className="flex gap-6 mt-8 text-sm">
                                <Link
                                    href="#"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="X/Twitter"
                                    className=" hover:text-muted-foreground">
                                    <svg
                                        className="size-6"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="1em"
                                        height="1em"
                                        viewBox="0 0 24 24">
                                        <path
                                            fill="white"
                                            d="M10.488 14.651L15.25 21h7l-7.858-10.478L20.93 3h-2.65l-5.117 5.886L8.75 3h-7l7.51 10.015L2.32 21h2.65zM16.25 19L5.75 5h2l10.5 14z"></path>
                                    </svg>
                                </Link>
                                <Link
                                    href="#"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="LinkedIn"
                                    className="hover:text-muted-foreground">
                                    <svg
                                        className="size-6"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="1em"
                                        height="1em"
                                        viewBox="0 0 24 24">
                                        <path
                                            fill="white"
                                            d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z"></path>
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
