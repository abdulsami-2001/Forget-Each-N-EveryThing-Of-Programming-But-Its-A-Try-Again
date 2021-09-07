import React,{Component} from 'react'

class SetStateFunc extends Component{
    
    constructor(props){
        super(props)
        let mapen = "ABC" 
        this.state={
            myName: "Sam",
            rollNo: this.props.rollNo,
            dummy: mapen
        }
    }
    
    onClickHandle = () => {
        console.log("handeler",this.state)
        this.setState( (state,props)=>{
                return(
                    state={
                        myName:"Abdul Sami",
                        rollNo:this.state.rollNo+5,
                        myName2: "MAN"
                    }
                )
            }
        )
    }
    
    
    
    render(){
        console.log(this.state)
        let s = "SAmaa"
        return(
            <React.Fragment>
                <h1>Hello, Set State Using NoFunction In Set State Method</h1>
                <h1>Name Is: {this.state.myName}</h1>
                <h1>Roll No Is: {this.state.rollNo}</h1>
                <h1>Name2 Is: {this.state.myName2}</h1>
                <h3>Dummy: {this.state.dummy}</h3>
                <h4>{s}</h4>
                <button onClick={()=>{this.onClickHandle()}}>Update State</button>
            </React.Fragment>
        )
    }
}

export default SetStateFunc