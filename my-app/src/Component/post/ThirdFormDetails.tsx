import jwtDecode from 'jwt-decode'
import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axiosinstance from '../../axios/axiosinstance'
import { UserContext } from '../../Pages/context/Context'
import { useNavigate } from 'react-router-dom'
import { passfriendDetails } from '../../redux/store/features/userSlice'
import { useDispatch } from 'react-redux'
import { following_count, follow_unfollow, users_users, view_all_following } from '../../services/UserApi'

interface details {
    profileDetails: any
    data: any
    // viewAllFollowing:any
}

const ThirdFormDetails = ({ profileDetails, data }: details) => {
    const [suggestionUser, setSuggestionUser] = useState([])
    const [followUser, setFollowUser] = useState([])
    const { user } = useContext(UserContext)
    const [viewAllFollowing, setViewAllFollowing] = useState<any>()
    const [followers, setFollowers] = useState<any>()
    const [following, setfFollowing] = useState<any>()
    const [currentUserId, setCurrentUserId] = useState()
    const navigate = useNavigate()
    const dispatch = useDispatch()



    // console.log("Followere count..../././/. ", profileDetails);
    // console.log("Followeringgg count..../././/. ", following);


    if (user) {
        var userId = user?.id
    }
    


    // suggestion user

    useEffect(() => {
        // axiosinstance.get("/users", {
        //     headers: {
        //         "x-access-token": localStorage.getItem("token"),
        //     },
        // }).then((response) => {
        //     // refetch()
        //     // console.log("User redponce./././././././././", response);
        //     setSuggestionUser(response.data)
        //     // refetch()

        // }).catch((err) => {
        //     // navigate('/error')
        // })
        userDetsils()

    }, [user, data, viewAllFollowing])

    const userDetsils = async () => {
        const user_details = await users_users()
        setSuggestionUser(user_details)
    }

    const follow = async(friendFollowId: any) => {
        const userId = user?.id
        const friendId = friendFollowId
        try {
            const id = { userId, friendId }
            // axiosinstance.post("/follow", id, {
            //     headers: {
            //         "x-access-token": localStorage.getItem("token"),
            //     },
            // }).then((response) => {
            //     if (response.data.msg == "follow") {
            //         setFollowUser(response.data.msg)
            //         // refetch()
            //     } else {
            //         setFollowUser(response.data.msg)
            //     }
            // })

            const followUnfollow = await follow_unfollow(id)
            setFollowUser(followUnfollow.msg)
            
        } catch (err) {
            // navigate('/error')
        }
    }
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
        setViewAllFollowing(viewFollowing.following)
    }

    // VIEW ALL FOLLOWERS

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


    //CURENT USER ID

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

    //GO TO PROFILE

    const handleFriendProfile = (item: any) => {
        console.log(item?._id);

        if (item?.userId?._id === userId) {
            navigate("/profile")
        } else {
            dispatch(passfriendDetails(item))
            navigate("/fried-Profile")
        }
    }

    return (
        <>

            <div className='lg:w-1/4 w-2/5 hidden lg:block ' >
                <div className='shadow-md rounded-3xl p  p- mb-5 bg-[#2A2A2A] text-white overflow-hidden'>
                    {profileDetails?.map((item: any, index: number) => (
                        <div className=''>
                            <div className='flex flex-col justify-center items-center  pt-3'>
                                <div className=' xl:w-24 xl:h-24 w-16  h-16 rounded-3xl  borde overflow-hidden cursor-pointer'>
                                    {/* <img className='object-cover' src="https://images.pexels.com/photos/5397723/pexels-photo-5397723.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" /> */}
                                    {profileDetails[0].Images ?

                                        <img className='object-cover' src={`/images/${profileDetails[0].Images}`} alt="" />
                                        :
                                        <>
                                            <img className='object-cover' src="https://images.pexels.com/photos/5397723/pexels-photo-5397723.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                                        </>
                                    }
                                </div>
                                {/* <div> */}

                                <div className='absolute flex 2xl:gap-28 xl:gap-28 lg:gap-14  justify-center items-center pt-1 top-48 text-md -mt-7'>
                                    <div className='flex flex-col justify-center items-center   '>
                                        {followers ?
                                            <>
                                                <p className='lg:text-xs xl:text-lg'>{followers}</p>
                                            </>
                                            :
                                            <>
                                                <p className='lg:text-xs xl:text-lg'>0</p>
                                            </>
                                        }

                                        <h1 className='text-sm text-[#a7a7a7]'>Followers</h1>

                                    </div>

                                    <div className='flex flex-col justify-center items-center '>
                                        {following ?
                                            <>
                                                <p className='lg:text-xs xl:text-lg'>{following}</p>
                                            </> :
                                            <>
                                                <p className='lg:text-xs xl:text-lg'>0</p>
                                            </>}

                                        <h1 className='text-sm text-[#a7a7a7]'>Following</h1>

                                    </div>
                                </div>
                                {/* </div> */}
                                <div className='mt-10 flex flex-col justify-center items-center'>
                                    <div className=''>{profileDetails[0].name}</div>
                                    <div className='text-sm font-medium text-[#9d9797]'>{profileDetails[0].username}</div>
                                    <div className='pt-5 text-sm text-center px-3 '>
                                        <div className='flex space-x-2'>
                                            <span className='text-yellow-500 text-3xl '>*</span>
                                            <div >

                                                {profileDetails[0].bio}
                                            </div>

                                            <span className='text-yellow-500 text-3xl '>*</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-3 text-xs border-b border-[#5b5858] py-3 text-[#002D74]"></div>
                            <div className='flex justify-center items-center mt-5 px-5 '>
                                <button className='text-white bg-[#4b4b4b] w-full  py-2 rounded-xl'><Link to="/profile">My Profile</Link> </button>
                            </div>
                        </div>
                    ))}

                    <div className="mt- text-xs border-b border-[#2b2a2a] py-3 text-[#002D74]">
                    </div>
                </div>

                {/* THIRD GRID SECOND DIV */}

                <div>
                    <div className='shadow-md rounded-3xl p  p- mb-5 bg-[#5e5e5e40] text-white overflow-hidden'>
                        <div className='p-3 pl-6'>
                            <h1 className='text-sm font-semibold'>Suggestion for you</h1>
                        </div>
                        <div className='max-h-[210px] overflow-y-scroll scrollbar-none'>
                            {/* First */}
                            {suggestionUser?.map((item: any, index: number) => (
                                <div className='px-2' key={index}>
                                    {item?._id === user?.id ? "" : <> <div className='shadow-md rounded-3xl px- mb-3  bg-[#1a1a1a77] text-white overflow-hidden'>

                                        <div className='flex gap-2 p-2 items-center'>
                                            <div className='w-12 h-12 rounded-full overflow-hidden cursor-pointer'>
                                                {/* <img src="https://images.pexels.com/photos/4612113/pexels-photo-4612113.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" /> */}
                                                {item.Images ? <>
                                                    <img className='w-10 h-10 box-border    rounded-full object-cover ' onClick={() => handleFriendProfile(item)} src={`/images/${item.Images}`} alt="" />
                                                </>
                                                    :
                                                    <>
                                                        <div className='bg-cover'>
                                                            <img className='rounded-full md:w-36 md:h-36 w-20 h-20  overflow-hidden' src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                                                        </div>
                                                    </>
                                                }
                                            </div>
                                            <div>
                                                <div>
                                                    <h1 className='text-xs font-semibold'>{item.name}</h1>
                                                    <h3 className='text-xs text-[#bfbfbf66]'>{item.bio}</h3>
                                                </div>
                                            </div>
                                        </div>

                                        <div className='px-2 pt-2'>

                                            <div className='shadow-md rounded-3xl px-3  mb-3 bg-[#1a1a1ad5] text-white overflow-hidden p-2 py-3'>
                                                <div className='flex justify-evenly '>
                                                    {/* <button className='text-black bg-[#ffffff] text-sm font-semibold xl:px-7 lg:px-5  py-2 rounded-xl'>Remove</button> */}
                                                    {/* {viewAllFollowing.following.includes(followerlist.list._id) ?  */}
                                                    {viewAllFollowing?.includes(item._id) ?
                                                        <button className='text-black bg-[#FFFF1A] text-sm font-semibold xl:px-7  lg:px-3  py-2 rounded-xl' onClick={() => follow(item._id)}>Following</button>
                                                        :
                                                        <button className='text-black bg-[#FFFF1A] text-sm font-semibold xl:px-7  lg:px-3  py-2 rounded-xl' onClick={() => follow(item._id)}>Follow</button>
                                                    }

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    </>}

                                </div>
                            ))}
                            {/* Secnd */}


                            {/* Third */}

                        </div>
                        {/* S */}
                    </div>
                </div>
            </div>

        </>
    )
}

export default ThirdFormDetails