import { Poppins } from "next/font/google";

import "../globals.css";
import Navbar from "./_components/common/Navbar";
import Footer from "./_components/common/Footer";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata = {
  title: "Abwab immo",
  description:
    "Abwab Immo is a smart real estate platform for managing properties and evaluating tenant",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} antialiased font-sans bg-[var(--background)] text-[var(--foreground)]`}
      >
        <div className=" min-h-screen">
          <Navbar />
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
