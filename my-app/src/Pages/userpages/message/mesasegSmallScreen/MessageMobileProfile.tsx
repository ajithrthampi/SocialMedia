import React, { useState, useEffect, useContext, useRef } from 'react'
import { BsArrowLeft } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'
// import { Socket } from 'socket.io-client'
import axiosinstance from '../../../../axios/axiosinstance'
import { UserContext } from '../../../context/Context'
import MessageMobile from './MessageMobile'
import MessageMobileCategory from './MessageMobileCategory'
import { io } from "socket.io-client"
import jwtDecode from 'jwt-decode'
import { useSelector } from 'react-redux'
import postsImages from '../../../../services/imageApi'
import MobileMessageCategorySkeleton from '../../../../skeleton/MobileMessageCategorySkeleton'
import { view_Profile_Details } from '../../../../services/UserApi'

interface Socket_io {
    socket: any
}

const MessageMobileProfile = ({ socket }: Socket_io) => {

    const [messageModal, setMessageModal] = useState<boolean>(false)
    const [modalMess, setModalMess] = useState<boolean>(false)
    const { user } = useContext(UserContext)
    const [currentChat, setCurrentChat] = useState<any>()

    const [arrivalMessage, setArrivalMessage] = useState<any>()
    const [conversations, setConversation] = useState<any>()
    const [messages, setMessages] = useState<any>()
    const [userIdData, setUserIdData] = useState<any>()
    const [state, setState] = useState<boolean>()
    const [newMessage, setNewMessage] = useState<any>()
    const [profileDetails, setProfileDetails] = useState<any>()
    const scrollRef = useRef<any>()

    const chatUserPicture = useSelector((state: any) => state.userDetails.value.chatProfilePic)

    // console.log("6565656565665656565656566565656656565656",chatUserPicture);

    // SCROLL TO RECENT CHAT

    useEffect(() => {
        scrollRef.current?.scrollIntoView({ behavior: "smooth" })

    }, [messages])

    if (user) {
        var userId = user?.id
    }

    useEffect(() => {
        try {
            const data = localStorage.getItem('token')
            if (data != null) {
                const userData: any = jwtDecode(data)
                const userId = userData?.id
                setUserIdData(userId)
                setState(true)
            }
        } catch (error) {
            console.log("user id rreor", error);
        }

    }, [state])

    useEffect(() => { // socket? = io("ws://localhost:8000")
        socket?.on("getMessage", (data: any) => {
            setArrivalMessage({ senderId: data.senderId, text: data.text, createdAt: Date.now() })
        })
    }, [messages])

    //CURRENT CHAT

    useEffect(() => {
        arrivalMessage && currentChat?.members.includes(arrivalMessage.senderId) && setMessages((prev: any) => [
            ...prev,
            arrivalMessage
        ])
    }, [arrivalMessage, currentChat])

    //GET CONVERSATION

    useEffect(() => {
        try {
            axiosinstance.get("/conversation/" + userId, {
                headers: {
                    "x-access-token": localStorage.getItem("token"),
                },
            }).then((res) => {

                setConversation(res.data)
            })
        } catch (error) {
            console.log("Error", error);
        }
    }, [user, state])

    const navigate = useNavigate()

    const handleCLick = () => {
        // navigate("/messageee")
        setMessageModal(true)
    }
    console.log("conversations..", conversations);

    useEffect(() => {
        try {
            axiosinstance.get("/message/" + currentChat?._id, {
                headers: {
                    "x-access-token": localStorage.getItem("token"),
                },
            }).then((response) => {
                // console.log("Messaegs..////", response?.data);

                setMessages(response.data)
            })
        } catch (err) {
            console.log(err);

        }
    }, [currentChat])

    //Submit data

    const handleSubmit = (e: any) => {
        e.preventDefault()
        const message = {
            senderId: userId,
            text: newMessage,
            conversationId: currentChat?._id
        }
        const receiverId = currentChat.members.find((member: any) => member !== userId)
        socket?.emit("sendMessage", {
            senderId: user?.id,
            receiverId,
            text: newMessage
        })
        try {
            if (newMessage) {
                axiosinstance.post("/message", message, {
                    headers: {
                        "x-access-token": localStorage.getItem("token"),
                    },
                }).then((response) => {
                    setMessages([...messages, response.data])
                    setNewMessage('')
                    console.log("chat,..", response);

                })
            }
        } catch (error) {
            console.log("chat submit ", error)
        }
    }

    const closeMessage = () => {
        navigate("/home")
    }

    // User Prfile Name

    useEffect(() => {
        // try {


        //     axiosinstance.get("/viewprofiledetails/" + userId, {
        //         headers: {
        //             "x-access-token": localStorage.getItem("token"),
        //         },
        //     }).then((response) => {

        //         setProfileDetails(response.data)
        //         refetch()
        //     })
        // } catch (err) {

        //     console.log("Eror message...", err);
        // }
        viewProfileDetails(userId)
    }, [user])

    const viewProfileDetails = async (userId: any) => {
        const viewProfileDetailsResponce = await view_Profile_Details(userId)
        setProfileDetails(viewProfileDetailsResponce)
    }


    return (
        <>
            {/* MODAL Message */}
            <div className='md:hidden'>
                {!currentChat ?
                    <>
                        <div className=''>

                            <div className='w-full text-white p-2 bg-[#111111] flex  items-center gap-5 h-14'
                            >
                                <BsArrowLeft size={25} onClick={closeMessage} />
                                {profileDetails?.map((item: any, index: any) => (
                                    <div className='flex gap-2 justify-center '>
                                        <div>

                                            {profileDetails[0].Images ?
                                                <>
                                                    <img className="w-8 h-8 rounded-full order-1" src={`${postsImages}/${profileDetails[0].Images}`} alt="" />
                                                </>
                                                :
                                                <>
                                                    <img src="https://images.unsplash.com/photo-1549078642-b2ba4bda0cdb?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144" alt="My profile"
                                                        className="w-8 h-8 rounded-full order-1" />
                                                </>

                                            }

                                        </div>
                                        <div>
                                            <div className='text-xl font-semibold'>{item?.username}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* First Page  */}
                            {conversations ?
                                <>
                                    <div>
                                        <div className='text-white p-2'>Messages</div>

                                        {conversations?.map((item: any) => (
                                            <div
                                                onClick={() => setCurrentChat(item)}

                                            >
                                                <MessageMobileCategory conversations={item} currentUser={userId} />
                                            </div>
                                        ))}
                                    </div>
                                </>
                                :
                                <>
                                    <MobileMessageCategorySkeleton />
                                </>
                            }

                        </div>
                    </>
                    :
                    <>
                        <div className=' overflow-hidden '>
                            <div className='w-full text-white p-2 bg-[#111111] flex items-center gap-5 absolute top-0 '>
                                <BsArrowLeft size={25}
                                    onClick={() => setCurrentChat(false)}
                                />
                                <div className='flex gap-2'>
                                    <div>
                                        {chatUserPicture ? <img className='rounded-full w-10 h-10 object-cover' src={`${postsImages}/${chatUserPicture}`} />
                                            :
                                            <img className='rounded-full w-10 h-10' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQA0BrKaI0cwXl3-wpk6Fu2gMbrP1LKk6waAlhKhrTzTobcVlka34MsNf4Yp3k1tG4ufTY&usqp=CAU' />
                                        }
                                    </div>
                                    <div>
                                        <div className='text-sm font-semibold'>Ajith R Thampirrr</div>
                                        <div className='text-xs'>Active now</div>
                                    </div>
                                </div>
                            </div>
                            <div className='pb-20 pt-12 max-h-screen  overflow-y-scroll  scrollbar-none'>
                                {messages?.map((m: any) => (
                                    <div ref={scrollRef} onClick={() => setMessageModal(true)} className="">
                                        <MessageMobile message={m} own={m.senderId === userId} pic={user.profilePic} />
                                    </div>
                                ))}
                            </div>
                            <div className=" p-3 absolute bottom-0 w-full bg-[#111111]">
                                <div className=" text-xs border  border-[#5b5858]  text-[#002D74]"></div>
                                <div className='flex     '>
                                    <div className='mr-2 flex grow gap-3'>
                                        <input
                                            type="text"
                                            name='comment'
                                            className='w-full p-1 pl-5 mt-2 h-10'
                                            placeholder='Write something..'
                                            value={newMessage}
                                            onChange={(e => setNewMessage(e.target.value))}
                                            style={{ backgroundColor: "#313131" }}
                                        />
                                    </div>
                                    <div className='p mt-2 bg-[#FFFF1A] flex justify-center items-center rounded-lg  cursor-pointer transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-[rgb(254,254,16)] duration-300'>
                                        <button className='  text-black  text-sm font-semibold px-5 py-2 '
                                            onClick={handleSubmit}
                                        >
                                            Send
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                }
            </div>
        </>
    )
}

export default MessageMobileProfile