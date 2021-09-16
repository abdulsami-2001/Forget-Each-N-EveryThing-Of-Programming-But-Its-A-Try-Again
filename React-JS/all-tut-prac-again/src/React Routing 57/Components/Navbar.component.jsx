import React from 'react'
import {NavLink} from 'react-router-dom'
import Styles from './Navbar.module.css'

const Navbar = () => {
    return (
        <nav>
            <ul className={Styles.ULCont} >
                <NavLink exact activeClassName={Styles.bb} className={Styles.aa} to="/" >Home</NavLink>
                <NavLink exact activeClassName={Styles.bb} className={Styles.aa} to="/about" >About</NavLink>
                <NavLink exact activeClassName={Styles.bb} className={Styles.aa} to="/contact" >Contact</NavLink>
                <NavLink exact activeClassName={Styles.bb} className={Styles.aa} to="/posts" >Post</NavLink>
            </ul>
        </nav>
    )
}

export default Navbar
