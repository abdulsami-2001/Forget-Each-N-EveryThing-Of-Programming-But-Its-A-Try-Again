import React,{useState,useEffect} from 'react'

const Error = () => {
    const [mount, setMount] = useState(false)
    useEffect(() => {
        setMount(true)
    },[])
    return (
        <div>
            <h1>No Page Found</h1>
        </div>
    )
}

export default Error
