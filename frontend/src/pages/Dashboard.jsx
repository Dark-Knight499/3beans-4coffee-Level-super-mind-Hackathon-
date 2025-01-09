import React from 'react'
import Header from '../components/Header'
import EngagementPerPostType from '../components/Dashboard_Components/EngagementPerPostType'
import PostFrequency from '../components/Dashboard_Components/PostFrequency'

const socialMediaData = [
  {
    userId: 1,
    postId: 101,
    postType: "Image",
    likes: 120,
    comments: 45,
    shares: 30,
    dateOfPost: "2025-01-01",
  },
  {
    userId: 2,
    postId: 102,
    postType: "Reel",
    likes: 450,
    comments: 87,
    shares: 55,
    dateOfPost: "2024-12-30",
  },
  {
    userId: 3,
    postId: 103,
    postType: "Carousel",
    likes: 340,
    comments: 60,
    shares: 40,
    dateOfPost: "2025-01-03",
  },
  {
    userId: 1,
    postId: 103,
    postType: "Carousel",
    likes: 340,
    comments: 60,
    shares: 40,
    dateOfPost: "2025-01-03",
  },
  {
    userId: 1,
    postId: 104,
    postType: "Reel",
    likes: 590,
    comments: 120,
    shares: 80,
    dateOfPost: "2024-11-28",
  },
  {
    userId: 1,
    postId: 104,
    postType: "Reel",
    likes: 590,
    comments: 120,
    shares: 80,
    dateOfPost: "2024-11-28",
  },
  {
    userId: 4,
    postId: 105,
    postType: "Image",
    likes: 220,
    comments: 30,
    shares: 20,
    dateOfPost: "2025-01-05",
  },
  {
    userId: 5,
    postId: 106,
    postType: "Carousel",
    likes: 400,
    comments: 90,
    shares: 50,
    dateOfPost: "2024-12-31",
  },
  {
    userId: 3,
    postId: 107,
    postType: "Reel",
    likes: 700,
    comments: 150,
    shares: 100,
    dateOfPost: "2025-01-07",
  },
  {
    userId: 2,
    postId: 108,
    postType: "Image",
    likes: 320,
    comments: 65,
    shares: 35,
    dateOfPost: "2024-12-25",
  },
  {
    userId: 6,
    postId: 109,
    postType: "Reel",
    likes: 800,
    comments: 190,
    shares: 120,
    dateOfPost: "2024-12-20",
  },
  {
    userId: 7,
    postId: 110,
    postType: "Image",
    likes: 150,
    comments: 50,
    shares: 25,
    dateOfPost: "2025-01-08",
  },
  {
    userId: 8,
    postId: 111,
    postType: "Carousel",
    likes: 550,
    comments: 130,
    shares: 70,
    dateOfPost: "2024-12-18",
  },
  {
    userId: 9,
    postId: 112,
    postType: "Image",
    likes: 190,
    comments: 40,
    shares: 15,
    dateOfPost: "2024-12-22",
  },
  {
    userId: 1,
    postId: 113,
    postType: "Reel",
    likes: 980,
    comments: 250,
    shares: 140,
    dateOfPost: "2025-9-09",
  },
  {
    userId: 4,
    postId: 114,
    postType: "Carousel",
    likes: 600,
    comments: 140,
    shares: 90,
    dateOfPost: "2024-12-26",
  },
  {
    userId: 7,
    postId: 115,
    postType: "Image",
    likes: 230,
    comments: 70,
    shares: 45,
    dateOfPost: "2024-12-15",
  },
  {
    userId: 2,
    postId: 116,
    postType: "Reel",
    likes: 720,
    comments: 180,
    shares: 110,
    dateOfPost: "2024-12-28",
  },
  {
    userId: 8,
    postId: 117,
    postType: "Carousel",
    likes: 350,
    comments: 80,
    shares: 50,
    dateOfPost: "2024-12-10",
  },
  {
    userId: 3,
    postId: 118,
    postType: "Image",
    likes: 280,
    comments: 90,
    shares: 60,
    dateOfPost: "2024-12-05",
  },
  {
    userId: 1,
    postId: 119,
    postType: "Reel",
    likes: 1050,
    comments: 300,
    shares: 200,
    dateOfPost: "2024-08-02",
  },
  {
    userId: 6,
    postId: 120,
    postType: "Carousel",
    likes: 450,
    comments: 100,
    shares: 75,
    dateOfPost: "2024-12-23",
  },
];

const Dashboard = () => {
  return (
    <div className='flex-1 z-10 overflow-auto relative'>
      <Header title='Dashboard' />
      <main className='max-w-7xl mx-auto py-6 px-4 lg:px-8'>
        {/* CHARTS */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
          <PostFrequency PostFrequencyPerMonth={socialMediaData.filter((d)=>d.userId===1)}/>
          <EngagementPerPostType DistributionData={socialMediaData.filter((d)=>d.userId===1)}/>
        </div>
      </main>
    </div>
  )
}

export default Dashboard
