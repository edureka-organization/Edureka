import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

export const metadata: Metadata = {
  title: "Edureka",
  description: "Edureka",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <body className="overflow-x-hidden">
      <Navbar />

      {children}

      <Footer />
    </body>
  );
}
