import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import Providers from "./_components/Providers";

const font = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ivan Garcia",
  description: "Este es mi Portafolio!.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Providers>
        <body className={`w-full h-full absolute m-0 ${font.className} overflow-y-scroll bg-black z-10`}>
          <div className="absolute inset-0 -z-10 h-full items-center [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
          {children}
        </body>
      </Providers>
    </html>
  );
}
