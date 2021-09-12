import React from 'react'
import { Fragment,useState,useEffect } from 'react'

const UseEffect = () => {

    const [countUp,setCountUp] = useState(0)
    const [countDown,setCountDown] = useState(100)

    useEffect(() => {
       console.log("Effect Parta Hai!")
    }, []) // execute once

    // useEffect(() => {
    //    console.log("Effect Parta Hai!")
    // }) // execute everytime

    // useEffect(() => {
    //     console.log("Effect Parta Hai!")
    // }, [countDown]) // execute when the element updates

    return (
        <Fragment>
            <h1>Counter Of Increment: {countUp}</h1>
            <button onClick={()=>setCountUp(countUp+1)}>Increment</button>
            <h1>Counter Of Decrement: {countDown}</h1>
            <button onClick={()=>setCountDown(countDown-1)}>Decrement</button>
        </Fragment>
    )
}

export default UseEffect
