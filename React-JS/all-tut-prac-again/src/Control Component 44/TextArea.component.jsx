import React, { Component } from 'react'

export default class TextArea extends Component {
    state={
        val: "Dummy Text For Text Area Box"
    }
    render() {
        return (
            <form>
                <textarea 
                    cols="27" 
                    rows="10"
                    // defaultValue={`8881212${this.state.val}`} // dono sath use nhi hoskty hai!
                    value={this.state.val}
                    onChange={(e)=>this.setState({val:e.target.value.toUpperCase()})}
                >
                </textarea>
            </form>
        )
    }
}
