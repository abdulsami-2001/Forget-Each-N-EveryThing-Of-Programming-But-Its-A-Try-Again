import React from 'react'
import {Link, NavLink} from 'react-router-dom'
import Styles from './Navbar.module.css'

const Navbar = () => {
    return (
        <nav>
            <ul className={Styles.ULCont} >
                <NavLink exact activeClassName={Styles.bb} className={Styles.aa} to="/" ><li>Home</li></NavLink>
                <NavLink exact activeClassName={Styles.bb} className={Styles.aa} to="/about" ><li>About</li></NavLink>
                <NavLink exact activeClassName={Styles.bb} className={Styles.aa} to="/contact" ><li>Contact</li></NavLink>
                <NavLink exact activeClassName={Styles.bb} className={Styles.aa} to="/posts" ><li>Post</li></NavLink>
            </ul>
        </nav>
    )
}

export default Navbar
