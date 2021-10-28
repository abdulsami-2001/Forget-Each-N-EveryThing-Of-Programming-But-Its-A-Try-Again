import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {incrementByAmount} from '../Counter/counterSlice'

const Coin = () => {
    const coin = useSelector((state)=>state.counter.count)
    const color = useSelector((state)=>state.theme.color)
    const dispatch = useDispatch()
    return (
        <div>
           <span style={{color:color}} > Coin Value : {coin}</span>
            <br />
            <button onClick={()=>dispatch(incrementByAmount(10))} >+ By 10</button>
        </div>
    )
}

export default Coin
