import React, { useState } from 'react'
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


const Sidebar = () => {

    const navigate = useNavigate()
    const [open, setOpen] = useState<boolean>(false)
    const [isOpen, setIsOpen] = useState<boolean>(false)

    const [searchOpen, setSearchOpen] = useState(false)


    const handleOnClose = () => setOpen(false)
    const handleSearchOnClose = () => setSearchOpen(false)


    const logout = () => {
        localStorage.removeItem("token")
        navigate("/")
    }

    const activeElement = 'flex gap-4 py-4 items-center bg-[#1E1E1]  -mx-12 px-10  rounded-md hover:shadow-md hover:shadow-[#585858]';
    const nonActiveElement = 'flex gap-4 py-4 items-center cursor-pointer hover:bg-[#1E1E1E] hover:opacity-70 -mx-4 px- my-2  rounded-md transition-all hover:scale-110  hover:shadow-md hover:shadow-[#585858]';
    return (
        <>

            <div className='xl:w-1/5 hidd xl:max-w-[280px] xl:min-w-[300px] '>
                <div className=' shadow-md rounded-3xl   mb-5 bg-[#2A2A2A] text-white 2xl:w-[300px] h-[600px] '>
                    <div className='px-10 text-lg pt-5 pb-7 '>
                        <Link to="/home">
                            <a href="" className={nonActiveElement} >

                                <HiHome size={25} />
                                <div className='hidden xl:block '>
                                    Home
                                </div>

                            </a>
                        </Link>
                        <div className={nonActiveElement} onClick={() => setSearchOpen(true)}>
                            <BiSearch size={25} />
                            <div className='hidden xl:block'>
                                Search
                            </div>

                        </div>
                        <a href="/message" className={nonActiveElement}>
                            <AiOutlineMessage size={25} />
                            <div className='hidden xl:block'>
                                Message
                            </div>

                        </a>
                        <div className={nonActiveElement} onClick={() => setOpen(true)}  >
                            <MdOutlineNotifications size={25} />
                            <div className='hidden xl:block'>
                                {/* <Notification/> */}
                                Notification
                            </div>
                            {/* <button onClick={() => setIsOpen(true)}>Click me again</button> */}

                        </div>
                        <a href="connection" className={nonActiveElement}>
                            <BsPeople size={25} />
                            <div className='hidden xl:block'>
                                Connection
                            </div>

                        </a>
                        <Link to="/profile">
                            <a href="" className={nonActiveElement}>
                                <CgProfile size={25} />
                                <div className='hidden xl:block'>
                                    Profile
                                </div>

                            </a>
                        </Link>
                        <a href="" className={nonActiveElement}
                            onClick={logout}
                        >
                            <FiLogOut size={25} />
                            <div className='hidden xl:block'>
                                Logout
                            </div>

                        </a>
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

            {/* <div className=' shadow-md rounded-3xl mb-5 bg-[#2A2A2A] text-white lg:hidden  '>
            <div className='px-10 text-  pt-5 pb-7 '>
                        <a href="" className={activeElement}>
                            <HiHome size={25} />
                            Home
                        </a>
                        <a href="" className={nonActiveElement}>
                            <BiSearch size={25} />
                            Search
                        </a>
                        <a href="" className={nonActiveElement}>
                            <AiOutlineMessage size={25} />
                            Message
                        </a>
                        <a href="" className={nonActiveElement}>
                            <MdOutlineNotifications size={25} />
                            Notification
                        </a>
                        <a href="" className={nonActiveElement}>
                            <BsPeople size={25} />
                            Connection
                        </a>
                        <Link to="/profile">
                            <a href="" className={nonActiveElement}>
                                <CgProfile size={25} />
                                Profile
                            </a>
                        </Link>
                        <a href="" className={nonActiveElement}>
                            <FiLogOut size={25} />
                            Logout
                        </a>
                    </div>
            </div> */}

        </>
    )
}

export default Sidebar