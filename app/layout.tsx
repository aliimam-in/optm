import { Geist, Geist_Mono, Inter } from "next/font/google"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils";
import Header from "@/components/layout/header";
import { euclid, idGrotesk } from "@/lib/fonts";
import { StripSection } from "@/components/home/strip";

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' })

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("antialiased", fontMono.variable, "font-sans", inter.variable, euclid.variable, idGrotesk.variable )}
    >
      <body className="bg-white dark:bg-black"> 
        <ThemeProvider>
          <StripSection/>
          <Header />
          {children}
          </ThemeProvider>
      </body>
    </html>
  )
}
