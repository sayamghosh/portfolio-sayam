import Link from 'next/link'
import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

export default function Navbar() {
    const navItems = ["Skills", "Projects", "Contact"]
  return (
    <nav className='w-full mt-2'>
        <div className='max-w-screen-lg mx-auto flex justify-between items-center py-2 px-4 rounded-full bg-white/10 backdrop-blur-lg border border-white/20 shadow-lg'>
            <div className='group_left flex gap-4 tracking-wider'>
                {navItems.map((item,index)=>(
                    <Link href={`#${item}`} key={index} >{item}</Link>
                ))}
                
            </div>
            <div className='group_right flex gap-3'>
                <Link href={"https://www.linkedin.com/in/sayamghosh/"} target="_blank"><FaLinkedin size={18} /></Link>
                <Link href={"https://x.com/ssayamghosh"} target="_blank"><FaXTwitter size={18} /></Link>
                <Link href={"https://github.com/sayamghosh"} target="_blank"><FaGithub size={18} /></Link>
            </div>
        </div>
    </nav>
  )
}
