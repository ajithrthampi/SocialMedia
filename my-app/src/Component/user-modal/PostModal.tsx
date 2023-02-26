// import { log } from 'console';
import React, { useEffect, useState } from 'react'
import { IoMdClose } from "react-icons/io";
import { BsArrowLeft } from "react-icons/bs";
import { GoLocation } from "react-icons/go";
import { IoMdPhotos } from "react-icons/io";
import { useContext } from 'react'
import {
    MdFastfood,
    MdCloudUpload,
    MdDelete,
    MdFoodBank,
    MdAttachMoney,
} from 'react-icons/md';
import { UserContext } from '../../Pages/context/Context';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import jwtDecode from 'jwt-decode';




interface modal {
    isVisible: boolean
    onClose: () => void
    children: any

}

const PostModal = ({ isVisible, onClose, }: modal) => {

    const [image, setImages] = useState<string>()
    const { user } = useContext(UserContext)
    const [change, setChange] = useState('')
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const navigate = useNavigate()
    const [imageForm, setImageForm] = useState<any>({
        caption: '',
        Images: ''
    })
    const [userIdData, setUserIdData] = useState<any>()
    const [state, setState] = useState<boolean>()
  
  
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

    if (user) {
        var userId = user.id
    }



    const fileUpload = (e: any) => {
        const image = e.target.files[0]
        // console.log("Image Uploaded", image);
        setImageForm({
            ...imageForm,
            Images: image
        })
        setImages(URL.createObjectURL(e.target.files[0]))
    }
    // console.log(" Imageform", imageForm);

    const deleteImage = () => {
        setImages("");
    }

    const handleChange = (e: any) => {
        e.preventDefault()
        const { name, value } = e.target
        setImageForm({
            ...imageForm,
            [name]: value
        })
    }

    {/*  ADD POST */ }

    // const addPost = () => {
    //     // e.preventDefault()
    //     const PostData = new FormData();
    //     for (let key in imageForm) {
    //         PostData.append(key, imageForm[key])
    //     }
    //     PostData.append("user", user.id)
    //     const { caption, Images } = imageForm
    //     if (caption || Images) {
    //         axios.post("http://localhost:4001/addpost", PostData, {
    //             headers: {
    //                 "x-access-token": localStorage.getItem("token"),
    //             },
    //         }).then((response) => {
    //             // setChange(response)
    //             onClose()
    //             setImages("")
    //         }).catch((err) => {
    //             navigate('/error')
    //         })
    //     }
    // }

    useEffect(() => {
       if(!isLoading) return;
       const PostData = new FormData();
       for (let key in imageForm) {
           PostData.append(key, imageForm[key])
       }
       PostData.append("user", userIdData)
       const { caption, Images } = imageForm
       if (caption || Images) {
           axios.post("http://localhost:4001/addpost", PostData, {
               headers: {
                   "x-access-token": localStorage.getItem("token"),
               },
           }).then((response) => {
               // setChange(response)
            //    setImages("")
               onClose()
               
           }).catch((err) => {
               navigate('/error')
           })
       }
    },[ isLoading ,state])

    const handleClick = (event:any) => {
        event.preventDefault()
        setIsLoading(true)
        setImages("")
    }

    if (!isVisible) return null


    return (
        <>
            <div className='fixed  inset-0 bg-black bg-opacity-25 backdrop-blur-sm
           flex justify-center items-center '>

                <div className='w-[1000px] flex flex-col'>
                    <button className='text-white text-xl place-self-end'
                        onClick={() => onClose()} >
                        <IoMdClose size={25} />
                    </button>
                    <div className='bg-[#191819]  rounded text-white'>
                        <div className='p-4 '> <BsArrowLeft size={24} /> </div>
                        <div className="mt- text-xs border-b border-[#5b5858] py-  text-[#002D74]"></div>
                        <div className='grid grid-cols-2    '>

                            {/* IMAGE PLACING */}


                            <div className="aspect-w-16 aspect-h-16">
                                {/* <img className='object-cover' src="https://images.pexels.com/photos/1982852/pexels-photo-1982852.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" /> */}
                                {/* <div className='group flex justify-center items-center flex-col
                                  border-2 border-dotted ed border-gray-300 w-full h-225 md:h--420 
                                  curser-pointer rounded-lg'> */}
                                {!image ?
                                    <label className='w-full h-full flex flex-col items-center
                                        justify-center cursor-pointer'>
                                        <div className='w-full h-full flex flex-col items-center
                                          justify-center gap-2'>
                                            <IoMdPhotos className='text-gray-500 text-3xl hover:text-gray-700 ' />
                                            <p className='text-gray-500  hover:text-gray-700'>
                                                Click Here to upload
                                            </p>
                                        </div>
                                        <input
                                            type="file"
                                            name="uploadimage"
                                            accept='image/*'
                                            onChange={fileUpload}
                                            className="w-0 h-0"
                                        />
                                    </label>
                                    :
                                    <div className="aspect-w-16 aspect-h-16 ">
                                        <div>
                                            <img src={image} alt="uploaded image"
                                                className='w-full h-full object-cover' />
                                        </div>
                                        <div className='w-5 h-5 '>
                                            <button type="button" className='absolute top-1 left-
                                             right-3  p-3 rounded-full bg-red-400 text-xl
                                             cursor-pointer outline-none hover:shadow-md duration-500
                                             transition-all ease-in-out'
                                                onClick={deleteImage}
                                            >
                                                <MdDelete className='text-white ' />
                                            </button>
                                        </div>
                                    </div>

                                }
                                {/* </div> */}
                            </div>

                            <div>
                                <div className='flex items-center p-3 gap-3'>
                                    <div className='w-12 h-12 rounded-full overflow-hidden cursor-pointer'>
                                        <img className='object-cove' src="https://images.pexels.com/photos/4890733/pexels-photo-4890733.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                            alt="" />
                                    </div>
                                    <div>@ajithrthampi</div>
                                </div>
                                <div>
                                    <textarea
                                        id="caption-address"
                                        name="caption"
                                        className='w-full p-1 pl-5 mt-2 h-48'
                                        placeholder={'What on your mind!!!'}
                                        rows={5}
                                        cols={20}
                                        onChange={handleChange}
                                        style={{ backgroundColor: "#313131" }}
                                    />
                                </div>
                                {/* <div className='flex items-center justify-between p-3'>
                                    <div className=''>Add Location</div>
                                    <div><GoLocation /></div>
                                </div> */}

                                <div className="mt-20 p-3">
                                    <button onClick={handleClick} className='text-black font-semibold bg-[#FFFF1A] px-6 py-1 rounded-xl'>
                                        Share
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default PostModal