import React, { Component } from 'react'
import SamStudent from './SamStudent.component'


class Student extends Component {
    constructor(props){
        super(props)
        this.state={
            rollNo: 105
        }
    }
    
    render() {
        return (
            <div>
                <SamStudent rollNo={this.state.rollNo}/>
                <button onClick={()=>this.setState({rollNo:this.state.rollNo+5})}>Click To Change State</button>
            </div>
        )
    }
}

export default Student