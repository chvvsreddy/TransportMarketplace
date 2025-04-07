"use client"
import type { Metadata } from "next";
import Link from "next/link";
///import "./globals.css";
import {Box,LucideIcon,MessageCircle,TruckIcon, User} from "lucide-react";

import { usePathname } from "next/navigation";
import Image from "next/image";


interface driverLinkProps {
  href: string;
  icon: LucideIcon;
  label: string;

}

const DriverFooterLink = ({ href, icon: Icon, label}: driverLinkProps) => {
  const pathname = usePathname();
  const isActive = pathname === href || (pathname === "/" && href === "/");

  return (
    <Link href={href} className="flex-1">
      <div className={`cursor-pointer flex flex-col items-center justify-center py-2 border-t-3 
        hover:text-red-900 gap-0 mb-2 transition-colors text-neutral-500 ${isActive ? " border-red-900 text-red-900 font-bold" : "border-white" }`}>
        <Icon className="w-6 h-6 " />
        <span >
          {label}
        </span>
      </div>
    </Link>
  );
};

export default function DriverLayout({ children, }: Readonly<{  children: React.ReactNode; }>) {

  return (
    <html lang="en">
      <body>
      <div className="flex flex-col h-screen">

  <header className="fixed top-0 left-0 right-0 bg-white px-4 py-3 shadow-md z-10">
    <div className="max-w-[800px] mx-auto w-full">
      <Image src="/goodseva-logo.png" alt="Goodseva-logo" width={200} height={24} className="rounded" />
    </div>
  </header>

 
  <main className="flex-1 overflow-y-auto pt-16 pb-20">
    <div className="max-w-[800px] mx-auto w-full px-4">
      <div className="space-y-4 pt-2 pb-4">
      {children}

      </div>
    </div>
  </main>

  <footer className="fixed bottom-0 left-0 right-0 bg-white px-4 z-10 ">
    <div className="max-w-[800px] mx-auto w-full">
      <div className="flex gap-2">
        <DriverFooterLink href="/allLoads" icon={Box} label="All Loads" />
        <DriverFooterLink href="/trips" icon={TruckIcon} label="Trips" />
        {/* <DriverFooterLink href="/trips" icon={TruckIcon} label="Truck" /> */}
        <DriverFooterLink href="/chat" icon={MessageCircle} label="Chat" />
        <DriverFooterLink href="/account" icon={User} label="Account" /> 
      </div>
    </div>
  </footer>
</div>

      </body>
    </html>
  );
}
