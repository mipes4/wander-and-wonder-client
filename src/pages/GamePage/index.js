import React from "react";
import WorldMap from "../../components/WorldMap";
import { useSelector } from "react-redux";
import { selectPlayer } from "../../store/player/selectors";

export default function Game() {
  const { gameOver } = useSelector(selectPlayer);

  return <div>{!gameOver ? <WorldMap /> : <p>Damn, you lost.</p>}</div>;
}
