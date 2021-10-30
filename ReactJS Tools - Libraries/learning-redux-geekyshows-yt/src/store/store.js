// import {} from 'react-redux'
import {configureStore} from '@reduxjs/toolkit'
import {postApi} from '../Component/Post/PostApi'
import {setupListeners} from '@reduxjs/toolkit/query'
import {PostSlice} from '../Component/Post/PostSlice'

export const store = configureStore({
    reducer:{
        [postApi.reducerPath]:postApi.reducer,
        limitPost:PostSlice.reducer
    },
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(postApi.middleware)
})


setupListeners(store.dispatch)