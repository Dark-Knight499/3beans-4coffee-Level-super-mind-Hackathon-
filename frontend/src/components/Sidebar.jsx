import React, { useState } from 'react'
import { House, Menu, Users } from 'lucide-react'
import { BotMessageSquare } from 'lucide-react'
import { TrendingUp, Gem } from 'lucide-react'

import { AnimatePresence, motion } from 'framer-motion'
import { Link } from 'react-router-dom'
const SIDEBAR_ITEMS = [
  {
    name: 'Home',
    icon: House,
    color: '#8B5CF6',
    link: '/'
  },
  {
    name: 'Chatbot',
    icon: BotMessageSquare,
    color: '#EC4899',
    link: '/chatbot'
  },
  {
    name: 'Dashboard',
    icon: TrendingUp,
    color: '#10B981',
    link: '/dashboard'
  },
  {
    name: 'Team',
    icon: Users,
    color: '#F59E0B',
    link: '/team'
  }
]

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)
  return (
    <motion.div
      className={`relative z-10 transition-all duration-300 ease-in-out flex-shrink-0 ${
        isSidebarOpen ? 'w-64' : 'w-20'
      }`}
      animate={{ width: isSidebarOpen ? 256 : 80 }}
    >
      <div className='h-full bg-gray-800 bg-opacity-50 backdrop-blur-md p-4 flex flex-col border-r border-gray-700'>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className='p-2 rounded-full hover:bg-gray-700 transition-colors cursor-pointer max-w-fit'
        >
          <Menu size={24} />
        </motion.button>

        <nav className='mt-8 flex-grow'>
          {SIDEBAR_ITEMS.map(item => (
            <Link key={item.link} to={item.link}>
              <motion.div className='flex items-center p-4 text-sm font-medium mb-2 rounded-lg hover:bg-gray-700 transition-colors'>
                <item.icon
                  size={20}
                  style={{ color: item.color, minWidth: '20px' }}
                />
                <AnimatePresence>
                  {isSidebarOpen && (
                    <motion.div
                      initial={{ opacity: 0, width: 0 }}
                      animate={{ opacity: 1, width: 'auto' }}
                      exit={{ opacity: 0, width: 0 }}
                      transition={{ duration: 0.2, delay: 0.3 }}
                      className='ml-4 whitespace-nowrap'
                    >
                      {item.name}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </Link>
          ))}
        </nav>
      </div>
    </motion.div>
  )
}

export default Sidebar
