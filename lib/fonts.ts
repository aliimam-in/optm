import localFont from "next/font/local";

export const euclid = localFont({
  src: [
    {
      path: "../fonts/EuclidCircularATrial-Regular.otf",
      weight: "400",
    },
    {
      path: "../fonts/EuclidCircularATrial-Medium.otf",
      weight: "500",
    },
    {
      path: "../fonts/EuclidCircularATrial-Semibold.otf",
      weight: "600",
    },
    {
      path: "../fonts/EuclidCircularATrial-Bold.otf",
      weight: "700",
    },
  ],
  variable: "--font-euclid",
  display: "swap",
});

export const idGrotesk = localFont({
  src: [
    {
      path: "../fonts/IDGroteskTrial-Regular.ttf",
      weight: "400",
    },
    {
      path: "../fonts/IDGroteskTrial-Semibold.ttf",
      weight: "600",
    },
    {
      path: "../fonts/IDGroteskTrial-Bold.ttf",
      weight: "700",
    },
  ],
  variable: "--font-id-grotesk",
  display: "swap",
});