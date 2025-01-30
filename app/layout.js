import "./globals.css";
import Navbar from '@/components/Navbar'
import { GoogleAnalytics } from '@next/third-parties/google'
import { Analytics } from "@vercel/analytics/react"
import Background from "@/components/Background";

export const metadata = {
  title: "Obay Rashad",
  description: "Obay Mohammed Rashad",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
        <Background />
        {children}
        <GoogleAnalytics gaId="G-WPXMZWCLFK"/>
        <Analytics/>
      </body>
    </html>
  );
}

