// components/Header.tsx
import Link from "next/link";
import { Button } from "../ui/button";
import Logo from "../logo"; 

const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/#" },
    { name: "Services", href: "/#" },
    { name: "Contact", href: "/#" },
];

export default function Header() {
    return (
        <header className="sticky z-50 mx-auto px-6 container top-2">

            <div className="mx-auto mt-2 flex h-12 container items-center shadow-[inset_0_1px_4px_rgba(255,255,255,0.3),inset_0_0_0_1px_rgba(255,255,255,0.2),inset_0_-2px_8px_rgba(255,255,255,0.2),0_6px_10px_rgba(0,0,0,0.05)] bg-primary/50 backdrop-blur-sm justify-between px-2 rounded-full">
                <div className="mx-auto flex w-full items-center justify-between">

                    <Link href="/" className="text-xl pl-3">
                        <Logo fill="white" className="size-16 pt-1" />
                    </Link>

                    {/* Navigation */}
                    <nav className="hidden items-center gap-8 md:flex">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-xs text-muted/80 transition hover:text-background"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </nav>

                    <Button>
                        Book a test
                    </Button>
                </div>
            </div>
        </header>
    );
}