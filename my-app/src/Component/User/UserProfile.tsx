import React, { useState } from 'react'
import Layout from '../layout/Layout'
import Navbar from '../navbar/Navbar'
import { FiSettings } from "react-icons/fi";
import { NavLink, Outlet } from 'react-router-dom';
import EditUserModal from '../user-modal/EditUserModal';




const UserProfile = () => {

    const [editModal, setEditModal] = useState(false)

    return (
        <>
            <Navbar />

            {/* MOBILE SCREEN */}

            <div className='md:hidden'>
                <div className='md:hidden sm:px-3  h-auto pt-6 space-y-6' >
                    <div className=' box-content h-auto  bg-[2A2A2A] rounded-3xl px-4 py-3'>
                        <div className=' grid grid-cols-3'>
                            <div>
                                <img className='w-20 h-20 box-border  bg-red-100 rounded-2xl object-cover ' src="https://images.pexels.com/photos/3748221/pexels-photo-3748221.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                            </div>
                            <div className='pl-6 text-white  text-center'>
                                <div className='text-lg'>480</div>
                                <div className='text-xs text-[#737373] font'>Followers</div>
                            </div>

                            <div className='pl-6 text-white text-center'>
                                <div className='text-lg'>300</div>
                                <div className='text-xs text-[#8b8282]'>Following</div>
                            </div>
                        </div>

                        {/* NAME */}
                        <div className=''>
                            <div className='text-white pt-6'>
                                <h1>Ajith R Thampi</h1>
                                <h3 className='text-sm text-[#737373] pt-1 py-3 '>@ajith</h3>
                            </div>

                            {/* BIO */}
                            <div className='text-white font-semibold'>Hello i am ReactJS Developer. Open to the new project.</div>

                            {/* EDIT PROFILE */}

                            <div className='py-5'>
                                <button type="button" className="mb-2  w-full inline-block px-6 py-2.5 bg-[#2A2A2A] font-bold
                          text-xs leading-normal uppercase rounded-lg shadow-md hover:shadow-lg focus:bg-[#FFFF1A] focus:text-black
                          focus:shadow-lg focus:outline-none focus:ring-0  transition duration-150 ease-in-out text-white"
                                    onClick={() => setEditModal(true)}
                                >
                                    Edit Profile
                                </button>
                                <div className="mt-3 text-xs border-b border-[#616161] py-4 text-[#747474]"></div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* POST */}
                <div className='container grid grid-cols-3 space-x-3 space-y-3 mx-auto'>
                    <div>
                        <img className=' w-full rounded   ' src="https://images.pexels.com/photos/2709388/pexels-photo-2709388.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt="" />
                    </div>
                    <div>
                        <img className='w-full rounded ' src="https://images.pexels.com/photos/5397723/pexels-photo-5397723.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt="" />
                    </div>
                    <div>
                        <img className='w-full rounded' src="https://images.pexels.com/photos/7176423/pexels-photo-7176423.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt="" />
                    </div>
                    <div>
                        <img className=' w-full rounded ' src="https://images.pexels.com/photos/3748221/pexels-photo-3748221.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt="" />
                    </div>
                    <div>
                        <img className=' w-full rounded ' src="https://images.pexels.com/photos/36717/amazing-animal-beautiful-beautifull.jpg?auto=compress&cs=tinysrgb&w=600"
                            alt="" />
                    </div>
                </div>
            </div>

            {/* Large Profile */}

            <div>
                <Layout>

                    <div className='w-5/6 px-3'>
                        <div className='max-h-screen overflow-y-scroll scrollbar-none'>
                            <div className='shadow-md rounded-xl    mb-5 bg-[#2A2A2A] text-white overflow-hidden '>

                                <div className='flex  lg:p-10 p-5 gap-12 lg:pl-40 pl-32'>
                                    <div className='  rounded-full  cursor-pointer'>
                                        <img className='rounded-full w-36 h-36  object-cover overflow-hidden' src="https://images.pexels.com/photos/4612113/pexels-photo-4612113.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                                    </div>
                                    <div>
                                        <div className='xl:flex gap-12   xl:space-y-0 space-y-5 text-lg'>
                                            <div>ajithrthampi</div>
                                            {/* <NavLink to={'edituser'}> */}
                                            <button className='text-black bg-[#ffffff] text-sm   font-semibold xl:px-7 px-5  py-2 rounded-xl'
                                                onClick={() => setEditModal(true)}
                                            >
                                                Edit Profile
                                            </button>
                                            {/* </NavLink> */}
                                            <FiSettings size={25} />
                                        </div>
                                        <div className='flex xl:gap-10 gap-4 mt-4 lg:text-md text-xs'>
                                            <div>40 Post</div>
                                            <div>480 followers</div>
                                            <div>478 following</div>
                                        </div>
                                        <div className='xl:mt-5 mt-3    '>
                                            <h1>Ajith R Thampi</h1>
                                            <h4 className='text-[#807c7cb1]'>Artist</h4>
                                        </div>
                                    </div>
                                </div>
                                <div className=' px-14 py-5 '>
                                    <div className="mt-3 text-xs border-b border-[#5b5858] py-1  text-[#002D74]"></div>
                                </div>



                                {/* Image Post */}

                                <div className='grid grid-cols-3 gap-3 px-5'>
                                    <div className="overflow-hidden h-64">
                                        <div className='relative group cursor-pointer'>
                                            <div className='relative h-64'>
                                                <div className='h-64  overflow-hidden'>
                                                    <img className='object-cover h-64 w-full' src="https://images.pexels.com/photos/1633525/pexels-photo-1633525.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                                                </div>
                                            </div>
                                            <div className='absolute top-0 opacity-0 group-hover:opacity-100 left-1/2
                                             -translate-x-1/2 w-full h-full bg-black-rgba flex text-white justify-center items-center
                                            '>Something</div>
                                        </div>
                                    </div>
                                    <div className="overflow-hidden h-64">
                                        <div className='relative group cursor-pointer'>
                                            <div className='relative h-64'>
                                                <div className='h-64  overflow-hidden'>
                                                    <img className='object-cover h-64 w-full' src="https://images.pexels.com/photos/1410235/pexels-photo-1410235.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                                                </div>
                                            </div>
                                            <div className='absolute top-0 opacity-0 group-hover:opacity-100 left-1/2
                                             -translate-x-1/2 w-full h-full bg-black-rgba flex text-white justify-center items-center
                                            '>Something</div>
                                        </div>
                                    </div>
                                    <div className="overflow-hidden h-64">
                                        <div className='relative group cursor-pointer'>
                                            <div className='relative h-64'>
                                                <div className='h-64  overflow-hidden'>
                                                    <img className='object-cover h-64 w-full' src="https://images.pexels.com/photos/10748639/pexels-photo-10748639.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                                                </div>
                                            </div>
                                            <div className='absolute top-0 opacity-0 group-hover:opacity-100 left-1/2
                                             -translate-x-1/2 w-full h-full bg-black-rgba flex text-white justify-center items-center
                                            '>Something</div>
                                        </div>
                                    </div>
                                    <div className="overflow-hidden h-64">
                                        <div className='relative group cursor-pointer'>
                                            <div className='relative h-64'>
                                                <div className='h-64  overflow-hidden'>
                                                    <img className='object-cover h-64 w-full' src="https://images.pexels.com/photos/2124699/pexels-photo-2124699.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                                                </div>
                                            </div>
                                            <div className='absolute top-0 opacity-0 group-hover:opacity-100 left-1/2
                                             -translate-x-1/2 w-full h-full bg-black-rgba flex text-white justify-center items-center
                                            '>Something</div>
                                        </div>
                                    </div>
                                  
                                </div>




                            </div>
                        </div>
                    </div>
                </Layout>
            </div >

            <EditUserModal onClose={() => setEditModal(false)} isVisible={editModal}>

            </EditUserModal>


        </>
    )
}

export default UserProfile