import React from 'react'
import Header from '../components/Header'
const Home = () => {
  return (
    <div className='flex-1 z-10 overflow-auto relative'>
      <Header title='Home' />
      <main className='max-w-7xl h-[calc(100vh-64.8px)] mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col items-center justify-center text-center'>
        <div>
          <h1 className='text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-100'>
            Insightify: Unlock your social media potential with clarity and
            precision.
          </h1>
          <p className='mt-4 text-lg sm:text-xl lg:text-2xl text-gray-400'>
            Empower your social strategy with Insightify. Leverage real-time
            data and AI-driven insights to measure engagement, refine content,
            and elevate your online presence with confidence.
          </p>
        </div>
      </main>
    </div>
  )
}

export default Home
