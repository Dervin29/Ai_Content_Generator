import React from "react";
import { TEMPLATE } from "./TemplateListSection";
import Image from "next/image";
import Link from "next/link";

function TemplateCard(item: TEMPLATE) {
  return (
    <Link
    href={"/dashboard/content/" + item.slug}
    className="p-5 shadow-md rounded-md  bg-[#050d2b] hover:border border-slate-300 flex flex-col gap-3 cursor-pointer transition-all ease-in-out">
        <div className=" p-2 flex flex-col items-center" >
          <div className=" mb-4 ">
            <Image src={item.icon} alt={item.name} width={50} height={50} />
          </div>
          <h2 className="font-bold text-lg truncate text-orange-500">{item.name}</h2>
          <p className=" flex flex-wrap text-center  text-sm text-gray-300 line-clamp-3 overflow-hidden">
            {item.desc}
          </p>
        </div>
    </Link>
  );
}

export default TemplateCard;
