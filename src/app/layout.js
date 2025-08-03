import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ThemeRegistry from "../../components/ThemeRegistry";
import LoadingScreen from "../../components/LoadingScreen";
import FloatingWhatsApp from "../../components/FloatingWhatsApp"; // 👈 Import

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Eleos Wellness & Rehabilitation",
  description: "Where Healing Begins, and Hope is Restored.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="emotion-insertion-point" content="" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <ThemeRegistry>
          <LoadingScreen />
          <Navbar />
          <main style={{ minHeight: "80vh" }}>{children}</main>
          <Footer />
          <FloatingWhatsApp /> {/* 👈 Floating button added */}
        </ThemeRegistry>
      </body>
    </html>
  );
}
