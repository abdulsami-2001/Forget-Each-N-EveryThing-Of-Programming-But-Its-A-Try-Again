import {createSlice} from '@reduxjs/toolkit'

export const CounterSlice = createSlice({
    name:"CounterSlice",
    initialState:{
        count: 0
    },
    reducers:{
        increment:(state)=>{
            state.count = state.count + 1;
        },
        decrement:(state)=>{
            state.count = state.count - 1;
        },
        incrementByAmount:(state,action)=>{
            state.count = state.count + action.payload;
        }
    }
})

export const {increment,decrement,incrementByAmount} = CounterSlice.actions