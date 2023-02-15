import React from 'react'
import { BsArrowLeft } from 'react-icons/bs'
import { useSelector } from 'react-redux/es/exports'
import { useDispatch } from 'react-redux/es/hooks/useDispatch'
import { openModalFollowers } from '../../redux/store/features/userSlice'

interface followFollowing {
    isVisible: boolean
    children: any
}

const FollowListModal = ({ isVisible }: followFollowing) => {

    const dispatch = useDispatch()

    const isFollowersModal = useSelector((state: any) => state.userDetails.value.followersModal)
    console.log("follow Mopdal..........", isFollowersModal);


    if (!isFollowersModal) return null
    return (

        <>
            <div className='fixed  inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center '>
                <div className="modal-dialog relative  pointer-events-none w-[400px] bg-[#191819] rounded-lg ">

                    <div className="flex justify-start items-center  modal-content bg-[#191819] border-none  shadow-lg relative  w-full pointer-events-auto  bg-clip-padding rounded-md outline-none text-current">
                        <div className='   text-white'
                        onClick={() => dispatch(openModalFollowers(false)) }
                        > <BsArrowLeft size={24} />
                        </div>
                        <div className='text-white p-3 pl-36'>Followers</div>

                    </div>
                    <div className="mt- text-xs border-b border-[#d9bfbf] w-full  text-[#ffffff]"></div>
                    {/* <div className='max-h-[250px] overflow-y-scroll scrollbar-none'> */}




                    <div className=' max-h-[210px] overflow-y-scroll scrollbar-non'>

                        <div className='flex justify-between p-3 '>
                            <div className='flex gap-3'>
                                <div>
                                    <img src="https://images.unsplash.com/photo-1549078642-b2ba4bda0cdb?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144" alt="My profile"
                                        className="w-12 h-12 rounded-full order-1" />
                                </div>
                                <div className='text-white'>
                                    <h3 className='text-md'>Thara Krishanan</h3>
                                    <h5 className='text-sm text-gray-400'>@thara</h5>
                                </div>
                            </div>
                            <div>
                                <button className='text-black rounded-md bg-[#FFFF1A] text-sm font-semibold px-5 py-2'>UnFollow</button>
                            </div>
                        </div>
                        <div className='flex justify-between p-3 '>
                            <div className='flex gap-3'>
                                <div>
                                    <img src="https://images.unsplash.com/photo-1549078642-b2ba4bda0cdb?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144" alt="My profile"
                                        className="w-12 h-12 rounded-full order-1" />
                                </div>
                                <div className='text-white'>
                                    <h3 className='text-md'>Thara Krishanan</h3>
                                    <h5 className='text-sm text-gray-400'>@thara</h5>
                                </div>
                            </div>
                            <div>
                                <button className='text-black rounded-md bg-[#FFFF1A] text-sm font-semibold px-5 py-2'>UnFollow</button>
                            </div>
                        </div>

                        <div className='flex justify-between p-3 '>
                            <div className='flex gap-3'>
                                <div>
                                    <img src="https://images.unsplash.com/photo-1549078642-b2ba4bda0cdb?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144" alt="My profile"
                                        className="w-12 h-12 rounded-full order-1" />
                                </div>
                                <div className='text-white'>
                                    <h3 className='text-md'>Thara Krishanan</h3>
                                    <h5 className='text-sm text-gray-400'>@thara</h5>
                                </div>
                            </div>
                            <div>
                                <button className='text-black rounded-md bg-[#FFFF1A] text-sm font-semibold px-5 py-2'>UnFollow</button>
                            </div>
                        </div>

                        <div className='flex justify-between p-3 '>
                            <div className='flex gap-3'>
                                <div>
                                    <img src="https://images.unsplash.com/photo-1549078642-b2ba4bda0cdb?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144" alt="My profile"
                                        className="w-12 h-12 rounded-full order-1" />
                                </div>
                                <div className='text-white'>
                                    <h3 className='text-md'>Thara Krishanan</h3>
                                    <h5 className='text-sm text-gray-400'>@thara</h5>
                                </div>
                            </div>
                            <div>
                                <button className='text-black rounded-md bg-[#FFFF1A] text-sm font-semibold px-5 py-2'>UnFollow</button>
                            </div>
                        </div>

                        <div className='flex justify-between p-3 '>
                            <div className='flex gap-3'>
                                <div>
                                    <img src="https://images.unsplash.com/photo-1549078642-b2ba4bda0cdb?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144" alt="My profile"
                                        className="w-12 h-12 rounded-full order-1" />
                                </div>
                                <div className='text-white'>
                                    <h3 className='text-md'>Thara Krishanan</h3>
                                    <h5 className='text-sm text-gray-400'>@thara</h5>
                                </div>
                            </div>
                            <div>
                                <button className='text-black rounded-md bg-[#FFFF1A] text-sm font-semibold px-5 py-2'>UnFollow</button>
                            </div>
                        </div>

                        <div className='flex justify-between p-3 '>
                            <div className='flex gap-3'>
                                <div>
                                    <img src="https://images.unsplash.com/photo-1549078642-b2ba4bda0cdb?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144" alt="My profile"
                                        className="w-12 h-12 rounded-full order-1" />
                                </div>
                                <div className='text-white'>
                                    <h3 className='text-md'>Thara Krishanan</h3>
                                    <h5 className='text-sm text-gray-400'>@thara</h5>
                                </div>
                            </div>
                            <div>
                                <button className='text-black rounded-md bg-[#FFFF1A] text-sm font-semibold px-5 py-2'>UnFollow</button>
                            </div>
                        </div>

                        <div className='flex justify-between p-3 '>
                            <div className='flex gap-3'>
                                <div>
                                    <img src="https://images.unsplash.com/photo-1549078642-b2ba4bda0cdb?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144" alt="My profile"
                                        className="w-12 h-12 rounded-full order-1" />
                                </div>
                                <div className='text-white'>
                                    <h3 className='text-md'>Thara Krishanan</h3>
                                    <h5 className='text-sm text-gray-400'>@thara</h5>
                                </div>
                            </div>
                            <div>
                                <button className='text-black rounded-md bg-[#FFFF1A] text-sm font-semibold px-5 py-2'>UnFollow</button>
                            </div>
                        </div>

                        <div className='flex justify-between p-3 '>
                            <div className='flex gap-3'>
                                <div>
                                    <img src="https://images.unsplash.com/photo-1549078642-b2ba4bda0cdb?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144" alt="My profile"
                                        className="w-12 h-12 rounded-full order-1" />
                                </div>
                                <div className='text-white'>
                                    <h3 className='text-md'>Thara Krishanan</h3>
                                    <h5 className='text-sm text-gray-400'>@thara</h5>
                                </div>
                            </div>
                            <div>
                                <button className='text-black rounded-md bg-[#FFFF1A] text-sm font-semibold px-5 py-2'>UnFollow</button>
                            </div>
                        </div>

                        <div className='flex justify-between p-3 '>
                            <div className='flex gap-3'>
                                <div>
                                    <img src="https://images.unsplash.com/photo-1549078642-b2ba4bda0cdb?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144" alt="My profile"
                                        className="w-12 h-12 rounded-full order-1" />
                                </div>
                                <div className='text-white'>
                                    <h3 className='text-md'>Thara Krishanan</h3>
                                    <h5 className='text-sm text-gray-400'>@thara</h5>
                                </div>
                            </div>
                            <div>
                                <button className='text-black rounded-md bg-[#FFFF1A] text-sm font-semibold px-5 py-2'>UnFollow</button>
                            </div>
                        </div>

                        <div className='flex justify-between p-3 '>
                            <div className='flex gap-3'>
                                <div>
                                    <img src="https://images.unsplash.com/photo-1549078642-b2ba4bda0cdb?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144" alt="My profile"
                                        className="w-12 h-12 rounded-full order-1" />
                                </div>
                                <div className='text-white'>
                                    <h3 className='text-md'>Thara Krishanan</h3>
                                    <h5 className='text-sm text-gray-400'>@thara</h5>
                                </div>
                            </div>
                            <div>
                                <button className='text-black rounded-md bg-[#FFFF1A] text-sm font-semibold px-5 py-2'>UnFollow</button>
                            </div>
                        </div>

                        <div className='flex justify-between p-3 '>
                            <div className='flex gap-3'>
                                <div>
                                    <img src="https://images.unsplash.com/photo-1549078642-b2ba4bda0cdb?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144" alt="My profile"
                                        className="w-12 h-12 rounded-full order-1" />
                                </div>
                                <div className='text-white'>
                                    <h3 className='text-md'>Thara Krishanan</h3>
                                    <h5 className='text-sm text-gray-400'>@thara</h5>
                                </div>
                            </div>
                            <div>
                                <button className='text-black rounded-md bg-[#FFFF1A] text-sm font-semibold px-5 py-2'>UnFollow</button>
                            </div>
                        </div>

                        <div className='flex justify-between p-3 '>
                            <div className='flex gap-3'>
                                <div>
                                    <img src="https://images.unsplash.com/photo-1549078642-b2ba4bda0cdb?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144" alt="My profile"
                                        className="w-12 h-12 rounded-full order-1" />
                                </div>
                                <div className='text-white'>
                                    <h3 className='text-md'>Thara Krishanan</h3>
                                    <h5 className='text-sm text-gray-400'>@thara</h5>
                                </div>
                            </div>
                            <div>
                                <button className='text-black rounded-md bg-[#FFFF1A] text-sm font-semibold px-5 py-2'>UnFollow</button>
                            </div>
                        </div>

                        <div className='flex justify-between p-3 '>
                            <div className='flex gap-3'>
                                <div>
                                    <img src="https://images.unsplash.com/photo-1549078642-b2ba4bda0cdb?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144" alt="My profile"
                                        className="w-12 h-12 rounded-full order-1" />
                                </div>
                                <div className='text-white'>
                                    <h3 className='text-md'>Thara Krishanan</h3>
                                    <h5 className='text-sm text-gray-400'>@thara</h5>
                                </div>
                            </div>
                            <div>
                                <button className='text-black rounded-md bg-[#FFFF1A] text-sm font-semibold px-5 py-2'>UnFollow</button>
                            </div>
                        </div>
                    </div>
                    {/* </div> */}


                </div>
            </div>
        </>
    )
}

export default FollowListModal