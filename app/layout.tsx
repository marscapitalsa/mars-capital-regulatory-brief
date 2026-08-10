import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "August 2026 | IAM Regulatory Brief",
  description: "Selected regulatory developments for a Swiss independent asset manager.",
  openGraph: {
    title: "August 2026 | IAM Regulatory Brief",
    description: "Selected regulatory developments for a Swiss independent asset manager.",
    images: ["/og.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "August 2026 | IAM Regulatory Brief",
    description: "Selected regulatory developments for a Swiss independent asset manager.",
    images: ["/og.png"],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
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
