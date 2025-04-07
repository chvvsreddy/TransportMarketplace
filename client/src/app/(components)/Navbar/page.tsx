"use client"
import React from 'react'
import {Bell,Sun,Moon, Settings, PanelLeftClose, PanelLeftOpen} from 'lucide-react'
import Link from "next/link";
import Image from "next/image";
import { useAppDispatch, useAppSelector } from '@/app/redux';
import { setIsDarmode, setIsSidebarCollapsed } from '@/state';


const Navbar = () => {
    const dispatch = useAppDispatch();
    const isSidebarCollapsed = useAppSelector(
        (state) => state.global.isSidebarCollapsed
    )
    const isDarkMode = useAppSelector(
        (state) => state.global.isDarkMode
    )
    const toggleSidebar = () =>{
    dispatch(setIsSidebarCollapsed(!isSidebarCollapsed))
    }
    const toggleDarkmode =()=>{
        dispatch(setIsDarmode(!isDarkMode))
    }

  return (
    <div className="flex justify-between items-center gap-5 mb-5 pb-3 border-b-1 border-neutral-300">
        {/* LEFT SIDE */}
      <div className="flex justify-between items-center gap-5">
            <button
            className="px-3 py-3 bg-gray-100 rounded-full hover:bg-blue-100"
            onClick={toggleSidebar} >
              { isSidebarCollapsed ?  <PanelLeftOpen className="w-6 h-6" />:  <PanelLeftClose className="w-6 h-6" />}             
            </button>
            <div className="relative">
            <input type="search" placeholder="Start type to search"
                className="pl-10 pr-4 py-2 w-50 md:w-60 border-2 border-gray-300 bg-white rounded-lg focus:outline-none focus:border-blue-500"
            />

            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-non">
                <Bell className="text-gray-500" size={20} />
            </div>
            </div>
        </div>
          {/* RIGHT SIDE */}
        <div className="flex justify-between items-center gap-5">
            <div className="hidden md:flex justify-between items-center gap-5">
            <div>
            <button onClick={toggleDarkmode}>
              {isDarkMode ? (
                <Sun className="cursor-pointer text-gray-500" size={24} />
              ) : (
                <Moon className="cursor-pointer text-gray-500" size={24} />
              )}
            </button>
            </div>
            <div className="relative">
                <Bell className="cursor-pointer text-gray-500" size={24} />
                <span className="absolute -top-2 -right-2 inline-flex items-center justify-center px-[0.4rem] py-1 text-xs font-semibold leading-none text-red-100 bg-red-400 rounded-full">
                3
                </span>
            </div>
            <hr className="w-0 h-7 border border-solid border-l border-gray-300 mx-3" />
            <div className="flex items-center gap-3 cursor-pointer">           
                <span className="font-semibold">Reddy</span>
            </div>
            </div>
            <Link href="/settings">
            <Settings className="cursor-pointer text-gray-500" size={24} />
            </Link>
        </div>        
    </div>
  )
}

export default Navbar