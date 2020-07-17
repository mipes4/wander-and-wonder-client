import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../store/player/actions";
import Button from "react-bootstrap/Button";
import { selectPlayer } from "../../store/player/selectors";
import Nav from "react-bootstrap/Nav";

export default function LoggedIn() {
  const dispatch = useDispatch();
  const player = useSelector(selectPlayer);
  return (
    <>
      <Nav style={{ paddingRight: "50px" }}>
        <Nav.Item>
          <h3 style={{ paddingRight: 20 }}>Welcome {player.name}</h3>
          <Button onClick={() => dispatch(logOut())}>Logout</Button>
        </Nav.Item>
      </Nav>
    </>
  );
}
