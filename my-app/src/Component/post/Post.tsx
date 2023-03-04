import React, { useState, useContext } from 'react'
import { BiDotsVerticalRounded } from "react-icons/bi";
import { MdCloudUpload } from "react-icons/md";
import { AiOutlineMessage } from "react-icons/ai";
import { AiFillLike } from "react-icons/ai";
import { BiShare } from "react-icons/bi";
import { useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import axiosinstance from '../../axios/axiosinstance';
import moment from 'moment';
import { UserContext } from '../../Pages/context/Context';
import { IoMdHeart, IoMdHeartEmpty } from 'react-icons/io';

import CommentModal from '../user-modal/CommentModal';
import { useDispatch } from 'react-redux/es/hooks/useDispatch';
import { passfriendDetails } from '../../redux/store/features/userSlice';
import ReportPostModal from '../user-modal/ReportPostModal';
import { like_post, post_details, view_post } from '../../services/UserApi';



const Post = () => {

    const navigate = useNavigate()
    const { user } = useContext(UserContext)
    const [commentModal, setCommentModal] = useState(false)
    const [postPassDetails, setPostPassDetails] = useState([])
    const [reportModal, setReportModal] = useState<boolean>(false)
    const [reportState, setReportState] = useState()
    const dispatch = useDispatch()

    if (user) {
        var userId = user.id
    }

    const { data, isLoading, refetch } = useQuery(["Id"], () =>
        // return axiosinstance.get("viewpost", {
        //     headers: {
        //         "x-access-token": localStorage.getItem("token"),
        //     },
        // }).then((res) => res.data)
        //     .catch((err) => {
        //         navigate("/error")
        //     })
        view_post()
    );

    // LIKE POST
    const likePost = async (postId: string, username: string, type: number, images: any) => {
        const userId = user.id
        const id = { postId, userId }
        // axios.post("http://localhost:4001/likepost", id, {
        //     headers: {
        //         "x-access-token": localStorage.getItem("token"),
        //     },
        // }).then((response) => {
        //     refetch()
        // }).catch((err) => {
        //     navigate('/error')
        // })
        const like_Post = await like_post(id)
        refetch()

    }

    // UNLIKE POST

    const UnlikePost = async (postId: string, username: string, type: number) => {
        const userId = user.id
        const id = { postId, userId }

        // axios.post("http://localhost:4001/likepost", id, {
        //     headers: {
        //         "x-access-token": localStorage.getItem("token"),
        //     },
        // }).then((response) => {
        //     refetch()
        // }).catch((err) => {
        //     navigate('/error')
        // })
        const like_Post = await like_post(id)
        refetch()
    }

    // OPEN COMMENT

    const openCommentModal = async(postId: any) => {
       
        // axios.get("http://localhost:4001/postdetails/" + postId, {
        //     headers: {
        //         "x-access-token": localStorage.getItem("token"),
        //     },
        // }).then((response) => {
        //     setCommentModal(!commentModal)
        //     setPostPassDetails(response.data)
        // }).catch((err) => {
        //     navigate('/error')
        // })
        const open_Comment_Modal = await post_details(postId)
        setCommentModal(!commentModal)
        setPostPassDetails(open_Comment_Modal)

    }

    // NAVIGATE TO FRIEND PROFILE
    const handleFriendProfile = (item: any) => {
        console.log("CLicked modal data", item.userId._id);
        if (item.userId._id === userId) {
            navigate("/profile")
        } else {
            dispatch(passfriendDetails(item.userId))
            navigate("/fried-Profile")
        }
    }

    //REPORT POST

    const reportTogle = (postId: any) => {
        console.log("Modal report", postId);

        setReportModal(true);
        setReportState(postId)
    }

    return (
        <>
            <div className='md:hidden px-3 h-auto pt-4 space-y-6 ' >

                <div className='max-h-screen overflow-y-scroll scrollbar-none space-y-5 pb-44'>
                    {data?.map((post: any, index: number) => (
                        <>
                            <div className=' box-content h-auto  bg-[#2A2A2A] rounded-3xl px-4 py-3 '>
                                <div className="container mx-auto grid grid-cols-4 xl:grid-cols-3 pt-6 gap-8">
                                    <div className=' col-span-1 pl-' onClick={() => handleFriendProfile(post)}>
                                        {post.userId.Images ? <img className='w-14 h-14 box-border border-2 bg-red-100 rounded-2xl object-cover ' src={`/images/${post.userId.Images}`} alt="profilepic" />
                                            : <img className='w-14 h-14 box-border border-2 bg-red-100 rounded-2xl object-cover '
                                                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQA0BrKaI0cwXl3-wpk6Fu2gMbrP1LKk6waAlhKhrTzTobcVlka34MsNf4Yp3k1tG4ufTY&usqp=CAU' alt="profile pic" />
                                        }
                                    </div>
                                    <div className='-ml-4 col-span-2 space-y-3' >
                                        <div>
                                            <p className='text-[#7e7e7e] text-sm ' onClick={() => handleFriendProfile(post)}>{post.userId.name}</p>
                                        </div>
                                        <div className=''>
                                            <h3 className='text-white text-lg font-semibold'>{post.userId.username}</h3>
                                        </div>
                                    </div>
                                    <div className=' col-span-1 flex-row space-y-3 '>
                                        <div className='text-white' onClick={() => reportTogle(post._id)}>
                                            <BiDotsVerticalRounded className='ml-8' size={24} />
                                        </div>
                                        <div className=''>
                                            <p className='text-center   md:text-sm sm:text-xs text-xs text-[#FFFF1A]'> {moment(post.createdAt).fromNow()}</p>
                                        </div>
                                    </div>
                                </div>
                                {/* PARAGRAPG & IMAGE */}
                                <div className='pt-6 '>
                                    <p className='text-justify text-white text-sm'>
                                        {post.caption}
                                    </p>
                                    {/* IMAGE  */}
                                    <div className='pt-6 '>
                                        <div className='box-border h- w-full '>
                                            <img className='rounded-3xl h-[400px] w-full object-cover ' src={`/images/${post.Images}`} alt="" />
                                        </div>
                                    </div>
                                </div>

                                {/* USER SECTION */}

                                <div className='grid grid-cols-3 space-x-5 pt-4 text-white px-2'>
                                    <div className='flex space-x-8 col-span-1 py-3'>
                                        <div className='flex'>
                                            <div>
                                                {
                                                    post.likes.includes(userId) ?
                                                        <>
                                                            <button className='i' onClick={() => UnlikePost(post._id, post.userId.username, 1)}><IoMdHeart size={26} /></button>
                                                        </>
                                                        :
                                                        <>
                                                            <button className='i' onClick={() => likePost(post._id, post.userId.username, 1, post.Images)}><IoMdHeartEmpty size={26} /></button>
                                                        </>
                                                }
                                            </div>
                                            <div className='font-bold text-white pl-3'>
                                                {post.likesCount ? <> {post.likesCount}Like </> : <> </>}
                                            </div>

                                        </div>
                                        <div onClick={() => openCommentModal(post._id)} className="flex gap-2 text-center" >

                                            <AiOutlineMessage size={28} />
                                            {post?.comment[0]?.comment?.length === 0 ? 'comments' : post?.comment[0]?.comment?.length}
                                        </div>
                                    </div>
                                    {/* <div className='flex justify-center items col-span-2  items-center'><BiShare className='' size={28} /></div> */}
                                </div>
                                {/* <div className='font-bold text-white pl-3'>
                                    {post.likesCount ? <> {post.likesCount} Like </> : <> </>}
                                </div> */}
                            </div>

                        </>
                    ))}

                </div>
            </div>

            <CommentModal postPassDetails={postPassDetails} data={data} onClose={() => setCommentModal(false)} isVisible={commentModal}>

            </CommentModal>

            <ReportPostModal reportState={reportState} isVisible={reportModal} onClose={() => setReportModal(false)}>

            </ReportPostModal>
        </>
    )
}

export default Post