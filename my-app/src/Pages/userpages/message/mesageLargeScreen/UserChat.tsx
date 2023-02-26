import React,{useState, useEffect} from 'react'
import moment from 'moment';
import { useNavigate } from 'react-router-dom';
import "./userChat.css"
import axiosinstance from '../../../../axios/axiosinstance';

interface UserChat {
    message: any
    own: any
    pic:any
}

const Userchat = ({ message, own, pic }: UserChat) => {
    
    const [profilepic, setProfilePic] = useState<any>()
    const navigate = useNavigate() 

    const Id = message.senderId
    // console.log("idconst Id = message.senderId",Id);
    
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
    }, [message, own, pic ])
    




    return (
        <>
            {/* <div className={own ? "message own": "message"}>
                <div id="messages"
                    className=" flex h-[501px] max-h-[500px] overflow-y-scroll  scrollbar-none flex-col space-y-4 p-3 scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch">

                    <div className="chat-message">
                        <div className="flex items-end">
                            <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start">
                                <div className='flex flex-col'>
                                    <span className="px-4 font-semibold py-2 rounded-lg inline-block rounded-bl-none bg-gray-300 text-gray-600">
                                        {message.text}
                                    </span>


                                </div>

                            </div>

                            <img src="https://images.unsplash.com/photo-1549078642-b2ba4bda0cdb?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144" alt="My profile"
                                className="w-8 h-8 rounded-full order-1" />
                        </div>
                        <div className='text-xs pl-10'>{moment(message.createdAt).fromNow()}</div>
                    </div>

                    <div className="chat-message">
                        <div className="flex items-end justify-end">
                            <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-1 items-end">
                                <div><span className="px-4 py-2 rounded-lg inline-block rounded-br-none bg-blue-600 text-white ">Your error message says permission denied, npm global installs must be given root privileges dffgnndgegee rgergn egr emnr geng .</span></div>
                            </div>
                            <img src="https://images.unsplash.com/photo-1590031905470-a1a1feacbb0b?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144" alt="My profile"
                                className="w-6 h-6 rounded-full order-2" />
                        </div>
                    </div>

                </div>
            </div> */}
            {/* 
            <div className={own ? "message own" : "message"}>
                <div className="messageTop">
                    <img
                        className="messageImg  "
                        src="https://images.pexels.com/photos/3686769/pexels-photo-3686769.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                        alt=""
                    />
                    <p className="messageText">{message.text}</p>
                </div>
                <div className="messageBottom">{moment(message.createdAt).fromNow()}</div>
            </div> */}


            <div className=''>
                <div className="flex flex-col h-full  mb-4">
                    <div className="flex flex-col h-full">
                        <div className="grid grid-cols-12 gap-y-2">

                            {own ? <div className="col-start-6 col-end-13 p-3 rounded-lg">
                                <div className="flex items-center justify-start flex-row-reverse">
                                    <div
                                        className="flex items-center justify-center h-10 w-10 rounded-full  flex-shrink-0"
                                    >
                                        {pic ? <img className='rounded-full w-10 h-10 object-cover' src={`/images/${pic}`} />
                                        
                                        :<img className='rounded-full' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQA0BrKaI0cwXl3-wpk6Fu2gMbrP1LKk6waAlhKhrTzTobcVlka34MsNf4Yp3k1tG4ufTY&usqp=CAU' />
                                        }
                                    </div>
                                    <div
                                        className=" mr-3 text-sm bg-[#FFFF1A] py-2 px-4 shadow rounded-xl"
                                    >
                                        <div className='text-gray-600 font-semibold'>{message.text}</div>

                                    </div>

                                </div>
                                <div className='w-full justify-items-end'>
                                    <p className='text-xs  text-gray-6  00 text-right  w-full'>{moment(message.createdAt).fromNow()}</p>
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
                                            className=" ml-3 text-sm bg-[#FFFF1A] py-2 px-4 shadow rounded-xl"
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

        </>
    )
}

export default Userchat