import React from 'react'
import Navbar from '../../Component/navbar/Navbar'

const Profile = () => {
    return (
        <>
          <Navbar  />
           <div className='md:hidden'>
            <div className='md:hidden px-3 h-auto pt-6 space-y-6' >
                <div className=' box-content h-auto  bg-[2A2A2A] rounded-3xl px-4 py-3'>
                    <div className=' grid grid-cols-3'>
                        <div>
                            <img className='w-20 h-20 box-border  bg-red-100 rounded-2xl object-cover ' src="https://images.pexels.com/photos/3748221/pexels-photo-3748221.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                        </div>
                        <div className='pl-6 text-white'>
                            <div className='text-lg'>480</div>
                            <div className='text-xs text-[#737373] font'>Followers</div>
                        </div>

                        <div className='pl-6 text-white'>
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
                          focus:shadow-lg focus:outline-none focus:ring-0  transition duration-150 ease-in-out text-white">
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
                <h1 className='text-white'>Profile</h1>
            </div>

        </>
    )
}

export default Profile