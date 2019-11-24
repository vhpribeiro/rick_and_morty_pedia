import React from 'react'
import './style.css'

const Navbar = () => {
    return (
        <nav className="navbar navbar-light navbar__primary-color">
            <a className="navbar-brand navbar__text-color" href="#">
                <img src="/docs/4.3/assets/brand/bootstrap-solid.svg" width="30" height="30" className="d-inline-block align-top" alt=""/>
                Rick and Morty - Pedia
            </a>
        </nav>
    )
}

export default Navbar;