import React from "react";
import Style from "./Card.module.css";
import { Link } from "react-router-dom";

export default function Card(props) {
  return (
    <div className={Style.card}>
      <button
        className={Style.btnClose}
        onClick={() => props.onClose(props.id)}
      >
        X
      </button>
      <Link to={`/detail/${props.id}`}>
        <h2 className={Style.name}>{props.name}</h2>
      </Link>
      <img className={Style.image} src={props.image} alt={props.name} />
      <h2 className={Style.species}>{props.species}</h2>
      <h2 className={Style.gender}>{props.gender}</h2>
    </div>
  );
}
