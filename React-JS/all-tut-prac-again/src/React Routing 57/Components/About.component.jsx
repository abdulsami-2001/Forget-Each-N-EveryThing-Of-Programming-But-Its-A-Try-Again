import React from 'react'
import Styles from './About.module.css'
import {useLocation,useHistory} from 'react-router-dom'

const About = () => {
    let location = useLocation();
    console.log(location)
    let history = useHistory()

    return (
         <div className={Styles.mainCont}>
            <h1>Hey This Is About Component</h1>   
            <button onClick={()=>history.goForward()} type="button">Navigate Using Location Hook</button>
        </div>
    )
}

export default About
