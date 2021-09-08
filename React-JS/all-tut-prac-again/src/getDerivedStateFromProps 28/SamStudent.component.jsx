import React, { Component } from 'react'

class SamStudent extends Component {
    constructor(props){
        super(props)
        this.state={
            newRollNo: this.props.rollNo
        }
    }
    
    static getDerivedStateFromProps(props,state){

        if(props.rollNo !==state.newRollNo){
            return{
                newRollNo: props.rollNo
            }
        }else{
            return null
        }
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