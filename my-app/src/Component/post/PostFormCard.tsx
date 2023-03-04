import React, { useContext, useEffect, useState } from 'react'
import { HiHome } from "react-icons/hi";
import { AiOutlineMessage } from "react-icons/ai";
import { MdOutlineNotifications } from "react-icons/md";
import { BiSearch } from "react-icons/bi";
import { BsChat, BsPeople } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { FiLogOut } from "react-icons/fi";
import { FcStackOfPhotos } from "react-icons/fc";
import { FcVideoCall } from "react-icons/fc";
import { AiOutlineHeart } from "react-icons/ai";
import { TbBrandTelegram } from "react-icons/tb";
import { IoMdHeart, IoMdHeartEmpty, IoMdPhotos } from "react-icons/io";
import { BsThreeDotsVertical } from "react-icons/bs";
import { Link, useNavigate } from 'react-router-dom';
import Sidebar from '../sidebar/Sidebar';
import { AiFillStar } from "react-icons/ai";
import PostModal from '../user-modal/PostModal';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { UserContext } from '../../Pages/context/Context';
import CommentModal from '../user-modal/CommentModal';
// import { format } from 'time-ago';
import ReactTimeAgo from 'react-time-ago';
import moment from 'moment';
import axiosinstance from '../../axios/axiosinstance';
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import SkeletonElement from '../../skeleton/SkeletonElement';
import ImageUploading from 'react-images-uploading';
import jwtDecode from 'jwt-decode';
import ReportPostModal from '../user-modal/ReportPostModal';
import ThirdFormDetails from './ThirdFormDetails';
import { useDispatch } from 'react-redux/es/hooks/useDispatch';
import { NotifyUpdate, passfriendDetails } from '../../redux/store/features/userSlice';
import { useSelector } from 'react-redux';
import { add_notification, following_count, like_post, users_users, view_all_following, view_post, view_Profile_Details } from '../../services/UserApi';



function classNames(...classes: any) {
    return classes.filter(Boolean).join(' ')

}


interface Socket_io {
    socket: any
}

