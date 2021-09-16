import React from 'react'
import Styles from './Contact.module.css'
import {useParams} from 'react-router-dom'

const Contact = () => {
    let {category} = useParams()

    console.log(category)
    return (
         <div className={Styles.mainCont}>
            <h1>Hey This Is Contact Component</h1>   
        </div>
    )
}

export default Contact
