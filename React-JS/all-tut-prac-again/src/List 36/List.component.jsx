import React, { Component } from 'react'

export default class List extends Component {
    render() {
        const arr = [50,60,70,80,90,100];
        return (
            <>
                {arr.map((item,index)=><h1 key={index}>{item}</h1>)}
           </>
        )
    }
}
