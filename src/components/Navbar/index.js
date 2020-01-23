import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'

const Navbar = () => {
    return (
        <nav className="navbar navbar-light navbar__primary-color">
            <Link className="navbar-brand navbar__text-color" to="/">
                <img src="rickandmorty.png" width="30" height="30" className="d-inline-block align-top" alt=""/>
                Rick and Morty - Pedia
            </Link>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item ">
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Episodes</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">Disabled</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;