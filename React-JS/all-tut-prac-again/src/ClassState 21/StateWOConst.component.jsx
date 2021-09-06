import React, { Component, Fragment } from 'react'

class StateWOConst extends Component {
    
    state={
        myName: "Sam",
        rollNo: this.props.rollNo
    }
    
    
    render() {
        return (
            <Fragment>
                <h1>Hello React Practice</h1>
                <h1>My Name Is: {this.state.myName}<br/>Roll No Is: {this.state.rollNo}</h1>
            </Fragment>
        )
    }
}

export default StateWOConst
