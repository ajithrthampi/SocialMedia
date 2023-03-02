import React, { useContext, useState, useEffect } from 'react'
import { BsArrowLeft } from 'react-icons/bs'
import { useSelector } from 'react-redux/es/exports'
import { useDispatch } from 'react-redux/es/hooks/useDispatch'
import axiosinstance from '../../axios/axiosinstance'
import { UserContext } from '../../Pages/context/Context'
import { openModalFollowers, updateFollowData } from '../../redux/store/features/userSlice'

interface followFollowing {
    isVisible: boolean
    children: any
    onClose: () => void
    followersLists: any
    // followingLists: any
    stateFollowers: string

}

const FollowListModal = ({ isVisible, onClose, followersLists, stateFollowers }: followFollowing) => {


    const [followersModal, setFollowersModal] = useState<boolean>(false)
    const [viewAllFollowing, setViewAllFollowing] = useState<any>()
    const [followUser, setFollowUser] = useState([])
    const [state, setState] = useState<boolean>(false)

    const { user } = useContext(UserContext)
    const dispatch = useDispatch()
    // console.log('viewAllFollowing',viewAllFollowing);
    

    if (user) {
        var userId = user?.id
    }

    

    const unFollow = (followerId:any) => {
        const userId = user?.id
        const friendId = followerId
        dispatch(updateFollowData(true))
        try {
            const id = { userId, friendId }
            axiosinstance.post("/follow", id, {
                headers: {
                    "x-access-token": localStorage.getItem("token"),
                },
            }).then((response) => {
                if (response.data.msg == "follow") {
                    
                    setFollowUser(response.data.msg)
                   
                    setState(true)
                  
                } else {
                    setFollowUser(response.data.msg)
                }
            })
        } catch (error) {
   
        }   
    }

    
    // View All Following

    useEffect(() => {
        axiosinstance.get("/viewallfollowing/" + userId, {
            headers: {
                "x-access-token": localStorage.getItem("token"),
            },
        }).then((response) => {
            // console.log("rrrrrrrrrrreeeeeeeeeeeeddddddddddd",response.data);
            setViewAllFollowing(response.data.following)
            // refetch()
        }).catch((err) => {
            // navigate('/error')
            console.log(err);
        })
    },[state])


    if (!isVisible) return null
    return (

        <>
            <div className='fixed  inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center '>
                <div className="modal-dialog relative  e w-[500px] h-[500px]  overflow-hidden bg-[#191819] rounded-lg  ">

                    <div className="flex justify-start items-center  modal-content bg-[#191819] border-none  shadow-lg relative  w-full pointer-events-auto  bg-clip-padding rounded-md outline-none text-current">
                        <div className='   text-white'
                            onClick={() => onClose()}
                        > <BsArrowLeft size={24} />
                        </div>

                        <div className='text-white p-3 pl-36'>
                            {stateFollowers === "Remove" ?
                                <>
                                    Following
                                </>
                                :
                                <>
                                    Followers
                                </>
                            }
                        </div>
                    </div>
                    <div className="mt- text-xs border-b border-[#d9bfbf] w-full  text-[#ffffff]"></div>
                    {/* <div className='max-h-[250px] overflow-y-scroll scrollbar-none'> */}

                    <div className='max-h-[500px] overflow-y-scroll scrollbar-none '>

                        {
                            followersLists?.map((item: any, index: number) => (
                                <div
                                    key={index}
                                    className='flex justify-between p-3 '>
                                    <div className='flex gap-3'>
                                        <div>
                                            {item?.list?.Images ?
                                                <>
                                                    <img src={`/images/${item?.list?.Images}`} alt="My profile"
                                                        className="w-12 h-12 rounded-full order-1 object-cover" />
                                                </>
                                                :
                                                <>
                                                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQA0BrKaI0cwXl3-wpk6Fu2gMbrP1LKk6waAlhKhrTzTobcVlka34MsNf4Yp3k1tG4ufTY&usqp=CAU' alt="My profile"
                                                        className="w-12 h-12 rounded-full order-1" />
                                                </>
                                            }

                                        </div>
                                        <div className='text-white'>
                                            <h3 className='text-md'>
                                                {item?.list?.name}
                                            </h3>
                                            <h5 className='text-sm text-gray-400'>
                                                {item?.list?.username}
                                            </h5>
                                        </div>
                                    </div>
                                    <div>
                                        {(stateFollowers === "Remove") ? (
                                            <>
                                                <h2 >
                                                    <button  className='text-black rounded-md bg-[#FFFF1A] text-sm font-semibold px-5 py-2' onClick={() => unFollow(item?.list?._id)}>  Remove</button>
                                                </h2>
                                            </>
                                        ) : (stateFollowers === "Followers") ? (
                                            <>
                                                <button className='text-black rounded-md bg-[#FFFF1A] text-sm font-semibold px-5 py-2' >Followers</button>                                            </>
                                        ) :
                                            <>
                                            <div className='text-white text-xl flex text-center justify-center items-center'></div>
                                            </>
                                        }  
                                    </div>
                                    
                                </div>
                            ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default FollowListModal