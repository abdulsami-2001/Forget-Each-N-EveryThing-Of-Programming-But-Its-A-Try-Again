import React, { Component } from 'react'
import myPic from '../favicon.ico'
export default class ImgNAss extends Component {
    render() {
        return (
            <>
                <h3>
                    This From Public Folder, Which isn't processed by Webpack, Use When you're creating websites like e-commerce
                </h3>            
                <img src={process.env.PUBLIC_URL+"/favicon.ico"} alt="Hello " />   
                <hr />
                <hr />
                <h3>
                    This From Src Folder, Which is processed by Webpack
                </h3>
                <img src={myPic} alt="Hello " />   
                
            </>
        )
    }
}
