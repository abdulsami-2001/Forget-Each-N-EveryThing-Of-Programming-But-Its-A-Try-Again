import React,{useState} from 'react'

const HandlingForm = () => {
    const [inputs, setInputs] = useState({
        myName: "sam",
        password: "sa"
    })

    const handleChange = (e) => {
        console.log(e.target.name)

        let value = [e.target.name] == "password" ? e.target.value.toUpperCase() : e.target.value;

        setInputs({
            ...inputs,
            [e.target.name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        
        setInputs({
            myName: inputs.myName.toUpperCase(),
            password: inputs.password
        })
     
        // setTimeout(() => {
        //     console.log("RUn")
        //     setInputs({
        //         myName: inputs.myName.toUpperCase(),
        //         password: inputs.password
        //     })
        // }, 2000);  // will not update state, Cause theory ma prha tha ky ye func kisi function(nested) ky ander call nhi hoskty ha
    }
    
    return (
        <form onSubmit={handleSubmit}>
           Name: <input type="text" value={inputs.myName} name="myName" onChange={handleChange} /> 
           <br />
           <br />
           Passwod: <input type="text" value={inputs.password} name="password" onChange={handleChange} /> 
           <br /><br />
           <input type="submit" name="submitBtn" value="Submit"  />
        </form>
    )
}

export default HandlingForm
