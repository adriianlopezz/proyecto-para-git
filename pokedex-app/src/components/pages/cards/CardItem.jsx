import React from "react";
import { UseFetch } from "../UseFetch";
import Modal from "./Modal";

export const CardItem = ({ url }) => {
    const estado = UseFetch(url)
    const { cargando, data } = estado

    return (
        <div>
            {
                cargando
                    ?
                    <h1>Cargando</h1>
                    :
                    <div className="card" style={{ width: '14rem' }} data-toggle="modal" data-target={`#id${data.id}`}>
                        <div className="card-header text-center">
                            <h5 className="card-title"> {data.id} </h5>
                        </div>
                        <div className="card-body text-center">
                            <img src={data.sprites.default} alt="item" />
                        </div>
                        <div className="card-footer text-center">
                            <p className="card-text text-capitalize"> {data.name} </p>
                        </div>
                        <Modal id={`id${data.id}`} titulo={data.name} contenido={data.effect_entries[0].effect} />
                    </div>
            }
        </div>
    )
}