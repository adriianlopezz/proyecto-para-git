import React from "react";
import { CardItem } from "./CardItem";
import './Cards.css'

export const CardsItem = ({ results }) => {
    return (
        <div className="container">
            <ul className="cards">
                {
                    results.map(i => (
                        <li className="card-item" key={i.name}>
                            <CardItem url={i.url} />
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}