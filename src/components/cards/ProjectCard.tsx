import React from "react";
import Image from "next/image";

export default function ProjectCard() {
  //TODO: Add dynamic data
  return (
    <div className="border-[1px] border-zinc-600 pb-6 px-4 sm:flex sm:items-center sm:justify-center sm:space-x-4 sm: py-4 lg:max-w-[36rem]">
        <Image
          src={"/demopic.png"}
          height={500}
          width={500}
          alt="demo-image"
          className="object-cover h-[12rem] w-[15rem] mx-auto "
        />

        {/* title and description */}
        <div className=" lg:max-w-[20rem] mx-auto space-y-2">
          <h5 className="text-zinc-200 text-xl uppercase">Blogify</h5>
          <p className="text-zinc-300">
            Teamed up with a designer to breathe life into a promotional webpage
            for our beloved show, Adventure Time. Delivered a fully responsive
            design with dynamic content capabilities, seamlessly integrating a
            newsletter feature to keep fans updated with the latest adventures.
          </p>
        </div>
      </div>
  );
}
