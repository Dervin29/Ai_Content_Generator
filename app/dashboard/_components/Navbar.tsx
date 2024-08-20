"use client"
import React from 'react'
import Image from 'next/image'



const Navbar = () => {


  return (
    <div className=" bg-[#050d2b]  rounded-lg w-full ">
      <div className='flex justify-center items-center gap-4 py-4'>
        <Image src={"/logo.svg"} width={40} height={40} alt="logo" />
        <h1 className=' text-2xl font-bold text-slate-300'>GenieWriter</h1>
      </div>
    </div>
  )
}

export default Navbar