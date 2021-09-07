import React from 'react'
import { Fragment } from 'react'

const FuncEvent = (props) => {
    const onClickHandle = (e,props) =>{
        e.preventDefault();
        console.log("clicked")
        console.log(this)
        console.log(props)
    }
    
    return (
        <Fragment>
            <a href="https://www.google.com" onClick={(e)=>onClickHandle(e,props)}>Go To Googly</a>
        </Fragment>
    )
}

export default FuncEvent
