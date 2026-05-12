import { useState } from 'react'
import Testimonial from './Components/Testimonial.jsx'
import {reviews} from './data.js'

import './App.css'

function App() {
   console.log(reviews) 
 return (
    <div className='flex flex-col h-[100vh] w-[100vw]   justify-center items-center  bg-gray-200'>
        
      
         <h1 className='text-4xl font-bold text-center'>Our Testimonial</h1>
        <div className='bg-violet-400 h-[4px] w-1/5 mt-1'></div>
        <Testimonial reviews={reviews}></Testimonial>
         
    </div>
 )
}

export default App
