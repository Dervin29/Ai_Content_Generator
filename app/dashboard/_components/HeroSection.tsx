"use client";
import { Button } from "@/components/ui/button";
import React from "react";
import { useRouter } from "next/navigation";
import FeatureCard from "./HeroCards";
import Templates from "@/app/(data)/Templates";




const HeroSection = () => {
    const router = useRouter();
  return (
    <div className="h-auto max-w-screen-md mx-auto flex flex-col justify-between  text-center p-5">
      <div className=" flex flex-col  items-center">
        <h1 className=" text-6xl  font-bold bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 inline-block text-transparent bg-clip-text mb-4 ">
          {" "}
          AI Content <span className=" text-slate-300">Generator</span>
        </h1>
        <p className=" text-lg text-white">
          Unleash the power of AI to create captivating articles, blogs, and
          social media posts. Say goodbye to writer's block and hello to endless
          creativity.
        </p>
        <Button className="mt-5 bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 w-40 font-semibold text-lg md:text-xl" onClick={() => router.push("/dashboard")} > Get Started</Button>
      </div>
      
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:flex-wrap gap-2 md:gap-4 lg:gap-6  mt-10 t mx-auto ">
      {Templates.map((feature, index) => (
        <FeatureCard
          key={index}
          icon={feature.icon}
          title={feature.name}
          description={feature.desc}
          slug={feature.slug}
        />
      )).slice(0, 6)}
    </div>
    </div>
  );
};

export default HeroSection;
