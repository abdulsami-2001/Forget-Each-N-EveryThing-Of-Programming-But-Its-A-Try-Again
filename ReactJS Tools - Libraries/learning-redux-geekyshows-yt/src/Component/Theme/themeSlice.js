import {createSlice} from '@reduxjs/toolkit'

export const themeSlice = createSlice({
    name:"theme",
    initialState:{
        color:"",
        inputChange:"",
    },
    reducers:{
        changeColor : (state,action) => {
            state.color = action.payload
        },
        onInputChange : (state,action) => {
            state.inputChange = action.payload
        }
    }
}) 

export const  {changeColor,onInputChange} = themeSlice.actions

export default themeSlice.reducer