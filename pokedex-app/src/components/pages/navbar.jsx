import React from "react"
import { Outlet, Link } from "react-router-dom"

const navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-warning">
                <div className="container-fluid">
                    <Link to='/'>
                        <img src="img/pokemon.jpg" alt="" />
                    </Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav mx-auto">
                            <li className="nav-item active">
                                <Link className="nav-link" to='/' >Inicio</Link>
                            </li>
                            <li class="nav-item">
                                <Link className="nav-link" to='/Pokemon' >Pokemon</Link>
                            </li>
                            <li class="nav-item">
                                <Link className="nav-link" to='/Items' >Items</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <Outlet />
        </div>
    )
}

export default navbar