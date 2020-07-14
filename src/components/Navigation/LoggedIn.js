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
      <Nav.Item style={{ padding: ".5rem 1rem" }}>{player.email}</Nav.Item>
      <Button onClick={() => dispatch(logOut())}>Logout</Button>
    </>
  );
}
