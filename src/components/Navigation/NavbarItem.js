import React from "react";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";

export default function NavbarItem(props) {
  return (
    <Nav.Item
      style={{
        display: "flex",
      }}
    >
      <Nav.Link as={NavLink} to={props.path}>
        <span className="navbarItemText">{props.linkText}</span>
      </Nav.Link>
    </Nav.Item>
  );
}
