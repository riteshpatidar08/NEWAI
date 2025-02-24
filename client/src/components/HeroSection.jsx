import { Button } from '@mantine/core'
import { Sparkles } from 'lucide-react'
import React from 'react'

function HeroSection() {
  return (
    <div className=' relative flex justify-center items-center h-screen  '>
      <div className='absolute  inset-0 flex justify-center items-center bg-gradient-to-b from-sky-500/20  to-black'>
 <div className='relative z-10'>
    <h1>AI Summary</h1> 
<Button leftSection={<Sparkles/>}>Explore Now</Button>
 </div>
      </div>
    </div>
  )
}

export default HeroSection
