import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";


export default function Hero() {
  return (
    <section className="w-full xl:h-screen">
      <div className="max-w-screen-lg mx-auto flex max-xl:flex-col items-center max-sm:justify-center justify-between gap-6 h-full mt-4">
        <div className="w-[90%] md:w-[70%] bg-blue-100 p-3 rounded-md">
          <div className="" >
            <h1 className="text-3xl font-semibold"> Hi, I&apos;m Sayam 👋</h1> <p className="text-lg mt-2"> I&apos;m a Next.js front-end developer
            passionate about crafting sleek, high-performance web applications.
            With expertise in React, Tailwind CSS, and modern web technologies,
            I build intuitive, fast, and accessible user experiences.</p>
          </div>
          <span className="mt-5 flex gap-4">
          <Button >See my resume</Button>
          <Button variant="outline" >Get in touch</Button>
          </span>
        </div>
        <div className="w-72 h-72 rounded-full overflow-hidden">
          <Image
            src={"/profile.jpg"}
            alt="profile"
            height={300}
            width={300}
          ></Image>
        </div>
      </div>
    </section>
  );
}
