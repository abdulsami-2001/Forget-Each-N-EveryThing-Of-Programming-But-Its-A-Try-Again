import React from 'react'
import { Fragment, useState} from 'react'

const UseState = () => {

    // react prevent from re-render of component, if we cant call the state changer function in event handler.
    const handleChange = (sa) =>{
        console.log(sa)
        setMyName("Abdul Sami") ;
        setRollNo(rollNo+5);
    }

    const [myName,setMyName] = useState("Sam")
    const [rollNo, setRollNo] = useState(420)
    return (
        <Fragment>
            <h1>My Name: {myName}</h1>
            <h1>My Roll No: {rollNo}</h1>
            <button onClick={()=>handleChange("sam")} >Change State</button>
        </Fragment>
    )
}

export default UseState
