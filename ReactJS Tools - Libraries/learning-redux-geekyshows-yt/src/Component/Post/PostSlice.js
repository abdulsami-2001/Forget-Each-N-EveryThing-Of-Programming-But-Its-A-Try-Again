import {createSlice} from '@reduxjs/toolkit'

export const PostSlice = createSlice({
    name:"PostSlice",
    initialState:{
        handleInput:"",
        limitNumber:null
    },
    reducers:{
        handleInput:(state,action)=>{
            state.handleInput = action.payload
        },
        handleLimitNumber:(state,action)=>{
            state.limitNumber = action.payload
        }
    }
})

export const {handleInput,handleLimitNumber} = PostSlice.actions
