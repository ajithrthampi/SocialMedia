import React from 'react'
import { BiDotsVerticalRounded } from "react-icons/bi";
import { MdCloudUpload } from "react-icons/md";
import { AiOutlineMessage } from "react-icons/ai";
import { AiFillLike } from "react-icons/ai";
import { BiShare } from "react-icons/bi";



const Post = () => {
    return (
        <>
            <div className='md:hidden px-3 h-auto pt-4 space-y-6' >
                <div className=' box-content h-auto  bg-[#2A2A2A] rounded-3xl px-4 py-3'>
                    <div className="container mx-auto grid grid-cols-4 xl:grid-cols-3 pt-6 gap-8">
                        <div className=' col-span-1 pl-'>
                            <img className='w-14 h-14 box-border border-2 bg-red-100 rounded-2xl object-cover ' src="https://images.pexels.com/photos/3586798/pexels-photo-3586798.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                        </div>
                        <div className='-ml-4 col-span-2 space-y-3' >
                            <div>
                                <p className='text-[#7e7e7e] text-sm '>@ajithrthampi</p>
                            </div>
                            <div className=''>
                                <h3 className='text-white text-lg font-semibold'>Ajith R Thampi</h3>
                            </div>
                        </div>
                        <div className=' col-span-1 flex-row space-y-3  '>
                            <div className='text-white'>
                                <BiDotsVerticalRounded className='ml-8' size={24} />
                            </div>
                            <div className=''>
                                <p className='text-center  md:text-sm text-xs text-[#FFFF1A]'>1hr ago</p>
                            </div>
                        </div>
                    </div>

                    {/* PARAGRAPG & IMAGE */}
                    <div className='pt-6 '>
                        <p className='text-justify text-white text-sm'>Lorem ipsum dolor sit amet,  elit.
                            Quod, eveniet optio explicabo architecto odit corporis.
                            Optio explicabo architecto odit corporis
                        </p>
                        {/* IMAGE  */}
                        <div className='pt-6 '>
                            <div className='box-border h- w-full '>
                                <img className='rounded-3xl h-[400px] w-full object-cover ' src="https://images.pexels.com/photos/14865516/pexels-photo-14865516.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                            </div>
                        </div>
                    </div>

                    {/* USER SECTION */}

                    <div className='grid grid-cols-3 space-x-5 pt-4 text-white px-2'>
                        <div className='flex space-x-8 col-span-1 py-3'>
                            <div><AiFillLike size={28} /></div>
                            <div><AiOutlineMessage size={28} /></div>
                        </div>
                        <div className='flex justify-center items col-span-2  items-center'><BiShare className='' size={28} /></div>
                    </div>
                </div>




                {/* SECOND POST */}

                <div className=' box-content h-auto  bg-[#2A2A2A] rounded-3xl px-4 py-3'>
                    <div className="container mx-auto grid grid-cols-4 xl:grid-cols-3 pt-6 gap-8">
                        <div className=' col-span-1 pl-'>
                            <img className='w-14 h-14 box-border border-2 bg-red-100 rounded-2xl object-cover ' src="https://images.pexels.com/photos/3586798/pexels-photo-3586798.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                        </div>
                        <div className='-ml-4 col-span-2 space-y-3' >
                            <div>
                                <p className='text-[#7e7e7e] text-sm '>@ajithrthampi</p>
                            </div>
                            <div className=''>
                                <h3 className='text-white text-lg font-semibold'>Ajith R Thampi</h3>
                            </div>
                        </div>
                        <div className=' col-span-1 flex-row space-y-3 '>
                            <div className='text-white'>
                                <BiDotsVerticalRounded className='ml-8' size={24} />
                            </div>
                            <div className=''>
                                <p className='text-center text-sm text-[#FFFF1A]'>1 hr ago</p>
                            </div>
                        </div>
                    </div>

                    {/* PARAGRAPG & IMAGE */}
                    <div className='pt-6 '>
                        <p className='text-justify text-white text-sm'>Lorem ipsum dolor sit amet,  elit.
                            Quod, eveniet optio explicabo architecto odit corporis.
                            Optio explicabo architecto odit corporis
                        </p>
                        {/* IMAGE  */}
                        <div className='pt-6 '>
                            <div className='box-border h- w-full '>
                                <img className='rounded-3xl h-[400px] w-full object-cover ' src="https://images.pexels.com/photos/14865516/pexels-photo-14865516.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                            </div>
                        </div>
                    </div>

                    {/* USER SECTION */}

                    <div className='grid grid-cols-3 space-x-5 pt-4 text-white px-2'>
                        <div className='flex space-x-8 col-span-1 py-3'>
                            <div><AiFillLike size={28} /></div>
                            <div><AiOutlineMessage size={28} /></div>
                        </div>
                        <div className='flex justify-center items col-span-2  items-center'><BiShare className='' size={28} /></div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Post