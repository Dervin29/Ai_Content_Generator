"use client"
import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation';  



const Navbar = () => {

  const router = useRouter();

  return (
    <div>
        <nav className=" flex justify-between items-center p-5 border-b-[1px]  bg-transparent mx-5 md:mx-10">
        <div className=" flex gap-2 items-center justify-center">
          <Image src="/logo.svg" alt="logo" width={40} height={40} />
          <h1 className=" font-bold text-lg md:text-xl text-white">Content Generator</h1>
        </div>
        <button className=" font-semibold text-lg md:text-xl px-6 py-2 rounded-md text-white bg-orange-500 hover:bg-orange-600" onClick={() => router.push("/dashboard")}>Login</button>
      </nav>
    </div>
  )
}

export default Navbar