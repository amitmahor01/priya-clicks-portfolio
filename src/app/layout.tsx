import type { Metadata } from "next";
import {  Quicksand } from "next/font/google";
import "./globals.css";
import Header from '../components/Header';
import Footer from '../components/Footer';
import '@fortawesome/fontawesome-svg-core/styles.css';
import 'antd/dist/reset.css';
import SakuraEffectComponent from "@/components/sakura-foreground/SakuraEffectComponent";


const quicksand = Quicksand({ weight: ["400", "500", "600", "700"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Priya Clicks Photography | Timeless Portraits & Family Moments",
  description: "Capture the beauty of life’s most precious moments with Priya Clicks Photography. Specializing in newborn, maternity, family, toddlers, and cake smash sessions — we create heartwarming, timeless photographs you'll treasure forever.",
  keywords: [
    "Newborn Photography",
    "Maternity Photography",
    "Family Photographer",
    "Toddler Photoshoot",
    "Cake Smash Photography",
    "Baby Portraits",
    "Priya Clicks",
    "Studio Photography India",
    "Artistic Baby Photography",
    "Natural Light Portraits"
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Lavishly+Yours&display=swap" rel="stylesheet" />
      </head>
      <body className={`${quicksand.className} antialiased`}
        style={{
          backgroundColor: "#C5ADC5",
          backgroundImage: "url('/backgroundSakura.webp')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover", 
          backgroundPosition: "center",
        }}>
          <SakuraEffectComponent/>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
