import React from 'react'
import Header from '../components/Header'
import { motion } from 'framer-motion'
import { Github, Linkedin } from 'lucide-react'

const teamMembers = [
  {
    name: "Harsh Jain",
    role: "Backend & AI Engineer",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSagF8HgWX20MNNtI-8Xry6V3bcQ_bFKhKaKg&s",
    git: "https://github.com/Dark-Knight499/",
    linkedIn: "https://www.linkedin.com/in/harsh-jain-82243128b/",
  },
  {
    name: "Ganesh Mishra",
    role: "Fullstack Developer",
    image: "src/assets/download.jpg",
    git: "https://github.com/GaneshMishra-lab",
    linkedIn: "https://www.linkedin.com/in/ganesh-mishra-1bb89b290/",
  },
  {
    name: "Gaurav Dubey",
    role: "Fullstack Developer",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCNmKbC65qjOheJQCvxJutsz86X4pGGaqvHw&s",
    git: "https://github.com/CodeWithDubeyji",
    linkedIn: "https://www.linkedin.com/in/gaurav-dubey-345a33271/",
  },
  {
    name: "Himanshu Mishra",
    role: "App & Backend Developer",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMD2ubRVACr6wmNe_9lIckL5hDre9bvLEtxA&s",
    git: "",
    linkedIn: "https://www.linkedin.com/in/himanshu-mishra-5aa9ab271/",
  }
]


const Team = () => {
  return (
    <div className='flex-1 z-10 overflow-auto relative'>
      <Header title="About Us"/>
      <main className='max-w-7xl mx-auto py-6 px-4 lg:px-8'>
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold text-center mb-12 text-[#ff6b3d]">Meet Our Team: 3Beans4Coffee</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div 
                key={member.name}
                className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700"
              >
                <div className="flex justify-center mb-4">
                  <div className="relative w-32 h-32">
                    <div className="absolute inset-0 rounded-full border-2 border-[#ff6b3d]"></div>
                    <img
                      src={member.image}
                      alt={member.name}
                      className="rounded-full w-full h-full object-cover p-1"
                    />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-center mb-2 text-gray-100">{member.name}</h3>
                <p className="text-[#ff6b3d] text-center font-medium mb-4">{member.role}</p>
                <div className="flex justify-center space-x-4">
                  <a href={member.git} target='_blank' className="text-gray-600 hover:text-[#ff6b3d] transition-colors">
                    <Github className="w-5 h-5" />
                  </a>
                  <a href={member.linkedIn} target='_blank' className="text-gray-600 hover:text-[#ff6b3d] transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </main>
    </div>
  )
}

export default Team
