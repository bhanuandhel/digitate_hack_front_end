import React from 'react'
import { Link } from "react-router-dom";
const NavbarView = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                    <img src="assets/img/slack_logo.png" className="rounded-circle" width="40" height="40" />
                    </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link className="nav-link" aria-current="page" to="/login">Login</Link>
                        <Link className="nav-link" aria-current="page" to="/register">Register</Link>
                        <Link className="nav-link" aria-current="page" to="/createTeam"><i class="fas fa-plus-circle text-warning pe-2"></i>Create Team</Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavbarView
