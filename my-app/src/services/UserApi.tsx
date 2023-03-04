import axiosinstance from "../axios/axiosinstance"

//VIEW pROFILE DETAILS 

export const view_Profile_Details = (userId:any) => {
    return axiosinstance.get("/viewprofiledetails/" + userId, {
        headers: {
            "x-access-token": localStorage.getItem("token"),
        },
    }).then((response) => response.data)
}

// SEARCH USER

export const  search_user = (debouncedValue:any) => {
    return axiosinstance.get("/searchuser/" + debouncedValue, {
        headers: {
            "x-access-token": localStorage.getItem("token"),
        },
    }).then((response) => response.data)
}

//VIEW POST

export const  view_post = () => {
    return axiosinstance.get("/viewpost", {
        headers: {
            "x-access-token": localStorage.getItem("token"),
          },
    }).then((response) => response.data)
}

//LIKE POST

export const like_post = (id:any) => {
     return axiosinstance.post("/likepost", id, {
        headers: {
            "x-access-token": localStorage.getItem("token"),
        },
     }).then((response) => response.data)

}

//POST DETAILS

export const post_details = (postId:any) =>{
    return axiosinstance.get("/postdetails/" + postId, {
        headers: {
            "x-access-token": localStorage.getItem("token"),
        },
    }).then((response) => response.data)
}


//USERS DETAILS

export const users_users = () => {
    return axiosinstance.get("/users" , {
        headers: {
            "x-access-token": localStorage.getItem("token"),
        },
    }).then((response) => response.data)
}

//ADD NOTIFICATION

export const add_notification = (notifyDetails:any) => {
    return axiosinstance.post("/addnotification", notifyDetails , {
        headers: {
            "x-access-token": localStorage.getItem("token"),
        },
    }).then((response) => response.data)
}

//VIEW ALL FOLLOWING

export const view_all_following = (userId:any) => {
    return axiosinstance.get("/viewallfollowing/" + userId, {
        headers: {
            "x-access-token": localStorage.getItem("token"),
        },
    }).then((response) => response.data)
}

//FOLLOWING COUNT

export const following_count = (currentUserId:any) => {
    return axiosinstance.get("/followingcount/" + currentUserId, {
        headers: {
            "x-access-token": localStorage.getItem("token"),
        },
    }).then((response) => response.data)
}

// FOLLOW AND UNFOLLOW

export const follow_unfollow = (friendFollowId:any) => {
    return axiosinstance.post("/follow", friendFollowId, {
        headers: {
            "x-access-token": localStorage.getItem("token"),
        },
    }).then((response) => response.data)
}

//GET NOTIFICATION

export const get_Notofication = () => {
    return axiosinstance.get("/getnotifications", {
        headers: {
            "x-access-token": localStorage.getItem("token"),
        },
    }).then((response) => response.data)
}

// GET NOTIFICATION COUNT

export const get_notification_count = () => {
    return axiosinstance.get("/getnotificationscount", {
        headers: {
            "x-access-token": localStorage.getItem("token"),
        },
    }).then((response) => response.data)
}

//VIEW PROFILE POST

export const viewProfilePostss = (friendId:any) => {  
    return axiosinstance.get("/viewprofilepost/" + friendId, {
        headers: {
            "x-access-token": localStorage.getItem("token"),
          },
    }).then((response) => response.data)
}

//CONVERSATION

export const conversationUser = (Id:any) => {  
    return axiosinstance.post("/conversation" ,Id, {
        headers: {
            "x-access-token": localStorage.getItem("token"),
          },
    }).then((response) => response.data)
}

//FOLLOWERS LIST

export const followersListss = (userId:any) => {  
    return axiosinstance.get("/followerslist/" + userId, {
        headers: {
            "x-access-token": localStorage.getItem("token"),
          },
    }).then((response) => response.data)
}

//FOLLOWING LIST

export const followingListss = (userId:any) => {  
    return axiosinstance.get("/followinglist/" + userId, {
        headers: {
            "x-access-token": localStorage.getItem("token"),
          },
    }).then((response) => response.data)
}

//CHAT USER

export const chat_user = (Id:any) => {  
    return axiosinstance.get("/chatusers/" + Id, {
        headers: {
            "x-access-token": localStorage.getItem("token"),
          },
    }).then((response) => response.data)
}

//COMMENT

export const comment_comment = (Id:any) => {  
    return axiosinstance.post("/comment" ,Id, {
        headers: {
            "x-access-token": localStorage.getItem("token"),
          },
    }).then((response) => response.data)
}

//GET COMMENT

export const get_comment = (Id:any) => {  
    return axiosinstance.get("/getcomment/" + Id, {
        headers: {
            "x-access-token": localStorage.getItem("token"),
          },
    }).then((response) => response.data)
}



