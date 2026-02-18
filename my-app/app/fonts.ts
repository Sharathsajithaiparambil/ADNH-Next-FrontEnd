import localFont from "next/font/local";
import { Playfair_Display, EB_Garamond } from "next/font/google";

export const gotham = localFont({
  src: [
    {
      path: "../public/fonts/gotham/gotham-light-webfont.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/gotham/gotham-book-webfont.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/gotham/gotham-medium-webfont.woff2",
      weight: "600",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-gotham",
  adjustFontFallback: "Arial",
  preload: true,
});

export const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-playfair",
  adjustFontFallback: true,
  preload: true,
});

export const garamond = EB_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-garamond",
  adjustFontFallback: true,
  preload: true,
});
