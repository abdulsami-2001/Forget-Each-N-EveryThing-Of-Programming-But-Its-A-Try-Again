import React, { Component } from 'react'

class SamStudent extends Component {
    constructor(props){
        super(props)
        this.state={
            newRollNo: this.props.rollNo
        }
    }
    
    static getDerivedStateFromProps(props,state){

        return{
            newRollNo: props.rollNo
        }

        // return null
    }

    render() {
        return (
            <h1>
                Roll No: {this.state.newRollNo}
            </h1>
        )
    }
}
export default SamStudent