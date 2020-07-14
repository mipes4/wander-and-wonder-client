import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectToken } from "../../store/player/selectors";
import NavbarItem from "./NavbarItem";
import LoggedIn from "./LoggedIn";
import LoggedOut from "./LoggedOut";

export default function Navigation() {
  const token = useSelector(selectToken);

  const loginLogoutControls = token ? <LoggedIn /> : <LoggedOut />;

  return (
    <Navbar bg="white" expand="sm">
      <Navbar.Brand as={NavLink} to="/">
        YOUR PROJECT NAME
      </Navbar.Brand>
      <Nav style={{ width: "70%" }} fill>
        <NavbarItem path="/" linkText="Wander" />
        {loginLogoutControls}
      </Nav>
    </Navbar>
  );
}
