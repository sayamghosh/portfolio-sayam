import React from "react";
import ProjectCard from "@/components/cards/ProjectCard";

export default function Projects() {
  return (
    <section className="w-full flex flex-col items-center">
      <h4 className="text-white text-3xl font-semibold uppercase font py-8">
        Projects
      </h4>

      {/* Project cards */}
      <div className="w-full px-8 border-y-[1px] ">
        <div className="lg:grid xl:grid-cols-2 place-items-center max-w-6xl mx-auto">
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </div>
      </div>
    </section>
  );
}
