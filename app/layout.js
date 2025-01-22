import "./globals.css";
import Navbar from '@/components/Navbar'
import { GoogleAnalytics } from '@next/third-parties/google'

export const metadata = {
  title: "Obay Rashad",
  description: "Obay Mohammed Rashad",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
        {children}
        <GoogleAnalytics gaId="G-WPXMZWCLFK"/>
      </body>
    </html>
  );
}
