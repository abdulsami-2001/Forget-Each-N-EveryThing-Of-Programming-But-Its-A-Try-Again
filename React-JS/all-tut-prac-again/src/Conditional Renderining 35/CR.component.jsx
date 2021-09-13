import React,{useState} from 'react'
import User from './User.component'
import Guest from './Guest.componet'
const CR = (props) => {
    const [val, setValue] = useState(props.isRegister)

    if(val){
        return(
            <User func={setValue} val={val} />
        )
    }else{
        return(
            <Guest func={setValue} val={val}/>
        )
    }
}

export default CR
