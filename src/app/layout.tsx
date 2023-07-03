import { Inter } from "next/font/google";
import "./globals.css";

import { Navigation } from "./components/Navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Next Vlog",
  description: "Criando uma aplicação Next com base nos aprendizado recente",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} responsive scrollbar-hide relative m-auto h-full w-full bg-zinc-900`}
      >
        <Navigation />

        {children}
      </body>
    </html>
  );
}
