import React, { useState } from "react";
import { UseFetch } from "./UseFetch";
import Footer from "./footer/Footer"
import { CardsItem } from "./cards/CardsItem";

const Item = () => {
    const [url, setUrl] = useState('https://pokeapi.co/api/v2/item')
    const estado = UseFetch(url)
    const { cargando, data } = estado
    cargando ? console.log('cargando') : console.log(data.results)

    return (
        <div>
            {
                cargando
                    ?
                    <h1>Cargando...</h1>
                    :
                    <div>
                        <CardsItem results={data.results} />
                        <div className="container m-auto">
                            <button onClick={() => setUrl(data.previous)} className='m-2 btn btn-dark'>Anterior</button>
                            <button onClick={() => setUrl(data.next)} className='m-2 btn btn-dark'>Siguiente</button>
                        </div>
                        <Footer />
                    </div>

            }
        </div>
    )
}

export default Item