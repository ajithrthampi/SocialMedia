import React from 'react'
import { BsArrowLeft } from 'react-icons/bs'

const MessageMobile = () => {
    return (
        <>
            <div className='md:hidden'>
                <div className='w-full text-white p-2 bg-[#111111] flex  items-center gap-5 '>
                    <BsArrowLeft size={25} />
                    <div className='flex gap-2'>
                        <div>
                            <img src="https://images.unsplash.com/photo-1549078642-b2ba4bda0cdb?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144" alt="My profile"
                                className="w-8 h-8 rounded-full order-1" />
                        </div>
                        <div>
                            <div className='text-sm font-semibold'>Ajith R Thampi</div>
                            <div className='text-xs'>Active now</div>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col gap-7 pt-2'>
                    <div className="chat-message">
                        <div className="flex items-end">
                            <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start">
                                <div><span className="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-gray-300 text-gray-600">Can be verified on any platform using docker</span></div>
                            </div>
                            <img src="https://images.unsplash.com/photo-1549078642-b2ba4bda0cdb?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144" alt="My profile"
                                className="w-8 h-8 rounded-full order-1" />
                        </div>
                    </div>

                    <div className="chat-message">
                        <div className="flex items-end justify-end">
                            <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-1 items-end">
                                <div><span className="px-4 py-2 rounded-lg inline-block rounded-br-none bg-blue-600 text-white ">Your error message says permission denied, npm global installs must be given root privileges.</span></div>
                            </div>
                            <img src="https://images.unsplash.com/photo-1590031905470-a1a1feacbb0b?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144" alt="My profile"
                                className="w-6 h-6 rounded-full order-2" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MessageMobile