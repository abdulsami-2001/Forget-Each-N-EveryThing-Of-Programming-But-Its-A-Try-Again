import React from 'react'

const Guest = (props) => {
    return (
        <>
            <h1>Hello Guest</h1>
            <button onClick={()=>props.func(!props.val)} >Login</button>
            <button onClick={()=>props.func(!props.val)}>Sign Up</button>
        </>
    )
}

export default Guest
