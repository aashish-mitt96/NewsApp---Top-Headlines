import React from "react";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <>
      <nav
        className={`navbar navbar-expand-lg navbar-${props.mode}`}
        style={{
          backgroundColor: props.mode === "Light" ? "#343a40" : "#343a40",
        }}
      >
        <Link className="navbar-brand" to="/" style={{color: "white"}}>
          NewsApp
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/" style={{color: "white"}}>
                Home <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about" style={{color: "white"}}>
                About
              </Link>
            </li>
          </ul>
        </div>

        <div className="custom-control custom-switch">
          <input
            type="checkbox"
            className="custom-control-input"
            id="customSwitch1"
            onClick={props.toggle}
          />
          <label
            className="custom-control-label"
            htmlFor="customSwitch1"
            style={{ color: "white", userSelect: "none" }}
          >
            {props.mode === "Light" ? "Dark Mode" : "Light Mode"}
          </label>
        </div>
      </nav>
    </>
  );
}
