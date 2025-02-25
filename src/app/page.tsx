import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '@/components/Hero'
import Projects from '@/components/Projects'


export default function Page() {
  return (
    <div className='w-full h-full min-h-screen pb-10'>
      <Navbar />
      <Hero />
      <Projects />
    </div>
  )
}
