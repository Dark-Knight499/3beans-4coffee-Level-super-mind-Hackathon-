import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Home from './pages/Home.jsx'
import Chatbot from './pages/Chatbot.jsx'
import Dashboard from './pages/Dashboard.jsx'
import Team from './pages/Team.jsx'

import Sidebar from './components/Sidebar.jsx'

const App = () => {
  return (
    <div className='flex h-screen bg-gray-900 text-gray-100 overflow-hidden'>

        {/* BG */}
        <div className='fixed inset-0 z-0'>
            <div className='absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 opacity-80'></div>
            <div className='absolute inset-0 backdrop-blur-sm'></div>
        </div>
        {/* Sidebar */}
        <Sidebar/>
        {/* Routes */}
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/chatbot' element={<Chatbot />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/team' element={<Team />} />
        </Routes>
    </div>
  )
}

export default App