import React from 'react'

const Analytics = () => {
    return (
        <div className='bg-white text-black w-full flex justify-center flex-col items-center p-5'>
            <div className="max-w-screen-lg mx-auto grid md:grid-cols-2 grid-cols-1 p-4 gap-6 md:gap-8">
                <div className='bg-[url("./assets/coffee-magazine-2.jpg")] w-[80%] md:w-full mx-auto object-cover sm:h-[300px] h-[200px] bg-no-repeat bg-cover bg-center'></div>
                <div className='flex flex-col w-full text-center sm:text-left'>
                    <p className='uppercase text-lg text-primary-green-500 font-bold'>data analytics dashboard</p>
                    <h1 className='font-bold text-2xl'>Manage Data Analytics Centrally</h1>
                    <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, nobis voluptatum doloremque vel deleniti ducimus aut, hic esse ut, dolorem totam iste ipsam illum! Aliquam quae rem iusto aperiam quis.</p>
                </div>
            </div>
            <button className='mt-5 font-semibold rounded-md bg-black text-primary-green-500 hover:bg-gray-700 w-[160px] md:w-[200px] py-3 '>Get Started</button>

        </div>
    )
}

export default Analytics
