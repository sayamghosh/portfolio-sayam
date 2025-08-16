import Link from "next/link";
import React from "react";
import IndianFlag from "./easterEgg/Indianflag";

export default function Navbar() {
  const navItems = ["Skills", "Projects", "Contact"];
  return (
    <nav className="w-full py-2 px-4 flex items-center bg-[#222222] ">
      <IndianFlag />
      <div className="w-fit ml-auto">
        <div className="flex items-center justify-end text-white gap-4 py-2 w-full ">
          {navItems.map((item, index) => (
            <Link href={`#${item}`} key={index}>
              {item}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}


{/* <div className='group_right flex gap-3'>
                <Link href={"https://www.linkedin.com/in/sayamghosh/"} target="_blank"><FaLinkedin size={18} /></Link>
                <Link href={"https://x.com/ssayamghosh"} target="_blank"><FaXTwitter size={18} /></Link>
                <Link href={"https://github.com/sayamghosh"} target="_blank"><FaGithub size={18} /></Link>
            </div> */}