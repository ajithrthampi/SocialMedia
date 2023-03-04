import React, { Fragment, useContext, useEffect, useState } from 'react'
import { AiOutlineUserAdd } from "react-icons/ai";
import { AiFillMessage } from "react-icons/ai";
import { HiHome } from "react-icons/hi";
import { AiOutlineMessage } from "react-icons/ai";
import { MdOutlineNotifications } from "react-icons/md";
import { CgMoreR, CgProfile } from "react-icons/cg";
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../../Pages/context/Context';
import jwtDecode from 'jwt-decode';
import { Dialog, Menu, Transition } from '@headlessui/react';
import Swal from 'sweetalert2';
import DownNavbar from './DownNavbar';
import useDebounce from '../../hooks/useDebounce';
import { useQuery } from '@tanstack/react-query';
import axiosinstance from '../../axios/axiosinstance';
import { useDispatch } from 'react-redux';
import { passfriendDetails } from '../../redux/store/features/userSlice';
import { Outlet, useLocation } from 'react-router-dom'
import Notifi from '../../Pages/userpages/notification/Notification';
import { RiArrowDropDownLine } from 'react-icons/ri';
import "./navbar.css"
import { search_user, view_Profile_Details } from '../../services/UserApi';





interface userContextType {
    // user: any
    // setUser:any
}

function classNames(...classes: any) {
    return classes.filter(Boolean).join(' ')
}


