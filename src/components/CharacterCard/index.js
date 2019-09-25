import React from "react";
import "./style.css";

const CharacterCard = props => {
  return (
    <div className="card">
      <div className="img-container" onClick={() => props.handleClick(props.id)}>
        <img alt={props.name} src={props.images} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> {props.name}
          </li>
        </ul>
      </div>
      {/* <span onClick={() => props.removeCharacter(props.id)} className="remove">
        𝘅
      </span> */}
    </div>
  );
}

export default CharacterCard;
