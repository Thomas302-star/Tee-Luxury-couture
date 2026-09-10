import type { Metadata } from "next";
import "./globals.css";
import "./responsive.css";

export const metadata: Metadata = {
  title: "Tee Luxury Couture",
  description: "Tee Luxury Couture fashion design studio.",
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
