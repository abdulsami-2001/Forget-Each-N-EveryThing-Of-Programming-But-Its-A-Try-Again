import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {increment,decrement} from './counterSlice'

const Counter = () => {
    const count = useSelector((state)=>state.counter.count)
    const dispatch = useDispatch()
    return (
        <div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <button onClick={()=>dispatch(increment())} >Increment</button>
            <span style={{margin:"35px 35px"}} >{count}</span>
            <button onClick={()=>dispatch(decrement())} >Decrement</button>
        </div>
    )
}

export default Counter
