import React,{useState} from 'react'
import User from './User.component'
import Guest from './Guest.componet'
const CR = (props) => {
    const [val, setValue] = useState(props.isRegister)
    // If else


    // if(val){
    //     return(
    //         <User func={setValue} val={val} />
    //     )
    // }else{
    //     return(
    //         <Guest func={setValue} val={val}/>
    //     )
    // }

    // inline if with logical && operator

    // return(
    //     <>
    //     <h1>Hello World</h1>
    //     {val &&  <User func={setValue} val={val} /> && <Guest func={setValue} val={val} />} {/*most right side executes*/}
    //     {/* {val && <User func={setValue} val={val} />} */}
    //     </>
    // )


    // inline if else with conditional operator / ternary

    //    return(
    //     {val ? <User func={setValue} val={val} /> : <Guest func={setValue} val={val}/>}
                // ye error ha w/o fragment ky, jb aap inline condition use kr rhy ho to ! 
    //    )

    //    return(
    //     <>
    //         {val ? <User func={setValue} val={val} />  : <Guest func={setValue} val={val} /> }
    //     </>
    //  )


    // IIFE - immedieatly invoked function expression
    
    return(
        <>
            {(()=>{
                if(val){
                   return <User func={setValue} val={val} />
                }else{
                    return <Guest func={setValue} val={val} />
                }
            })()}
        </>
    )

}

export default CR
