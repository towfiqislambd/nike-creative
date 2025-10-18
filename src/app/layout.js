import "./globals.css";
import { Poppins } from "next/font/google";

export const metadata = {
  title: "Abwab Immo",
  description:
    "Abwab Immo is a smart real estate platform for managing properties and evaluating tenants",
};
const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} antialiased font-sans bg-[var(--background)] text-[var(--foreground)]`}
      >
        {children}
      </body>
    </html>
  );
}
