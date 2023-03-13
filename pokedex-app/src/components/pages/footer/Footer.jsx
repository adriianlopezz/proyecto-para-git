import React from "react";
import { Link } from 'react-router-dom'

const Footer = () => {

    return (
        <div>
            <footer className="text-white py-4 bg-warning">
                <div className="container">
                    <nav className="row">
                        <Link to='/' className="col-12 col-md-3 d-flex aling-items-center justify-content-center">
                            <img src="img/pokemon.jpg" className="mx-2" width='80' />
                        </Link>
                        <ul className="col-12 col-md-3 list-unstyled">
                            <li className="font-weight-bold mb-2">Pokemon</li>
                            <li className="text-center">Sitio usado para buscar información sobre el mundo Pokemon</li>
                        </ul>
                        <ul className="col-12 col-md-3 list-unstyled">
                            <li className="font-weight-bold mb-2">Enlaces</li>
                            <li>
                                <Link to='/Pokemon'>Pokemon</Link>
                            </li>
                            <li>
                                <Link to='/Items'>Items</Link>
                            </li>
                        </ul>
                        <div className="container">
                            <p className="text-center">Realizada por Adrián López</p>
                        </div>
                    </nav>
                </div>
            </footer>
        </div>
    )
}

export default Footer