import { useState } from "react";
import Card from "./Card.jsx";
import {FiChevronLeft,FiChevronRight} from 'react-icons/fi'
function Testimonial({reviews}){
    let [index,setindex]=useState(0);
    function leftshifthandler(){
        if(index===0){
            setindex(reviews.length-1)
        }
        else{
            setindex(index-1)
        }

    }
    function rightshifthandler(){
         if(index===reviews.length-1){
            setindex(0)
        }
        else{
            setindex(index+1)
        }


    }
    function surprisehandler(){
       setindex(Math.floor(Math.random()*reviews.length));

    }

  
    return(
        <div className="w-[85vw] md:w-[700px] bg-white flex flex-col justify-center items-center mt-10 p-10 transition-all duration-200 hover:shadow-2xl">
          <Card review={reviews[index]}></Card>

          <div className=' cursor-pointer flex justify-center text-3xl mt-5 gap-3 text-violet-400 font-bold'>
                <button onClick={leftshifthandler} className='hover:text-violet-700'><FiChevronLeft></FiChevronLeft></button>
                <button onClick={rightshifthandler} className='hover:text-violet-700'><FiChevronRight></FiChevronRight></button>
            </div>
            <div className='flex justify-center'>

                <button onClick={surprisehandler} className='text-center bg-violet-400 hover:bg-violet-700 transition-all duration-200 cursor-pointer px-10 py-2 font-bold text-white  text-lg rounded-md'>Surprise Me</button>  
            </div>

 
     
            
  

           
        </div>
    )
    

}
export default Testimonial;