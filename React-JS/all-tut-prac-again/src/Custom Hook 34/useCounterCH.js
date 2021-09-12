import {useState} from 'react'

const useCounterCH = () =>{
    const [countUp,setCountUp] = useState(0)
    const handleCount = () => {
        setCountUp(countUp+1)
    }
    return{
        countUp,
        handleCount
    }
}

export default useCounterCH