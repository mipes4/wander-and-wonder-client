import React from "react";
import NavbarItem from "./NavbarItem";
import { Nav } from "react-bootstrap";

export default function LoggedOut() {
  return (
    <Nav style={{ paddingRight: "50px" }}>
      <NavbarItem path="/login" linkText="Login" />
    </Nav>
  );
}
