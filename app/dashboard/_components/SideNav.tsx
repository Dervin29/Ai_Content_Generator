"use client"

import Image from "next/image";
import React, { useState } from "react";
import { FileClock, Home, Settings, WalletCards } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from 'next/link'
import { UserButton } from "@clerk/nextjs";

function SideNav() {

  const MenuList = [
    {
      name: "Home",
      icon: Home,
      path: "/dashboard",
    },
    {
      name: "History",
      icon: FileClock,
      path: "/dashboard/history",
    },
    {
      name: "Settings",
      icon: Settings,
      path: "/dashboard/settings",
    },
  ];

  const path = usePathname();


  return (
    <div className="flex justify-between items-center mx-10 py-4 gap-2">
      <div className=" flex items-center gap-2" >
        <Image src={"/logo.svg"} width={40} height={40} alt="logo" />
        <h1 className="hidden md:block font-bold text-white">Content Generator</h1>
      </div>
      <div className="flex gap-4 items-center bg-slate-100 px-4 py-2 mx-auto rounded-full transition-all ease-in-out">
        {MenuList.map((menu) => (
          <Link href={menu.path} key={menu.name}>
            <div className={`flex items-center gap-3 px-2 md:px-3  py-1 md:py-2 hover:bg-primary hover:text-white rounded-full cursor-pointer ${path === menu.path && "bg-primary text-orange-500"}`}>
              <menu.icon className="w-4 h-4 md:w-6 md:h-6  " />
               <h2 className=" hidden md:block  text-sm md:text-md">{menu.name}</h2>
            </div>
          </Link>
        ))}
      </div>
      <div className=" flex items-center md:block   bg-orange-600 px-2 py-1 rounded-full">
      <UserButton showName />
      </div>
  
    </div>
  );
}

export default SideNav;
