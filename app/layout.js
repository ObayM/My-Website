import "./globals.css";
import Navbar from '@/components/Navbar'
import { GoogleAnalytics } from '@next/third-parties/google'

export const metadata = {
  title: "Obay Rashad",
  description: "Obay Rashad is a ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
        {children}
        <GoogleAnalytics gaId={process.env.GOOGLE_ANALYTICS_ID}/>
      </body>
    </html>
  );
}