const Navbar = () => {
    const [searchName, setSearchName] = useState<null | HTMLElement>()
    const [searchAncher, setSearchAncher] = useState<null | HTMLElement>()
    const { setUser } = useContext(UserContext)
    const { user } = useContext(UserContext)
    const [opens, setOpens] = useState<boolean>(false)
    const [navbarOpen, setNavbarOpen] = React.useState(false);
    const navigate = useNavigate()
    const debouncedValue = useDebounce(searchName, 500)
    const [profileDetails, setProfileDetails] = useState<any>()
    const [open, setOpen] = useState<boolean>(false)
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const dispatch = useDispatch()
    const location = useLocation();

    const handleOnClose = () => setOpen(false)

    if (user) {
        var userId = user?.id
    }

    useEffect(() => {
        const data = localStorage.getItem('token')
        if (data != null) {
            const userData = jwtDecode(data)
            setUser(userData)
        }
    }, [])


    const { data: searchResult, isLoading, refetch } = useQuery(["searchUserValues", debouncedValue], () => 
        // return axiosinstance.get("/searchuser/" + debouncedValue, {
        //     headers: {
        //         "x-access-token": localStorage.getItem("token"),
        //     },
        // }).then((res) => res.data)
        //     .catch((err) => {
        //         // navigate("/error")
        //         console.log(err);

        //     })   
        search_user(debouncedValue)
    )

    const handleSearch = (e: any) => {
        if (e.target.value) {
            setSearchAncher(e.currentTarget)
            setOpens(true)
            refetch()
        } else {
            setOpens(false)
        }
        console.log("Search anem", searchAncher);
        setSearchName(e.target.value)

    }


    const logout = () => {
        Swal.fire({
            title: "Block",
            text: "Are you sure you want to logout ",
            icon: "success",
            confirmButtonText: "OK",
            showCancelButton: true
        }).then((result) => {
            if (result.isConfirmed) {
                localStorage.removeItem("token")
                navigate("/")
            }
        })
    }


    // GO TO PROFILE ACCOUNT

    const handleFriendProfile = (item: any) => {
        console.log(item?._id);

        if (item?.userId?._id === userId) {
            navigate("/profile")
        } else {
            dispatch(passfriendDetails(item))
            navigate("/fried-Profile")
        }
    }

    // Navbar Profile

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
   
    const viewProfileDetails = async (userId:any) => {
       const viewProfileDetailsResponce = await view_Profile_Details(userId)
       setProfileDetails(viewProfileDetailsResponce)
    }

    return (
        <>
            {/* MOBILE_SCREEN */}
            <div>


                <nav className="md:hidden px- py-2 bg-[#2A2A2A]   ">
                    <div className="container px-4 mx-auto ">
                        <div className="w-ful lg:w-auto lg:static lg:block lg:justify-start flex  items-center justify-between ">
                            <div
                                className=" flex  font-bold leading-relaxed  mr-4 py-2 whitespace-nowrap uppercase text-white cursor-pointer text-sm">
                                See Chat
                            </div>

                            {/* </div> */}
                            {/* Search */}
                            <div className=' '>
                                {(location.pathname === "/profile") ? (
                                    <>

                                    </>
                                ) : (location.pathname === "/fried-Profile") ? (
                                    <>

                                    </>
                                ) : (location.pathname === "/message") ? (
                                    <>

                                    </>
                                )
                                    :
                                    <>
                                        <div className="relative  flex-1 px-4 text-white flex justify-center items-center ">

                                            {/* Replace with your content */}

                                            <div className="flex justify-center">
                                                <div className=" xl:w-96">
                                                    <div className="input-group relative flex flex-wrap items-stretch w-full ">
                                                        <input
                                                            type="search"
                                                            onChange={handleSearch}
                                                            className="form-control relative flex-auto min-w-0 block w-full px-3 py-1 text-base font-normal
                                                            text-gray-700 bg-[#7069695d] bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0
                                                             focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                                            placeholder="Search"
                                                            aria-label="Search"
                                                            aria-describedby="button-addon2"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='absolute bg-[#1a1919] w-full top-10 '>

                                                {/* {searchResult?.length !== 0 ?
                                               <> */}
                                                {searchResult && searchResult?.map((item: any, index: number) => (

                                                    <div className=' flex p-2.5 gap-1'>
                                                        <div>
                                                            <img
                                                                onClick={() => handleFriendProfile(item)}
                                                                className=" w-8 h-8 rounded-full object-cover  dark:ring-gray-500" src={`/images/${item?.Images}`} alt="Bordered avatar" />
                                                        </div>
                                                        <div>
                                                            <div className='text-xs text-gray-300'>{item?.username}</div>
                                                            <div className='text-xs text-gray-600'>{item?.name}</div>
                                                        </div>
                                                    </div>

                                                ))}
                                            </div>
                                        </div>
                                    </>
                                }
                            </div>
                            <div className='flex space-x-7'>

                                <div className='text-white '>
                                    {/* <CgMoreR size={25} /> */}
                                    <Menu as="div" className="relative inline-block text-left">
                                        <div>
                                            <Menu.Button className="inline-flex w-full justify-center bg-whie px-4 py-2 text-sm ">
                                                <RiArrowDropDownLine size={25} />
                                                {/* <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />    */}
                                            </Menu.Button>
                                        </div>

                                        <Transition
                                            as={Fragment}
                                            enter="transition ease-out duration-100"
                                            enterFrom="transform opacity-0 scale-95"
                                            enterTo="transform opacity-100 scale-100"
                                            leave="transition ease-in duration-75"
                                            leaveFrom="transform opacity-100 scale-100"
                                            leaveTo="transform opacity-0 scale-95"
                                        >
                                            <Menu.Items className="absolute right-0 z-10 mt-2 w-44  origin-top-right rounded-lg bg-[#1A1A1A] shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                                <div className="py-1">
                                                    <Menu.Item>
                                                        {({ active }) => (
                                                            <div

                                                                className={classNames(
                                                                    active ? 'bg-[#FFFF1A] text-gray-900 flex justify-center cursor-pointer' : 'text-white cursor-pointer font-extrabold flex justify-center ',
                                                                    'block px-6 h-full py-2 text-sm'
                                                                )}
                                                                onClick={logout}
                                                            >
                                                                Logout
                                                            </div>
                                                        )}
                                                    </Menu.Item>
                                                    {/* <div className=" text-xs border-b border-[#5b5858] py-  text-[#002D74]"></div> */}

                                                </div>
                                            </Menu.Items>
                                        </Transition>
                                    </Menu>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
                <div>
                    {location.pathname === "/message" ?
                        <>

                        </>
                        :
                        <>
                            <DownNavbar />
                        </>
                    }

                </div>
            </div>

            {/* LARGE_SCREEN */}
            <nav className="hidden md:block relativ  sticky  flex-wrap items-center justify-between px-10 top-0 py-6 bg-[#1A1A1A] mb-3 ">
                <div className="flex  items-center justify-between ">
                    <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start ">
                        <a
                            className=" font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white cursor-pointer text-lg">
                            See Chat
                        </a>
                    </div>
                    <Notifi
                        open={open}
                        setOpen={setOpen}
                        onClose={handleOnClose}
                        title="Item Details"
                        isOpen={isOpen}
                    >
                    </Notifi>
                    {/* <div className='text-white relative'>
                         <MdOutlineNotifications size={25} />
                        <div className=' absolute -top-2 -right-2 w-5 h-5 rounded-full bg-red-500 flex items-center justify-center'>
                            <p className='text-xs text-white font-semibold'>244</p>
                        </div>
                       
                    </div> */}

                    {profileDetails?.map((item: any, index: any) => (
                        <div className='flex justify-end items-center'>
                            <button className='bg-[#32313144] flex rounded-2xl  items-center  w-[170px] h-10'>

                                {profileDetails[0].Images ?
                                    <>
                                        <div className='w-8 h-8 rounded-xl ml-1  overflow-hidden cursor-pointer'>
                                            <img src={`/images/${profileDetails[0].Images}`} alt="" />
                                        </div>
                                    </>
                                    :
                                    <>
                                        <div className='w-10 h-10 rounded-full overflow-hidden cursor-pointer'>
                                            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQA0BrKaI0cwXl3-wpk6Fu2gMbrP1LKk6waAlhKhrTzTobcVlka34MsNf4Yp3k1tG4ufTY&usqp=CAU' alt="profilepic" />
                                        </div>
                                    </>
                                }
                                <div className='pl-5 text-white text-ellipsis  h-5 w-20 overflow-hidden'>{item?.name}</div>
                            </button>
                        </div>
                    ))}
                </div>
            </nav>

        </>
    )
}

export default Navbar