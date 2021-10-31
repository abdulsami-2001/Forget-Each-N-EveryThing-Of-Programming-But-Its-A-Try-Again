import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {increment,decrement,incrementByAmount} from './CounterSlice'

const Counter = () => {
    const count = useSelector((state)=>state.counter.count)
    const dispatch = useDispatch();
    return (
        <div style={{marginTop:"100px"}} >
            <button onClick={()=>dispatch(increment())} >Increment</button>
            <br />
            <span>{count}</span>
            <br />
            <button onClick={()=>dispatch(decrement())} >Decrement</button>
            <br />
            <br />
            <button onClick={()=>dispatch(incrementByAmount(50))} >+ 50</button>
        </div>
    )
}

export default Counter
