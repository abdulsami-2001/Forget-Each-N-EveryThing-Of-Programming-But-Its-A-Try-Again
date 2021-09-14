import React, { Component, Fragment } from 'react'

export default class InlineCSS extends Component {

    constructor(props){
        super()
        this.state={
            change: true
        }
    }

    
    render() {
        const headColor={
            color: 'cyan'
        }
        let fontSize = {
            fontSize:"83px"
        }
        return (
            <Fragment>
                {/* <h1 style={{...headColor, backgroundColor:"pink",...fontSize}} >Hello from inline CSS</h1> */}
                {/* <h1 style={headColor, fontSize} >Hello from inline CSS</h1> */}
                {/* <h1 style={{...headColor, ...fontSize}} >Hello from inline CSS</h1> */}


                <h1 style={this.state.change ? headColor : fontSize} >Hello, Inline CSS with conditions</h1>
                <button onClick={()=>this.setState({change: !this.state.change})} >Change Css</button>
            </Fragment>
        )
    }
}
