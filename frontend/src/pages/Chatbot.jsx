import React from 'react'
import Header from '../components/Header'
import { useState,useEffect } from 'react'

const ans ='lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc'

const Chatbot = () => {
  const [query , setQuery] = useState('');
  const ask = () => {
    
    const cquery = document.getElementById('ques').value;
    setQuery(cquery);

    document.getElementById('ques').value = '';
  } 
  useEffect(() => {
    if(query){
      console.log('Updated state:', query);
    document.getElementById('ans').innerHTML += '<div class="bg-gray-700 px-4 py-2 rounded-full m-4 w-fit ml-auto"> <p class="text-white"> '+query+' </p> </div> <div class="bg-gray-800 px-4 py-2 rounded-2xl m-4 w-fit mr-auto"> <p class="text-white"> '+ans+' </p> </div> ';
    }
  }, [query]);
  return (
    
    
    
    <div className='flex-1 z-10 overflow-auto relative'>
      <Header title="Chatbot"/>
      <div id='ans' className='overflow-y-scroll m-4 p-4 rounded-xl h-3/4 w-1/2 mx-auto scrollbar-hide'>
      
      </div>
      <div className='bg-gray-700 rounded-xl m-4 h-12 w-1/2 mx-auto flex'>
      <input id='ques' type='text' placeholder='Ask about socials' className='bg-gray-700 outline-none rounded-xl p-4  w-11/12 h-12' >
      </input>
      <button  onClick={ask} className='bg-gray-950 hover:bg-gray-900 px-4  rounded-md'>
        Ask 
      </button>
      </div> 
    
      
    </div>
  )
}

export default Chatbot