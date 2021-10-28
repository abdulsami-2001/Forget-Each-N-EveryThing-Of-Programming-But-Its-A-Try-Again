import React from 'react'
import {useSelector} from 'react-redux'

const Coin = () => {
    const coin = useSelector((state)=>state.counter.count)
    const color = useSelector((state)=>state.theme.color)
    console.log(color)
    return (
        <div >
            <p style={{color:color}}  >From Coin Component : {coin}</p>
        </div>
    )
}

export default Coin
