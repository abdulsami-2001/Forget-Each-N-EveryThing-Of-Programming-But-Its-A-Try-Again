import React from 'react'
import { Component } from 'react';

class ClassEventWOArrow extends Component{
    constructor(props){
        super(props)
        this.state={
            nameMine: "Sam"
        }
        this.onClickHandler = this.onClickHandler.bind(this)
    }
    
    onClickHandler(){
        console.log("Hey", this)
    }

    render(){
    
        return(
            <React.Fragment>
                <h1>Hello Sam</h1>
                <button onClick={this.onClickHandler}>Click ME</button>
            </React.Fragment>
        )
    }
}

export default ClassEventWOArrow