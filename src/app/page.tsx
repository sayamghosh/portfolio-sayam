import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '@/components/Hero'


export default function Page() {
  return (
    <div className='w-full h-screen overflow-hidden'>
      <Navbar />
      <Hero />
    </div>
  )
}
