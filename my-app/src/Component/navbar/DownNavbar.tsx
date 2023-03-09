import jwtDecode from 'jwt-decode';
import React, { useEffect, useContext, useState } from 'react'
import { AiFillMessage } from 'react-icons/ai';
import { BiSearch } from 'react-icons/bi'
import { BsPeople } from "react-icons/bs";
import { CgProfile } from 'react-icons/cg';
import { HiHome } from 'react-icons/hi'
import { MdOutlineNotifications } from 'react-icons/md';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import axiosinstance from '../../axios/axiosinstance';
import { UserContext } from '../../Pages/context/Context';
import Notifi from '../../Pages/userpages/notification/Notification';
import postsImages from '../../services/imageApi';
import { get_notification_count, view_Profile_Details } from '../../services/UserApi';

interface mode {
    children: any
}
interface imagee {
    Images: string
}

const DownNavbar = () => {

    const { user } = useContext(UserContext)
    const [profileImage, setProfileImage] = useState<any>();
    const [userIdData, setUserIdData] = useState()

    const [open, setOpen] = useState<boolean>(false)
    const handleOnClose = () => setOpen(false)
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [notificationCount, setNotoficationCount] = useState()

    const notifyUpdate = useSelector((state: any) => state.userDetails.value.notifi)


    if (user) {
        var userId = user.id
    }

    // GETTING USER ID

    useEffect(() => {
        try {
            const data = localStorage.getItem('token')
            if (data != null) {
                const userData: any = jwtDecode(data)
                const userId = userData?.id
                setUserIdData(userId)
                // console.log("uaehdfsufhwfuwwi,,,,,,,,,,,,,,,",userId);       
            }
        } catch (error) {
            // console.log("user id rreor",error);


        }

    }, [])



    //PROFILE IMAGE

    // useEffect(() => {
    //     try {

    //         axiosinstance.get("/viewprofiledetails/" + userIdData, {
    //             headers: {
    //                 "x-access-token": localStorage.getItem("token"),
    //             },
    //         }).then((response) => {

    //             setProfileImage(response.data)
    //         })
    //     } catch (err) {
    //         // navigate('/error')
    //         console.log("Eror message...", err);
    //     }
    // }, [user, userIdData])

    useEffect(() => {
        viewProfileDetails(userIdData)
    }, [user, userIdData])

    const viewProfileDetails = async (userIdData: any) => {
        const viewProfileDetailsResponce = await view_Profile_Details(userIdData)
        setProfileImage(viewProfileDetailsResponce)
        console.log("Navbar details....", viewProfileDetailsResponce);
    }

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

    return (
        <>
            <div className=' md:hidden relative z-10'>
                <div className='w-full fixed abslute bg-[#2A2A2A]  py-5  border-t-2 border-[#1A1A1A]  bottom-0'>
                    <div className='text-white flex justify-evenly items-center gap-9   '>
                        <Link to="/home">
                            <div className='' >

                                <HiHome size={28} />
                                <div className='hidden xl:block '>
                                    Home
                                </div>

                            </div>

                        </Link>
                        <Link to="/message">
                            <div>
                                <AiFillMessage size={25} />
                                <div className='hidden xl:block'>
                                    Message
                                </div>
                            </div>
                        </Link>
                        <div className="" >
                            <MdOutlineNotifications size={28} onClick={() => setOpen(true)} />
                            {notificationCount ?
                                <>
                                    <div className=' absolute top-3 right-32 w-5 h-5 rounded-full bg-red-500 flex items-center justify-center'>
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
                        <Link to="/profile">
                            {profileImage ?
                                <>
                                    {profileImage?.map((item: any, index: number) => (
                                        <div key={index}>
                                            {profileImage[0].Images ?
                                                <img
                                                    className="p-1 mx-auto  w-9 justify-content-center h-9 rounded-full"
                                                    src={`${postsImages}/${profileImage[0].Images}`} alt="Bordered avatar"
                                                />
                                                :
                                                <CgProfile size={28} />
                                            }
                                            <div className='hidden xl:block'>
                                                Profile
                                            </div>
                                        </div>
                                    ))}
                                </>
                                :
                                <>
                                    <img className='p-1 mx-auto  w-9 justify-content-center h-9 rounded-full' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQA0BrKaI0cwXl3-wpk6Fu2gMbrP1LKk6waAlhKhrTzTobcVlka34MsNf4Yp3k1tG4ufTY&usqp=CAU' alt="profilepic" />
                                </>
                            }
                        </Link>
                    </div>
                    <Notifi
                        open={open}
                        setOpen={setOpen}
                        onClose={handleOnClose}
                        title="Item Details"
                        isOpen={isOpen}
                    >
                    </Notifi>
                </div>
            </div>
        </>
    )
}

export default DownNavbar