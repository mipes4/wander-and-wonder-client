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
    <Navbar collapseOnSelect expand="lg">
      <Nav style={{ width: "80%", paddingLeft: "50px" }}>
        <NavbarItem path="/" linkText="Wander">
          Wander
        </NavbarItem>

        <NavbarItem path="/scoreboard" linkText="Scoreboard" />
      </Nav>
      {loginLogoutControls}
    </Navbar>
  );
}
