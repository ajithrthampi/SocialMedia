import React, { useEffect, useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { IoMdClose } from 'react-icons/io'
import axiosinstance from '../../axios/axiosinstance'
import ImageUploading from 'react-images-uploading';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { useDispatch } from 'react-redux';
import { updateCaptionIn } from '../../redux/store/features/userSlice';

interface modal {
    isVisible: any
    children: any
    // state: any
    onClose: () => void
    onClosee: () => void
    postData: any
    postPassDetails: any
 
}

const EachPostModalDetails = ({ isVisible, children, onClose, onClosee, postData, postPassDetails }: modal) => {
  
    
    // const postId = postData._id


    const [commentStatus, setCommentStatus] = useState<any>()
    const [editPostData, setEditPostData] = useState<boolean>(false)
    const [caption, setCaption] = useState({})
    const [state, setState] = useState()
    const dispatch = useDispatch()
    

    // const isFriendPostModals = useSelector((state:any) => state.userDetails.value.friendShowModal)
    

    // useEffect(() => {
    //     setState(isFriendPostModals)
    // }, [])

    // console.log("is modalll datalkadlsf.fds//.././././",state);
    
    


    // DELETE POST

    const deletePost = () => {
        const postId = postData
        console.log(postId,"sdlfnsdkhfbdsfkjnfds........./.");

        axiosinstance.delete("/deletepost/" + postId, {
            headers: {
                "x-access-token": localStorage.getItem("token"),
            },
        }).then((response) => {
            // setOption(false)
            // setCommentModals(false)
            // viewPosts()
            onClose()
            console.log("hiii there");
        
            onClosee()
           
        }).catch((err) => {
            // navigate('/error')
            console.log(err);
        })
    }

    // EDIT POST

    const editPost = () => {
        setEditPostData(true)
    }

    // ON CHNAGE CAPTION

    const handleCaption = (e:any) => {
        const { name, value } = e.target
        setCaption({
            ...caption,
            [name]: value
        })
    }

    // UPDATE CAPTION

    const updateCaption = () => {
        const postId = postData
        dispatch(updateCaptionIn(true))
        // console.log("Post dataashdbakhfbhfbkdf",postId);
        axiosinstance.post("/editcaption/" + postId, caption, {
            headers: {
                "x-access-token": localStorage.getItem("token"),
            },
        }).then((response) => {
            setEditPostData(false)
            // setCommentModals(false)
            onClose()
        }).catch((err) => {
            // navigate('/error')
            console.log(err);
        })
    }

    if (!isVisible) return null

    return (
        <>
            <div className='fixed  inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center'>
                <div className="modal-dialog relative  pointer-events-none w-[360px]">
                    <div className="modal-content bg-[#191819] border-none  shadow-lg relative flex flex-col justify-center items-center w-full pointer-events-auto  bg-clip-padding rounded-md outline-none text-current">
                        <button className="modal-body relativ p-4 text-red-500 text-sm  hover:bg-[#1E1E1E] w-full"
                            onClick={deletePost}
                        >
                            Delete post
                        </button>
                        <div className="mt- text-xs border-b border-[#343131] w-full  text-[#822b2b]"></div>
                        <button className="modal-body relativ p-4 text-white text-sm  hover:bg-[#1E1E1E] w-full"
                            onClick={editPost}
                        >
                            Edit
                        </button>
                        <div className="mt- text-xs border-b border-[#343131] w-full  text-[#ffffff]"></div>
                        <div className=" p-4  ">
                            <button type="button" className="px-6 py-2.5 bg-yellow-500 text-white font-medium text-xs leading-tight
                     uppercase rounded shadow-md hover:bg-yellow-600 hover:shadow-lg focus:bg-yellow-700 focus:shadow-lg
                      focus:outline-none focus:ring-0 active:bg-yellow-800 active:shadow-lg transition duration-150 ease-in-out"
                                data-bs-dismiss="modal"
                                onClick={() => onClose()}
                            >
                                Close
                            </button>

                        </div>
                    </div>
                </div>
            </div>

            {/*  EDIT POST MODAL  */}

            {editPostData ?
                <>
                <div>
                
                    <div className='text-black absolute flex  justify-center items-center bottom-0 top-0 right-0  left-0 duration-1000 backdrop-blur-sm duration h-screen w-screen z-10'>
                        
                        <div className='text-black w-[60rem] bg-[#191819] h-[30rem] flex shadow-xl'>
                        <button className='text-white text-xl place-self-end '
                        onClick={() => onClose()} >
                        <IoMdClose size={25} />
                    </button>
                            <div className='w-1/2 '>
                                {<div className='w-full h-full flex justify-center items-center overflow-hidden pl-3 md:pl-0'>
                                    <img src={`/images/${postPassDetails.Images}`} className='' alt="Free unsplash image" />

                                </div>}
                            </div>
                            

                            <div className='w-1/2 bg-[#191819] flex flex-col justify-between px-5 py-3'>
                                <div className='flex justify-between h-[3rem] ' >
                                    <p className='text-main text-white' >Comments</p>

                                    {/* {eachPost.userId === user.id && <AiOutlineMore className='w-5 hover:text-main  cursor-pointer' color='black' size='20px' onClick={() => setOption(true)} />} */}
                                </div>

                                {/* <div className=' flex items-center'>
                                <IoMdHeart className='w-5  cursor-pointer' /> <p className='text-[10px] pl-1'>24 likes</p>
                            </div> */}

                                <div className='h-full pt-5 pl-6 '>
                                    <div className='h-[350px] overflow-y-scroll scrollbar-none '>
                                        <div className="pb-4 px-1">
                                            <label className="font-semibold text-gray-700 block pb-1">Caption :</label>
                                            <input
                                            id="caption" 
                                            name='caption' 
                                            className="rounded-md px-4 py-2 w-full outline outline-white text-slate-400 bg-[#313131] " 
                                            type="text"
                                            defaultValue={postPassDetails.caption}
                                            onChange={handleCaption}
                                            />
                                        </div>

                                        <button data-modal-toggle="popup-modal" type="button" className=" mx-auto text-white bg-yellow-500 cursor-pointer focus:ring-4 focus:outline-none  focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 ml-2 py-2.5 text-center mr-2 mt-2"
                                         onClick={updateCaption}
                                        >
                                            Make Changes
                                        </button>
                                    </div>
                                    <div className='mt-2 flex'>
                                    </div>
                                </div>
                            </div>
                            <AiOutlineClose className='w-5 hover:text-main  cursor-pointer'
                            // onClick={() => setEdit(false)}
                            />
                        </div>
                    </div>
                    </div>
                </>
                :
                <>

                </>

            }

            {/* </div> */}
        </>
    )
}

export default EachPostModalDetails