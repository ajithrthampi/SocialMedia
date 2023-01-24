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

import { AiFillStar } from "react-icons/ai";
import PostModal from '../user-modal/PostModal';






const PostFormCard = () => {

    const [postModal, setPostModal] = useState(false)




    return (
        <>

            <div className='lg:w-3/5 w-1/2 sm:w-full '>
                <div className='max-h-screen overflow-y-scroll scrollbar-none'>
                    <div className='shadow-md rounded-3xl  p-4 mb-5 bg-[#2A2A2A] text-white   '>
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
                                <button className='text-black bg-[#FFFF1A] px-6 py-1 rounded-xl'
                                    onClick={() => setPostModal(true)}
                                >
                                    Post
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* MAIN POST */}

                    <div className='shadow-md rounded-3xl  p-4 mb-5 bg-[#2A2A2A] text-white  '>

                        <div className="flex">
                            <div>
                                <div>
                                    <Link to='/profile'>
                                        <div className='w-12 h-12 rounded-full overflow-hidden cursor-pointer'>
                                            <img src="https://images.unsplash.com/photo-1557296387-5358ad7997bb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=457&q=80" alt="" />
                                        </div>
                                    </Link>

                                </div>
                            </div>
                            <div className='pl-3 grow'>

                                <Link to="/profile"> <a className='text-sm font-semibold hover:underline cursor-pointer'>Ajith R Thampi </a> </Link>
                                <p className='text-xs text-[#737070] '> <span className=' cursor-pointer hover:underline' > <Link to="/profile">@ajithrthampi</Link> </span> <span className='text-[#FFFF1A] pl-3 text-xs'>1 hr ago</span> </p>
                            </div>
                            <div> <BsThreeDotsVertical size={17} /> </div>
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
                                <button className='absolute top-12 right-0 text-[#7c7575]'> <IoMdPhotos size={20} /></button>

                                {/* <ClickOutHandler onClickOut={() => {}}>
                                        <div>
                                        dropdown menu
                                        </div>
                                    </ClickOutHandler> */}
                            </div>

                        </div>



                    </div>
                    {/* <div className='pt-10 bg-red-500'>hello</div> */}


                    <div className='shadow-md rounded-3xl  p-4 mb-5 bg-[#2A2A2A] text-white '>
                        <div className="flex">
                            <div>
                                <div>
                                    <Link to='/profile'>
                                        <div className='w-12 h-12 rounded-full overflow-hidden cursor-pointer'>
                                            <img src="https://images.unsplash.com/photo-1557296387-5358ad7997bb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=457&q=80" alt="" />
                                        </div>
                                    </Link>

                                </div>
                            </div>
                            <div className='pl-3 grow'>

                                <Link to="/profile"> <a className='text-sm font-semibold hover:underline cursor-pointer'>Ajith R Thampi </a> </Link>
                                <p className='text-xs text-[#737070] '> <span className=' cursor-pointer hover:underline' > <Link to="/profile">@ajithrthampi</Link> </span> <span className='text-[#FFFF1A] pl-3 text-xs'>1 hr ago</span> </p>
                            </div>
                            <div> <BsThreeDotsVertical size={17} /> </div>
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
                                <button className='absolute top-12 right-0 text-[#7c7575]'> <IoMdPhotos size={20} /></button>

                                {/* <ClickOutHandler onClickOut={() => {}}>
                                        <div>
                                        dropdown menu
                                        </div>
                                    </ClickOutHandler> */}
                            </div>

                        </div>

                    </div>
                </div>
            </div>

            <div className='lg:w-1/4 w-2/5 hidden lg:block ' >
                <div className='shadow-md rounded-3xl p  p- mb-5 bg-[#2A2A2A] text-white overflow-hidden'>
                    <div className=''>
                        <div className='flex flex-col justify-center items-center  pt-3'>
                            <div className=' xl:w-24 xl:h-24 w-16  h-16 rounded-3xl  borde overflow-hidden cursor-pointer'>
                                <img className='object-cover' src="https://images.pexels.com/photos/5397723/pexels-photo-5397723.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                            </div>
                            {/* <div> */}

                            <div className='absolute flex 2xl:gap-28 xl:gap-28 lg:gap-14  justify-center items-center pt-1 top-48 text-md -mt-7'>
                                <div className='flex flex-col justify-center items-center '>
                                    <p className='lg:text-xs xl:text-lg'>439</p>
                                    <h1 className='text-sm text-[#a7a7a7]'>Followers</h1>

                                </div>

                                <div className='flex flex-col justify-center items-center '>
                                    <p className='lg:text-xs xl:text-lg'>389</p>
                                    <h1 className='text-sm text-[#a7a7a7]'>Following</h1>

                                </div>
                            </div>
                            {/* </div> */}
                            <div className='mt-10 flex flex-col justify-center items-center'>
                                <div className=''>Ajith R Thampi</div>
                                <div className='text-sm font-medium text-[#9d9797]'>@ajithrthampi</div>
                                <div className='pt-5 text-sm text-center px-3 '>
                                    <div className='flex space-x-2'>
                                        <span className='text-yellow-500 text-3xl '>*</span>
                                        <div >

                                            Hello I am UI/UX fgfffggg  dddddd efwfw ew we  wee e
                                        </div>

                                        <span className='text-yellow-500 text-3xl '>*</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-3 text-xs border-b border-[#5b5858] py-3 text-[#002D74]"></div>
                        <div className='flex justify-center items-center mt-5 px-5 '>
                            <button className='text-white bg-[#4b4b4b] w-full  py-2 rounded-xl'><Link to="/profile">My Profile</Link> </button>
                        </div>
                    </div>
                    <div className="mt- text-xs border-b border-[#2b2a2a] py-3 text-[#002D74]">
                    </div>
                </div>

                {/* THIRD GRID SECOND DIV */}

                <div>
                    <div className='shadow-md rounded-3xl p  p- mb-5 bg-[#5e5e5e40]   text-white overflow-hidden'>
                        <div className='p-3 pl-6'>
                            <h1 className='text-sm font-semibold'>Suggestion for you</h1>
                        </div>
                        <div className='max-h-[210px] overflow-y-scroll scrollbar-none'>
                            <div className='px-2'>
                                <div className='shadow-md rounded-3xl px- mb-3  bg-[#1a1a1a77] text-white overflow-hidden'>

                                    <div className='flex gap-2 p-2 items-center'>
                                        <div className='w-12 h-12 rounded-full overflow-hidden cursor-pointer'>
                                            <img src="https://images.pexels.com/photos/4612113/pexels-photo-4612113.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                                        </div>
                                        <div>
                                            <div>
                                                <h1 className='text-xs font-semibold'>Ajith R Thampi</h1>
                                                <h3 className='text-xs text-[#bfbfbf66]'>Artist</h3>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='px-2 pt-2'>
                                        <div className='shadow-md rounded-3xl px-3  mb-3 bg-[#1a1a1ad5] text-white overflow-hidden p-2 py-3'>
                                            <div className='flex justify-evenly '>
                                                <button className='text-black bg-[#ffffff] text-sm font-semibold xl:px-7 lg:px-5  py-2 rounded-xl'>Remove</button>
                                                <button className='text-black bg-[#FFFF1A] text-sm font-semibold xl:px-7  lg:px-3  py-2 rounded-xl'>Follow</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Secnd */}
                            <div className='px-2'>
                                <div className='shadow-md rounded-3xl px- mb-3  bg-[#1a1a1a77] text-white overflow-hidden'>

                                    <div className='flex gap-2 p-2 items-center'>
                                        <div className='w-12 h-12 rounded-full overflow-hidden cursor-pointer'>
                                            <img src="https://images.pexels.com/photos/4612113/pexels-photo-4612113.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                                        </div>
                                        <div>
                                            <div>
                                                <h1 className='text-xs font-semibold'>Ajith R Thampi</h1>
                                                <h3 className='text-xs text-[#bfbfbf66]'>Artist</h3>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='px-2 pt-2'>
                                        <div className='shadow-md rounded-3xl px-3  mb-3 bg-[#1a1a1ad5] text-white overflow-hidden p-2 py-3'>
                                            <div className='flex justify-evenly '>
                                                <button className='text-black bg-[#ffffff] text-sm font-semibold xl:px-7 lg:px-5  py-2 rounded-xl'>Remove</button>
                                                <button className='text-black bg-[#FFFF1A] text-sm font-semibold xl:px-7  lg:px-3  py-2 rounded-xl'>Follow</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            {/* Third */}
                            <div className='px-2'>
                                <div className='shadow-md rounded-3xl px- mb-3  bg-[#1a1a1a77] text-white overflow-hidden'>

                                    <div className='flex gap-2 p-2 items-center'>
                                        <div className='w-12 h-12 rounded-full overflow-hidden cursor-pointer'>
                                            <img src="https://images.pexels.com/photos/4612113/pexels-photo-4612113.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                                        </div>
                                        <div>
                                            <div>
                                                <h1 className='text-xs font-semibold'>Ajith R Thampi</h1>
                                                <h3 className='text-xs text-[#bfbfbf66]'>Artist</h3>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='px-2 pt-2'>
                                        <div className='shadow-md rounded-3xl px-3  mb-3 bg-[#1a1a1ad5] text-white overflow-hidden p-2 py-3'>
                                            <div className='flex justify-evenly '>
                                                <button className='text-black bg-[#ffffff] text-sm font-semibold xl:px-7 lg:px-5  py-2 rounded-xl'>Remove</button>
                                                <button className='text-black bg-[#FFFF1A] text-sm font-semibold xl:px-7  lg:px-3  py-2 rounded-xl'>Follow</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* S */}
                    </div>
                </div>
            </div>

            <PostModal onClose={() => setPostModal(false)} isVisible={postModal} >
               
            </PostModal>



        </>
    )
}

export default PostFormCard