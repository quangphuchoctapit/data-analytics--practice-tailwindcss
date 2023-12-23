import React from 'react'
import Typed from 'react-typed'

const Hero = () => {
    return (
        <div className='max-w-screen-md text-white h-screen mx-auto text-center flex flex-col justify-center items-center gap-5 mt-[-100px]'>
            <p className='uppercase font-bold text-xl text-primary-green-500'> grow with data analytics</p>
            <h1 className='font-bold text-4xl sm:text-5xl md:text-6xl'>Grow with data.</h1>
            <div className="flex flex-row gap-3">
                <p className='text-xl sm:text-2xl md:text-3xl font-semibold'>Fast, flexible financing for</p>
                <Typed className='text-xl sm:text-2xl md:text-3xl font-semibold'
                    strings={[
                        'BTB',
                        'BTC',
                        'SASS']}
                    typeSpeed={120}
                    backSpeed={150}
                    loop >
                </Typed>
            </div>
            <p className='font-bold text-md sm:text-lg md:text-xl text-gray-400 w-[70%] md:w-full'>Monitor your data analytics to increase revenue for BTB, BTC, & SASS platforms.</p>
            <button className="w-[160px] hover:bg-primary-green-200 md:w-[200px] mx-auto bg-primary-green-500 text-black rounded-md py-3 text-lg font-semibold">Get Started</button>
        </div>
    )
}

export default Hero
