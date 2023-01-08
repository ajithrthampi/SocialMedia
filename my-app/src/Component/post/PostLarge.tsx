import React, { useState } from 'react'

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
import { Link } from 'react-router-dom';
import Sidebar from '../sidebar/Sidebar';

// import ClickOutHandler from 'react-clickout-handler'
// import ClickOutHandler from 'react-clickout-handler'


const PostLarge = () => {

    const [dropdown, setDropdown] = useState(false)
    
    const activeElement = 'flex gap-4 py-4 items-center bg-[#1E1E1E]  -mx-12 px-10  rounded-md hover:shadow-md hover:shadow-[#585858]';
    const nonActiveElement = 'flex gap-4 py-4 items-center hover:bg-[#1E1E1E] hover:opacity-70 -mx-4 px-4 my-2  rounded-md transition-all hover:scale-110  hover:shadow-md hover:shadow-[#585858]';

    return (
        <>
            <div className='hidden md:block  px-10 '>

                <div className='flex mt-4  mx-auto gap-6'>
                  <Sidebar />

                    {/* SSECOND GRID */}

                    <div className='w-2/4'>
                        <div className='shadow-md rounded-3xl  p-4 mb-5 bg-[#2A2A2A] text-white '>
                            <div className='flex gap-3 '>
                                <div>
                                    <div className='w-12 h-12 rounded-xl overflow-hidden mt-2'>
                                        <img className='' src="https://images.unsplash.com/photo-1557296387-5358ad7997bb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=457&q=80" alt="" />
                                    </div>
                                </div>

                                <textarea className='rounded-xl grow p-1 pl-5 mt-2 bg-[#111111] h-12 ' placeholder={'What on your mind!!!'} />

                            </div>
                            <div className='flex gap-5 items-center mt-5 '>
                                <div className=''>
                                    <button className='flex items-center gap-3 rounded-xl bg-[#1E1E1E] px-3 py-1 '>
                                        <FcStackOfPhotos />
                                        Photo</button>
                                </div>
                                <div className=''>
                                    <button className='flex items-center gap-3 rounded-xl bg-[#1E1E1E] px-3 py-1'>
                                        <FcVideoCall />
                                        Video</button>
                                </div>
                                <div className='grow text-right'>
                                    <button className='text-black bg-[#FFFF1A] px-6 py-1 rounded-xl'>Post</button>
                                </div>
                            </div>
                        </div>

                        {/* MAIN POST */}
                        <div className='shadow-md rounded-3xl  p-4 mb-5 bg-[#2A2A2A] text-white '>
                            <div />
                            <div className="flex">
                                <div>
                                    <div>
                                        <Link to='/profile'>
                                        <div className='w-12 h-12 rounded-full overflow-hidden cursor-pointer'>
                                            <img src="https://images.unsplash.com/photo-1557296387-5358ad7997bb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=457&q=80" alt="" />
                                        </div></Link>
                                       
                                    </div>
                                </div>
                                <div className='pl-3 grow'>
                                    
                                   <Link to="/profile"> <a className='text-sm font-semibold hover:underline cursor-pointer'>Ajith R Thampi </a> </Link>
                                    <p className='text-xs text-[#737070] '> <span className=' cursor-pointer hover:underline' > <Link to="/profile">@ajithrthampi</Link> </span> <span className='text-[#FFFF1A] pl-3 text-xs'>1 hr ago</span> </p>
                                </div>
                                <div> <BsThreeDotsVertical size={17}/> </div>
                            </div>
                            <div>
                                <p className='text-sm my-3 font- '>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio labore earum
                                    quasi! Nemo vero earum porro. Dolorum, accusamus quas
                                    et dolorem corrupti nulla sunt eos soluta ipsa, iure pariatur quidem!
                                </p>
                                <div className='rounded-xl overflow-hidden mt-5'>
                                    <img className='w-full object-cover max-h-[500px]' src="https://images.pexels.com/photos/161154/stained-glass-spiral-circle-pattern-161154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                                </div>
                            </div>
                            <div className='flex gap-8'>
                                <div className='mt-4 flex gap-2 items-center '>
                                    <button className='i'><AiOutlineHeart size={26} /></button>
                                    1
                                </div>
                                <div className='mt-4 flex gap-2 items-center '>
                                    <button className='i'><AiOutlineMessage size={26} /></button>
                                    11
                                </div>
                                <div className='mt-4 flex gap-2 items-center '>
                                    <button className='i'><TbBrandTelegram size={26} /></button>
                                </div>
                            </div>
                            <div className="mt- text-xs border-b border-[#5b5858] py-3 text-[#002D74]">
                            </div>
                            <div className='flex items-center'>
                                <div className='w-12 h-12 rounded-full overflow-hidden mt-5'>
                                    <img className='' src="https://images.unsplash.com/photo-1557296387-5358ad7997bb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=457&q=80" alt="" />
                                </div>
                                
                                <div className='grow rounded-xl mr-2 relative'>
                                    <textarea className='block w-full  rounded-xl overflow-hidden mt-7 pl-5 pt-2 bg bg-[#111111] ml-2 ' placeholder='Leave a comment' />
                                    <button className='absolute top-12 right-0 text-[#7c7575]'> <IoMdPhotos size={20}/></button>

                                    {/* <ClickOutHandler onClickOut={() => {}}>
                                        <div>
                                        dropdown menu
                                        </div>
                                    </ClickOutHandler> */}
                                </div>

                            </div>

                        </div>
                    </div>

                    {/* THIRD GRID */}
                    <div className='w-1/4'>
                        <div className='shadow-md rounded-3xl  p-4 mb-5 bg-[#2A2A2A] text-white  '>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PostLarge