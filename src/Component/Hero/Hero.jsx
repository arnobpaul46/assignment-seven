import { Plus } from 'lucide-react'
import React from 'react'

const Hero = () => {
    return (
        <>
            <div className='flex items-center flex-col justify-center mt-10 md:mt-20'>
                <h1 className='text-center text-5xl font-bold px-2' >Friends to keep close in your life</h1>
                <p className=' text-center text-sm w-[80%] md:text-lg md:w-[60%] lg:w-[40%] mx-auto mt-5'>Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
                <button className='bg-success hover:bg-green-400 text-black px-4 py-2 rounded-lg mt-5 flex justify-center items-center gap-1.5'><Plus size={16} /> Add a Friend</button>
            </div>
        </>
    )
}

export default Hero;