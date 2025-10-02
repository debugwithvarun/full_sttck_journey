import React from 'react'
import {motion} from "motion/react"
const Animatedcard = () => {
  return (
    <motion.div className='w-[300px] cursor-pointer bg-white rounded-lg  shadow-lg shadow-zinc-700'
    whileHover={{
        scale:1.1,rotate:3
    }}
    whileTap={{
        scale:0.9
    }}
    drag
    dragConstraints={{
                left:-50,right:50,top:-50,bottom:50
    }}
    >
        <motion.img src="https://media.istockphoto.com/id/1148994364/vector/fiery-desert-sunset.jpg?s=612x612&w=0&k=20&c=hPi__rB1x66cEkKULEFojBbyLf1FZO6LjK6bAQifgq4=" alt="" 
        className='w-[100%] h-[150px] rounded-t-lg mb-4 grayscale-50'
        whileHover={{
            filter:"grayscale(0%)"
        }}
        />
       <div className='p-4'>
         <p className=' text-wrap text-[18px] capitalize mb-4 font-medium font-mono text-zinc-700'>
            This is the simple Card made using for framer motion testing if you have any problem , then don't tell me your problem okey.
        </p>
        <motion.button className='px-3 py-1 bg-amber-700 text-white rounded-xl font-mono'
        whileHover={{
            backgroundColor:"darkblue"
        }}
        >Click ME!</motion.button>
       </div>

    </motion.div>
  )
}

export default Animatedcard