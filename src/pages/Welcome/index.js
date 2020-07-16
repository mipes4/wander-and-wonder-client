import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Button, Container, Dropdown, Image } from "react-bootstrap";
import { selectToken } from "../../store/player/selectors";
import wanderBackground from "../../images/wanderBackground.png";
import questionMark from "../../images/questionMark.png";
import "./index.css";
import Anime from "react-anime";

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
        <Anime
          translateY="-50"
          direction="alternate"
          easing="easeInBounce"
          autoplay="false"
        >
          <Button>Play!</Button>
        </Anime>
      </Link>
    </>
  ) : (
    <>
      <Link to="/login">
        <Anime
          translateY="-50"
          direction="alternate"
          easing="easeInBounce"
          autoplay="false"
        >
          <Button>Play!</Button>
        </Anime>
      </Link>
    </>
  );

  return (
    <Container>
      <div>
        <h1 class="display-2">Wander and Wonder</h1>
        <p>
          A trivia game to learn more about different places in the world
          without leaving your home.
        </p>
        <div class="wanderImage">
          <Anime
            loop="true"
            rotate="720"
            duration="800"
            delay="800"
            easing="easeInOutQuart"
          >
            <Image src={questionMark}></Image>
          </Anime>
        </div>

        {goToGameControl}
      </div>
    </Container>
  );
}
