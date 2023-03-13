import React from "react"
import Footer from "./footer/Footer"

const inicio = () => {
    return (
        <div>
            <div className="container mx-auto">
                <h1 className="text-white p-2 bg-dark text-center">Pokemon</h1>
                <figure>
                    <blockquote className="blockquote">
                        <p className="mt-3 mx-auto text-white">
                            Pokémon (ポケモン Pokemon?) es una franquicia de medios que originalmente comenzó como un videojuego RPG, pero debido a su popularidad ha logrado expandirse a otros medios de entretenimiento como series de televisión, películas, juegos de cartas, ropa, entre otros, convirtiéndose en una marca que es reconocida en el mercado mundial. Las ventas de videojuegos hasta el 1 de diciembre de 2006 habían alcanzado una cantidad de 340 millones de ejemplares (incluyendo la venta de la versión Pikachu de la consola Nintendo 64),1​ logrando ocupar el segundo lugar de las sagas de videojuegos más vendidos de Nintendo.2​ La franquicia celebró su décimo aniversario el 27 de febrero de 2006.3​4
                        </p>
                    </blockquote>
                </figure>
                <h2 className="bg-dark text-white mx-auto text-center">Opening</h2>
                <iframe className="justify-content-center" width="560" height="315" src="https://www.youtube.com/embed/wvy-pO65GhQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
            <Footer />
        </div>
    )
}

export default inicio