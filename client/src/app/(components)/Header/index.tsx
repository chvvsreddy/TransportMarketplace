"use client"
import Link from 'next/link'
import React,{useState} from 'react'
import { Menu } from 'lucide-react'

import {  MailOutlined, PhoneOutlined, SearchOutlined, VideoCameraOutlined,  WhatsAppOutlined,} from "@ant-design/icons";
import Image from 'next/image';

const navigation = [
  { name: 'Find Load', href: '/findloads' },   
  { name: 'Find Trucks', href: '/findtrucks' },

]

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  return (
    <>
          <header className="inset-x-0 top-0 z-50">
          <div style={{ background: "#2A004E", color: "white",padding: "5px 0px"}}>
      <div className='main-layout'>
        <div className="grid gap-4">
          <div className="text-sm text-neutral-200">
            <div style={{ display: "flex", gap: 20, alignItems: "center" }}>
                <div className="navbar-icon">
                  < WhatsAppOutlined/>
                </div>
                <div className="navbar-icon">
                  <VideoCameraOutlined />
                </div>
                <div className="navbar-icon">
                  <PhoneOutlined className='mx-1'  /><span className='hidden sm:inline-block'>+91 864 6444 2222</span>
                </div>
                       <div className="navbar-mail">
                  <MailOutlined className='mx-1' />
                  <span className='hidden sm:inline-block'> info@goodseva.com</span>
                </div>
              </div>
          </div>
        </div>
      </div>      
    </div>
    <div className='main-layout'>
        <nav aria-label="Global" className="flex items-center justify-between py-6">
          <div className="flex lg:flex-1">
            
              <span className="sr-only">Your Company</span>
              <Link href={"/"}><img src="/goodseva-logo.png" alt="Goodseva-logo"  className="h-12 w-auto" /></Link>             
            
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Open main menu</span>
              <Menu  aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="text-sm/6 font-semibold text-gray-900">
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a href="/login" className="button-secondary mr-5"> Log in <span aria-hidden="true">&rarr;</span> </a>
            <Link href={"/Register"}>
            <button type="button" className="button-primary"> Get Started </button>
            </Link>
          </div>
        </nav>
      </div>
      </header>


  </>
  )
}

export default Header