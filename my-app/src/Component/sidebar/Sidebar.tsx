import React, { useState, useEffect } from 'react'
import { HiHome } from "react-icons/hi";
import { AiOutlineMessage } from "react-icons/ai";
import { MdOutlineNotifications } from "react-icons/md";
import { BiSearch } from "react-icons/bi";
import { BsPeople } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { FiLogOut } from "react-icons/fi";
import { useNavigate } from 'react-router-dom'
import { Link, Outlet } from 'react-router-dom';
import Notification from '../../Pages/userpages/notification/Notification';
import Example from '../../Pages/userpages/notification/Notification';
import Notifi from '../../Pages/userpages/notification/Notification';
import Search from '../../Pages/userpages/search/Search';
import { useSelector } from 'react-redux';
import axiosinstance from '../../axios/axiosinstance';
import { get_notification_count, get_Notofication } from '../../services/UserApi';


const Sidebar = () => {

    const notifyUpdate = useSelector((state: any) => state.userDetails.value.notifi)
    console.log('notifyUpdate.,.,/./,/.,/', notifyUpdate);

    const navigate = useNavigate()
    const [open, setOpen] = useState<boolean>(false)
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [notificationCount, setNotoficationCount] = useState()

    const [searchOpen, setSearchOpen] = useState(false)


    const handleOnClose = () => setOpen(false)
    const handleSearchOnClose = () => setSearchOpen(false)


    const logout = () => {
        localStorage.removeItem("token")
        navigate("/")
    }

    useEffect(() => {
        // try {
        //     axiosinstance.get("/getnotifications", {
        //         headers: {
        //             "x-access-token": localStorage.getItem("token"),
        //         },
        //     }).then((res) => {
        //         console.log("Nitification", res);

        //     })
        //         .catch((err) => {
        //             navigate("/error")
        //         })
        // } catch (error) {
        //     console.log(error);
        // }
        getNofification()
    }, [notifyUpdate])

    const getNofification = async () => {
        const seeAllNotification = await get_Notofication()
    }

    //NOTIFICATION COUNT

    useEffect(() => {
        // try {
        //       axiosinstance.get("/getnotificationscount", {
        //     headers: {
        //         "x-access-token": localStorage.getItem("token"),
        //     },
        // }).then((res) => {
        //     console.log("Nitification--Count", res.data.length);
        //     setNotoficationCount(res.data.length)
        // })
        //     .catch((err) => {
        //         navigate("/error")
        //     })
        // } catch (error) {   
        // }
        notificationCountAll()
    }, [notifyUpdate])

    const notificationCountAll = async () => {
       const get_allNotificationCountAll = await get_notification_count()
       setNotoficationCount(get_allNotificationCountAll.length)
    }



    const activeElement = 'flex gap-4 py-4 items-center bg-[#1E1E1]  -mx-12 px-10  rounded-md hover:shadow-md hover:shadow-[#585858]';
    const nonActiveElement = 'flex gap-4 py-4 items-center cursor-pointer hover:bg-[#1E1E1E] hover:opacity-70 -mx-4 px- my-2  rounded-md transition-all hover:scale-110  hover:shadow-md hover:shadow-[#585858]';
    return (
        <>
            <div className='xl:w-1/5 hidd xl:max-w-[280px] xl:min-w-[270px]  '>
                <div className=' shadow-md rounded-3xl   mb-5 bg-[#2A2A2A] text-white 2xl:w-[270px] h-[643px] '>
                    <div className='px-10 text-lg pt-5 pb-7 '>
                        <Link to="/home">
                            <div className={nonActiveElement} >

                                <HiHome size={25} />
                                <div className='hidden xl:block '>
                                    Home
                                </div>
                            </div>
                        </Link>
                        <div className={nonActiveElement} onClick={() => setSearchOpen(true)}>
                            <BiSearch size={25} />
                            <div className='hidden xl:block'>
                                Search
                            </div>

                        </div>
                        <Link to="/message">
                            <div className={nonActiveElement}>
                                <AiOutlineMessage size={25} />
                                <div className='hidden xl:block'>
                                    Message
                                </div>

                            </div>
                        </Link>

                        <div className={nonActiveElement} onClick={() => setOpen(true)}  >
                            <div className='text-white relative'>
                                <MdOutlineNotifications size={25} />
                                {notificationCount ? 
                                <>
                                 <div className=' absolute -top-2 -right-2 w-5 h-5 rounded-full bg-red-500 flex items-center justify-center'>
                                    <p className='text-xs text-white font-semibold'>
                                       {notificationCount}
                                    </p>
                                </div>
                                </>
                                 :
                                 <>
                                 
                                 </>
                            }
                               

                            </div>
                            <div className='hidden xl:block'>
                                Notification
                            </div>
                        </div>

                        <Link to="/profile">
                            <div className={nonActiveElement}>
                                <CgProfile size={25} />
                                <div className='hidden xl:block'>
                                    Profile
                                </div>

                            </div>
                        </Link>
                        <div className={nonActiveElement}
                            onClick={logout}
                        >
                            <FiLogOut size={25} />
                            <div className='hidden xl:block'>
                                Logout
                            </div>

                        </div>
                        <Notifi
                            open={open}
                            setOpen={setOpen}
                            onClose={handleOnClose}
                            title="Item Details"
                            isOpen={isOpen}
                        >
                        </Notifi>

                        <Search
                            open={searchOpen}
                            setSearchOpen={setSearchOpen}
                            onClose={handleSearchOnClose}
                            tele="hi there"
                        >
                        </Search>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Sidebar