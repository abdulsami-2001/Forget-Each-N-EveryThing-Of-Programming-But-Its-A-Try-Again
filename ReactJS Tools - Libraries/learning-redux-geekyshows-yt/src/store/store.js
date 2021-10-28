import {configureStore} from '@reduxjs/toolkit'
import counterReducer from '../MyComponents/Counter/sliceCounter'
import themeReducer from '../MyComponents/Theme/Themeslice'

export default configureStore({
    reducer:{
        counter:counterReducer,
        theme:themeReducer
    }
})