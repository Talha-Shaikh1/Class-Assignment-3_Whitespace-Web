import React from 'react'
import Image from 'next/image'
import logo from '@/app/assets/Logo.png'

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-10 h-[461px] flex justify-center items-center ">
  <div className="w-full max-w-[1480px] mx-auto flex flex-col justify-center items-center mt-20">
    <div className="w-full md:flex md:justify-between px-6">
      {/* Left Section */}
      <div className="md:w-1/4 mb-6 md:mb-0 text-center md:text-left">
        <Image src={logo} alt='' />
        <p className="mt-4 text-sm w-72">
          whitepace was created for the new ways we live and work. We make a better workspace around the world.
        </p>
      </div>

      {/* Product Links */}
      <div className="md:w-1/4 mb-6 md:mb-0 text-center md:text-left">
        <h2 className="text-lg font-semibold">Product</h2>
        <ul className="mt-2 text-sm space-y-2">
          <li><a href="#" className="hover:underline">Overview</a></li>
          <li><a href="#" className="hover:underline">Pricing</a></li>
          <li><a href="#" className="hover:underline">Customer stories</a></li>
        </ul>
      </div>

      {/* Resources Links */}
      <div className="md:w-1/4 mb-6 md:mb-0 text-center md:text-left">
        <h2 className="text-lg font-semibold">Resources</h2>
        <ul className="mt-2 text-sm space-y-2">
          <li><a href="#" className="hover:underline">Blog</a></li>
          <li><a href="#" className="hover:underline">Guides & tutorials</a></li>
          <li><a href="#" className="hover:underline">Help center</a></li>
        </ul>
      </div>

      {/* Company Links */}
      <div className="md:w-1/4 text-center md:text-left">
        <h2 className="text-lg font-semibold">Company</h2>
        <ul className="mt-2 text-sm space-y-2">
          <li><a href="#" className="hover:underline">About us</a></li>
          <li><a href="#" className="hover:underline">Careers</a></li>
          <li><a href="#" className="hover:underline">Media kit</a></li>
        </ul>
      </div>
    </div>

    {/* Bottom Section */}
    <div className="text-center mt-28 text-sm text-gray-400">
      ©2021 Whitepace LLC.
    </div>
  </div>
</footer>


  )
}


