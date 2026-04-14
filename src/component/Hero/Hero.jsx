import React from 'react'

const Hero = () => {
    return (
        <>
            <div className='text-center mt-10 md:mt-20'>
                <h1 className='text-3xl md:text-5xl font-bold' >Friends to keep close in your life</h1>
                <p className='text-sm w-[80%] md:text-lg md:w-[60%] lg:w-[40%] mx-auto mt-5'>Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
                <button className='bg-success hover:bg-green-400 text-black px-4 py-2 rounded-lg mt-5'>Add a Friend</button>
            </div>
        </>
    )
}

export default Hero