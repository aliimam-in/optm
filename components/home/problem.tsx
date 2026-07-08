import { cn } from "@/lib/utils";
import { Badge } from "../ui/badge";

export function ProblemSection() {
    return (
        <section className="relative py-20">

            <div className="relative flex flex-col h-full space-y-6 justify-center items-center">
                <Badge>
                    The Problem
                </Badge>

                <div className="max-w-md md:max-w-3xl text-center px-8">
                    <h1
                        className="font-heading text-2xl font-semibold text-black leading-tight md:text-3xl">
                        The system waits <br/> until it is too late.
                    </h1>

                    <p className="mt-6 text-sm leading-6 text-black/60">
                        Chronic pain and metabolic disease are managed in brief, separate appointments. Between visits, inflammation compounds, cartilage degrades, and muscle mass declines silently. Nobody is measuring what is happening in between.
                    </p>
                </div>
                <div className="grid max-w-3xl mt-10 grid-cols-2 ">
                    <div className="border-r max-w-80 text-center px-8">
                        <h1
                            className="font-heading text-2xl font-semibold text-black leading-tight md:text-3xl">
                            220M
                        </h1>

                        <p className="mt-6 text-sm leading-6 text-black/60">
                            Indians living with chronic musculoskeletal pain. Fewer than 1 in 10 receive a root-cause diagnosis.                        </p>
                        <p className="mt-6 text-sm leading-6 underline text-black/60">
                            ICMR Burden of Disease Study
                        </p>
                    </div>
                    <div className="max-w-80 text-center px-8">
                        <h1
                            className="font-heading text-2xl font-semibold text-black leading-tight md:text-3xl">
                            1 in 4
                        </h1>

                        <p className="mt-6 text-sm leading-6 text-black/60">
                            Urban Indian adults have uncontrolled metabolic inflammation — the same cytokines driving insulin resistance are degrading cartilage simultaneously.
                        </p>
                        <p className="mt-6 text-sm leading-6 underline text-black/60">
                            ICMR Burden of Disease Study
                        </p>
                    </div>
                </div>
            </div>


        </section>
    );
}
