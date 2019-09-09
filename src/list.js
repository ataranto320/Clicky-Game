import React from "react";

// Whenever we try to render an array containing JSX, React knows to render each JSX element separately
function list(props) {
  return (
    <ul className="character-list">
      {props.characters.map(item => (
        <li className="character-list-item" key={item.id}>
          {item.name}
        </li>
      ))}
    </ul>
  );
}

export default list;