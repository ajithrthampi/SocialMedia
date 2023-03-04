import React, { useState, useEffect, useContext } from 'react'
import { AiOutlineComment, AiOutlineHeart } from 'react-icons/ai'
import { FiSettings } from 'react-icons/fi'
import { useSelector } from 'react-redux/es/hooks/useSelector'
import { followUpdation, friendEachPost, friendPostModal, openModalFollowers } from '../../redux/store/features/userSlice'
import Layout from '../layout/Layout'
import Navbar from '../navbar/Navbar'
import { useDispatch } from 'react-redux';
import axiosinstance from '../../axios/axiosinstance'
import EditUserModal from '../user-modal/EditUserModal'
import { UserContext } from '../../Pages/context/Context'
import OpenPostModal from '../user-modal/OpenPostModal'
import { useNavigate } from 'react-router-dom'
import FollowListModal from '../user-modal/FollowListModal'
import jwtDecode from 'jwt-decode'
import { conversationUser, followersListss, followingListss, following_count, follow_unfollow, post_details, viewProfilePostss, view_all_following } from '../../services/UserApi'

const FriendProfile = () => {

  const [following, setfFollowing] = useState<any>()
  const [followers, setFollowers] = useState<any>()
  const [editModal, setEditModal] = useState(false)
  const { user } = useContext(UserContext)
  const [userId, setUserId] = useState()
  const [reduxState, setReduxState] = useState<any>()
  const [state, setState] = useState(false)
  const [profilePosts, setProfilePosts] = useState<any>([])
  const [openPostModal, setOpenPostModal] = useState<boolean>(false)
  const [eachPost, setEachPost] = useState([])
  const [userIdd, setUserIdd] = useState<any>()
  const [followUser, setFollowUser] = useState()
  const navigate = useNavigate()

  const [followersLists, setFollowersLists] = useState<any>()
  const [followModal, setFollowModal] = useState<boolean>(false)
  const [stateFollowers, setStateFollowers] = useState<any>()
  const [viewAllFollowing, setViewAllFollowing] = useState<any>()
  const isprofileDetails = useSelector((state: any) => state.userDetails.value.friendDetails)
  const followUnfollowUpdations = useSelector((state: any) => state.userDetails.value.followUnfollowUpdation)


  console.log("userr id In friend", followUser);

  useEffect(() => {
    setReduxState(isprofileDetails)
  }, [editModal, userId])


  useEffect(() => {
    if (user) {
      var userID = user.id
      setUserId(userID)
    }
  }, [following])

  const dispatch = useDispatch();




  useEffect(() => {
    // try {

    //   axiosinstance.get("/followingcount/" + reduxState?._id, {
    //     headers: {
    //       "x-access-token": localStorage.getItem("token"),
    //     },
    //   }).then((response) => {
    //     setfFollowing(response.data.count.following)
    //     setFollowers(response.data.count.followers)
    //   })
    // } catch (err) {
    //   // navigate('error')
    //   console.log(err);
    // }
    followingCounts(reduxState?._id)

  }, [editModal, reduxState, followUnfollowUpdations, viewAllFollowing])
  const followingCounts = async (currentUserId: any) => {
    const ViewAllCounts = await following_count(currentUserId)
    setfFollowing(ViewAllCounts.count.following)
    setFollowers(ViewAllCounts.count.followers)
  }

  // console.log("User details in redixtoolkit", reduxState?.userId?._id);

  useEffect(() => {
    viewPost()

  }, [editModal, user, reduxState])


  const viewPost = () => {
    // const userId = user?.id
    // axiosinstance.get("/viewprofilepost/" + reduxState?._id, {
    //   headers: {
    //     "x-access-token": localStorage.getItem("token"),
    //   },
    // }).then((response) => {

    //   setState(response.data)
    //   setProfilePosts(response.data)
    // }).catch((err) => {
    //   // navigate('/error')
    // })
    seeProfilePost(reduxState?._id)

  }
  const seeProfilePost = async (friendId: any) => {
    const viewEachPost = await viewProfilePostss(friendId)
    setProfilePosts(viewEachPost)
  }


  // FRIEND USER DATA

  const viewImagePost = async (postId: any) => {


    // axiosinstance.get("/postdetails/" + postId, {
    //   headers: {
    //     "x-access-token": localStorage.getItem("token"),
    //   },
    // }).then((response) => {
    //   setOpenPostModal(true)
    //   setEachPost(response.data)
    //   console.log(response.data);


    //   // dispatch(friendEachPost(response.data))
    //   console.log("success");


    // }).catch((err) => {
    //   // navigate('/error')
    //   console.log(err);

    // })
    try {
      const post_Details = await post_details(postId)
      setOpenPostModal(true)
      setEachPost(post_Details)
    } catch (error) {
      console.log("error", error);

    }


  }

  const startConversation = async () => {
    const userId = user?.id
    try {

      const friendId = isprofileDetails?._id
      const id = { userId, friendId }

      // setTimeout(() => {

      //   axiosinstance.post("/conversation", id, {
      //     headers: {
      //       "x-access-token": localStorage.getItem("token"),
      //     },
      //   }).then((response) => {
      //    
      //   }).catch((err) => {
      //     navigate('/error')
      //     console.log(err);

      //   })

      // }, 1000)
      const allConversation = await conversationUser(id).then((res) => {
        navigate('/message')
      })
    } catch (error) {
      console.log(error);

    }
  }

  //FOLLOW MODAL

  const followersModal =async () => {
    try {
      const userId = isprofileDetails._id
      // console.log("friend id", userId);
      // axiosinstance.get("/followerslist/" + userId, {
      //   headers: {
      //     "x-access-token": localStorage.getItem("token"),
      //   },
      // }).then((response) => {
      //   setFollowersLists(response.data)
      //   setFollowModal(true)
      // })

      const followersallList = await followersListss(userId)
      if(followersallList) {
          setFollowersLists(followersallList)
        setFollowModal(true)
      } else {
        
      }
    } catch (err) {
      console.log("Follower", err);
    }
  }

  //FOLLOWING MODAL

  const followingsModal = async () => {
    try {
      const userId = isprofileDetails._id
      // axiosinstance.get("/followinglist/" + userId, {
      //   headers: {
      //     "x-access-token": localStorage.getItem("token"),
      //   },
      // }).then((response) => {
      //   setFollowersLists(response.data)
      //   setFollowModal(true)
      // })

      const followingllList = await followingListss(userId)
      if(followingllList) {
          setFollowersLists(followingllList)
        setFollowModal(true)
      } else {
        
      }

    } catch (err) {
      // navigate('/error')
      console.log(err);
    }
  }

  //FOLLOW UNFOLLOW

  const followUnFollow = async() => {

    const userId = user?.id
    const friendId = isprofileDetails._id
    try {

      const id = { userId, friendId }
      // axiosinstance.post("/follow", id, {
      //   headers: {
      //     "x-access-token": localStorage.getItem("token"),
      //   },
      // }).then((response) => {
      //   dispatch(followUpdation(true))
      //   if (response.data.msg == "follow") {

      //     setFollowUser(response.data.msg)

      //     // refetch()
      //   } else {
      //     setFollowUser(response.data.msg)
      //   }
      // })

      const seeFollow = await follow_unfollow(id)
        dispatch(followUpdation(true))
        if (seeFollow == "follow") {
          setFollowUser(seeFollow.msg)
        } else {
          setFollowUser(seeFollow.msg)
        }
      
  

    } catch (err) {
      // navigate('/error')
    }
  }
  console.log("follow", followUser);



  useEffect(() => {
    const data = localStorage.getItem('token')
    if (data != null) {
      const userData: any = jwtDecode(data)
      const userId = userData?.id
      ViewAllFollowing(userId)
    }

  }, [user, followUser, reduxState])

  //VIEW ALL FOLLOWING

  const ViewAllFollowing = async(userId: any) => {
    // axiosinstance.get("/viewallfollowing/" + userId, {
    //   headers: {
    //     "x-access-token": localStorage.getItem("token"),
    //   },
    // }).then((response) => {
    //   // console.log("rrrrrrrrrrreeeeeeeeeeeeddddddddddd",response.data);
    //   setViewAllFollowing(response.data.following)
    //   // refetch()
    // }).catch((err) => {
    //   // navigate('/error')
    //   console.log(err);
    // })

    const viewAllFollowing  = await view_all_following(userId)
    if(viewAllFollowing){
      setViewAllFollowing(viewAllFollowing.following)
    }
  }




  return (
    <>
      <Navbar />
      {/* MOBILE SCREEN */}

      <div className='md:hidden '>
        <div className='max-h-screen overflow-y-scroll scrollbar-none space-y-5 '>
          <div className='md:hidden sm:px-10  h-auto pt-6 space-y-6' >

            <>
              <div className=' box-content h-auto  bg-[2A2A2A] rounded-3xl px-4 py-3'>
                <div className=' grid grid-cols-3'>
                  <div>
                    {reduxState ? <img className="p-1 mx-auto object-cover w-28 justify-content-center h-28 rounded-full ring-2 ring-gray-300 dark:ring-gray-500" src={`images/${reduxState?.Images}`} alt="Bordered " />
                      : <img className="p-1 mx-auto  w-28 justify-content-center h-28 rounded-full ring-2 ring-gray-300 dark:ring-gray-500" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQA0BrKaI0cwXl3-wpk6Fu2gMbrP1LKk6waAlhKhrTzTobcVlka34MsNf4Yp3k1tG4ufTY&usqp=CAU' alt="Bordered avatar" />}
                  </div>

                  <div className='flex flex-col space-x-4 gap-7'>
                    <div className='flex gap-10'>
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
                    {!viewAllFollowing?.includes(reduxState._id) ?
                      <>
                        <div className='px-24 cursor-pointer   py-1 rounded-xl bg-white text-black flex justify-center items-center w-ful font-semibold text-lg' onClick={followUnFollow}>follow</div>
                      </>
                      :
                      <>
                        <div className='px-24 cursor-pointer   py-1 rounded-xl bg-white text-black flex justify-center items-center w-ful font-semibold text-lg' onClick={followUnFollow}>Following</div>
                      </>
                    }

                  </div>

                </div>

                {/* NAME */}
                <div className=''>
                  <div className='sm:px-10 px-'>
                    <div className='text-white pt-6'>
                      <h1>{reduxState?.name}</h1>
                      {/* <h3 className='text-sm text-[#737373] pt-1 py-3 '>{reduxState?.date}</h3> */}
                    </div>

                    {/* BIO */}
                    <div className='text-white font-semibold'>{reduxState?.bio}</div>


                    {/* EDIT PROFILE */}
                  </div>
                  <div className='pt-7'>
                    <button className='text-black bg-[#FFFF1A] text-lg xl:px-7 px-5 w-full font-semibold  py-2 rounded-xl' onClick={startConversation}>Message</button>
                  </div>

                  <div className="mt-3 text-xs border-b border-[#616161] py- text-[#747474]"></div>


                </div>
              </div>
            </>

          </div>

          {/* POST */}

          <div className='grid grid-cols-3 gap-0.5 px-1 p-4 pb-20'>
            {profilePosts?.map((item: any, index: number) => (
              <div key={index} className="overflow-hidden ">
                <div className='relative group cursor-pointer z-0 '>
                  <div className='relative '>
                    <div className='h-28 sm:h-40 overflow-hidden'>
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
      <Layout>
        <div className='w-5/6  grow xl:-ml-2.5 '>
          <div className='shadow-md rounded-3xl mb-5 bg-[#2A2A2A] text-white overflow-hidden '>
            <div className='max-h-screen overflow-y-scroll scrollbar-none'>
              <div className='flex  lg:p-10 p-5 gap-12 lg:pl-40 pl-32'>

                <div className='  rounded-full  cursor-pointer'>
                  <img className='rounded-full w-36 h-36  object-cover overflow-hidden' src={`images/${reduxState?.Images}`} alt="profile pic" />
                </div>
                <div>
                  <>
                    <div className='xl:flex gap-12   xl:space-y-0 space-y-5 text-lg'>
                      <div>{reduxState?.username}</div>
                      {!viewAllFollowing?.includes(reduxState._id) ?
                      <>
                        <div className='text-black bg-[#ffffff] text-sm   font-semibold xl:px-7 px-5  py-2 rounded-xl' onClick={followUnFollow}>follow</div>
                      </>
                      :
                      <>
                        <div className='text-black bg-[#ffffff] text-sm   font-semibold xl:px-7 px-5  py-2 rounded-xl' onClick={followUnFollow}>Following</div>
                      </>
                    }

                      <button className='text-black bg-[#ffffff] text-sm   font-semibold xl:px-7 px-5  py-2 rounded-xl' onClick={startConversation}>Message</button>

                    </div>
                    <div className='flex xl:gap-10 gap-4 mt-4 lg:text-md text-xs'>
                      <div>40 Post</div>
                      <div
                        // onClick={followersModal}
                        // onClick={() => dispatch(openModalFollowers(true))}
                        className='cursor-pointer text-base'> <span className='bg-[#1A1A1A] px-3 py-1 rounded-md text-base' onClick={followersModal}>{followers}</span> followers</div>
                      <div className='cursor-pointer text-base'><span className='bg-[#1A1A1A] px-3 py-1 rounded-md text-base' onClick={followingsModal}>{following}</span> following</div>
                    </div>
                    <div className='xl:mt-5 mt-3    '>
                      <h1>{reduxState?.name}</h1>
                      <h4 className='text-[#c9c6c6b1]'>{reduxState?.bio}</h4>
                    </div>
                  </>
                </div>
              </div>
              <div className=' px-14 py-5 '>
                <div className="mt-3 text-xs border-b border-[#5b5858] py-1  text-[#002D74]"></div>
              </div>


              {/* Image Post */}

              <div className='grid grid-cols-3 gap-3 px-5 p-4'
              // onClick={() => setOpenPostModal(true)}
              >
                {profilePosts?.map((item: any, index: number) => (
                  <div key={index} className="overflow-hidden h-64"
                    onClick={() => viewImagePost(item._id)}
                  >
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
                            {/* {item.length} */}
                            {/* {item?.comment[0]?.comment?.length === 0 ? 'comments' : item?.comment[0]?.comment?.length} */}
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



      <EditUserModal onClose={() => setEditModal(false)} isVisible={editModal}>

      </EditUserModal>

      <OpenPostModal postPassDetails={eachPost} onClose={() => setOpenPostModal(false)} isVisible={openPostModal}>

      </OpenPostModal>

      <FollowListModal isVisible={followModal} onClose={() => setFollowModal(false)} followersLists={followersLists} stateFollowers={stateFollowers}>

      </FollowListModal>



    </>
  )
}

export default FriendProfile