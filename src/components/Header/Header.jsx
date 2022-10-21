import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Header() {
    return (
        <header>
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="collapsibleNavId">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className="nav-item ">
                    
                            <NavLink className="nav-link" to="/home">Home </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/login">Login</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/register">register</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/about">about</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/counter">counter</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/use-effect">UseEffect</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/apircc">APIrcc</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/apirfc">APIrfc</NavLink>
                        </li>

                    </ul>

                </div>
            </nav>

        </header>
    )
}

