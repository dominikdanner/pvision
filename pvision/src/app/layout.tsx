import type { Metadata } from "next";
import "../../globals.css";
import { Header } from "@/components/Header";

export const metadata: Metadata = {
  title: "PVVision",
  description: "A web app for PV system monitoring",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="h-full">
        <Header/>
        {children}
      </body>
    </html>
  );
}
