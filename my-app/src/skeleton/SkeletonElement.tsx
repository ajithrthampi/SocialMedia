import React, { Fragment } from 'react'
import { BsChat } from 'react-icons/bs'
import { IoMdHeart } from 'react-icons/io'

const SkeletonElement = () => {
    return (
        <>

            <div className='shadow-md rounded-3xl  p-4 mb-5 bg-[#beb7b7] text-white  '>
                <div className="flex ">
                    <div>
                        <div>
                            <div >
                                <div className='w-10 h-10 rounded-full overflow-hidden cursor-pointer bg-gray-200'>


                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='pl-3 grow'>

                        {/* <div > <a className='text-sm font-semibold hover:underline cursor-pointer'>ajith </a> </div>
                        <p className='text-xs text-[#737070] '> <span className=' cursor-pointer hover:underline' > <div >ajith</div> </span>
                            <span className='text-[#FFFF1A] pl-3 text-xs'>
                                1 hr
                            </span>
                        </p> */}

                        <div className='bg-gray-500 w-full h-10 '></div>

                    </div>
                    <div>
                       

                        <div></div>
                    </div>

                </div>
                <div>
                    <p className='text-sm my-3 font- '>
                       
                        dfgdfgdfgdgfdsbd
                    </p>
                    <div className='rounded-xl overflow-hidden mt-5'>
                        {/* <img className='w-full object-cover max-h-[400px]' src="" alt="" /> */}
                        <div className='w-full '></div>
                    </div>
                </div>
                <div className='flex gap-8'>
                    <div className='mt-4 flex gap-2 items-center '>


                        <button className='i' ><IoMdHeart size={26} /></button>



                        <h1 className='font-bold'>  likes </h1>
                    </div>
                    <div className='mt-4 flex gap-2 items-center' >
                        <button className='i'><BsChat size={26} /></button>
                        123
                    </div>
                    {/* <div className='mt-4 flex gap-2 items-center '>
                                    <button className='i'><TbBrandTelegram size={26} /></button>
                                </div> */}
                </div>

                <div className="mt- text-xs border-b border-[#5b5858] py-3 text-[#002D74]"></div>

            </div>

        </>
    )
}

export default SkeletonElement