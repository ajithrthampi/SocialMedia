import React, { useState, useContext, useEffect } from 'react'
import Layout from '../layout/Layout'
import Navbar from '../navbar/Navbar'
import { FiSettings } from "react-icons/fi";
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import EditUserModal from '../user-modal/EditUserModal';
import { UserContext } from '../../Pages/context/Context';
import axios from 'axios';
import { AiOutlineComment, AiOutlineHeart } from 'react-icons/ai';
import { useQuery } from '@tanstack/react-query';
import axiosinstance from '../../axios/axiosinstance';
import OpenPost from '../user-modal/OpenPostModal';
import OpenPostModal from '../user-modal/OpenPostModal';
import CommentModal from '../user-modal/CommentModal';
import jwtDecode from 'jwt-decode';
import FollowListModal from '../user-modal/FollowListModal';
import { useDispatch, useSelector } from 'react-redux';
import { openModalFollowers, updatePostDetails } from '../../redux/store/features/userSlice';
import PostModal from '../user-modal/PostModal';
import { followersListss, followingListss, following_count, post_details, viewProfilePostss, view_post, view_Profile_Details } from '../../services/UserApi';
import SkeletonElement from '../../skeleton/SkeletonElement';


const UserProfile = () => {





    const [editModal, setEditModal] = useState(false)
    const [openPostModal, setOpenPostModal] = useState<boolean>(false)
    const [eachPost, setEachPost] = useState([])
    const [dataa, setData] = useState<any>(false)
    const [state, setState] = useState(false)
    const [profilePosts, setProfilePosts] = useState<any>([])
    const { user } = useContext(UserContext)
    const [profileDetails, setProfileDetails] = useState<any>()
    const [following, setfFollowing] = useState<any>()
    const [followers, setFollowers] = useState<any>()
    const [currentUserId, setCurrentUserId] = useState()
    const navigate = useNavigate()
    const [followModal, setFollowModal] = useState<boolean>(false)

    const [postModal, setPostModal] = useState(false)
    const [statee, setStatee] = useState(false)
    const [userIdData, setUserIdData] = useState<any>()
    const [followersLists, setFollowersLists] = useState<any>()
    const [followingLists, setFollowingLists] = useState<any>()
    const [stateFollowers, setStateFollowers] = useState<any>()
    const dispatch = useDispatch();

    const isUpdatePostyDetails = useSelector((state: any) => state.userDetails.value.updateCaptionModal)





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
    console.log("userprofile ....userIdData userIdData", userIdData);



    useEffect(() => {
        viewPost()

    }, [editModal, statee, openPostModal, postModal])

    const viewPost = async () => {

        // axiosinstance.get("/viewprofilepost/" + userIdData, {
        //     headers: {
        //         "x-access-token": localStorage.getItem("token"),
        //     },
        // }).then((response) => {

        //     setState(response.data)
        //     setProfilePosts(response.data)
        //     // console.log("updateDeletePost>><><><><><><><",updateDeletePost);
        // }).catch((err) => {
        //     // navigate('/error')
        //     console.log("view Image", err);

        // })

        const viewProfile_Post = await viewProfilePostss(userIdData)
        if (viewProfile_Post) {
            setState(viewProfile_Post)
            setProfilePosts(viewProfile_Post)
        }
    }
    // console.log("profile details///././././././././././././.", profilePosts);


    // USER DATA

    useEffect(() => {
        // try {

        // axiosinstance.get("/viewprofiledetails/" + userIdData, {
        //     headers: {
        //         "x-access-token": localStorage.getItem("token"),
        //     },
        // }).then((response) => {
        //     // console.log(response.data[0].name, 'yesyesyesyes');
        //     setProfileDetails(response.data)
        // })

        // } catch (err) {
        //     // navigate('/error')
        //     console.log("Eror message...", err);

        // } 
        viewProdile_Details(userIdData)
    }, [statee, state, editModal])

    const viewProdile_Details = async (userIdData: any) => {
        const viewDetails = await view_Profile_Details(userIdData)
        if (viewDetails) {
            setProfileDetails(viewDetails)
        }
    }



    // USER POST DATA
    const [up, setUp] = useState(false)
    const [hi, setHi] = useState()

    const viewImagePost = (postId: any) => {
        setUp(!up)
        setHi(postId)
    }

    useEffect(() => {
        // const viewImagePosts = (postId: any) => {
        //     console.log(postId, 'id in comment click');
        //     axiosinstance.get("/postdetails/" + postId, {
        //         headers: {
        //             "x-access-token": localStorage.getItem("token"),
        //         },
        //     }).then((response) => {
        //         setOpenPostModal(true)
        //         setEachPost(response.data)
        //         dispatch(updatePostDetails(response.data))
        //     }).catch((err) => {
        //         // navigate('/error')
        //     })
        // }

        const viewImagePosts = async (postId: any) => {
            const view_ImagePost = await post_details(postId)

            if (view_ImagePost) {
                setOpenPostModal(true)
                setEachPost(view_ImagePost)
                dispatch(updatePostDetails(view_ImagePost))
            }
        }
        viewImagePosts(hi)
    }, [isUpdatePostyDetails, up])


    // console.log("Each Post data..................", eachPost);

    // FOLLOW COUNT

    useEffect(() => {
        const token = localStorage.getItem('token')
        if (token != null) {
            const tokenData: any = jwtDecode(token)
            setCurrentUserId(tokenData?.id)
            //   dispatch(CurrentUserId(tokenData?.id))
        }
        // profileData()
    }, [user, following, followers])

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

        followingCount(currentUserId)

    }, [currentUserId, user, followModal])

    const followingCount = async (currentUserId: any) => {
        const following_Counts = await following_count(currentUserId)
        if (following_Counts) {
            setfFollowing(following_Counts.count.following)
            setFollowers(following_Counts.count.followers)
        }
    }

    //FOLLOW MODAL



    const followersModal = () => {
        // try {

        //     axiosinstance.get("/followerslist/" + userId, {
        //         headers: {
        //             "x-access-token": localStorage.getItem("token"),
        //         },
        //     }).then((response) => {
        //         setFollowersLists(response.data)
        //         setFollowModal(true)
        //         setStateFollowers("Followers")
        //     })

        // } catch (err) {
        //     // navigate('/error')
        //     console.log(err);
        // }
        const userId = user.id
        followers_Lists(userId)
    }
    const followers_Lists = async (userId: any) => {
        const followers_All_lists = await followersListss(userId)
        if (followers_All_lists) {
            setFollowModal(true)
            setFollowersLists(followers_All_lists)
            setStateFollowers("Followers")
        }
    }


    const followingsModal = () => {
        // try {
        //     const userId = user.id
        //     axiosinstance.get("/followinglist/" + userId, {
        //         headers: {
        //             "x-access-token": localStorage.getItem("token"),
        //         },
        //     }).then((response) => {
        //         setFollowersLists(response.data)
        //         setFollowModal(true)
        //         setStateFollowers("Remove")
        //     })

        // } catch (err) {
        //     // navigate('/error')
        //     console.log(err);
        // }

        const userId = user.id
        following_Lists(userId)
    }

    const following_Lists = async (userId: any) => {
        const following_All_Lists = await followingListss(userId)
        if (following_All_Lists) {
            setFollowersLists(following_All_Lists)
            setFollowModal(true)
            setStateFollowers("Remove")
        }
    }


    const { data, isLoading, refetch } = useQuery(["Id"], () =>

        view_post()
    );

    console.log("+++++++++++++++++++++++++++++++++++++", data);
    console.log("><>>>>>><><><><><><><><><><", profilePosts);



    return (
        <>
            <Navbar />

            {/* MOBILE SCREEN */}

            <div className='md:hidden '>
                <div className='max-h-screen overflow-y-scroll scrollbar-none space-y-5 '>
                    <div className='md:hidden sm:px-10   pt- space-y-6' >
                        {profileDetails?.map((item: any, index: number) => (
                            <>
                                <div className=' box-content h-auto  bg-[2A2A2A] rounded-3xl px-4 py-3'>
                                    <div className=' grid grid-cols-3'>
                                        <div>
                                            {profileDetails[0].Images ?
                                                <img className="p-1 mx-aut  w-20 justify-content-center h-20 rounded-full ring-1 object-cover
                                             ring-gray-300 dark:ring-gray-500" src={`/images/${profileDetails[0].Images}`} alt="Bordered avatar" />
                                                : <img className="p-1 mx-auto  w-28 justify-content-center h-28 rounded-full
                                                 ring-2 ring-gray-300 dark:ring-gray-500"
                                                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQA0BrKaI0cwXl3-wpk6Fu2gMbrP1LKk6waAlhKhrTzTobcVlka34MsNf4Yp3k1tG4ufTY&usqp=CAU'
                                                    alt="Bordered avatar" />}
                                        </div>
                                        <div className='flex gap-8 pt-3'>
                                            <div className='pl-6 text-white  text-center'>
                                                <div className='text-xl' onClick={followersModal}>
                                                    {followers}
                                                </div>
                                                <div className='text-sm text-[#d8d6d6] font'>Followers</div>
                                            </div>
                                            <div className='pl-6 text-white text-center'>
                                                <div className='text-xl' onClick={followingsModal}>
                                                    {following}
                                                </div>
                                                <div className='text-sm text-[#d8d6d6]'>Following</div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* NAME */}
                                    <div className=''>
                                        <div className='sm:px-10 px-'>
                                            <div className='text-white pt-6'>
                                                <h1>{profileDetails[0].name}</h1>
                                                <h3 className='text-sm text-[#737373] '>{profileDetails[0].username}</h3>
                                            </div>

                                            {/* BIO */}
                                            <div className='text-white font-semibold'>{profileDetails[0].bio}</div>

                                            {/* EDIT PROFILE */}
                                        </div>
                                        <div className='py-5 '>
                                            <button type="button" className="mb-2  w-full inline-block px-6 py-2.5 bg-[#2A2A2A] font-bold
                                                 text-xs leading-normal uppercase rounded-lg shadow-md hover:shadow-lg focus:bg-[#FFFF1A] focus:text-black
                                                   focus:shadow-lg focus:outline-none focus:ring-0  transition duration-150 ease-in-out text-white"
                                                onClick={() => setEditModal(true)}
                                            >
                                                Edit Profile
                                            </button>
                                            <div className='flex flex-col justify-center ' onClick={() => setPostModal(true)}>
                                                <button className='bg-[#FFFF1A] px-5 py-1  rounded-md font-semibold '>Add Post</button>
                                            </div>
                                            <div className=" text-xs border-b border-[#616161] py-4 text-[#747474]"></div>
                                        </div>

                                    </div>
                                </div>
                            </>
                        ))}
                    </div>

                    {/* POST */}

                    <div className='grid grid-cols-3 gap-0.5 px-1  pb-32'>
                        {profilePosts?.map((item: any, index: number) => (
                            <div key={index} className="overflow-hidden " onClick={() => viewImagePost(item._id)}>
                                <div className='relative group cursor-pointer z-0 '>
                                    <div className='relative '>
                                        <div className='h-28 sm:h-40 overflow-hidden' >
                                            <img className='object-cover h-28 sm:h-40 w-full' src={`/images/${item?.Images}`} alt="" />
                                        </div>
                                    </div>
                                    <div className=' absolute top-0 opacity-0 group-hover:opacity-100 left-1/2
                                             -translate-x-1/2 w-full md:h-full h-full bg-black-rgba flex flex-row gap-5 text-white justify-center items-center'>
                                        <div className='flex md:flex-row flex-col gap-2 '>
                                            <AiOutlineHeart className='md:text-xl text-lg' />

                                            <h1>{item.likes.length}</h1>
                                        </div>
                                        <div className='flex md:flex-row flex-col gap-2'>
                                            <AiOutlineComment className='md:text-xl text-lg' />
                                            <h1 className='hidden md:block'>234 comment</h1>
                                            <h1>210</h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>

            {/* Large Profile */}

            <div>
                <Layout>
                    <div className='w-5/6  grow xl:-ml-2.5 '>
                        <div className='shadow-md rounded-3xl mb-5 bg-[#2A2A2A] text-white overflow-hidden '>
                            <div className='max-h-screen overflow-y-scroll scrollbar-none'>
                                <div className='flex  lg:p-10 p-5 gap-12 lg:pl-40 pl-32'>
                                    {profileDetails?.map((item: any, index: number) => (

                                        <div className='  rounded-full  cursor-pointer'>
                                            {profileDetails[0].Images ?
                                                <>
                                                    <img className='rounded-full w-36 h-36  object-cover overflow-hidden' src={`/images/${profileDetails[0]?.Images}`} alt="" />
                                                </>
                                                :
                                                <>
                                                    <img className="p-1 mx-auto  w-28 justify-content-center h-28 rounded-full ring-2 ring-gray-300 dark:ring-gray-500" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQA0BrKaI0cwXl3-wpk6Fu2gMbrP1LKk6waAlhKhrTzTobcVlka34MsNf4Yp3k1tG4ufTY&usqp=CAU' alt="Bordered avatar" />
                                                </>
                                            }

                                        </div>

                                    ))}

                                    <div>
                                        {profileDetails?.map((item: any, index: number) => (
                                            <>
                                                <div key={index} className='xl:flex gap-12   xl:space-y-0 space-y-5 text-lg'>

                                                    <div>{profileDetails[0].username}</div>

                                                    <button className='text-black bg-[#ffffff] text-sm   font-semibold xl:px-7 px-5  py-2 rounded-xl'
                                                        onClick={() => setEditModal(true)}
                                                    >
                                                        Edit Profile
                                                    </button>
                                                    {/* </NavLink> */}
                                                    {/* <FiSettings size={25} /> */}
                                                </div>
                                                <div className='flex xl:gap-10 gap-4 mt-4 lg:text-md text-xs'>
                                                    {/* <div>40 Post</div> */}

                                                    <div
                                                        onClick={followersModal}
                                                        // onClick={() => dispatch(openModalFollowers(true))}

                                                        className='cursor-pointer text-base'><span className='bg-[#1A1A1A] px-3 py-1 rounded-md text-base'>{followers}</span> followers</div>
                                                    <div
                                                        onClick={followingsModal}
                                                        className='cursor-pointer text-base'><span className='bg-[#1A1A1A] px-3 py-1 rounded-md text-base'>{following}</span> following</div>
                                                </div>
                                                <div className='xl:mt-5 mt-3    '>
                                                    <h1>{profileDetails[0].name}</h1>
                                                    <h4 className='text-[#c9c6c6b1]'>{profileDetails[0].bio}</h4>
                                                </div>
                                            </>

                                        ))}

                                    </div>
                                </div>

                                <div className=' px-14 py-5 '>
                                    <div className='flex justify-center items-center text-md font-semibold'
                                        onClick={() => setPostModal(true)}
                                    >
                                        <button className=' px-3 py-1 rounded-md bg-[#FFFF1A] text-black'>
                                            Add Post
                                        </button>
                                    </div>
                                    <div className="mt- text-xs border-b border-[#5b5858] py-  text-[#002D74]"></div>
                                </div>

                                {/* Image Post */}


                                <div className='grid grid-cols-3 gap-3 px-5 p-4 min-h-[346px]'
                                // onClick={() => setOpenPostModal(true)}
                                >
                                    {profilePosts?.map((item: any, index: number) => (
                                        <div key={index} className="overflow-hidden h-64" onClick={() => viewImagePost(item._id)}>
                                            <div className='relative group cursor-pointer'>
                                                <div className='relative h-64'>
                                                    <div className='h-64  overflow-hidden'>
                                                        {/* <img className='object-cover h-64 w-full' src="https://images.pexels.com/photos/1633525/pexels-photo-1633525.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" /> */}

                                                        <img className='object-cover h-64 w-full' src={`/images/${item?.Images}`} alt="" />

                                                    </div>
                                                </div>
                                                <div className=' absolute top-0 opacity-0 group-hover:opacity-100 left-1/2
                                             -translate-x-1/2 w-full h-full bg-black-rgba flex flex-row gap-5 text-white justify-center items-center'>
                                                    <div className='flex flex-row gap-2'>
                                                        <AiOutlineHeart size={25} />
                                                        <h1>{item.likes.length} likes</h1>
                                                    </div>
                                                    <div className='flex flex-row gap-2'>
                                                        <AiOutlineComment size={25} />
                                                        <h1>
                                                            {data?.map((post: any, index: number) => (<>
                                                                <div>
                                                                    {item?._id === post?._id ?
                                                                        <>
                                                                            {post?.comment[0]?.comment?.length === 0 ? 'comments' : post?.comment[0]?.comment?.length}
                                                                        </>
                                                                        :
                                                                        <>

                                                                        </>
                                                                    }
                                                                </div>
                                                            </>
                                                            ))}

                                                        </h1>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </Layout>
            </div >


            <PostModal onClose={() => setPostModal(false)} isVisible={postModal} >

            </PostModal>

            <EditUserModal onClose={() => setEditModal(false)} isVisible={editModal}>

            </EditUserModal>

            <OpenPostModal postPassDetails={eachPost} onClose={() => setOpenPostModal(false)} isVisible={openPostModal}>

            </OpenPostModal>

            <FollowListModal isVisible={followModal} onClose={() => setFollowModal(false)} followersLists={followersLists} stateFollowers={stateFollowers}>

            </FollowListModal>

        </>
    )
}

export default UserProfile