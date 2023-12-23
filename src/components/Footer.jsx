import React from 'react'
import {
    FaDribbbleSquare,
    FaFacebookSquare,
    FaGithubSquare,
    FaInstagram,
    FaTwitterSquare
} from 'react-icons/fa'

const Footer = () => {
    return (
        <div className='bg-black my-4 text-white w-full p-4'>
            <div className='mx-auto max-w-screen-lg grid lg:grid-cols-3'>
                <div className="text-center sm:text-left flex flex-col gap-4">
                    <h1 className='uppercase font-bold text-2xl text-primary-green-500'>React.</h1>
                    <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt magnam tempore cupiditate sint nesciunt ut consequatur dolore eius quo corporis odit iste quod, excepturi possimus quos, dolor tenetur quas dignissimos!</p>
                    <div className='w-[75%] my-3 flex justify-between mx-auto'>
                        <FaDribbbleSquare size={30} className='cursor-pointer hover:text-gray-400' />
                        <FaFacebookSquare size={30} className='cursor-pointer hover:text-gray-400' />
                        <FaGithubSquare size={30} className='cursor-pointer hover:text-gray-400' />
                        <FaInstagram size={30} className='cursor-pointer hover:text-gray-400' />
                        <FaTwitterSquare size={30} className='cursor-pointer hover:text-gray-400' />
                    </div>
                </div>
                <div className="col-span-2 grid md:grid-cols-4 grid-cols-2">
                    <div className='flex flex-col items-center mb-3'>
                        <h6 className="text-md text-gray-400 text-left">Solutions</h6>
                        <ul>
                            <li className='p-2 text-sm'>Analytics</li>
                            <li className='p-2 text-sm'>Marketing</li>
                            <li className='p-2 text-sm'>Commerce</li>
                            <li className='p-2 text-sm'>Insights</li>
                        </ul>
                    </div>
                    <div className='flex flex-col items-center mb-3'>
                        <h6 className="text-md text-gray-400 text-left">Support</h6>
                        <ul>
                            <li className='p-2 text-sm'>Pricing</li>
                            <li className='p-2 text-sm'>Documentation</li>
                            <li className='p-2 text-sm'>Guides</li>
                            <li className='p-2 text-sm'>API Status</li>
                        </ul>
                    </div>
                    <div className='flex flex-col items-center mb-3'>
                        <h6 className="text-md text-gray-400 text-left">Company</h6>
                        <ul>
                            <li className='p-2 text-sm'>About</li>
                            <li className='p-2 text-sm'>Blog</li>
                            <li className='p-2 text-sm'>Jobs</li>
                            <li className='p-2 text-sm'>Careers</li>
                            <li className='p-2 text-sm'>Press</li>
                        </ul>
                    </div>
                    <div className='flex flex-col items-center mb-3'>
                        <h6 className="text-md text-gray-400 text-left">Legal</h6>
                        <ul>
                            <li className='p-2 text-sm'>Claim</li>
                            <li className='p-2 text-sm'>Policy</li>
                            <li className='p-2 text-sm'>Terms</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
