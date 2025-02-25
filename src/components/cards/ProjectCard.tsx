import React from "react";
import { MoveRight } from "lucide-react";
import Image from "next/image";

export default function ProjectCard() {
  //TODO: Add dynamic data
  return (
    <div className="w-72 h-64 lg:w-[80%] xl:w-full rounded-lg p-4 border border-gray-300 bg-slate-300 flex relative">
      <div className="w-full lg:w-1/2 flex flex-col gap-2">
        <Image
          className="rounded-md"
          src={
            "https://www.shutterstock.com/image-vector/ai-generate-logo-artificial-intelligence-600nw-2519534733.jpg"
          }
          alt="logo"
          width={30}
          height={30}
        ></Image>
        <h1 className="font-semibold text-xl">Ai Trip Generator</h1>
        <p className="text-sm tracking-tight text-gray-700 text-justify">
          AI Trip Generator is a smart travel planning web app built with
          Next.js, designed to create personalized trip itineraries based on
          user preferences, budget, and travel duration.{" "}
        </p>
        <h2 className="flex items-center gap-2 absolute bottom-2 text-regular font-semibold">
          <span>Demo</span> <MoveRight />{" "}
        </h2>
      </div>
      <div className="hidden lg:flex items-center h-full justify-center  w-1/2">
        <Image  //TODO: how to make the image size larger
          src={"/demopic.png"}
          alt="demo"
          layout="responsive" // Makes the image scale properly
          width={900}
          height={900}
          className="w-full h-full object-cover" // Ensures full size
        />
      </div>
    </div>
  );
}
