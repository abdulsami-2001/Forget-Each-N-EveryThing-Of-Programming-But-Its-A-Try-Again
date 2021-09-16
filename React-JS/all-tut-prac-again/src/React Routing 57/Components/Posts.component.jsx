import React from 'react'
import Styles from './Post.module.css'
import {useParams} from 'react-router-dom'

const Posts = (props) => {
    
    let {category} = useParams()
    let {id} = useParams()
    console.log(props.customProps)
    return (
        <div className={Styles.mainCont}>
            <h1>Hey This Is Posts Component</h1>   
            {category ? (<h2>Category Name: {category}</h2>):("\n\na")}
            {id ? (<h2>Id Name: {id}</h2>) : ("\n\na")}
        </div>
    )
}

export default Posts
