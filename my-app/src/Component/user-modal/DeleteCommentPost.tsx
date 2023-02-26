import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import axiosinstance from '../../axios/axiosinstance'
import { closeDeleteModal } from '../../redux/store/features/userSlice'

interface modal {
    isVisible: any
    children: any
    state: any
    onClose: () => void
    postPassDetails: any
}

const DeleteCommentPost = ({ isVisible, children, onClose, state, postPassDetails }: modal) => {

    const [commentStatus, setCommentStatus] = useState<any>()
    const [deleteState, setDeleteState] = useState<boolean>(false)
    const dispatch = useDispatch()


    // DELETE COMMENT

    const deleteComment = (dataId: any) => {
        const commentId = dataId
        const postId = postPassDetails._id
        const id = { commentId, postId }

        axiosinstance.post("/deletecomment", id, {
            headers: {
                "x-access-token": localStorage.getItem("token"),
            },
        }).then((response) => {
            dispatch(closeDeleteModal(true))  
            setCommentStatus(response)
            console.log("deleytex comment");
             
        }).catch((err) => {
            console.log(err);
        })
    }
    useEffect(() => {
        onClose()
    },[commentStatus])

    if (!isVisible) return null

  return (
    <>
    <div className='fixed  inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center'>
        <div className="modal-dialog relative  pointer-events-none w-[360px]">
            <div className="modal-content bg-[#191819] border-none  shadow-lg relative flex flex-col justify-center items-center w-full pointer-events-auto  bg-clip-padding rounded-md outline-none text-current">
                <button className="modal-body relativ p-4 text-white text-sm  hover:bg-[#1E1E1E] w-full"
                    onClick={() => deleteComment(state)}
                >
                    Delete
                </button>
                <div className="mt- text-xs border-b border-[#d9bfbf] w-full  text-[#ffffff]"></div>
                <div className=" p-4  ">
                    <button type="button" className="px-6 py-2.5 bg-yellow-500 text-white font-medium text-xs leading-tight
                     uppercase rounded shadow-md hover:bg-yellow-600 hover:shadow-lg focus:bg-yellow-700 focus:shadow-lg
                      focus:outline-none focus:ring-0 active:bg-yellow-800 active:shadow-lg transition duration-150 ease-in-out"
                        data-bs-dismiss="modal" onClick={() => onClose()}>
                        Close
                    </button>

                </div>
            </div>
        </div>
    </div>

    {/* </div> */}
</>
  )
}

export default DeleteCommentPost