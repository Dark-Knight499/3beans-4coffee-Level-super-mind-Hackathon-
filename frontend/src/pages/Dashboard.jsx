import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Header from '../components/Header'
import { ThumbsUp, MessageCircle, Share2, TrendingUp } from 'lucide-react'
import Statecard from '../components/Statecard'
import Monthlydata from '../components/Dashboard_Components/Monthlydata'
import Averagebarchart from '../components/Dashboard_Components/Averagebarchart'
import PostFrequency from '../components/Dashboard_Components/PostFrequency'
import EngagementPerPostType from '../components/Dashboard_Components/EngagementPerPostType'
import { motion } from 'framer-motion'

const Dashboard = () => {
  const [username, setUsername] = useState('')
  const [isSearched, setIsSearched] = useState(false)
  const [socialMediaData, setSocialMediaData] = useState([])
  const [loading, setLoading] = useState(false)

  const fetchSocialMediaData = async () => {
    if (!username.trim()) {
      alert('Please enter a valid username to search.')
      return
    }
    setLoading(true)
    try {
      const response = await fetch(
        `https://threebeans-4coffee-level-super-mind.onrender.com/api/@${username.trim()}/get_data`,
        { 
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          }
         
        }
      )
      const data = await response.json()
      
      console.log(data , username)
      setSocialMediaData(data)
      setIsSearched(true)
    } catch (error) {
      console.error('Error fetching social media data:', error ,username)
      alert('Failed to fetch data. Please try again later.')
    } finally {
      setLoading(false)
    }
  }

  // Handle Search Click
  const handleSearch = () => {
    fetchSocialMediaData()
  }

  return (
    <div className='flex-1 z-10 overflow-auto relative'>
      <Header title='Social Analytics' />

      <main className='max-w-7xl mx-auto py-6 px-4 lg:px-8'>
        {/* User Input */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className='flex justify-center items-center gap-2 mb-8'
        >
          <input
            type='text'
            value={username}
            onChange={e => setUsername(e.target.value)}
            placeholder='Username'
            className='w-96 p-3 bg-gray-700 text-white placeholder-gray-400 border border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
          />
          <div className='flex items-center'>
            <button
              onClick={handleSearch}
              className='px-4 py-3 text-white bg-[#6366f1] rounded-xl hover:bg-[#494bed] focus:outline-none'
              disabled={loading}
            >
              {loading ? 'Searching...' : 'Search'}
            </button>
          </div>
        </motion.div>

        {/* Loading State */}
        {loading && (
          <p className='text-center text-gray-500'>Fetching data...</p>
        )}

        {/* Charts */}
        {isSearched && !loading && (
          <>
            <motion.div
              className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mb-8 gap-5'
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <Statecard
                name='Total Views'
                icon={TrendingUp}
                value={socialMediaData
                  .map(d => d.views)
                  .reduce((acc, curr) => acc + curr, 0)}
                color='pink'
              />
              <Statecard
                name='Total Likes'
                icon={ThumbsUp}
                value={socialMediaData
                  .map(d => d.likes)
                  .reduce((acc, curr) => acc + curr, 0)}
                color='red'
              />
              <Statecard
                name='Total Comments'
                icon={MessageCircle}
                value={socialMediaData
                  .map(d => d.comments)
                  .reduce((acc, curr) => acc + curr, 0)}
                color='blue'
              />
              <Statecard
                name='Total Shares'
                icon={Share2}
                value={socialMediaData
                  .map(d => d.shares)
                  .reduce((acc, curr) => acc + curr, 0)}
                color='green'
              />
            </motion.div>

            <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
              <Monthlydata data={socialMediaData} />
              <EngagementPerPostType DistributionData={socialMediaData} />
              <PostFrequency PostFrequencyPerMonth={socialMediaData} />
              <Averagebarchart data={socialMediaData} />
            </div>
          </>
        )}
      </main>
    </div>
  )
}

export default Dashboard
