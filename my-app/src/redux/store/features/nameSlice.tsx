import { createSlice } from "@reduxjs/toolkit"
import { PayloadAction } from "@reduxjs/toolkit/dist/createAction"

export  interface Person {
   
}

interface PersonState {
    messageName:any

}

const initalState:PersonState ={
    messageName:[]
}

export const UserPersonName = createSlice({

    name:"UserMess",

    initialState:{
        value:initalState
    },

    reducers:{
        messageUserName: (state, action) => {
            state.value.messageName = action.payload;
            console.log("-------98989899-------------=-=-=-mesage", state.value.messageName);
            
        }
    }  
})
export default UserPersonName.reducer;
export const 
{
    messageUserName,
}
 = UserPersonName.actions