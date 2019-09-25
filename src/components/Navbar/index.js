import React from "react";
import "./style.css";

function Navbar(props) {
    return(
        <header className="">
        <nav className="navbar navbar-expand-md h-font navbar-light ks-nav " id="hover-nav">
          <li className="navbar-nav mr-auto py-2">
            <span className="mr-auto">Clicky-Game</span>
            </li>
          <li className="navbar-nav mx-auto ">
            <span className="mx-auto">{props.message}
            </span></li>
            <li className="navbar-nav">
             
            <span className="ml-auto"> Score: {props.score} | High Score: {props.highscore}
            </span>
            </li>
        </nav>
      </header>
    );
}

export default Navbar