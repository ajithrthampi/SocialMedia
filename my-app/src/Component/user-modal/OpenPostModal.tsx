import React, { useContext, useEffect, useState } from 'react'
import { BsArrowLeft } from 'react-icons/bs'
import { HiOutlineDotsHorizontal } from 'react-icons/hi'
import { IoMdClose } from 'react-icons/io'
import axiosinstance from '../../axios/axiosinstance'
import { UserContext } from '../../Pages/context/Context'
import DeleteCommentPost from './DeleteCommentPost'
import DeleteModal from './DeleteModal'
import EachPostModalDetails from './EachPostModalDetails'
import { useSelector } from 'react-redux/es/hooks/useSelector'
import jwtDecode from 'jwt-decode'
import { BiDotsVerticalRounded } from 'react-icons/bi'

interface openPost {
    isVisible: boolean
    children: any
    onClose: () => void
    postPassDetails: any
}

const OpenPostModal = ({ isVisible, onClose, children, postPassDetails }: openPost) => {

    const updateDeletePost = useSelector((state: any) => state.userDetails.value.closeDeleteUpdateMOdal)
   
    

    const [userName, setUserName] = useState([])
    const [comment, setComment] = useState<any>()
    const [getComment, setGetComment] = useState([])
    const [commentStatus, setCommentStatus] = useState<any>()
    const [modalDelete, setModalDelete] = useState<boolean>(false)
    const [state, setState] = useState<any>()
    const [postData, setPostData] = useState<any>()
    const space = /\s/
    const [eachPost, setEachPost] = useState<boolean>(false)
    const { user } = useContext(UserContext)
    const [statee, setStatee] = useState(false)
    const [userIdData, setUserIdData] = useState<any>()

    if (user) {
        var userId = user?.id
    }

    // const isFriendPostModals = useSelector((state: any) => state.userDetails.value.friendDetails)
    // console.log("is modalll datalkadlsf.fds//.././././",is   s);
    console.log("?????????????????reduc", postPassDetails);
    console.log("//////////////////////",userId);

    const isFriendEachPost = useSelector((state: any) => state.userDetails.value.friendEachPost)
    const isUpdateCaption = useSelector((state: any) => state.userDetails.value.updateCaptionModal)
    const isPostDetails = useSelector((state: any) => state.userDetails.value.PostDetails)
    // console.log("isUpdateCaptionisUpdateCaption",isUpdateCaption);

    useEffect(() => {
        try {
            const data = localStorage.getItem('token')
            if (data != null) {
                const userData: any = jwtDecode(data)
                const userId = userData?.id
                setUserIdData(userId)
                setStatee(true)
            }
        } catch (error) {
            console.log("user id rreor", error);
        }
    }, [statee])
    // console.log("userprofile ....userIdData userIdData", userIdData);

    //COMMENT ONCJANGE

    const handleComment = (e: any) => {
        const { name, value } = e.target
        setComment({
            ...comment,
            [name]: value
        })
    }

    // ADD COMMENT

    const submitComment = (postId: string, type: number) => {
        const Images = postPassDetails.Images
        const userId = user?.id
        const id = { userId, postId, comment }

        // console.log(userId, postId, comment, "scsdcscscsssddddddddd............");
        console.log("Idid", id);


        if (comment) {
            axiosinstance.post("/comment", id, {
                headers: {
                    "x-access-token": localStorage.getItem("token"),
                },
            }).then((response) => {
                setComment("")

                setCommentStatus(response)
                console.log("Submittded success data", response.data);

            }).catch((err) => {
                // navigate('/error')
                console.log(err);

            })
        }
        setComment("")
    }

    useEffect(() => {
        const Id = postPassDetails.userId
        axiosinstance.get("/chatusers/" + Id, {
            headers: {
                "x-access-token": localStorage.getItem("token"),
            },
        }).then((response) => {
            setUserName(response.data.username)
            console.log("logggggggg", response);
            // console.log("........................................");
        }).catch((err) => {
            // navigate('/error')
            // console.log("xxxxxxxxxxxxxxxxxx.xxxxxxxxxxxxxxxxxxxxxxxxxxxx");

            console.log(err);
        })
    }, [postPassDetails, isUpdateCaption])
    // console.log("logggggggg", userName);

    useEffect(() => {
        const postId = postPassDetails._id
        axiosinstance.get("/getcomment/" + postId, {
            headers: {
                "x-access-token": localStorage.getItem("token"),
            },
        }).then((response) => {
            setGetComment(response.data)

            console.log("reponse....", response.data);

        }).catch((err) => {
            // navigate('/error')'
            console.log(err);
        })
    }, [postPassDetails, modalDelete, commentStatus, eachPost, state, isUpdateCaption])

    console.log("Comments..,.,.,.,.", getComment);


    const openModalData = (commentId: any) => {
        setModalDelete(true)
        setState(commentId)
    }
    const EachPostModal = (postId: any) => {
        console.log("Vvvvvvvvvvvvvvdataaa", postId);
        setEachPost(true)
        setPostData(postId)
    }


    if (!isVisible) return null
    return (
        <>

            <div className='fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm
               md:flex justify-center items-center md:pt-20 '>

                <div className='w-[1000px] fle flex-col hidden md:block'>
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
                                            className='w-full h-full object-cover'
                                        />
                                    </div>

                                </div>

                            </div>

                            {/* TOP IMAGE */}
                            <div className='w-screen md:w-auto'>

                                <div>
                                    <div className='flex items-center p-3 gap-3 justify-between '>
                                        <div className='flex justify-center items-center  gap-3'>
                                            <div className='w-9 h-9 rounded-full overflow-hidden cursor-pointer'>
                                                <img
                                                    className='object-cove'
                                                    src="https://images.pexels.com/photos/4890733/pexels-photo-4890733.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                                    alt="" />
                                            </div>
                                            <div className='text-sm'>{userName}</div>
                                        </div>
                                        {userId=== postPassDetails.userId ?
                                            <>
                                                <div className='' onClick={() => EachPostModal(postPassDetails._id)}>
                                                    <HiOutlineDotsHorizontal size={20} />
                                                </div>
                                            </>
                                            :
                                            <>

                                            </>
                                        }

                                    </div>

                                    <div className="mt- text-xs border-b border-[#5b5858] py-  text-[#002D74]"></div>

                                    <div className='flex items-center p-3 gap-3'>
                                        <div className='w-9 h-9 rounded-full overflow-hidden cursor-pointer'>
                                            <img
                                                className='object-cove'
                                                src="https://images.pexels.com/photos/4890733/pexels-photo-4890733.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                                alt="" />
                                        </div>
                                        <div className='text-sm'> {userName}</div>
                                        <div className='text-sm'>{isPostDetails.caption}</div>
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
                                                                {/* {comment.comment.userId === user.id ? */}
                                                                {/* <> */}
                                                                <div className='cursor-pointer text-[#191819] hover:text-white '

                                                                    onClick={() => openModalData(comment.comment._id)}
                                                                >
                                                                    <HiOutlineDotsHorizontal size={17} />
                                                                </div>
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
                                            ''
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

                {/* Mobile Screen */}

                <div className='w-full bg-[#2A2A2A]  h-screen md:hidden'>
                    <div className='w-full bg-black h-10 flex  items-center'>
                        <div onClick={() => onClose()} className="pl-3">
                            <BsArrowLeft size={24} className="text-white" />
                        </div>
                    </div>
                    <div className='w-full h-14 bg-[#2A2A2A]  items-center p-2 '>
                        <div className=' flex items-center justify-between'>
                            <div className='flex gap-3 items-center '>
                                <img
                                    className='object-cover w-10 h-10 rounded-full '
                                    src="https://images.pexels.com/photos/4890733/pexels-photo-4890733.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                    alt="" />
                                <div>
                                    <div className='text-sm text-white'>name</div>
                                    <div className='text-sm text-[#908c8c]'>{userName}</div>
                                </div>
                            </div>
                            <div className='flex  ' onClick={() => EachPostModal(postPassDetails._id)}>
                                <BiDotsVerticalRounded size={22} className="text-white" />
                            </div>

                        </div>
                        {/* <div className=" text-xs  border border-[#5b5858] w-ful  mt-2 text-[#002D74]"></div>/ */}
                        <p className='text-sm my-3 pl-2 text-white '>
                            {postPassDetails.caption}
                        </p>
                    </div>

                    <div>
                        <div className='pt-10 px-3 '>
                            <div className='box-border  w-full '>
                                <img className='rounded-3xl h-[370px] w-full object-cover ' src={`/images/${postPassDetails.Images}`} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <DeleteCommentPost isVisible={modalDelete} onClose={() => setModalDelete(false)} state={state} postPassDetails={postPassDetails}>

            </DeleteCommentPost>

            <EachPostModalDetails isVisible={eachPost} onClose={() => setEachPost(false)} onClosee={() => setModalDelete(false)} postData={postData} postPassDetails={postPassDetails}>

            </EachPostModalDetails>

        </>
    )
}

export default OpenPostModal