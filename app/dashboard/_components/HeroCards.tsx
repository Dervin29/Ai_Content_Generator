import React from "react";
import Image from "next/image";
import Link from "next/link";


interface Templates {
  icon: string;
  title: string;
  description: string;
  slug: string;
}

const FeatureCard: React.FC<Templates> = ({ icon, title, description, slug}) => {
  return (

      <div className="p-5 shadow-md rounded-md  bg-[#050d2b] flex flex-col gap-3 cursor-pointer hover:scale-105 transition-all ease-in-out w-60 h-50 flex-shrink-0 text-center ">
        <div className="flex justify-center items-center mb-4">
          <Image src={icon} alt={title} width={50} height={50} />
        </div>
        <h2 className="font-bold text-lg truncate text-orange-500">{title}</h2>
        <p className="text-sm text-slate-300">{description}</p>
        <Link href ={`/dashboard/content/${slug}`} className="text-sm text-orange-500">View Template</Link>
      </div>
  );
};

export default FeatureCard;
