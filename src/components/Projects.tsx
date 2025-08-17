import React from "react";
import ProjectCard from "@/components/cards/ProjectCard";

export default function Projects() {
  return (
    <section className="w-full mt-20">
      <div className="max-w-screen-lg mx-auto flex items-center justify-center pb-7">
        <h1 className="font-semibold text-2xl text-zinc-200 uppercase">Projects</h1>
      </div>
      <div className="max-w-screen-lg w-full  mx-auto grid grid-cols-1 xl:grid-cols-2 gap-10 place-items-center">
        {/* TODO: Add dynamic data */}
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </section>
  );
}
