import { Fraunces, Work_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work-sans",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://www.hopefeltfoundation.org"),
  title: {
    default: "Hopefelt Foundation | Creating Hope & Empowering Communities",
    template: "%s | Hopefelt Foundation",
  },
  description:
    "Hopefelt Foundation partners with communities to expand access to education, healthcare, and economic opportunity.",
  openGraph: {
    title: "Hopefelt Foundation | Creating Hope & Empowering Communities",
    description:
      "Hopefelt Foundation partners with communities to expand access to education, healthcare, and economic opportunity.",
    siteName: "Hopefelt Foundation",
    type: "website",
    images: ["https://picsum.photos/seed/hopefelt-og/1200/630"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${workSans.variable}`}>
      <body className="flex min-h-screen flex-col font-body">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
