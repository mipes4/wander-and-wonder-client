import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Button, Container, Dropdown, Image } from "react-bootstrap";
import { selectToken } from "../../store/player/selectors";
import wanderBackground from "../../wanderBackground.png";

export default function Welcome() {
  const token = useSelector(selectToken);
  const goToGameControl = token ? (
    <>
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Dropdown Button
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">Find the country</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Flags of the world</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Link to="/game">
        <Button>Play!</Button>
      </Link>
    </>
  ) : (
    <>
      <Link to="/login">
        <Button>Play!</Button>
      </Link>
    </>
  );

  return (
    <Container>
      <div>
        <h1 class="display-2">Wander and Wonder</h1>
        <p>
          Wander and Wonder is a trivia game to learn more about different
          places in the world without leaving your home.
        </p>
        <Image width="100%" src={wanderBackground}></Image>
        {goToGameControl}
      </div>
    </Container>
  );
}
