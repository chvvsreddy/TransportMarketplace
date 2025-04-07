"use client";


import { useAppDispatch, useAppSelector } from "@/app/redux";
import { setIsSidebarCollapsed } from "@/state";
import {Atom, Binary, BoxIcon,ChartBarIncreasing,CircleDollarSign,Layout, LucideIcon, Menu,  Telescope,  TruckIcon, User, Users,} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface SidebarLinkProps {
    href: string;
    icon: LucideIcon;
    label: string;
    isCollapsed: boolean;
  }
  
  const SidebarLink = ({ href, icon: Icon, label, isCollapsed, }: SidebarLinkProps) => {
    const pathname = usePathname();
    const isActive = pathname === href || (pathname === "/" && href === "/dashboard");
  
    return (
      <Link href={href}>
        <div className={`cursor-pointer flex items-center ${isCollapsed ? "justify-center py-3" : "justify-start p-3"}
          hover:text-blue-500 hover:bg-white gap-3 mb-2 rounded-md transition-colors ${isActive ? "bg-white text-white" : "" }}`}>
          <Icon className="w-6 h-6 !text-gray-700" />
  
          <span className={`${ isCollapsed ? "hidden" : "block" } font-medium text-gray-700`} >
            {label}
          </span>
        </div>
      </Link>
    );
  };

const Sidebar = () => {
  
  const dispatch = useAppDispatch();

  const isSidebarCollapsed = useAppSelector( (state) => state.global.isSidebarCollapsed )
  const toggleSidebar = () =>{
    dispatch(setIsSidebarCollapsed(!isSidebarCollapsed))
  }

  const sidebarClassNames = `fixed flex flex-col ${ isSidebarCollapsed ? "w-0 md:w-16" : "w-72 md:w-64"
  }  transition-all duration-300 overflow-hidden h-full shadow-md z-40  bg-gray-200 `;

  return (
    <div className={sidebarClassNames}>
      {/* TOP LOGO */}
      <div className={`flex gap-3 px-4 justify-between md:justify-normal items-center`} >
    
        <h1 className={`${isSidebarCollapsed? "hidden": " block"}`} > <Image src="/goodseva-logo.png" alt="Goodseva-logo" width={300} height={36} className="rounded mt-3" /></h1>

        <button className="md:hidden px-3 py-3 bg-gray-100 rounded-full hover:bg-blue-100" onClick={toggleSidebar} >
          <Menu className="w-4 h-4" />
        </button>
      </div>

      {/* LINKS */}
      <div className="flex-grow mt-8 px-4">
        <h6 className={`${isSidebarCollapsed? "hidden": " block"} font-normal text-sm p-2 text-neutral-500` } >Overview</h6>
        <SidebarLink
          href="/dashboard"
          icon={Layout}
          label="Dashboard"
          isCollapsed={isSidebarCollapsed}
        />
        <h6 className={`${isSidebarCollapsed? "hidden": " block"} font-normal text-sm p-2 text-neutral-500` }>Activity</h6>
        <SidebarLink
          href="/users"
          icon={Users}
          label="Users"
          isCollapsed={isSidebarCollapsed}
        />
        <SidebarLink
          href="/loads"
          icon={BoxIcon}
          label="Loads"
          isCollapsed={isSidebarCollapsed}
        />
        <SidebarLink
          href="/postload"
          icon={TruckIcon}
          label="Post a Load"
          isCollapsed={isSidebarCollapsed}
        />
        <SidebarLink
          href="/ReportsAnalytics"
          icon={ChartBarIncreasing}
          label="Reports Analytics"
          isCollapsed={isSidebarCollapsed}
        />
        <SidebarLink
          href="/expenses"
          icon={CircleDollarSign}
          label="Expenses"
          isCollapsed={isSidebarCollapsed}
        />
        <h6 className={`${isSidebarCollapsed? "hidden": " block"} font-normal text-sm p-2 text-neutral-500` }>Others</h6>
        <SidebarLink
          href="/"
          icon={Atom}
          label="Tools"
          isCollapsed={isSidebarCollapsed}
        />
        <SidebarLink
          href="/"
          icon={Telescope}
          label="Explore"
          isCollapsed={isSidebarCollapsed}
        />
        <SidebarLink
          href="/"
          icon={Binary}
          label="Rates"
          isCollapsed={isSidebarCollapsed}
        />
      </div>

      {/* FOOTER */}
      <div className={`${isSidebarCollapsed ? "hidden" : "block"} mb-10`} >
        <p className="text-center text-xs text-gray-500">&copy; 2024 Goodseva</p>
      </div>
    </div>
  );
};

export default Sidebar;