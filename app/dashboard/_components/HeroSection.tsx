"use client";
import { Button } from "@/components/ui/button";
import React from "react";
import { useRouter } from "next/navigation";
import FeatureCard from "./HeroCards";
import Templates from "@/app/(data)/Templates";




const HeroSection = () => {
    const router = useRouter();
  return (
    <div className="h-[90vh] max-w-screen-md mx-auto flex flex-col  justify-center items-center text-center">
      <div>
        <h1 className=" text-6xl font-bold text-orange-500 mb-4 ">
          {" "}
          AI Content <span className=" text-slate-300">Generator</span>
        </h1>
        <p className=" text-lg text-white">
          Unleash the power of AI to create captivating articles, blogs, and
          social media posts. Say goodbye to writer's block and hello to endless
          creativity.
        </p>
      </div>
      <Button className="mt-5 bg-orange-500 hover:bg-orange-600 px-10 md:px-12 py-6 md:py-8 font-semibold text-lg md:text-xl" onClick={() => router.push("/dashboard")} > Get Started</Button>
      <div className="flex flex-wrap gap-4 mt-10">
      {Templates.map((feature, index) => (
        <FeatureCard
          key={index}
          icon={feature.icon}
          title={feature.name}
          description={feature.desc}
        />
      )).slice(0, 3)}
    </div>
    </div>
  );
};

export default HeroSection;
