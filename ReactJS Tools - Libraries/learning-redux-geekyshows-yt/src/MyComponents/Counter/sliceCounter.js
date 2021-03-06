import {createSlice} from '@reduxjs/toolkit'

export const sliceCounter = createSlice({
    name:"counter",
    initialState:{
        count:0
    },
    reducers:{
        increment: (state) =>{
            state.count=state.count+1;
        },
        decrement:(state)=>{
            state.count = state.count - 1;
        },
        incrementByAmount:(state,action)=>{
            state.count = state.count + action.payload;
        }
    }
})

export const {increment,decrement,incrementByAmount} = sliceCounter.actions;

export default sliceCounter.reducer;