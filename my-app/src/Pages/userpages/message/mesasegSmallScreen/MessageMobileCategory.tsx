import React, { useState, useEffect } from 'react'
import axiosinstance from '../../../../axios/axiosinstance'

interface ChategoryUser {
    conversations: any
    currentUser: any
}



const MessageMobileCategory = ({ conversations, currentUser }: ChategoryUser) => {

    const [users, setUser] = useState<any>()


    useEffect(() => {
        const friendId = conversations.members.find((m: any) => m !== currentUser)
        try {
            axiosinstance.get("/chatusers/" + friendId, {
                headers: {
                    "x-access-token": localStorage.getItem("token"),
                },
            }).then((res) => {

                setUser(res.data)
            })
        } catch (err) {
            console.log("userChategory,,.", err);
        }
    }, [currentUser, conversations]
    )

    console.log("users///////////////////////////////////", users);
    return (
        <>

            <div className='flex gap-5 text-white p-2'
            //  onClick={handleCLick}
            >
                <div className='w-12 h-12  rounded-full overflow-hidden cursor-pointer'>
                    {users?.Images ? 
                    <>
                     <img src={`/images/${users?.Images}`} alt="profilepic" />
                    </>
                     :
                     <>
                      <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQA0BrKaI0cwXl3-wpk6Fu2gMbrP1LKk6waAlhKhrTzTobcVlka34MsNf4Yp3k1tG4ufTY&usqp=CAU' alt="profilepic" />
                     </>    
                }
                   
                </div>
                <div className=''>
                    <div className='text-lg'>{users && users.name}</div>
                    <div className='text-sm'>Active now</div>
                </div>
            </div>

        </>
    )
}

export default MessageMobileCategory