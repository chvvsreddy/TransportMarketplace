import { MessageCircle } from 'lucide-react'
import Link from 'next/link'
import React from 'react'



const Footer = () => {
  return (
    <div className="footer-main bg-neutral-100 py-12">
        <div className='main-layout'>
        <div className="grid grid-cols-6 gap-4">
            <div className="col-span-2">
            <Link href="/"><img src="goodseva-logo.png"  alt="Goodseva"  className="h-12 w-auto"/></Link>
            <p className='mb-5'>
                  Faucibus quis fringilla scelerisque dui. Amet parturient dui
                  venenatis amet sagittis viverra vel tincidunt. Orci tincidunt.
                </p>
                <button className='button-secondary flex gap-2'><MessageCircle/>  Start Live Chat</button>
            </div>
            <div className="col-span-1 col-start-4" >
                 <p className='text-red-900 font-semibold mb-3'>Company </p>
                  <p style={{ fontSize: 16 }}>
                    About Us
                  </p>
                  <p style={{ fontSize: 16 }}>
                    Our Partners
                  </p>
                  <p style={{ fontSize: 16 }}>
                    Support Center
                  </p>
                  <p style={{ fontSize: 16 }}>
                    Our Network
                  </p>
            </div>
            <div className="col-span-1 ">
                <p className='text-red-900 font-semibold mb-3'> Resources</p>
                  <p style={{ fontSize: 16 }}>
                    Packing Supplies
                  </p>
                  <p style={{ fontSize: 16 }}>Faqs</p>
                  <p style={{ fontSize: 16 }}>
                    Pricing and Quotes
                  </p>
                  <p style={{ fontSize: 16 }}>
                    Tips and Guides
                  </p>
            </div>
            <div className="col-span-1">
            <p  className='text-red-900 font-semibold mb-3'>  Help </p>
                  <p style={{ fontSize: 16 }}>
                    Customer Support
                  </p>
                  <p style={{ fontSize: 16 }}>
                    Delivery Details
                  </p>
                  <p style={{ fontSize: 16 }}>
                    Terms & Conditions
                  </p>
                  <p style={{ fontSize: 16 }}>
                    Privacy Policy
                  </p>
            </div>
            <div className="col-span-6">
                <hr className='my-6'/>
            <p>Copyright &copy; 2024 Goodseva</p>
            </div>
        </div>
          
        </div>
      </div>
  )
}

export default Footer