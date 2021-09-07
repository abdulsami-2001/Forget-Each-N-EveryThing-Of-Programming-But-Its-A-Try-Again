import React from 'react'
import { Component } from 'react';

class SetStateNOFunc extends Component{
    constructor(props){
        super(props)
        this.state={
            myName: "Sam",
            rollNo: this.props.rollNo
        }
    }
    // onClickHandle = () => {
    //     console.log(this)
    //    this.state.myName= "M Sami"   // aysa hoti ha, but webpage par reflect nhi
                                        // hoti ha, this ky obj ma change zroor hojati ha
    // }
 
    onClickHandle = () => {
        console.log("handeler",this.state)
        this.setState({
            myName:"Abdul Sami",
            rollNo: this.state.rollNo+(Math.ceil(Math.random()*5)),
            myName2: "Bet-reen"
        })
    }

    render(){
        console.log(this.state)
        return(
            <React.Fragment>
                <h1>Hello, Set State Using NoFunction In Set State Method</h1>
                <h1>Name Is: {this.state.myName}</h1>
                <h1>Roll No Is: {this.state.rollNo}</h1>
                <h1>Name2 Is: {this.state.myName2}</h1>
                <button onClick={()=>{this.onClickHandle()}}>Update State</button>
            </React.Fragment>
        )
    }
}

export default SetStateNOFunc