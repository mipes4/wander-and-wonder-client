import React from "react";
import WorldMap from "../../components/WorldMap";
import { useSelector, useDispatch } from "react-redux";
import { selectPlayer } from "../../store/player/selectors";
import { handleGameOver } from "../../store/player/actions";

export default function Game() {
  const { gameOver } = useSelector(selectPlayer);
  const dispatch = useDispatch();
  const handle = () => {
    dispatch(handleGameOver(false));
  };

  return (
    <div>
      {!gameOver ? (
        <WorldMap />
      ) : (
        <div>
          <p>Damn, you lost.</p>
          <button onClick={handle}>Play Again</button>
        </div>
      )}
    </div>
  );
}
