import React from 'react'

const User = (props) => {
    return (
        <>
            <h1>Hello User/Sam</h1>
            <button onClick={()=>props.func(!props.val)}>Sign Out</button>
        </>
    )
}

export default User
