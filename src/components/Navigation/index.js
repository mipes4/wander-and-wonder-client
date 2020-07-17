import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectToken } from "../../store/player/selectors";
import NavbarItem from "./NavbarItem";
import LoggedIn from "./LoggedIn";
import LoggedOut from "./LoggedOut";
import "./index.css";

export default function Navigation() {
  const token = useSelector(selectToken);

  const loginLogoutControls = token ? <LoggedIn /> : <LoggedOut />;

  return (
    <div
      style={{
        flex: "1 1 0",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Navbar
        style={{
          justifyContent: "center",
        }}
        className="navbar"
        expand="sm"
      >
        <Nav
          style={{
            width: "100%",
            textAlign: "center",
            justifyContent: "center",
          }}
        >
          <NavbarItem path="/" linkText="Wander" />
          <NavbarItem path="/scoreboard" linkText="Scoreboard" />
          {loginLogoutControls}
        </Nav>
      </Navbar>
    </div>
  );
}
