import React from "react";
import { useDispatch } from "react-redux";
import { logOut } from "../../store/player/actions";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";

export default function LoggedIn() {
  const dispatch = useDispatch();

  return (
    <>
      <Nav style={{ paddingRight: "50px" }}>
        <Nav.Item>
          <Button onClick={() => dispatch(logOut())}>Logout</Button>
        </Nav.Item>
      </Nav>
    </>
  );
}
