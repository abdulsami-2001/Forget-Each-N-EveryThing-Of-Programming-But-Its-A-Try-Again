import React from 'react'
import Styles from './Post.module.css'

const Posts = (props) => {
    return (
        <div className={Styles.mainCont}>
            <h1>Hey This Is Posts Component</h1>   
            {props.match.params ? (<h2>Category Name: {props.match.params.category}</h2>):"a"}
            {props.match.params ? (<h2>Id Name: {props.match.params.id}</h2>) : "a"}
        </div>
    )
}

export default Posts
