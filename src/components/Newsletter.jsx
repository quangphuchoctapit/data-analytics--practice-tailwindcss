import React from 'react'

const Newsletter = () => {
    return (
        <div className='bg-black text-white w-full p-3'>
            <div className="max-w-screen-lg mx-auto grid lg:grid-cols-3 grid-cols-1">
                <div className="text-center lg:text-left flex flex-col gap-4 lg:col-span-2">
                    <h1 className='font-bold md:text-2xl text-xl'>Want tips & tricks to optimize your flow?</h1>
                    <p className='text-lg'>Signup to our newsletter and stay up to date.</p>
                </div>
                <div className="flex flex-col">
                    <div className=' my-3 flex lg:flex-row flex-col gap-4 justify-center items-center'>
                        <input type="text" className='p-3  text-black rounded-md w-[80%] lg:w-[400px]' placeholder='Enter email' />
                        <button className='rounded-md font-semibold py-3 w-[160px] md:w-[200px] text-black bg-primary-green-500 hover:bg-primary-green-200'>Send</button>
                    </div>
                    <p className="text-center">We care about the protection of your data. Read our <span className='text-primary-green-500 underline'>Privacy Policy.</span></p>

                </div>
            </div>
        </div>
    )
}

export default Newsletter
