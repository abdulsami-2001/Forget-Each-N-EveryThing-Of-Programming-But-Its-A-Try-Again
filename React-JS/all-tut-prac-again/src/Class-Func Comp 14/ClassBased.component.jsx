import React, { Component, Fragment } from 'react'

class CBasedComp extends Component{
    render(){
        return(
            <Fragment>
                <h1>Hello From {this.props.textString}</h1>
            </Fragment>
        )
    }
}

export default CBasedComp