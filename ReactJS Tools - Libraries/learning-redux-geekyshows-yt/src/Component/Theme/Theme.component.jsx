import React from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {changeColor,onInputChange} from './themeSlice'

const Theme = () => {
    const dispatch = useDispatch()
    const Color = useSelector((state)=>state.theme.inputChange)
    return (
        <>
            <input type="text" onChange={(e)=>dispatch(onInputChange(e.target.value))} />
            <button onClick={()=>dispatch(changeColor(Color))} >Change Text Color</button>
        </>
    )
}

export default Theme
