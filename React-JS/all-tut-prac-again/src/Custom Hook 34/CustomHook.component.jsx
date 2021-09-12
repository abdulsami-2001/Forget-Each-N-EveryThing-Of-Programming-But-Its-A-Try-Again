import React from 'react'
import { Fragment } from 'react'
import useCounterCH from './useCounterCH'


const CustomHook = () => {
    const { countUp:count1 , handleCount:handleCount1} = useCounterCH()
    const { countUp:count2, handleCount:handleCount2} = useCounterCH()
    
    return (
        <Fragment>
            <h1>Count: {count1}</h1>
            <button onClick={handleCount1} >Incerement</button>
            <h1>Count: {count2}</h1>
            <button onClick={handleCount2} >Incerement</button>
        </Fragment>
    )
}

export default CustomHook
