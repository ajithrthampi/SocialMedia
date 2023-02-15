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

}

const initalState:PersonState ={
   persons: [],
   followersModal: false,
   friendDetails:{},
   friendShowModal: false,
   friendEachPost:{},
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
        },

        friendPostModal:(state, action) => {
            state.value.friendShowModal = action.payload
            console.log(state.value.friendShowModal,"Hello");
            
        },
        friendEachPost:(state, action) => {
            state.value.friendEachPost = action.payload
            console.log("reduxxh../././.../",state.value.friendEachPost);
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
}
 = PersonSlice.actions