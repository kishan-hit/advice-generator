import React,{useState} from 'react';
import Quotes from "./assets/Quotes";
import Change from './assets/Change';

function HomePage() {
const bgcolor = ["#ff8000","#ffff00","#bfff00","#00ffbf","#0080ff","#ff00ff","#ff0040"];
const bgcol = ["#ff4000","#ffbf00","#40ff00","#00bfff","#0000ff","#bf00ff","#ff0000"];
const [ind , setInd] = useState(0);
const len = Math.floor((Math.random()*Quotes.length));
function changeCol(){
  setInd((ind+1)%bgcolor.length);
}
  return (
    <div className='h-screen w-screen flex items-center justify-center' style={{backgroundColor: bgcolor[ind]}}>
        <div className='rounded-3xl h-[50%] w-[40%] shadow-xl' style={{backgroundColor: bgcol[ind]}}>
            <div className='h-[20%] flex items-center justify-center text-sky-500 text-md'>
              <div className='w-[30%] text-center bg-white rounded-lg'>
              ADVICE #{Math.floor((Math.random() * (1000-100+1)) + 100)}
              </div>
            </div>
            <div className='h-[80%] text-3xl flex flex-col items-center' >
              <div className='w-[60%]'>
              "{Quotes[len]}"
              </div>
              <div className='border border-white w-[60%] mt-14'></div>
            </div>
            <div className='flex justify-center'>
              <div className='bg-black rounded-2xl p-1 w-fit cursor-pointer -mt-[20px]' onClick={changeCol}>
                <Change height="40px" fill="white"/>
              </div>
            </div>
        </div>
    </div>
  )
}

export default HomePage