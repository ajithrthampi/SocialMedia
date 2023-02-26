import React,{useState,useEffect} from 'react'
import axiosinstance from '../../../../axios/axiosinstance'


interface ChategoryUser {
    conversations:any
    currentUser:any
}


const UserCategory = ({ conversations, currentUser }:ChategoryUser) => {
    // console.log("Category usermmmmmmmmmmmmmmmmmmmm",currentUser);
    
    const [users, setUser] = useState<any>()

    useEffect(() => {
        const friendId = conversations.members.find((m:any) => m !== currentUser)
        try {
            axiosinstance.get("/chatusers/" + friendId, {
                headers: {
                    "x-access-token": localStorage.getItem("token"),
                },
            }).then((res) => {

                setUser(res.data)
            })
        } catch (err) {
            console.log("userChategory,,.",err);  
        }
    
    }, [currentUser,conversations])
    // console.log(users);
    
 
    
    return (
        <>
            <div>
                <div className='flex gap-3 p-3 justify-between'>
                    <div className='flex gap-4'>
                        <div className='lg:w-12 lg:h-12 md:w-8 md:h-8 rounded-full overflow-hidden cursor-pointer'>
                            {users && users.Images ?  <img src={`/images/${users.Images}`} />
                            :
                            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQA0BrKaI0cwXl3-wpk6Fu2gMbrP1LKk6waAlhKhrTzTobcVlka34MsNf4Yp3k1tG4ufTY&usqp=CAU' alt="profilepic" />
                            }
                        </div>
                        <div className='flex flex-col gap-1'>
                            <div className='lg:text-base md:text-xs font-medium'>{users && users.name}</div>
                            <h4 className='text-xs'>can you send it to me</h4>
                        </div>
                    </div>
                    <div className='flex flex-col'>
                        <div className='text-xs '>today</div>
                        <div className='text-xs'>11:50</div>
                    </div>
                </div>
                {/* Profile second */}
            </div>
        </>
    )
}

export default UserCategory