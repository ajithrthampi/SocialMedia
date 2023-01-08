import React from 'react'
import { HiHome } from "react-icons/hi";
import { AiOutlineMessage } from "react-icons/ai";
import { MdOutlineNotifications } from "react-icons/md";
import { BiSearch } from "react-icons/bi";
import { BsPeople } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { FiLogOut } from "react-icons/fi";
import { FcStackOfPhotos } from "react-icons/fc";
import { FcVideoCall } from "react-icons/fc";
import { AiOutlineHeart } from "react-icons/ai";
import { TbBrandTelegram } from "react-icons/tb";
import { IoMdPhotos } from "react-icons/io";
import { BsThreeDotsVertical } from "react-icons/bs";
import { Link, Outlet } from 'react-router-dom';

const Sidebar = () => {

  const activeElement = 'flex gap-4 py-4 items-center bg-[#1E1E1E]  -mx-12 px-10  rounded-md hover:shadow-md hover:shadow-[#585858]';
  const nonActiveElement = 'flex gap-4 py-4 items-center hover:bg-[#1E1E1E] hover:opacity-70 -mx-4 px-4 my-2  rounded-md transition-all hover:scale-110  hover:shadow-md hover:shadow-[#585858]';
  return (
    <>
      
      <div className='w-1/4'>
                        <div className='shadow-md rounded-3xl   mb-5 bg-[#2A2A2A] text-white '>
                            <div className='px-10 text-lg pt-5 pb-7 '>
                                <a href="" className={activeElement}>
                                    <HiHome size={25} />
                                    Home
                                </a>
                                <a href="" className={nonActiveElement}>
                                    <BiSearch size={25} />
                                    Search
                                </a>
                                <a href="" className={nonActiveElement}>
                                    <AiOutlineMessage size={25} />
                                    Message
                                </a>
                                <a href="" className={nonActiveElement}>
                                    <MdOutlineNotifications size={25} />
                                    Notification
                                </a>
                                <a href="" className={nonActiveElement}>
                                    <BsPeople size={25} />
                                    Connection
                                </a>
                                <Link to="/profile">
                                <a href="" className={nonActiveElement}>
                                    <CgProfile size={25} />
                                    Profile
                                </a>
                                </Link>
                                <a href="" className={nonActiveElement}>
                                    <FiLogOut size={25} />
                                    Logout
                                </a>
                            </div>
                        </div>
                         <Outlet/>
                    </div>
                   
    </>
  )
}

export default Sidebar