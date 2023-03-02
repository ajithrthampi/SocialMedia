import { createSlice } from "@reduxjs/toolkit"
import { PayloadAction } from "@reduxjs/toolkit/dist/createAction"

export  interface Person {
   
}

interface PersonState {
  persons:Person[]
  followersModal:boolean
  friendDetails:any
  friendEachPost:any
  friendShowModal:boolean
  closeDeleteUpdateMOdal:boolean
  updateFollowCount:boolean
  updateCaptionModal:boolean
  PostDetails:any
  notifi:boolean
  followUnfollowUpdation:boolean

}

const initalState:PersonState ={
   persons: [],
   followersModal: false,
   friendDetails:{},
   friendShowModal: false,
   friendEachPost:{},
   closeDeleteUpdateMOdal:false,
   updateFollowCount:false,
   updateCaptionModal:false,
   PostDetails:[],
   notifi:false,
   followUnfollowUpdation:false
}

export const PersonSlice = createSlice({

    name:"person",

    initialState:{
        value:initalState
    },

    reducers:{
        openModalFollowers:(state, action) => {
            state.value.followersModal = action.payload
            // console.log("redux valuie/...",state.value.followersModal);
            
        },   
        passfriendDetails:(state, action) => {
            state.value.friendDetails = action.payload
            //  console.log("redux valuie/...", state.value.friendDetails);
            // console.log(" state.value.friendDetails", state.value.friendDetails);
        },

        friendPostModal:(state, action) => {
            state.value.friendShowModal = action.payload
            // console.log(state.value.friendShowModal,"Hello");
            
        },
        friendEachPost:(state, action) => {
            state.value.friendEachPost = action.payload
            // console.log("reduxxh../././.../",state.value.friendEachPost);
        },
        closeDeleteModal:(state, action) =>{
            state.value.closeDeleteUpdateMOdal = action.payload
            // console.log(" state.value.closeDeleteUpdateMOdal><><>>>><>..........", state.value.closeDeleteUpdateMOdal);
        },
        updateFollowData:(state, action) => {
            state.value.updateFollowCount = action.payload
            console.log(" state.value.updateFollowCoun.,.,.,.,.," ,state.value.updateFollowCount);
        },
        updateCaptionIn:(state, action) => {
            state.value.updateCaptionModal = action.payload;
            console.log("state.value.updateCaptionModal   state.value.updateCaptionModal",state.value.updateCaptionModal);
        },
        updatePostDetails:(state, action) => {
            state.value.PostDetails = action.payload
            console.log("PostDetails  PostDetails PostDetails", state.value.PostDetails);   
        },
        NotifyUpdate: (state, action) => {
            state.value.notifi = action.payload
            // console.log(" state.value.notifi/.,/.", state.value.notifi);
            
        },
        followUpdation:(state, action) => {
            state.value.followUnfollowUpdation = action.payload;
            console.log(" follow upation .,.,.,.", state.value.followUnfollowUpdation);
        }
    }  
})
export default PersonSlice.reducer;
export const 
{
    openModalFollowers, 
    passfriendDetails, 
    friendPostModal, 
    friendEachPost,
    closeDeleteModal,
    updateFollowData,
    updateCaptionIn,
    updatePostDetails,
    NotifyUpdate,
    followUpdation
}
 = PersonSlice.actions