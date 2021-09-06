import React, { Component } from 'react'

class Composing extends Component{
    render(){
        console.log(this.props.name)
        return(
            <h2>Hello {this.props.name ? this.props.name : "Geek"}</h2>
        )
    }
}

export default Composing