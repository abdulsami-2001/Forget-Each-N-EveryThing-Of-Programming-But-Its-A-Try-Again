import React, { Component } from 'react'
import './JSX.styles.css'

class JSX extends Component{
    render(){
        let a = 10;
        const myFunc=(name1)=>{
            return name1
        }
        let myObj = {
            id:{
                usrOne:`1200-2020`
            }
        }
        return(
            <React.Fragment>
                <h1 className={false ? "bg": "cg"}  >Hello World</h1>
                <h1>Hey, We Accessing Chilers {this.props.children}</h1>
                <h1>{a}</h1>
                <h1>{10+30}</h1>
                <h1>Hello {myFunc("Sam")}</h1>
                <h1>{`Hello ${myFunc("Man")}`}</h1>
                <h1>Id Is: {myObj.id.usrOne}</h1>
            </React.Fragment>
        )
    }
}


export default JSX