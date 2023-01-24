import React from 'react'
import { Outlet } from 'react-router-dom'
import { IoMdClose } from "react-icons/io";
import { BsArrowLeft } from "react-icons/bs";
import { GoLocation } from "react-icons/go";
import Navbar from '../navbar/Navbar';

interface editmodal {
    isVisible: boolean
    onClose: () => void
    children: any
    error?: boolean;
}

const EditUserModal = ({ isVisible, onClose, children }: editmodal) => {

    if (!isVisible) return null
    return (
        <>
            <div className='fixed  inset-0 bg-black bg-opacity-25 backdrop-blur-sm 
         '>
                <div className='max-h-full   overflow-y-scroll scrollbar-none   flex justify-center items-center md:pt-10 pt-14    '>
                    <div className='md:w-[1000px] flex flex-col '>
                       
                        <div className='bg-[#191819]  rounded text-white py-7 '>
                        <div className='  md:pl-5 sm:pl-10 pl-16 md:pb-7 pb-6 md:pt-0 pt-40  '  onClick={() => onClose()}> <BsArrowLeft size={24} /> </div>
                        <div className="mt- text-xs border-b border-[#5b5858] py-  text-[#002D74]"></div>

                            {/* <div className='pl-10 ' onClick={() => onClose()}> <BsArrowLeft size={24} /> </div> */}
                            <div className=' px-20'>
                                <div className='flex items-center gap-6'>
                                    <div className='  rounded-full  cursor-pointer'>
                                        <img className='rounded-full md:w-36 md:h-36 w-20 h-20    object-cover overflow-hidden' src="https://images.pexels.com/photos/4612113/pexels-photo-4612113.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                                    </div>
                                    <div className=''>
                                        <div><h1>@ajithrthampi</h1></div>
                                        <div><h1 className='text-[#706b6bde]'>change profile image</h1></div>
                                    </div>
                                </div>
                                <div className="mt-8 text-xs border-b border-[#5b5858]   text-[#002D74]"></div>

                                <div className='pl-6 pt-4'>
                                    <div>
                                        <form action="" >
                                            <div className="grid md:grid-cols-2 gap-4">
                                                <input
                                                    className="p-2 mt-2 rounded-xl border bg-[#191819]"
                                                    type="text"
                                                    name="email"
                                                    placeholder="Full Name"
                                                // onChange={handleChange}
                                                />

                                                <input
                                                    className="p-2 mt-2 rounded-xl border bg-[#191819]"
                                                    type="text"
                                                    name="text"
                                                    placeholder="Username"
                                                // onChange={handleChange}
                                                />

                                                <input
                                                    className="p-2 mt-2 rounded-xl border bg-[#191819]"
                                                    type="text"
                                                    name="text"
                                                    placeholder="Website"
                                                // onChange={handleChange}
                                                />

                                                <input
                                                    className="p-2 mt-2 rounded-xl border  bg-[#191819]"
                                                    type="date"
                                                    name="date"
                                                    placeholder="Date of birth"
                                                // onChange={handleChange}
                                                />

                                                <input
                                                    className="p-2 mt-2 rounded-xl border bg-[#191819]"
                                                    type="email"
                                                    name="email"
                                                    placeholder="Email Address"
                                                // onChange={handleChange}
                                                />

                                                <input
                                                    className="p-2 mt-2 rounded-xl border bg-[#191819]"
                                                    type="text"
                                                    name="email"
                                                    placeholder="Location"
                                                // onChange={handleChange}
                                                />
                                            </div>
                                            <textarea className='rounded-xl w-full p-1 pl-5 mt-5 border bg-[#191819] h-24 ' placeholder={'What on your mind!!!'} />
                                        </form>
                                        <div className='flex justify-end gap-10 pt-10'>
                                            <button className='text-black bg-[#FFFF1A] text-sm font-semibold xl:px-10 px-7 lg:px-3  py-2 rounded-xl'>Save</button>
                                            <button className='text-black bg-white text-sm font-semibold xl:px-10  lg:px-3 px-7 py-2 rounded-xl' onClick={() => onClose()}>Cancel</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default EditUserModal