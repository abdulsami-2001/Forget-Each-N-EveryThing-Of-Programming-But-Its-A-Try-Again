import React, { Component } from 'react'

export default class Key extends Component {
    render() {
        const arr = [
            {key:Math.random(), val:10},
            {key:Math.random(), val:20},
            {key:Math.random(), val:30},
            {key:Math.random(), val:40},
            {key:Math.random(), val:50},
            {key:Math.random(), val:60},
            {key:Math.random(), val:70},
            {key:5, val:80},
            {key:5, val:90}, // same key
            {key:Math.random(), val:100},
        ]
        return (
            <>
                {arr.map((item,index)=>{
                    return <h1 key={item.key}>{item.val}, {item.key}</h1>
                })}
            </>
        )
    }
}
