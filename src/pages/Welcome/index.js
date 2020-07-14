import React from "react";
import { Link } from "react-router-dom";
import { Button, Container } from "react-bootstrap";

export default function Welcome() {
  return (
    <Container>
      <div>
        <h1>Wander and Wonder</h1>
        <p>
          Wander and Wonder is a trivia game to learn more about different
          places in the world without leaving your home.
        </p>
        <p>Click the play button to start wandering and wondering!</p>
        <Link to="/login">
          <Button>Play!</Button>
        </Link>
      </div>
    </Container>
  );
}
