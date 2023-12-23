import React from 'react'

const Cards = () => {
    return (
        <div className='bg-white py-[10rem] text-black w-full '>
            <div className="max-w-screen-lg grid grid-cols-1 lg:grid-cols-3 mx-auto gap-12">
                <div className="w-[80%] lg:w-full mx-auto flex flex-col shadow-xl justify-center bg-gray-200 items-center gap-4 p-5 hover:duration-300 hover:scale-105">
                    <div className='bg-[url("./assets/story-1.jpg")] h-20 w-20 mt-[-3rem]'></div>
                    <h2 className='text-xl font-bold'>Single User</h2>
                    <h1 className='text-2xl font-bold'>Single User</h1>
                    <div className="flex flex-col">
                        <p className='p-2 font-normal relative after:absolute after:border after:bottom-0 after:left-0 after:bg-gray-800 after:w-full'>500 GB storage</p>
                        <p className='p-2 font-normal relative after:absolute after:border after:bottom-0 after:left-0 after:bg-gray-800 after:w-full'>1 Granted User</p>
                        <p className='p-2 font-normal relative after:absolute after:border after:bottom-0 after:left-0 after:bg-gray-800 after:w-full'>Send up to 2 GB</p>
                    </div>
                    <button className='mt-5 font-semibold rounded-md text-primary-green-500 bg-black hover:bg-gray-600 w-[160px] md:w-[200px] py-3 '>Get Started</button>
                </div>
                <div className="w-[80%] lg:w-full mx-auto flex flex-col shadow-xl justify-center items-center gap-4 p-5 hover:duration-300 hover:scale-105">
                    <div className='bg-[url("./assets/story-2.jpg")] h-20 w-20 mt-[-3rem]'></div>
                    <h2 className='text-xl font-bold'>Double User</h2>
                    <h1 className='text-2xl font-bold'>Double User</h1>
                    <div className="flex flex-col">
                        <p className='p-2 font-normal relative after:absolute after:border after:bottom-0 after:left-0 after:bg-gray-400 after:w-full'>500 GB storage</p>
                        <p className='p-2 font-normal relative after:absolute after:border after:bottom-0 after:left-0 after:bg-gray-400 after:w-full'>1 Granted User</p>
                        <p className='p-2 font-normal relative after:absolute after:border after:bottom-0 after:left-0 after:bg-gray-400 after:w-full'>Send up to 2 GB</p>
                    </div>
                    <button className='mt-5 font-semibold rounded-md text-black bg-primary-green-500 hover:bg-primary-green-200 w-[160px] md:w-[200px] py-3 '>Get Started</button>
                </div>
                <div className="w-[80%] lg:w-full mx-auto flex flex-col shadow-xl justify-center items-center gap-4 p-5 hover:duration-300 hover:scale-105">
                    <div className='bg-[url("./assets/story-3.jpg")] h-20 w-20 mt-[-3rem]'></div>
                    <h2 className='text-xl font-bold'>Multi User</h2>
                    <h1 className='text-2xl font-bold'>Multi User</h1>
                    <div className="flex flex-col">
                        <p className='p-2 font-normal relative after:absolute after:border after:bottom-0 after:left-0 after:bg-gray-400 after:w-full'>500 GB storage</p>
                        <p className='p-2 font-normal relative after:absolute after:border after:bottom-0 after:left-0 after:bg-gray-400 after:w-full'>1 Granted User</p>
                        <p className='p-2 font-normal relative after:absolute after:border after:bottom-0 after:left-0 after:bg-gray-400 after:w-full'>Send up to 2 GB</p>
                    </div>
                    <button className='mt-5 font-semibold rounded-md text-black bg-primary-green-500 hover:bg-primary-green-200 w-[160px] md:w-[200px] py-3 '>Get Started</button>
                </div>
            </div>
        </div>
    )
}

export default Cards
