import React from 'react'
import {Link} from 'react-router-dom'
import Styles from './Navbar.module.css'

const Navbar = () => {
    return (
        <nav>
            <ul className={Styles.ULCont} >
                <Link className={Styles.aa} to="/" ><li>Home</li></Link>
                <Link className={Styles.aa} to="/about" ><li>About</li></Link>
                <Link className={Styles.aa} to="/contact" ><li>Contact</li></Link>
            </ul>
        </nav>
    )
}

export default Navbar
