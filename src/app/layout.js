import { Geist, Geist_Mono, Work_Sans, EB_Garamond } from "next/font/google";
import "./globals.css";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import FooterElegant from "./components/layout/FooterElegant";



const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
});

const ebGaramond = EB_Garamond({
  variable: "--font-eb-garamond",
  subsets: ["latin"],
});

export const metadata = {
  title: "Susan Albertsen Psykoterapi",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${workSans.variable} ${ebGaramond.variable} antialiased`}
      >
        <div className="grid md:grid-cols-4 grid-cols-1">
            <div className=" md:col-span-1">
              <Header />
            </div>
          <main className="md:col-span-3">
            {children}
       
   {     <FooterElegant />}
   
          </main>
        </div>
      </body>
    </html>
  );
}
