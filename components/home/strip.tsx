import { Button } from "@/components/ui/button";
import { Dithering, NeuroNoise } from "@paper-design/shaders-react";

export function StripSection() {
    return (
        <section className="z-50 relative w-full gap-3 flex justify-center items-center py-2">
            <p className="text-sm">
                India's first biomarker-driven pain & metabolic clinic.
            </p>
            <Button className={"shadow-none border-none underline"} variant={"link"} size="sm">
                Read article
            </Button>  
        </section>

    );
}
