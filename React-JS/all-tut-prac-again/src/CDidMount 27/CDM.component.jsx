import React, { Component } from 'react'

class CDM extends Component {
    constructor(props){
        super(props)
        this.state = {
            ArrData:[],
            isError: false,
            errVal: null
        }
    }

    componentDidMount() {
        const url = "https://jsonplaceholder.typicode.com/users";
        fetch(url).then((d)=>{
            return d.json()
        }).then((myData)=>{
            this.setState({
                ArrData:myData,
                isError:false,
                errVal:null
            })
        }).catch((err)=>{
            this.setState({
                ArrData:[],
                isError:true,
                errVal:err.message
            })
        })
    }
    
    
    render() {
        return (
           this.state.ArrData.map((item)=>{
               return(
                   <h1 key={item.id} >{item.name}</h1>
               )
           })
        )
    }
}

export default CDM