import React from "react";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";
import { navlink } from "../../custom.scss";

export default function NavbarItem(props) {
  return (
    <Nav.Item>
      <Nav.Link as={NavLink} to={props.path}>
        <span className="navbarItemText">{props.linkText}</span>
      </Nav.Link>
    </Nav.Item>
  );
}
