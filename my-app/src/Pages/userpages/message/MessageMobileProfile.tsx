import React from 'react'
import { BsArrowLeft } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'

const MessageMobileProfile = () => {
    const navigate = useNavigate()

    const handleCLick = () => {
        navigate("/messageee")
    }

    return (
        <>
            <div className='md:hidden'>
                <div className='w-full text-white p-2 bg-[#111111] flex  items-center gap-5 h-14'>
                    <BsArrowLeft size={25} />
                    <div className='flex gap-2 justify-center '>
                        <div>
                            <img src="https://images.unsplash.com/photo-1549078642-b2ba4bda0cdb?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144" alt="My profile"
                                className="w-8 h-8 rounded-full order-1" />
                        </div>
                        <div>
                            <div className='text-sm font-semibold'>Ajith R Thampi</div>

                        </div>
                    </div>
                </div>
                {/* Main Page  */}

                <div className='text-white p-2'>Messages</div>

                <div className='flex gap-5 text-white p-2' onClick={handleCLick}>
                    <div className='w-12 h-12  rounded-full overflow-hidden cursor-pointer'>
                        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQA0BrKaI0cwXl3-wpk6Fu2gMbrP1LKk6waAlhKhrTzTobcVlka34MsNf4Yp3k1tG4ufTY&usqp=CAU' alt="profilepic" />
                    </div>
                    <div className=''>
                        <div className='text-lg'>Ajay R Thampi</div>
                        <div className='text-sm'>Active now</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MessageMobileProfile