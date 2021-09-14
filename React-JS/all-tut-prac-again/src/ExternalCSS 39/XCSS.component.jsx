import React, { Component } from 'react'
import Test from './Test'
// import Styles from './XCSS.css'
import './XCSS.css'


export default class XCSS extends Component {
    render() {
        return (
            <>
               <h1 className='txtb' >Hello From External CSS</h1> 
               <Test/>
            </>
        )
    }
}
