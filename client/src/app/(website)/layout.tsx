import type { Metadata } from "next";
import "./globals.css";
import Header from "../(components)/Header";

export const metadata: Metadata = {
  title: "Transpot marketplace",
  description: "Generated by create next app",
};

export default function WebsiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header/>
      <h1>Tranport marketplace WEBSITE</h1>
        {children}
      </body>
    </html>
  );
}
