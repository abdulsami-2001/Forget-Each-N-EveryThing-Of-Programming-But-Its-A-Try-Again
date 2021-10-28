import React from 'react'
import {onInputChange,changeColor} from './Themeslice'
import {useSelector,useDispatch} from 'react-redux'
const Theme = () => {
    const inputChange = useSelector((state)=>state.theme.inputChange)
    const dispatch = useDispatch()
    return (
        <div>
            <br/>
            <br/>
            <br/>
            <br/>
         <input type="text" value={inputChange} onChange={(e)=>dispatch(onInputChange(e.target.value))} />
         <br/>
         <br/>
         <button onClick={()=>dispatch(changeColor(inputChange))} >Change Color Of Text</button>
        </div>
    )
}

export default Theme