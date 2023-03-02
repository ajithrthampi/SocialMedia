import React, { useContext, useState, useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { IoMdClose } from "react-icons/io";
import { BsArrowLeft } from "react-icons/bs";
import { GoLocation } from "react-icons/go";
import Navbar from '../navbar/Navbar';
import { UserContext } from '../../Pages/context/Context';
import axios from 'axios';
import axiosinstance from '../../axios/axiosinstance';
import jwtDecode from 'jwt-decode';

interface editmodal {
    isVisible: boolean
    onClose: () => void
    children: any
    error?: boolean;
}

const EditUserModal = ({ isVisible, onClose, children }: editmodal) => {

    const [image, setImage] = useState('')
    const [profileDetails, setProfileDetails] = useState<any>()
    const [updatePicture, setUpdatePicture] = useState<boolean>(false)
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [userIdData, setUserIdData] = useState<any>()
    const [state, setState] = useState<boolean>()

    const { user } = useContext(UserContext)
    const navigate = useNavigate()
    const [userDetails, setUserDetails] = useState({
        name: '',
        username: '',
        email: '',
        phone: '',
        bio: '',
    })
    const [form, setform] = useState<any>({
        Images: ''
    })


    if (user) {
        var userId = user.id
    }

    // USER ID

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


    // IMAGE 

    const fileUpload = (e: any) => {
        const image = e.target.files[0]
        setform({
            ...form,
            Images: image
        })
        setImage(URL.createObjectURL(e.target.files[0]))
    }
    console.log("Image,,,,...", form);




    useEffect(() => {
        if (!isLoading) return;

        const Data = new FormData();
        for (let key in form) {
            Data.append(key, form[key])
        }
        Data.append('user', user.id)
        const { Images } = form
        console.log("Profilr image DAta......", Images);

        if (Images) {
            axiosinstance.post("/addprofilepic", Data, {
                headers: {
                    "x-access-token": localStorage.getItem("token"),
                },
            }).then((response) => {


                console.log("..................................................");
                console.log("reponse....", response.data);
            }).catch((err) => {
                // navigate('/error')'
                console.log(err);

                console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx");
            })
            // setUpdatePicture(false)
        }



    }, [isLoading, user])

    const addProfilePic = (event: any) => {
        event.preventDefault()
        setIsLoading(true)
        setUpdatePicture(false)
    }

    //ONCHANGE INPUT

    const handleChange = (e: any) => {
        const { name, value } = e.target
        setUserDetails({
            ...userDetails,
            [name]: value
        })
    }
    // console.log(userDetails,".user details");



    useEffect(() => {
        try {
            // const userId = user.id
            axiosinstance.get("/viewprofiledetails/" + userIdData, {
                headers: {
                    "x-access-token": localStorage.getItem("token"),
                },
            }).then((response) => {
                console.log(response.data[0].name, 'yesyesyesyes');
                setProfileDetails(response.data)
                setUserDetails({
                    name: response.data[0].name,
                    username: response.data[0].username,
                    email: response.data[0].email,
                    phone: response.data[0].phone,
                    bio: response.data[0].bio,
                })
            })
        } catch (err) {
            // navigate('/error')
            console.log("Eror message...", err);

        }
    }, [isVisible, state])
    console.log("updatePicture",profileDetails);
    

    const onSubmit = () => {
        try {
            // const userId = user.id
            console.log(userDetails, 'userDetails in submit function');
            axiosinstance.post("editprofile/" + userIdData, userDetails, {
                headers: {
                    "x-access-token": localStorage.getItem("token"),
                },
            }).then((response) => {

                console.log("deleytex comment");
                onClose()
            }).catch((err) => {
                console.log(err);
            })

            console.log("submitted");
        } catch (error) {

        }

    }


    if (!isVisible) return null
    return (
        <>
            <div className='fixed  inset-0 bg-black bg-opacity-25 backdrop-blur-sm 
         '>
                <div className='max-h-full   overflow-y-scroll scrollbar-none   flex justify-center items-center md:pt-10 -mt-16    '>
                    <div className='md:w-[1000px] flex flex-col '>

                        <div className='bg-[#191819]  rounded text-white py-7 '>
                            <div className='  md:pl-5 sm:pl-10 pl-16 md:pb-7 pb-6 md:pt-0 pt-40  ' onClick={() => { onClose(); setImage('') }}> <BsArrowLeft size={24} /> </div>
                            <div className="mt- text-xs border-b border-[#5b5858] py-  text-[#002D74]"></div>
                            {profileDetails?.map((item: any, index: any) => (

                                <div key={index} className=' px-20'>
                                    <div className='flex items-center gap-6'>
                                        <div className='  rounded-full  cursor-pointer'>
                                            {/* <img className='rounded-full md:w-36 md:h-36 w-20 h-20    object-cover overflow-hidden' src="https://images.pexels.com/photos/4612113/pexels-photo-4612113.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" /> */}
                                            {profileDetails && profileDetails ? <>
                                                <img className='w-36 h-36 box-border   rounded-full object-cover ' src={`/images/${profileDetails[0].Images}`} alt="" />
                                            </>
                                                :
                                                <>
                                                    <div className='bg-cover'>
                                                        <img className='rounded-full md:w-36 md:h-36 w-20 h-20  overflow-hidden' src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                                                    </div>
                                                </>
                                            }

                                        </div>
                                        <div className=''>
                                            <div><h1>@ajithrthamp</h1></div>
                                           
                                            <div>
                                                <label className='text-[#706b6bde] cursor-pointer'>
                                                    <h3
                                                        onClick={() => setUpdatePicture(true)}
                                                    >change profile image</h3>
                                                   
                                                </label>
                                            </div>
                                           
                                        </div>
                                    </div>
                                    <div className="mt-8 text-xs border-b border-[#5b5858]   text-[#002D74]"></div>

                                    <div className='pl-6 pt-4'>
                                        <div>
                                            <form action="" >
                                                <div className="grid md:grid-cols-2 gap-4">

                                                    <input
                                                        className="p-2 mt-2 rounded-xl border  bg-[#191819]"
                                                        type="text"
                                                        name="name"
                                                        placeholder="Full Name"
                                                        defaultValue={profileDetails[0].name}
                                                        onChange={handleChange}

                                                    />

                                                    <input
                                                        className="p-2 mt-2 rounded-xl border bg-[#191819]"
                                                        type="text"
                                                        name="username"
                                                        placeholder="Username"
                                                        defaultValue={profileDetails[0].username}
                                                        onChange={handleChange}
                                                    />

                                                    <input
                                                        className="p-2 mt-2 rounded-xl border bg-[#191819]"
                                                        type="email"
                                                        name="email"
                                                        placeholder="Email Address"
                                                        defaultValue={profileDetails[0].email}
                                                        onChange={handleChange}
                                                    />

                                                    <input
                                                        className="p-2 mt-2 rounded-xl border bg-[#191819]"
                                                        type="phone"
                                                        name="phone"
                                                        placeholder="Phone number"
                                                        defaultValue={profileDetails[0]?.phone}
                                                        onChange={handleChange}
                                                    />
                                                </div>
                                                {/* <textarea
                                                className='rounded-xl w-full p-1 pl-5 mt-5 border bg-[#191819] h-24 '
                                                placeholder={'Bio. .. ...'}

                                            /> */}
                                                <div >
                                                    <input
                                                        className="rounded-xl w-full p pl-5 mt-5 border bg-[#191819] h-24"
                                                        type="text"
                                                        name="bio"
                                                        placeholder="Add yor bio. . . . "
                                                        defaultValue={profileDetails[0]?.bio}
                                                        onChange={handleChange}
                                                    />
                                                </div>
                                            </form>
                                            <div className='flex justify-end gap-10 pt-10'>
                                                <button className='text-black bg-[#FFFF1A] text-sm font-semibold xl:px-10 px-7 lg:px-3  py-2 rounded-xl' onClick={onSubmit}>Save</button>
                                                <button className='text-black bg-white text-sm font-semibold xl:px-10  lg:px-3 px-7 py-2 rounded-xl' onClick={() => onClose()}>Cancel</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>
                </div>
            </div>

            {/* UPDATE PICTURE MODAL */}

            {updatePicture ?
                <>
                    <div className='fixed  inset-0 bg-black bg-opacity-25 backdrop-blur-sm '>

                        <div className='max-h-full relative   overflow-y-scroll scrollbar-none top-28  flex justify-center items-center md:pt-10 pt-14'>
                            <div className='  md:pl-5 sm:pl-10 pl-16 md:pb-7 pb-6 md:pt-0 pt-40  ' onClick={() => setUpdatePicture(false)}> <BsArrowLeft size={24} /> </div>
                            <div className='bg-[#191819]  rounded text-white py-7 '>
                                <div className='w-[700px] h-[300px] flex justify-center items-center gap-32'>

                                    <div className=''>
                                        {image && image ? <>
                                            <img className='w-44 h-44 box-border   rounded-full object-cover ' src={image} alt="" />
                                        </>
                                            :
                                            <>
                                                <div className='bg-cover'>
                                                    <img className='rounded-full md:w-36 md:h-36 w-20 h-20  overflow-hidden' src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                                                </div>
                                            </>
                                        }
                                    </div>

                                    <div className='flex flex-col gap-8 justify-center items-center'>
                                        <div>
                                            <button className='bg-yellow-500 px-6  py-2 rounded-lg hover:bg-red-400'>
                                                <label className=' cursor-pointer'>
                                                    change profile image
                                                    <input
                                                        type="file"
                                                        name="Images"
                                                        id="fileUpload"
                                                        accept='image/*'
                                                        onChange={fileUpload}
                                                        className="w-0 h-0"
                                                    />
                                                </label>
                                            </button>
                                        </div>
                                        <div>
                                            <button className='bg-yellow-500 px-6  py-2 rounded-lg hover:bg-red-400 ' onClick={addProfilePic}>Submit Image</button>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </>
                :
                <>

                </>

            }

        </>

    )
}

export default EditUserModal