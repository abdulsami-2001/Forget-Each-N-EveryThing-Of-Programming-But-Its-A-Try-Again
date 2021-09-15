import React, { Component, createRef } from 'react'

export default class REF extends Component {
    constructor(props){
        super(props)
        this.state={
            something:""
        }
        this.textInput = createRef();
        this.Input = createRef();
    }
    
    // componentDidMount() {
    //     console.log(this.textInput.current)
    //     console.log(this.Input.current)
    //     this.Input.current.focus();
    //     this.textInput.current.focus();
        
    // }
    
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this)
        this.setState({
            something: this.Input.current.value
        })
        this.Input.current.value =""
    }
    
    render() {
        return (
            <>
                <h2>Ref: Ref boly tou, simple baat ma jis element ky ander attention seeking ka keera ho usmain ref ka attribute daal dou, then ussy access karo or focus(just aik eg ha) krwado</h2>   
                {/* <form>
                    Name: <input type="text" />
                    <br /><br />
                    Password: <input type="text" name="pwd" ref={this.Input} />
                    <br /><br />
                    Address: <input type="text" name="add"  ref={this.textInput}  />
                </form> */}
                
                    <h1>You Typed: {this.state.something}</h1>
                <form onSubmit={this.handleSubmit}>
                    Name: <input type="text" ref={this.Input} />
                    <input type="submit"  />
                </form>


            </>
        )
    }
}
