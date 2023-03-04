import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React, { useContext, useState, useEffect } from 'react'
import { AiFillDelete } from 'react-icons/ai'
import { BiDotsHorizontalRounded } from 'react-icons/bi'
import { BsArrowLeft, BsThreeDots } from 'react-icons/bs'
import { GoLocation } from 'react-icons/go'
import { HiOutlineDotsHorizontal } from 'react-icons/hi'
import { IoMdClose, IoMdPhotos } from 'react-icons/io'
import { MdDelete } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'
import axiosinstance from '../../axios/axiosinstance'
import { UserContext } from '../../Pages/context/Context'
import { chat_user, comment_comment, get_comment, view_Profile_Details } from '../../services/UserApi'
import DeleteModal from './DeleteModal'

interface modal {
    isVisible: boolean
    onClose: () => void
    children: any
    postPassDetails: any
    data: any


}

const CommentModal = ({ isVisible, onClose, postPassDetails, data }: modal) => {
    // console.log("postPassDetails", postPassDetails);

    const [core, setCore] = useState()
    const [comment, setComment] = useState<any>()
    const [userName, setUserName] = useState([])
    const [commentStatus, setCommentStatus] = useState<any>()
    const [getComment, setGetComment] = useState([])
    const [modalDelete, setModalDelete] = useState<boolean>(false)
    const [state, setState] = useState<any>()
    const { user } = useContext(UserContext)
    const space = /\s/
    const navigate = useNavigate()


    // console.log("Comment  data", data);


    // USER NAME

    useEffect(() => {
        const Id = postPassDetails.userId
        // axiosinstance.get("/chatusers/" + Id, {
        //     headers: {
        //         "x-access-token": localStorage.getItem("token"),
        //     },
        // }).then((response) => {
        //     setUserName(response.data.username)
        //     // console.log("logggggggg", response);
        //     // console.log("........................................");
        // }).catch((err) => {
        //     // navigate('/error')
        //     // console.log("xxxxxxxxxxxxxxxxxx.xxxxxxxxxxxxxxxxxxxxxxxxxxxx");
        //     console.log(err);
        // })
        chat_USers(Id)
    }, [postPassDetails])

    const chat_USers = async(Id:any) => {
      const cgat_users = await chat_user(Id)
      if(cgat_users){
        setUserName(cgat_users.username)
      }
    }


    // View Post

    // useEffect(() => {
    //     try {
    //         const userId = user.id
    //         axiosinstance.get("/viewprofiledetails/" + userId, {
    //             headers: {
    //                 "x-access-token": localStorage.getItem("token"),
    //             },
    //         }).then((response) => {
    //             // console.log(response.data[0].name, 'yesyesyesyes');
    //             setCore(response.data)

    //         })
    //     } catch (err) {
    //         // navigate('/error')
    //         console.log("Eror message...", err);
    //     }

    //     // const userId = user.id
    //     // view_ProfileDetailss(userId)
    // }, [user])

    // // const view_ProfileDetailss = async(userId:any) => {
    // //   const viewUserProfileDetails = await view_Profile_Details(userId)
    // //   if(viewUserProfileDetails){
    // //     setCore(viewUserProfileDetails)
    // //   }
    // // }



    // COMMENT ONCHANGE
    const handleComment = (e: any) => {
        const { name, value } = e.target
        setComment({
            ...comment,
            [name]: value
        })
    }

    const submitComment = async(postId: string, type: number) => {
        const Images = postPassDetails.Images
        const userId = user.id
        const id = { userId, postId, comment }

        // console.log(userId, postId, comment, "scsdcscscsssddddddddd............");

        if (comment) {
            // axiosinstance.post("/comment", id, {
            //     headers: {
            //         "x-access-token": localStorage.getItem("token"),
            //     },
            // }).then((response) => {
            //     setComment("")

            //     setCommentStatus(response)
            //     // console.log("Submittded success data", response.data);

            // }).catch((err) => {
            //     navigate('/error')
            // })
           
                const addComment =  await comment_comment(id)
                if(addComment){
                    setComment("")
                    setCommentStatus(addComment)
                }
        }
       
    }

    //  GET COMMENT

    useEffect(() => {
        const postId = postPassDetails._id
        // axiosinstance.get("/getcomment/" + postId, {
        //     headers: {
        //         "x-access-token": localStorage.getItem("token"),
        //     },
        // }).then((response) => {
        //     setGetComment(response.data)

        //     // console.log("..................................................");
        //     // console.log("reponse....", response.data);


        // }).catch((err) => {
        //     // navigate('/error')'
        //     console.log(err);

        //     console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx");
        // })

        getAllComment(postId)
    }, [postPassDetails, commentStatus, modalDelete])

    const getAllComment = async(postId:any) => {
       const allComment = await get_comment(postId)
       if(allComment){
        setGetComment(allComment)

       }
    }


    const openModalData = (commentId: any) => {
        setModalDelete(true)
        setState(commentId)
        console.log("commentId",commentId);
        
    }
    // console.log(".datataTTATATATATTATATATATATTATATA",state);


    // console.log("get comment Commented reponse data", getComment);

    if (!isVisible) return null
    return (
        <>

            <div className='fixed  inset-0 bg-black bg-opacity-25 backdrop-blur-sm
               md:flex justify-center items-center pt-20 md:pt-0 z-20'>

                <div className='md:w-[1000px]  flex flex-col'>
                    <button className='text-white text-xl place-self-end'
                        onClick={() => onClose()} >
                        <IoMdClose size={25} />
                    </button>
                    <div className='bg-[#191819]  rounded text-white'>
                        <div className='p-4 ' >
                            <div onClick={() => onClose()} className="cursor-pointer" >
                                <BsArrowLeft size={24} />
                            </div>
                        </div>
                        <div className="mt- text-xs border-b border-[#5b5858] py-  text-[#002D74]"></div>
                        <div className='grid grid-cols-2    '>

                            {/* IMAGE PLACING */}
                            <div className="hidden md:block aspect-w-16 aspect-h-16">

                                <div className="aspect-w-16 aspect-h-16 ">
                                    <div>
                                        <img
                                            src={`/images/${postPassDetails.Images}`}
                                            alt="uploaded image"
                                            className='w-full h-full object-cover' />
                                    </div>

                                </div>

                            </div>

                            {/* TOP IMAGE */}
                            <div className='w-screen md:w-auto'>

                                <div>
                                    <div className='flex items-center p-3 gap-3 '>
                                        <div className='w-9 h-9 rounded-full overflow-hidden cursor-pointer'>
                                            <img
                                                className='object-cove'
                                                src="https://images.pexels.com/photos/4890733/pexels-photo-4890733.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                                alt="" />
                                        </div>
                                        <div className='text-sm'>{userName}</div>
                                    </div>

                                    <div className="mt- text-xs border-b border-[#5b5858] py-  text-[#002D74]"></div>

                                    <div className='flex items-center p-3 gap-3'>
                                        <div className='w-9 h-9 rounded-full overflow-hidden cursor-pointer'>
                                            <img
                                                className='object-cove'
                                                src="https://images.pexels.com/photos/4890733/pexels-photo-4890733.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                                alt="" />
                                        </div>
                                        <div className='text-sm'> {userName} </div>
                                        <div className='text-sm'>{postPassDetails.caption}</div>
                                    </div>
                                </div>


                                <div>
                                    <div className='h-72 max-h-screen overflow-y-scroll scrollbar-none'>
                                        <div >
                                            {
                                                getComment?.map((comment: any, index: number) => (
                                                    <div key={index} className='flex'>
                                                        <div key={index} className=' flex items-cente gap-3 pl-3 p-2' >
                                                            <div className='w-9 h-9 rounded-full overflow-hidden cursor-pointer'>
                                                                <img src={`/images/${comment.commentList.Images}`} alt="" />
                                                            </div>
                                                            <div className='text-xs font-bold space-y-2 '>
                                                                <div className=''>
                                                                    {comment.commentList.username}
                                                                </div>
                                                                <div className='text-xs text-gray-500'>1h</div>

                                                            </div>
                                                            <div className='text-xs w-80 space-y-2'>
                                                                <div>{comment.comment.comment}</div>
                                                                {comment.comment.userId === user.id ?
                                                                    <>
                                                                        <div className='cursor-pointer text-[#191819] hover:text-white '
                                                                            // onClick={() => setModalDelete(true)}
                                                                            onClick={() => openModalData(comment.comment._id)}
                                                                        >
                                                                            <HiOutlineDotsHorizontal size={17} />
                                                                        </div>
                                                                    </>
                                                                    :
                                                                    <>

                                                                    </>}

                                                            </div>
                                                        </div>
                                                    </div>
                                                ))
                                            }
                                        </div>
                                    </div>
                                </div>

                                <div className=" p-3 ">
                                    <div className=" text-xs border border-[#5b5858]  text-[#002D74]"></div>
                                    <div className='mr-2 flex flex-r gap-3'>
                                        <input
                                            type="text"
                                            name='comment'
                                            className='w-full p-1 pl-5 mt-2 h-10'
                                            placeholder='Add a comment'
                                            defaultValue=""
                                            onChange={handleComment}
                                            style={{ backgroundColor: "#313131" }}
                                        />
                                        {!comment?.comment || space.test(comment?.comment) === true ?
                                            <>

                                            </>
                                            :

                                            <button className='text-white pt-5' onClick={() => submitComment(postPassDetails._id, 2)}>
                                                POST
                                            </button>

                                        }

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className='z-10'> */}
                <DeleteModal isVisible={modalDelete} onClose={() => setModalDelete(false)} state={state} postPassDetails={postPassDetails}>

                </DeleteModal>
            {/* </div> */}


        </>
    )
}

export default CommentModal