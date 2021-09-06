import React, { Fragment } from 'react'

const Props = (props) =>{
//    props.name ="Abdul Sami" // we're trying to change the val, but it'll not happen
                            //cause props are read-only, not read-write and so on.

    let name = props.name // well we can do this jugar, assign it to another thing 
                         // and use like that

    return(
        <Fragment>
            <h2>Props Are Read Only, We cant update their values.</h2>
            <h2>Hello, {props.name}</h2>
            <h2>Hello, {name}</h2>
        </Fragment>
    )
}

export default Props