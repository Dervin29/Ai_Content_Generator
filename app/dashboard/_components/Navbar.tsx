"use client"
import React from 'react'
import Image from 'next/image'



const Navbar = () => {


  return (
    <div>
        <nav className=" flex justify-between items-center p-4 md:p-5 lg:p-6 border-b-[1px]  bg-transparent  mx-5 md:mx-10">
        <div className=" flex gap-2 items-center justify-center">
          <Image src="/logo.svg" alt="logo" width={40} height={40} />
          <h1 className=" font-bold text:md md:text-lg lg:text-xl text-white">GenieWriter</h1>
        </div>
      </nav>
    </div>
  )
}

export default Navbar