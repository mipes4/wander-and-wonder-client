import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Button, Container, Dropdown, Image, Row } from "react-bootstrap";
import { selectToken } from "../../store/player/selectors";
import wanderBackground from "../../images/wanderBackground.png";
import questionMark from "../../images/questionMark.png";
import "./index.css";
import Anime, { anime } from "react-anime";
import { gameCateory } from "../../store/player/actions";

export default function Welcome() {
  const token = useSelector(selectToken);
  const dispatch = useDispatch();
  const goToGameControl = token ? (
    <>
      <div class="menuWhenLoggedIn">
        <div id="dropdown">
          <Dropdown
            onSelect={(e) => dispatch(gameCateory(e))}
            className="btn-lg"
          >
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              Choose category
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item eventKey="country">
                Find the countries over the world
              </Dropdown.Item>
              <Dropdown.Item eventKey="flag">Flags of the world</Dropdown.Item>
              <Dropdown.Item eventKey="europe">
                Countries in Europe
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <div id="button">
          <Link to="/game">
            <Anime
              translateY="-50"
              direction="alternate"
              easing="easeInBounce"
              autoplay="false"
              duration="1000"
              delay="3000"
              loop="30"
            >
              <Button className="btn-lg">Play!</Button>
            </Anime>
          </Link>
        </div>
      </div>
    </>
  ) : (
    <>
      <Link to="/login">
        <Anime
          translateY="-50"
          direction="alternate"
          easing="easeInBounce"
          autoplay="false"
          duration="1000"
          delay="3000"
          loop="30"
        >
          <Button className="btn-lg">Play!</Button>
        </Anime>
      </Link>
    </>
  );

  return (
    <Container>
      <div class="headers">
        <h1 class="display-2">Wander and Wonder</h1>
        <h2>
          Play this trivia game and learn about different places in the world
          without leaving your home.
        </h2>
        <div class="wanderImage">
          <Anime
            loop="500"
            rotate="720"
            duration="1600"
            delay="666"
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
