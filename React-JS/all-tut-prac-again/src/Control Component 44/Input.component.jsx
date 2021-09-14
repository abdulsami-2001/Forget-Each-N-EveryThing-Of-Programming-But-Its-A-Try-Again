import React,{useState} from 'react'

const Input = () => {
    const [val, setVal] = useState("")
    
    return (
        <div>
            <form>
                <h1>Controlled Component By React JS</h1>
                
                <input type="text" value={val} onChange={(e)=>{
                        setVal(e.target.value)
                        console.log(e.target.value)
                    }
                }
                    
                />
            </form>
        </div>
    )
}

export default Input
