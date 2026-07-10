import { cn } from "@/lib/utils";
import { Badge } from "../ui/badge";

export function ProblemSection() {
    return (
        <section className="relative py-20">

            <div className="relative flex flex-col h-full space-y-6 justify-center items-center">
                <Badge>
                Why does Pain Return?

                </Badge>

                <div className="max-w-md md:max-w-3xl text-center px-8">
                    <h1
                        className="font-heading text-2xl font-semibold text-black leading-tight md:text-3xl">
                        Pain Is a Symptom. <br/> The Root Cause Often Goes Undetected.

                    </h1>

                    <p className="mt-6 text-sm leading-6 text-black/60">
                    Traditional treatments often focus on relieving pain. OPTM uses AI diagnostics, biomarker analysis, and muscle health assessment to uncover the biological factors behind recurring pain.

                    </p>
                </div>
                <div className="grid md:max-w-3xl mt-10 md:grid-cols-2 ">
                    <div className="md:border-r md:border-0 border-b pb-10 max-w-80 text-center px-8">
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
                    <div className="max-w-80 md:pt-0 pt-10 text-center px-8">
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