const PostFormCard = ({ socket }: Socket_io) => {

    const [viewPost, setViewPost] = useState([])
    const [postModal, setPostModal] = useState(false)
    const [reportModal, setReportModal] = useState<boolean>(false)
    const [suggestionUser, setSuggestionUser] = useState([])
    const [commentModal, setCommentModal] = useState(false)
    const [likeChange, setLikeChange] = useState<any>()
    const [postPassDetails, setPostPassDetails] = useState([])
    const [profilePosts, setProfilePosts] = useState([])
    const [profileDetails, setProfileDetails] = useState<any>()
    const [core, setCore] = useState()
    const [followUser, setFollowUser] = useState([])
    const [viewAllFollowing, setViewAllFollowing] = useState<any>()
    const [following, setfFollowing] = useState<any>()
    const [currentUserId, setCurrentUserId] = useState()
    const [followers, setFollowers] = useState<any>()
    const [reportState, setReportState] = useState()
    const navigate = useNavigate()
    const [time, setTime] = useState<any>()
    const { user } = useContext(UserContext)
    const dispatch = useDispatch()

    const [userIdData, setUserIdData] = useState<any>()
    const [state, setState] = useState<boolean>()

    const notifyUpdate = useSelector((state:any) => state.userDetails.value.notifi)
    // console.log('notifyUpdate.,.,/./,/.,/',notifyUpdate);
    

    console.log("USer, user", user);

    if (user) {
        var userId = user?.id
    }

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
    // console.log("Profule details", profileDetails);

    // FETCHING POST

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
    // console.log("jquery dat", data)

    // SUGGESTION USRER DETAILS

    useEffect(() => {
        // axiosinstance.get("/users", {
        //     headers: {
        //         "x-access-token": localStorage.getItem("token"),
        //     },
        // }).then((response) => {
        //     refetch()
        //     // console.log("User redponce./././././././././", response);
        //     setSuggestionUser(response.data)
        //     refetch()
        // }).catch((err) => {
        //     navigate('/error')
        // })
        userDetsils()
    }, [user])
    
    const userDetsils = async () => {
        const user_details = await users_users()
        setSuggestionUser(user_details)
        refetch()
    }

    




    //  LIKE POST

    const likePost = async (postId: string, username: string, type: number, Images: any, postOwnerId: any, DP: any) => {
        const userId = user?.id
        const id = { postId, userId }
        // setTimeout( async () => {
        let details = {
            receiverId: postOwnerId,
            userName: username,
            type: "liked",
            userDp: DP,
            read: false
        }
        // axiosinstance.post("/likepost", id, {
        //     headers: {
        //         "x-access-token": localStorage.getItem("token"),
        //     },
        // })
        const like_Post = await like_post(id)
        .then(async (response) => {
            socket?.emit("sendNotification", details)
            let notifyDetails = {
                receiverId: postOwnerId,
                senderId: userId,
                postId: postId,
                type: "liked",
            }
            refetch()
            // CREATING NOTIFICATION

            try {
                if (postOwnerId !== userId) {
                    // await create_notification(notifyDetails)
                    // axiosinstance.post("/addnotification",notifyDetails, {
                    //     headers: {
                    //         "x-access-token": localStorage.getItem("token"),
                    //     },
                    // })
                    const get_Notification = await add_notification(notifyDetails)
                    dispatch(NotifyUpdate(!notifyUpdate))
                }
            } catch (error) {
                console.log(error, 'notification api error')
            }

        }).catch((err) => {
            navigate('/error')
        })
        // },1000)

    }

    //  UNLIKE POST

    const UnlikePost = (postId: string, username: string, type: number) => {
        // const userId = user.id
        const id = { postId, userId }

        axios.post("http://localhost:4001/likepost", id, {
            headers: {
                "x-access-token": localStorage.getItem("token"),
            },
        }).then((response) => {
            refetch()
        }).catch((err) => {
            navigate('/error')
        })

    }

    // COMMENT MODAL

    const openCommentModal = (postId: any) => {
        // console.log(postId, 'id in comment click');
        axios.get("http://localhost:4001/postdetails/" + postId, {
            headers: {
                "x-access-token": localStorage.getItem("token"),
            },
        }).then((response) => {
            setCommentModal(!commentModal)
            setPostPassDetails(response.data)
            refetch()
        }).catch((err) => {
            navigate('/error')
        })

    }

    // USER DATA

    useEffect(() => {
        // try {
        //     const userId = user.id
        //     axiosinstance.get("/viewprofiledetails/" + userId, {
        //         headers: {
        //             "x-access-token": localStorage.getItem("token"),
        //         },
        //     }).then((response) => {
        //         console.log(response.data[0].name, 'yesyesyesyes');
        //         setProfileDetails(response.data)
        //         refetch()

        //     })
        // } catch (err) {
        //     // navigate('/error')
        //     console.log("Eror message...", err);

        // }
        // viewProfileDetails(userId)
        viewProfileDetails(userId)
    }, [user, commentModal])

    const viewProfileDetails = async (userId:any) => {
        const viewProfileDetailsResponce = await view_Profile_Details(userId)
        setProfileDetails(viewProfileDetailsResponce)
        refetch()
     }

     console.log("nnnnnnnnnnnnnnnnnnnnnnnnnn",profileDetails);
     

    // FOLLOW FRIEND

    const follow = (friendFollowId: any) => {
        const userId = user?.id
        const friendId = friendFollowId
        try {
            const id = { userId, friendId }
            axiosinstance.post("/follow", id, {
                headers: {
                    "x-access-token": localStorage.getItem("token"),
                },
            }).then((response) => {
                if (response.data.msg == "follow") {
                    setFollowUser(response.data.msg)
                    // refetch()
                } else {
                    setFollowUser(response.data.msg)
                }
            })
        } catch (err) {
            navigate('/error')
        }
    }

    // console.log("Follow userr.........,,..,.,.,,////",followUser);

    // VIEW ALL FOLLOWERS


    useEffect(() => {
        const data = localStorage.getItem('token')
        if (data != null) {
            const userData: any = jwtDecode(data)
            const userId = userData?.id
            ViewAllFollowing(userId)
        }

    }, [user, followUser,])

    const ViewAllFollowing = async(userId: any) => {
        // axiosinstance.get("/viewallfollowing/" + userId, {
        //     headers: {
        //         "x-access-token": localStorage.getItem("token"),
        //     },
        // }).then((response) => {
        //     // console.log("rrrrrrrrrrreeeeeeeeeeeeddddddddddd",response.data);
        //     setViewAllFollowing(response.data.following)
        //     // refetch()
        // }).catch((err) => {
        //     // navigate('/error')
        //     console.log(err);
        // })
        const viewFollowing = await view_all_following(userId)
        setViewAllFollowing(viewFollowing)
    }


    useEffect(() => {
        const token = localStorage.getItem('token')
        if (token != null) {
            const tokenData: any = jwtDecode(token)
            setCurrentUserId(tokenData?.id)
            //   dispatch(CurrentUserId(tokenData?.id))
            // refetch()
        }
        // profileData()
    }, [user, following, followers, viewAllFollowing])

    useEffect(() => {
        // try {

        //     axiosinstance.get("/followingcount/" + currentUserId, {
        //         headers: {
        //             "x-access-token": localStorage.getItem("token"),
        //         },
        //     }).then((response) => {
        //         setfFollowing(response.data.count.following)
        //         setFollowers(response.data.count.followers)
        //     })
        // } catch (err) {
        //     // navigate('error')
        //     console.log(err);
        // }
       followingCounts(currentUserId)

    }, [currentUserId, viewAllFollowing])

    const followingCounts = async (currentUserId:any) => {
        const ViewAllCounts = await following_count(currentUserId)
        setfFollowing(ViewAllCounts.count.following)
        setFollowers(ViewAllCounts.count.followers)
    }
    // console.log("bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb",following);
    


    //REPORT 

    const reportTogle = (postId: any) => {
        console.log("Modal report", postId);

        setReportModal(true);
        setReportState(postId)
    }



    // NAVIGATE TO FRIEND PROFILE
    const handleFriendProfile = (item: any) => {
        console.log("CLicked modal data", item.userId._id);
        if (item.userId._id === userId) {
            navigate("/profile")
        } else {
            dispatch(passfriendDetails(item?.userId))
            navigate("/fried-Profile")
        }
    }



    return (
        <>
            <div className='lg:w-4/5 xl:lg:w-3/5  w-1/2 sm:w-full  '>
                <div className='max-h-screen overflow-y-scroll scroll-smooth scrollbar-none pb-24'>
                    <div className='shadow-md rounded-3xl  p-4 mb-5 bg-[#2A2A2A] text-white   '>
                        {profileDetails?.map((item: any, index: number) => (
                            <div className='flex gap-3 '>
                                <div>
                                    <div className='w-12 h-12 rounded-xl overflow-hidden mt-2'>
                                        {profileDetails[0]?.Images ?
                                        
                                            <img className='' src={`/images/${profileDetails[0].Images}`} alt="" />
                                            :
                                            <>
                                                <div className='pt-1'>
                                                    <img className=" mx-auto  w-9 justify-content-center h-9 rounded-full ring-2 ring-gray-300" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQA0BrKaI0cwXl3-wpk6Fu2gMbrP1LKk6waAlhKhrTzTobcVlka34MsNf4Yp3k1tG4ufTY&usqp=CAU' alt="Bordered avatar" />
                                                </div>
                                            </>
                                        }

                                    </div>
                                </div>
                                <textarea className='rounded-xl grow p-1 pl-5 mt-2 bg-[#111111] h-12 ' placeholder={'What on your mind!!!'} />
                            </div>
                        ))}

                        <div className='flex gap-5 items-center mt-5 '>
                            <div className=''>
                                <button className='flex items-center gap-3 rounded-xl bg-[#1E1E1E] px-3 py-1 '>
                                    <FcStackOfPhotos />
                                    Photo</button>
                            </div>
                            <div className=''>
                                <button className='flex items-center gap-3 rounded-xl bg-[#1E1E1E] px-3 py-1'>
                                    <FcVideoCall />
                                    Video</button>
                            </div>
                            <div className='grow text-right'>
                                <button className='text-black bg-[#FFFF1A] px-6 py-1 rounded-xl'
                                    onClick={() => setPostModal(true)}
                                >
                                    Post
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* MAIN POST */}
                    {data ?
                        <>
                            {data?.map((post: any, index: number) => (<>
                                <div key={index} className='shadow-md rounded-3xl  p-4 mb-5 bg-[#2A2A2A] text-white  '>
                                    <div className="flex ">
                                        <div>
                                            <div>
                                                <div className='w-10 h-10 rounded-full overflow-hidden cursor-pointer'>
                                                    {post.userId.Images ? <img src={`/images/${post.userId.Images}`} alt="profilepic" />
                                                        : <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQA0BrKaI0cwXl3-wpk6Fu2gMbrP1LKk6waAlhKhrTzTobcVlka34MsNf4Yp3k1tG4ufTY&usqp=CAU' alt="profilepic" />
                                                    }

                                                </div>
                                            </div>
                                        </div>
                                        <div className='pl-3 grow'>

                                            {/* <Link to="/profile"> */}
                                            <a className='text-sm font-semibold hover:underline cursor-pointer'
                                                onClick={() => handleFriendProfile(post)}
                                            >{post.userId.name} </a>
                                            {/* </Link> */}
                                            <p className='text-xs text-[#737070] '>
                                                <span className=' cursor-pointer hover:underline' onClick={() => handleFriendProfile(post)}>

                                                    {post.userId.username}
                                                </span>
                                                <span className='text-[#FFFF1A] pl-3 text-xs'>
                                                    {moment(post.createdAt).fromNow()}
                                                </span>
                                            </p>

                                        </div>
                                        <div>
                                            {/* <BsThreeDotsVertical size={17} /> */}

                                            <Menu as="div" className="relative inline-block text-left">
                                                <div>
                                                    <Menu.Button className="inline-flex w-full justify-center bg-whie px-4 py-2 text-sm ">
                                                        <BsThreeDotsVertical size={17} />
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
                                                    <Menu.Items className="absolute right-0 z-10 mt-2 w-44  origin-top-right rounded-md bg-[#1A1A1A] shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                                        <div className="py-1">
                                                            <Menu.Item>
                                                                {({ active }) => (
                                                                    <div

                                                                        className={classNames(
                                                                            active ? 'bg-[#FFFF1A] text-gray-900' : 'text-red-600 font-bold',
                                                                            'block px-6 h-full py-2 text-sm'
                                                                        )} onClick={() => reportTogle(post._id)}
                                                                    >
                                                                        Report
                                                                    </div>
                                                                )}
                                                            </Menu.Item>
                                                            <div className=" text-xs border-b border-[#5b5858] py-  text-[#002D74]"></div>
                                                            {/* <Menu.Item>
                                                                {({ active }) => (
                                                                    <div

                                                                        className={classNames(
                                                                            active ? 'bg-[#FFFF1A] text-gray-900' : 'text-gray-200',
                                                                            'block px-6 py-2 text-sm'
                                                                        )}
                                                                    >
                                                                        Delete Post
                                                                    </div>
                                                                )}
                                                            </Menu.Item> */}
                                                        </div>
                                                    </Menu.Items>
                                                </Transition>
                                            </Menu>
                                        </div>

                                    </div>
                                    <div>
                                        <p className='text-sm my-3 font- '>

                                            {post.caption}
                                        </p>
                                        <div className='rounded-xl overflow-hidden mt-5'>
                                            {/* <img className='w-full object-cover max-h-[500px]' src="https://images.pexels.com/photos/161154/stained-glass-spiral-circle-pattern-161154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" /> */}
                                            <img className='w-full object-cover max-h-[400px]' src={`/images/${post.Images}`} alt="" />
                                        </div>
                                    </div>
                                    <div className='flex gap-8'>
                                        <div className='mt-4 flex gap-2 items-center '>
                                            {
                                                post.likes.includes(userIdData) ?
                                                    <>
                                                        <button className='i' onClick={() => likePost(post?._id, post?.userId.username, 1, post?.Images, post?.userId?._id, post?.userId?.Images)}><IoMdHeart size={26} /></button>
                                                    </>
                                                    :
                                                    <>
                                                        <button className='i' onClick={() => likePost(post?._id, post?.userId.username, 1, post?.Images, post?.userId?._id, post?.userId?.Images)}><IoMdHeartEmpty size={26} /></button>
                                                    </>
                                            }
                                            <h1 className='font-bold'>
                                                {post?.likesCount === 0 ? '' : post?.likesCount}

                                                likes </h1>
                                        </div>
                                        <div className='mt-4 flex gap-2 items-center' onClick={() => openCommentModal(post._id)}>
                                            <button className='i'><BsChat size={26} /></button>
                                            {post?.comment[0]?.comment?.length === 0 ? 'comments' : post?.comment[0]?.comment?.length}
                                        </div>
                                    </div>
                                    <div className="mt- text-xs border-b border-[#5b5858] py-3 text-[#002D74]"></div>
                                </div>
                            </>))}
                        </>
                        :
                        <>
                            <SkeletonElement />
                        </>
                    }

                    {/* <div className='pt-10 bg-red-500'>hello</div> */}
                </div>
            </div>

            {/* THIRD GRID */}

            {/* <ThirdFormDetails profileDetails={profileDetails} data ={data} viewAllFollowing={viewAllFollowing} /> */}



            <PostModal onClose={() => setPostModal(false)} isVisible={postModal} >

            </PostModal>

            <CommentModal postPassDetails={postPassDetails} data={data} onClose={() => setCommentModal(false)} isVisible={commentModal} >

            </CommentModal>

            <ReportPostModal reportState={reportState} isVisible={reportModal} onClose={() => setReportModal(false)}>

            </ReportPostModal>







        </>
    )
}

export default PostFormCard