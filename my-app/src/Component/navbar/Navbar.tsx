import React, { useState } from 'react'
import { AiOutlineUserAdd } from "react-icons/ai";
import { AiFillMessage } from "react-icons/ai";
import { HiHome } from "react-icons/hi";
import { AiOutlineMessage } from "react-icons/ai";
import { MdOutlineNotifications } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { Link } from 'react-router-dom';







const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = React.useState(false);
    return (
        <>
            {/* MOBILE_SCREEN */}
            <nav className="md:hidden  relative flex flex-wrap items-center justify-between px-2 py-4 bg-[#2A2A2A] mb-3 ">
                <div className="container px-4 mx-auto flex  items-center justify-between">
                    <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                        <a
                            className=" font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white cursor-pointer text-lg">
                            See Chat
                        </a>
                    </div>
                    <div className='flex space-x-7'>
                        <div className='text-white' >
                            <Link to="/profile">
                                <AiOutlineUserAdd size={25} />
                            </Link>
                        </div>
                        <div className='text-white'><AiFillMessage size={25} /></div>
                    </div>
                </div>
            </nav>

            {/* LARGE_SCREEN */}
            <nav className="hidden md:block relativ  sticky  flex-wrap items-center justify-between px-10 top-0 py-6 bg-[#1A1A1A] mb-3 ">
                <div className="container px- mx-auto  items-center justify-between grid grid-cols-3 gap-4">
                    <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start ">
                        <a
                            className=" font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white cursor-pointer text-lg">
                            See Chat
                        </a>
                    </div>
                    <div className='flex xl:space-x-20 xl:pl-10 md:space-x-12 md:pl- '>
                        <div className='text-white text-lg gap-2'><Link to="/home"> <HiHome size={28} /></Link></div>
                        <div className='text-white text-lg gap-2'><Link to="/"><AiOutlineMessage size={28} /></Link></div>
                        <div className='text-white text-lg gap-2'><Link to="/"><MdOutlineNotifications size={28} /></Link></div>
                        <div className='text-white text-lg gap-2 '><Link to="/profile"><CgProfile size={28} /></Link></div>
                    </div>
                    <div className='text-white text-end'>
                        <div>
                            <button className='bg-[#393838]  px-10 py-2 rounded-full'>Profile</button>
                            {/* <div className=''> <CgProfile /></div> */}
                        </div>
                    </div>
                </div>
            </nav>

        </>
    )
}

export default Navbar