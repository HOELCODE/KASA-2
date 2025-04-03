import React from "react";
import { Link } from "react-router-dom";
import datas from "../data/data.json";
import "../css/Cards.css";

const Cards = () => {
    return (
        <div className="logements">
            {datas.map((data) => {
                return (
                    <div className="fiche-logement-cards" key={data.id}>
                        <Link to={`/accommodation/${data.id}`}>
                            <div className="logement-overlay"></div>
                            <img src={data.cover} alt={data.title} />
                            <h3>{data.title}</h3>
                        </Link>
                    </div>
                )
            }
            )}
        </div>
    )
};

export default Cards;