import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "25 August–14 September 2026 | IAM Regulatory Brief",
  description: "The ASG model business-introducer agreement and the updated UK Sanctions List search guide.",
  openGraph: {
    title: "25 August–14 September 2026 | IAM Regulatory Brief",
    description: "The ASG model business-introducer agreement and the updated UK Sanctions List search guide.",
    images: ["/og.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "25 August–14 September 2026 | IAM Regulatory Brief",
    description: "The ASG model business-introducer agreement and the updated UK Sanctions List search guide.",
    images: ["/og.png"],
  },
  icons: {
    icon: "/og.png",
    shortcut: "/og.png",
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
