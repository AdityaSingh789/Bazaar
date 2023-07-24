import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const Clock = () => {

 const[days,setDays]=useState()
 const[hours,sethours]=useState()
 const[minutes,setminutes]=useState()
 const[seconds,setseconds]=useState()

 let interval;
 const countDown=()=>{
    const destination= new Date('July 30,2023').getTime()
    interval=setInterval(()=>{
        const now=new Date().getTime()
        const differnce=destination-now
        const days=Math.floor(differnce/(1000*60*60*24))
        const hours=Math.floor(differnce%(1000*60*60*24)/(1000*60*60))
        const minutes=Math.floor(differnce%(1000*60*60)/(1000*60))
        const seconds=Math.floor(differnce%(1000*60)/1000)

        if(destination < 0){
            clearInterval(interval.current)
        }else{
            setDays(days)
            sethours(hours)
            setminutes(minutes)
            setseconds(seconds)
        }
    })
 }

 useEffect(()=>{
    countDown()
 })

  return <div className="clock__wrapper d-flex align-items-center gap-3">
    <div className="clock__data d-flex align-items-center gap-3">
     <div className='text-center'>
        <h1 className='text-white fs-4 mb-2'>{days}</h1>
        <h5 className='text-white fs-7'>Days</h5>
     </div>
     <span className='text-white fs-4'>:</span>
    </div>

    <div className="clock__data d-flex align-items-center gap-3">
     <div className='text-center'>
        <h1 className='text-white fs-4 mb-2'>{hours}</h1>
        <h5 className='text-white fs-7'>Hours</h5>
     </div>
     <span className='text-white fs-4'>:</span>
    </div>

    <div className="clock__data d-flex align-items-center gap-3">
     <div className='text-center'>
        <h1 className='text-white fs-4 mb-2'>{minutes}</h1>
        <h5 className='text-white fs-7'>Minutes</h5>
     </div>
     <span className='text-white fs-4'>:</span>
    </div>

    <div className="clock__data d-flex align-items-center gap-3">
     <div className='text-center'>
        <h1 className='text-white fs-4 mb-2'>{seconds}</h1>
        <h5 className='text-white fs-7'>Seconds</h5>
     </div>
    </div>

 </div>
}

export default Clock
