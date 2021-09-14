import React,{useState} from 'react'

const MultipleInputs = () => {
    const [inputs, setInputs] = useState({
        myName: "Sam",
        password: "881212"
    })

    const handleChange = (e) => {
        console.log(e.target.name)
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        })
    }
    
    return (
        <form>
           Name: <input type="text" value={inputs.myName} name="myName" onChange={handleChange} /> 
           <br />
           <br />
           Passwod: <input type="text" value={inputs.password} name="password" onChange={handleChange} /> 
        </form>
    )
}

export default MultipleInputs
