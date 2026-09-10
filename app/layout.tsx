import type { Metadata } from "next";
import "./globals.css";
import "./responsive.css";

export const metadata: Metadata = {
  title: {
    default: "Tee Luxury Couture | Timeless Fashion, Crafted with Intention",
    template: "%s | Tee Luxury Couture",
  },
  description:
    "Tee Luxury Couture creates thoughtfully designed couture pieces, custom fashion, and refined alterations for clients who value individuality and exceptional detail.",
  keywords: [
    "Tee Luxury Couture",
    "luxury fashion",
    "couture",
    "custom couture",
    "fashion design",
    "bespoke fashion",
    "alterations and fittings",
  ],
  openGraph: {
    title: "Tee Luxury Couture | Timeless Fashion, Crafted with Intention",
    description:
      "Thoughtfully designed couture pieces for clients who value elegance, individuality, and exceptional detail.",
    type: "website",
    siteName: "Tee Luxury Couture",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tee Luxury Couture | Timeless Fashion, Crafted with Intention",
    description:
      "Thoughtfully designed couture pieces for clients who value elegance, individuality, and exceptional detail.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
