import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {increment,decrement,incrementByAmount} from './sliceCounter'

const Counter = () => {
    const count = useSelector((state)=>state.counter.count)
    const dispatch = useDispatch();
    return (
        <div>
            <button onClick={()=>dispatch(increment())} >Increment</button>
            <br/>
            <br/>
            <span>{count}</span>
            <br/>
            <br/>
            <button onClick={()=>dispatch(decrement())} >Decrement</button>
            <br/>
            <br/>
            <button onClick={()=>dispatch(incrementByAmount(10))} >IncrementByAmount</button>
        </div>
    )
}

export default Counter
