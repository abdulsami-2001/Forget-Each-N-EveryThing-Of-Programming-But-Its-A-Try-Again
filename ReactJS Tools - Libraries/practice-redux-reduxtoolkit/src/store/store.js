import {configureStore} from '@reduxjs/toolkit'
import {CounterSlice} from '../Component/Counter/CounterSlice'
import {PostApi} from '../Component/Posts/PostApi'
import {setupListeners} from '@reduxjs/toolkit/query'

export const store = configureStore({
    reducer:{
        counter: CounterSlice.reducer,
        [PostApi.reducerPath]: PostApi.reducer
    },
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(PostApi.middleware)
})


setupListeners(store.dispatch)
