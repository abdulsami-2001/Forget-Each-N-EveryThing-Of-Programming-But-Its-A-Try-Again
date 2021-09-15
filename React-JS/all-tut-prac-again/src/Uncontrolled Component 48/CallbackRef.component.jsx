import React, { Component } from 'react'

export default class CallbackRef extends Component {
    constructor(props){
        super(props)
        this.state={
            something: ''
        }
        this.input = null;
        this.BackREF_ForInput = (element) => {
            this.input = element
        }
    }

    componentDidMount() {
        this.input.focus()
    }
    
    handleSubmit = (e) => {
        e.preventDefault()
        this.setState((state,props)=>{
            return state = {
                something: this.input.value
            }
        })
    }

    render() {
        return (
            <>
                <h2>In simple words: Just ref wala kaam hai, bass kaam karny ka tariqa diff ha. dono ko compare kro diff pta chl jayega. ismain directly func diya jaa rha ref attribute ma, or usma indirectly diya ja rha tha</h2>   
                <form onSubmit={this.handleSubmit} >
                    <h2>You Typed: {this.state.something}</h2>
                    Name: <input type="text" onChange={(e)=>this.setState({something:e.target.value})} />
                    <br />
                    <br />
                    Password: <input type="text"  ref={this.BackREF_ForInput} />
                    <br />
                    <br />
                    Address: <input type="text"  />
                    <br />
                    <br />
                    <input type="submit" value="Submit" />
                </form>
            </>
        )
    }
}
