import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"], // pick what you need
});

export default function Hero() {
  return (
    <section className="w-full bg-[#161513] sm:py-16 md:py-20 lg:py-22 mx-auto flex flex-col sm:flex-row items-center p-4 max-sm:justify-center justify-between gap-10 h-full max-w-6xl lg:border-b lg:border-b-zinc-700 border-x-[1px] border-x-zinc-500">
      {/* Text Section */}
      <div className="w-full sm:max-w-[30rem]">
        <div className="">
          <h1 className="text-4xl md:text-5xl font-semibold uppercase text-white">
            {" "}
            Hi, I&apos;m{" "}
          </h1>
          <h1 className="text-6xl md:text-7xl font-bold text-white uppercase">
            Sayam
          </h1>
          <p className="text-lg sm:text-base md:text-xl mt-2 text-zinc-400 ">
            {" "}
            I&apos;m a Next.js front-end developer passionate about crafting
            sleek, high-performance web applications. With expertise in React,
            Tailwind CSS, and modern web technologies, I build intuitive, fast,
            and accessible user experiences.
          </p>
        </div>
        <span className="mt-5 flex gap-4 w-full ">
          <button className="bg-[#D3E97A] px-3 py-1 text-zinc-800 rounded-full flex items-center"><p className={`${montserrat.className} text-md`}>Resume</p><span className="w-2 h-2 ml-2 inline-block bg-black rounded-full"></span></button>
          <div className=" flex gap-3 items-center text-[#D3E97A]">
            <Link
              className="p-2 rounded-full bg-zinc-800"
              href={"https://www.linkedin.com/in/sayamghosh/"}
              target="_blank"
            >
              <FaLinkedin size={18} />
            </Link>
            <Link
              className="p-2 rounded-full bg-zinc-800"
              href={"https://x.com/ssayamghosh"}
              target="_blank"
            >
              <FaXTwitter size={18} />
            </Link>
            <Link
              className="p-2 rounded-full bg-zinc-800"
              href={"https://github.com/sayamghosh"}
              target="_blank"
            >
              <FaGithub size={18} />
            </Link>
          </div>
        </span>
      </div>
      {/* Image */}

      <Image
        src="/profile.jpg"
        alt="profile"
        height={300}
        width={300}
        className="sm:rounded-md w-72 h-72 shrink-0 sm:w-60 sm:h-60 md:w-72 md:h-80 lg:w-[20rem] lg:h-[22rem] xl:w-[25rem] xl:h-[28rem] rounded-full object-cover object-top"
      />
    </section>
  );
}
