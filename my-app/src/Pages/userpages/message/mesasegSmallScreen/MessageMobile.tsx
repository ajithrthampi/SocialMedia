import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { BsArrowLeft } from 'react-icons/bs'
import axiosinstance from '../../../../axios/axiosinstance';
import moment from 'moment';

interface modal {

    message: any
    own: any
    pic: any
}

const MessageMobile = ({ message, own, pic }: modal) => {

    const [profilepic, setProfilePic] = useState<any>()
    const navigate = useNavigate()

    useEffect(() => {
        try {
            if (!own) {
                axiosinstance.get("/chatusers/" + Id, {
                    headers: {
                        "x-access-token": localStorage.getItem("token"),
                    },
                }).then((response) => {
                    setProfilePic(response.data.Images)
                })

            }
        } catch (err) {
            navigate('/error')

        }
    }, [message, own, pic])
    console.log("Message, own ,pic", message, own, pic);


    const Id = message.senderId

    return (
        <>
            <div className='md:hidden '>

                <div className=''>
                    <div className="flex flex-col h-full  ">
                        <div className="flex flex-col h-full">
                            <div className="grid grid-cols-12 gap-y-2">

                                {own ? <div className="col-start-6 col-end-13 p-3 rounded-lg">
                                    <div className="flex items-center justify-start flex-row-reverse">
                                        <div
                                            className="flex items-center justify-center h-10 w-10 rounded-full  flex-shrink-0"
                                        >
                                            {pic ? <img className='rounded-full w-10 h-10 object-cover' src={`/images/${pic}`} />

                                                : <img className='rounded-full' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQA0BrKaI0cwXl3-wpk6Fu2gMbrP1LKk6waAlhKhrTzTobcVlka34MsNf4Yp3k1tG4ufTY&usqp=CAU' />
                                            }
                                        </div>
                                        <div
                                            className=" mr-3 text-sm bg-[#FFFF1A] py-1 px-4 shadow rounded-xl"
                                        >
                                            <div className='text-gray-600 font-semibold'>{message.text}</div>

                                        </div>

                                    </div>
                                    <div className='w-full justify-items-end'>
                                        <p className='text-xs  text-gray-6  00 text-right text-white w-full'>{moment(message.createdAt).fromNow()}</p>
                                    </div>
                                </div>
                                    :
                                    <div className="col-start-1 col-end-8 p-3 rounded-lg">
                                        <div className="flex flex-row items-center">
                                            <div
                                                className="flex items-center justify-center h-10 w-10 rounded-full  flex-shrink-0"
                                            >
                                                {profilepic ? <img className='rounded-full w-10 h-10 object-cover' src={`/images/${profilepic}`} />
                                                    :
                                                    <img className='rounded-full w-10 h-10' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQA0BrKaI0cwXl3-wpk6Fu2gMbrP1LKk6waAlhKhrTzTobcVlka34MsNf4Yp3k1tG4ufTY&usqp=CAU' />
                                                }
                                            </div>
                                            <div
                                                className=" ml-3 text-sm bg-[#FFFF1A] py-1 px-4 shadow rounded-xl"
                                            >
                                                <div className='text-gray-600 font-semibold'>{message.text}</div>
                                            </div>
                                        </div>
                                        <div className='w-full '>
                                            <p className='text-xs  text-gray-600 w-full'>{moment(message.createdAt).fromNow()}</p>
                                        </div>
                                    </div>
                                }
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default MessageMobile