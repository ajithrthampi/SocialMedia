import jwtDecode from 'jwt-decode';
import React, {useEffect, useContext, useState} from 'react'
import { AiFillMessage } from 'react-icons/ai';
import { BiSearch } from 'react-icons/bi'
import { BsPeople } from "react-icons/bs";
import { CgProfile } from 'react-icons/cg';
import { HiHome } from 'react-icons/hi'
import { MdOutlineNotifications } from 'react-icons/md';
import { Link } from 'react-router-dom'
import axiosinstance from '../../axios/axiosinstance';
import { UserContext } from '../../Pages/context/Context';

interface mode{
    children:any
}
interface imagee {
    Images: string
}

const DownNavbar = () => {

    const { user } = useContext(UserContext)
    const [profileImage, setProfileImage] =  useState<imagee[]>([]);
    const [userIdData, setUserIdData] = useState()


    if (user) {
        var userId = user.id
    }

    // GETTING USER ID

    useEffect(() => {
        try {
               const data = localStorage.getItem('token')
        if (data != null) {
            const userData:any = jwtDecode(data)
            const userId = userData?.id
            setUserIdData(userId) 
            console.log("uaehdfsufhwfuwwi,,,,,,,,,,,,,,,",userId);       
        }
        } catch (error) {
            console.log("user id rreor",error);
            
            
        }
     
    }, [])

    

    //PROFILE IMAGE

    useEffect(() => {
        try {
            // const userId = user.id
            // console.log("user.... ID",userId);
            console.log("Downbar useEffect try catch", userIdData);
            
            axiosinstance.get("/viewprofiledetails/" + userIdData, {
                headers: {
                    "x-access-token": localStorage.getItem("token"),
                },
            }).then((response) => {
                // console.log(response.data[0].name, 'yesyesyesyes');
                setProfileImage(response.data)
            })
        } catch (err) {
            // navigate('/error')
            console.log("Eror message...", err);

        }
    }, [user,userIdData])

    // console.log("Downbar  sdfj......User profile ",profileImage);
       
        
    
 

    return (
        <>
            <div className=' relative z-10'>
                <div className='w-full fixed abslute bg-[#2A2A2A] md:hidden py-5  border-t-2 border-[#1A1A1A]  bottom-0'>
                    <div className='text-white flex justify-evenly items-center gap-9   '>
                        <Link to="/home">
                            <a href="" className='' >

                                <HiHome size={28} />
                                <div className='hidden xl:block '>
                                    Home
                                </div>

                            </a>

                        </Link>
                        <Link to="/message">
                        <div>
                            <AiFillMessage size={25} />
                            <div className='hidden xl:block'>
                               Message
                            </div>
                        </div>
                        </Link>
                        {/* <Link to="/connection">
                            <div className="">
                                <BsPeople size={28} />
                                <div className='hidden xl:block'>
                                    Connection
                                </div>
                            </div>
                        </Link> */}
                        <div className="" >
                            <MdOutlineNotifications size={28} />
                            <div className='hidden xl:block'>

                                Notification
                            </div>
                        </div>
                        <Link to="/profile">
                            {/* {profileImage?.map((item:any, index:number) => (
                            <div key={index}>
                                {profileImage[0].Images ? 
                                <img
                                 className="p-1 mx-auto  w-9 justify-content-center h-9 rounded-full" 
                                 src={`/images/${profileImage[0].Images}`} alt="Bordered avatar" 
                                 />
                                :
                                 
                                 <CgProfile size={28} /> 
                                 
                                 }
                              
                                <div className='hidden xl:block'>
                                    Profile
                                </div>
                            </div>
                              ))}
                               */}
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DownNavbar