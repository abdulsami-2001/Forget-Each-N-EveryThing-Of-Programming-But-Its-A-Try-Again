import React from 'react'
import { Component } from 'react';

class ClassEventWArrow extends Component{
    
    // driver = () => {
    //     this.onClickHandler(5)
    // }
    
    onClickHandler = (sam) =>{
        console.log(sam)
        console.log("Hey", this)
    }

    render(){
    
        return(
            <React.Fragment>
                <h1>Hello Sam</h1>
                <button onClick={()=>this.onClickHandler(5555)} /*onClick={this.driver}*/>Click ME</button>
            </React.Fragment>
        )
    }
}

export default ClassEventWArrow