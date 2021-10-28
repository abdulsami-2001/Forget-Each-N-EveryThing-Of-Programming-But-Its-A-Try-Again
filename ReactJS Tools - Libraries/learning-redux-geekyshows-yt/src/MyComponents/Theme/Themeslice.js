import {createSlice} from '@reduxjs/toolkit'

export const Themeslice = createSlice({
    name:"Theme",
    initialState:{
        color:'',
        inputChange:""
    },
    reducers:{
        onInputChange : (state,action) => {
            state.inputChange = action.payload
        },
        changeColor:(state,action)=>{
            state.color = action.payload
        }
    }
})

export const {onInputChange,changeColor} = Themeslice.actions

export default Themeslice.reducer