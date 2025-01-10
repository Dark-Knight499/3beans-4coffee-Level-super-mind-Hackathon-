import React from 'react'
import Header from '../components/Header'
import { useState,useRef,useEffect } from 'react'

const ans ='lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc'

const Chatbot = () => {
  
  const [query , setQuery] = useState('');
  const [message , setMessage] = useState([]);
  const messagesEndRef = useRef(null);
  
  const ask = () => {
    if(query.trim() === '') return;
    setMessage([...message,{text:query , isUser:true} , {text:ans , isUser:false}]);
    setQuery('');
  }

  const handleKeyDown = (e) => {
    if(e.key === 'Enter'){
      ask();
    }
  }

  useEffect(() => { 
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  },[message]);
  
  return (
    
    <>
    
    <div className='flex-1 z-10 overflow-auto relative'>
      <Header title="Chatbot Assistant"/>
      <div id='ans' className='overflow-y-scroll m-4 p-4 rounded-xl h-3/4 w-1/2 mx-auto scrollbar-hide'>
        {message.map((msg,index)=>{
          return <div key={index} className={`bg-gray-700 p-4  max-w-[70%] w-fit rounded-xl my-2 ${msg.isUser ? 'ml-auto' : 'mr-auto'}`}>
            {msg.text}
          </div>
        })}
    
    <div ref={messagesEndRef} />
      </div >
      
      <div className='flex items-center space-x-2 max-w-2xl mx-auto p-4'>
      <input id='ques' type='text' value={query} onChange={(e)=>{setQuery(e.target.value)}} placeholder='Ask about socials' className='flex-1 p-2 bg-gray-700 text-white placeholder-gray-400 rounded-xl focus:outline-none' autoComplete='off' onKeyDown={(e)=>handleKeyDown(e)} >
      </input>
      <button  onClick={ask} className='bg-gray-950 hover:bg-gray-900 text-white px-4 py-2 rounded-md focus:outline-none'>
        Ask 
      </button>
      </div> 
    
      </div>
    </>
  )
}

export default Chatbot