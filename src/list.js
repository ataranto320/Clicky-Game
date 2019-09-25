import React from "react";

// Whenever we try to render an array containing JSX, React knows to render each JSX element separately
function list(props) {
  return (
    <ul className="character-list">
      {props.characters.map(characters => (
        <li className="character-list-item" key={characters.id}>
          {characters.name}
        </li>
      ))}
    </ul>
  );
}

export default list;