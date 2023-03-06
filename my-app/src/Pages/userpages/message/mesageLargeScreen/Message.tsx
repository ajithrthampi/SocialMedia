import axios from 'axios'
import jwtDecode from 'jwt-decode'
import React, { useContext, useState, useEffect, useRef } from 'react'
import axiosinstance from '../../../../axios/axiosinstance'
import Layout from '../../../../Component/layout/Layout'
import Navbar from '../../../../Component/navbar/Navbar'
import { UserContext } from '../../../context/Context'
import MessageMobile from '../mesasegSmallScreen/MessageMobile'
import MessageMobileProfile from '../mesasegSmallScreen/MessageMobileProfile'
import UserCategory from './UserCategory'
import Userchat from './UserChat'
import { io } from "socket.io-client"
import { useSelector } from 'react-redux'

interface Socket_io {
  socket: any

}

interface SocketData {
  senderId: any
}

const Message = ({ socket }: Socket_io) => {

  const [conversations, setConversation] = useState<any>()
  const [currentChat, setCurrentChat] = useState<any>()
  const [messages, setMessages] = useState<any>()
  const [userIid, setsetUserIid] = useState<any>()
  const { user } = useContext(UserContext)
  const [newMessage, setNewMessage] = useState<any>()
  const [arrivalMessage, setArrivalMessage] = useState<any>()
  const scrollRef = useRef<any>()


  // const messsageClickName = useSelector((state:any) => state.userMeName.value.messageName)

  // console.log(")())))()())()(()()()()()()()()()",currentChat);
  

 

  


  useEffect(() => { // socket? = io("ws://localhost:8000")
    socket?.on("getMessage", (data: any) => {
      setArrivalMessage({ senderId: data.senderId, text: data.text, createdAt: Date.now() })
    })
  }, [messages])

  useEffect(() => {
    arrivalMessage && currentChat?.members.includes(arrivalMessage.senderId) && setMessages((prev: any) => [
      ...prev,
      arrivalMessage
    ])
  }, [arrivalMessage, currentChat])

  useEffect(() => {
    socket?.emit("addUser", user?.id)
    socket?.on("getUsers", (users: any) => {
      console.log(users, 'users socket check');
    })
  }, [user, messages])

  useEffect(() => {
    const data = localStorage.getItem('token')
    if (data != null) {
      const userData: any = jwtDecode(data)
      const userId = userData?.id
      setsetUserIid(userId)
    }
  }, [])


  // GET CONVERSATION

  useEffect(() => {
    try {
      axiosinstance.get("/conversation/" + userIid, {
        headers: {
          "x-access-token": localStorage.getItem("token"),
        },
      }).then((res) => {

        setConversation(res.data)
      })
    } catch (error) {
      console.log("Error", error);
    }
  }, [user, userIid])

  console.log("**/*/*/*/*/**/*/**/*/*/*",conversations);
  


  //CURENT CHAT

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
  }, [currentChat, userIid])

  console.log("messages..", messages);



  // SEND CHANT

  const handleSubmit = (e: any) => {
    e.preventDefault()
    const message = {
      senderId: userIid,
      text: newMessage,
      conversationId: currentChat?._id
    }
    const receiverId = currentChat.members.find((member: any) => member !== userIid)
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

  

  // SCROLL TO RECENT CHAT

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" })

  }, [messages])

  
    const [users, setUser] = useState<any>()
    

    useEffect(() => {
        const friendId = currentChat?.members?.find((m:any) => m !== userIid)
        try {
            axiosinstance.get("/chatusers/" + friendId, {
                headers: {
                    "x-access-token": localStorage.getItem("token"),
                },
            }).then((res) => {

                setUser(res.data)
                // dispatch(messageUserName(res.data))
            })
        } catch (err) {
            console.log("userChategory,,.",err);  
        }
    
    }, [conversations,currentChat])
    // console.log("54454545454545454545454.5.45.4.544.5.54.54.-===========================================================",users);

  return (
    <>

      <Navbar />
      <Layout>
        <div className='lg:w-5/5 xl:w-5/5  w-1/2 sm:w-full sm:hidden md:block'>
          <div className=' pb-24'>
            <div className='flex justify-center items-center  text-xl text-white '>
              <div className='bg-[#2A2A2A] w-full h-[643px] rounded-3xl'>
                <div className='grid lg:grid-cols-6 grid-cols-7'>

                  {/* First Part */}

                  <div className='lg:col-span-2 col-span-3'>
                    <div className='flex justify-center items-center pt-4'>
              
                    </div>
                    <div className="mt- text-xs border-b border-[#5b5858] py-3 text-[#002D74]"></div>

                    {/* PROFILE LIST*/}

                    <div className='flex flex-col gap-2  max-h-[550px] overflow-y-scroll scroll-smooth scrollbar-none'>
                      {conversations?.map((item: any) => (
                        <div onClick={() => setCurrentChat(item)}>
                          <UserCategory conversations={item} currentUser={userIid} />
                        </div>
                      ))}
                    </div>
                  </div>

                  {messages ?
                    <>
                      <div className='lg:col-span-4 col-span-4 bg-[#1A1A1A] h-[643px] overflow-hidden '>
                        <div>
                          <div className='w-full  bg-[#353535]  p-3 flex gap-2 h-[79px]'>
                            <div className='lg:w-12 lg:h-12 md:w-8 md:h-8 rounded-full overflow-hidden cursor-pointer'>
                              {/* <img src='' alt="profilepic" /> */}
                            </div>
                            <div className='flex flex-col'>
                              <div className=' text-lg'>{users?.name}</div>
                              <div className=' text-xs'>online now</div>
                            </div>
                          </div>
                        </div>

                        {/* Message User chat content */}
                        {/* {!currentChat ?<> */}
                        <div className='h-[501px] max-h-[500px] overflow-y-scroll  scrollbar-none'>
                          {messages?.map((m: any) => (
                            <div
                            // ref={scrollRef} 
                            
                            >
                              <Userchat message={m} own={m.senderId === userIid} pic={user.profilePic} />
                            </div>
                          ))}
                        </div>

                        <div className=" p-3 ">
                          <div className=" text-xs  border border-[#5b5858]  text-[#002D74]"></div>
                          <div className='flex'>
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
                        {/* </>
                        // :<> */}
                        {/* <span className='absolute left-[58%] top-[50%] text-3xl cursor-default text-[#a09696] text-center'>Open a conversation to start a chat..</span> */}
                        {/* </>} */}
                      </div>
                    </>
                    :
                    <>
                    <div className='lg:col-span-4 col-span-4 bg-[#1A1A1A] h-[643px] overflow-hidden border border-gray-700  '>
                        <div className='flex justify-center flex-col items-center h-full '>
                          <div className='text-2xl'>Messages</div>
                          <div className='text-gray-700 text-5xl'> Start a conversation</div>
                        </div>
                    </div>
                    </>
                  }
                </div>
              </div>
            </div>
          </div>

        </div>
      </Layout>

      <MessageMobileProfile socket={socket} />

    </>
  )
}

export default Message