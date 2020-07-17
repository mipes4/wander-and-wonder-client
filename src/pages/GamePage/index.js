import React from "react";
import WorldMap from "../../components/WorldMap";
import EuropeMap from "../../components/EuropeMap";
import { useSelector, useDispatch } from "react-redux";
import { selectPlayer } from "../../store/player/selectors";
import { handleGameOver } from "../../store/player/actions";
import Anime from "react-anime";
import questionMark from "../../images/questionMark.png";
import cross from "../../images/cross.png";
import { Button, Image } from "react-bootstrap";
import "./index.css";

export default function Game() {
  const { gameOver, category } = useSelector(selectPlayer);
  const dispatch = useDispatch();
  const handle = () => {
    dispatch(handleGameOver(false));
  };
  console.log("category?", category);

  return (
    <div>
      {!gameOver ? (
        category === "europe" ? (
          <div>
            {console.log("inside EuropeMap", category)}
            <EuropeMap />
          </div>
        ) : (
          <WorldMap />
        )
      ) : (
        <div
          id="button"
          style={{
            marginTop: 200,
          }}
        >
          <div class="headers">
            <div class="wanderImage">
              <Anime
                loop="500"
                rotate="720"
                duration="1600"
                delay="666"
                easing="easeInOutQuart"
              >
                <Image style={{ height: 100 }} src={cross}></Image>
              </Anime>
            </div>
          </div>
          <Anime
            translateY="-50"
            direction="alternate"
            easing="easeInBounce"
            autoplay="false"
            duration="1000"
            delay="3000"
            loop="30"
          >
            <Button className="btn-lg" onClick={handle}>
              Play Again!
            </Button>
          </Anime>
        </div>
      )}
    </div>
  );
}
