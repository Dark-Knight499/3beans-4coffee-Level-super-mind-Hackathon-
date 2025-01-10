import React, { useState, useEffect } from 'react'
import Header from '../components/Header'
import { motion } from 'framer-motion'
import { Github, ChartColumnDecreasing } from 'lucide-react'

const ParticleBackground = () => {
  const [particles, setParticles] = useState([])

  useEffect(() => {
    const initialParticles = Array.from({ length: 300 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: Math.random() * 3 + 1,
      speedX: (Math.random() - 0.5) * 2,
      speedY: (Math.random() - 0.5) * 2,
      opacity: Math.random() * 0.5 + 0.1
    }))

    setParticles(initialParticles)

    const animate = () => {
      setParticles(prevParticles =>
        prevParticles.map(particle => ({
          ...particle,
          x:
            (particle.x + particle.speedX + window.innerWidth) %
            window.innerWidth,
          y:
            (particle.y + particle.speedY + window.innerHeight) %
            window.innerHeight
        }))
      )
    }

    const frame = setInterval(animate, 50)
    return () => clearInterval(frame)
  }, [])

  return (
    <div className='fixed inset-0 pointer-events-none'>
      {particles.map((particle, index) => (
        <div
          key={index}
          className='absolute rounded-full bg-white'
          style={{
            left: particle.x,
            top: particle.y,
            width: particle.size,
            height: particle.size,
            opacity: particle.opacity,
            transform: 'translate(-50%, -50%)',
            background:
              'radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,0.5) 50%, rgba(255,255,255,0) 100%)',
            boxShadow: `0 0 ${particle.size * 4}px rgba(255, 255, 255, 0.8)`
          }}
        />
      ))}
    </div>
  )
}

const Home = () => {
  return (
    <div className='flex-1 overflow-auto relative'>
      {/* <Header title='Home' /> */}
      <ParticleBackground />
      <main className='max-w-7xl h-[calc(100vh-64.8px)] mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col items-center justify-center text-center'>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className='text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-100'>
            Unlock the Power of Your Data with DataStax and Langflow
          </h1>
          <p className='mt-4 text-lg sm:text-xl lg:text-2xl text-gray-400'>
            Empower your digital transformation with DataStax's cutting-edge
            data infrastructure and Langflow's AI-driven insights. Leverage
            scalable data solutions and real-time analytics to refine your
            strategy and drive better outcomes.
          </p>
          <div className='flex justify-center items-center gap-4'>
            <a
              href='https://github.com/Dark-Knight499/3beans-4coffee-Level-super-mind-Hackathon-'
              target='_blank'
              aria-label='Github repository'
            >
              <div className='w-fit flex justify-center items-center mt-8 text-[#6366f1] gap-2 px-4 py-2 border-[3px] border-[#6366f1] rounded-lg'>
                <p className='font-medium text-lg'>Github</p>
                <Github size={28} />
              </div>
            </a>
            <a
              href='https://youtube.com/' // Update with actual Demo video link
              target='_blank'
              aria-label='Demo video'
            >
              <div className='w-fit flex justify-center items-center mt-8 text-[#4c4fee] gap-2 px-4 py-2 bg-gray-200 rounded-lg'>
                <ChartColumnDecreasing size={28} />
                <p className='font-medium text-lg'>Demo video</p>
              </div>
            </a>
          </div>
        </motion.div>
      </main>
    </div>
  )
}

export default Home
