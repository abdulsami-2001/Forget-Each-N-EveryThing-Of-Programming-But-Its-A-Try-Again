import React from 'react'
// import {useEffect,useState} from 'react'
import {useLocation} from 'react-router-dom'
const Error = () => {
    let location = useLocation();
    console.log(location)
    // const [mount, setMount] = useState(false)
    // useEffect(() => {
    //     setMount(true)
    // },[])
    return (
        <div>
            <h1>No Page Found</h1>
        </div>
    )
}

export default Error
