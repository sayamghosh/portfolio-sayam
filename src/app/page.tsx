import React from "react";
import Navbar from "../components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";

export default function Page() {
  return (
    <div className="w-full h-full min-h-screen pb-10">
      <div className="w-full border-b-[1px] border-zinc-700 px-4 xl:px-0">
        <Navbar />
      </div>
      <div className="w-full border-b-[1px] border-zinc-700 px-4 xl:px-0">
        <Hero />
      </div>

      <Projects />
    </div>
  );
}
