

import {
    Stepper,
    StepperContent,
    StepperIndicator,
    StepperItem,
    StepperList,
    StepperSeparator,
    StepperTrigger,
} from "@/components/ui/stepper";

const steps = [
    {
        value: "account",
        day: "Day 1-3",
        title: "OrthoAGE™ baseline",
        description: "Cartilage, inflammatory & muscle biomarkers drawn. Biological knee age computed in 48 hours.",
    },
    {
        value: "profile",
        day: "Day 7",
        title: "Protocol designed",
        description: "Plant formulation, movement therapy, and GLP-1 if indicated — all biomarker-driven.",
    },
    {
        value: "payment",
        day: "Day 30/60",
        title: "Payment Details",
        description: "Set up billing and payment methods",
    },
    {
        value: "complete",
        day: "Day 90",
        title: "Complete Setup",
        description: "Review and finish your account setup",
    },
];
export function ProtocolSection() {
    return (
        <section className="relative py-20">

            <div className="relative flex flex-col h-full space-y-6 justify-center items-center">

                <div className="max-w-md md:max-w-3xl text-center px-8">
                    <h1
                        className="font-heading text-2xl font-semibold text-black leading-tight md:text-3xl">
                        The knee protocol
                    </h1>
                </div>

            </div>
            <Stepper defaultValue="account" className="w-full justify-center mx-auto mt-20 flex max-w-3xl">
                <StepperList>
                    {steps.map((step) => (
                        <StepperItem key={step.value} value={step.value}>
                            <StepperTrigger className="flex flex-col items-center gap-6">
                                <span className="text-md font-semibold text-black uppercase">
                                    {step.day}
                                </span>

                                <StepperIndicator />
                            </StepperTrigger>

                            <StepperSeparator />
                        </StepperItem>
                    ))}
                </StepperList>
                {steps.map((step) => (
                    <StepperContent
                        key={step.value}
                        value={step.value}
                        className="flex flex-col items-center gap-4 border-[#D5BBEA]/60 rounded-[40px] border bg-card p-10 text-card-foreground"
                    >
                        <div className="flex flex-col items-center gap-4 text-center">
                            <h3 className="font-semibold text-2xl">{step.title}</h3>
                            <p className="text-black/60">{step.description}</p>
                        </div>
                    </StepperContent>
                ))}
            </Stepper>
            <div className="max-w-md md:max-w-3xl mx-auto mt-20 flex flex-col justify-center text-center px-8">
                <h1
                    className="font-heading text-2xl text-black leading-tight md:text-3xl">
                    "I was told I needed a knee replacement.
                    OPTM measured instead. Forty-two days later, I was climbing stairs again without any pain."
                </h1>

                <h1
                    className="font-heading text-md mt-10 text-black leading-tight md:text-xl">
                    Ravi Mehta, 51
                </h1>

                <p className="mt-6 text-sm leading-6 text-black/60">
                    South Delhi · Osteoarthritis + metabolic syndrome
                </p>
            </div>
        </section>
    );
}
