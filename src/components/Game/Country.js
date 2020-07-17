import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllCountries } from "../../store/countries/actions";
import { selectCountries } from "../../store/countries/selectors";
import { dispatchScore } from "../../store/player/actions";
import { selectPlayerId } from "../../store/player/selectors";
import { showMessageWithTimeout } from "../../store/appState/actions";
import { selectToken } from "../../store/player/selectors";
import { useHistory } from "react-router-dom";
import { Image } from "react-bootstrap";

export default function Country(props) {
  const dispatch = useDispatch();
  const { countries } = useSelector(selectCountries);
  const [country, setCountry] = useState({});
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const id = useSelector(selectPlayerId);
  const token = useSelector(selectToken);
  const history = useHistory();

  useEffect(() => {
    if (token === null) history.push("/login");
  }, [token, history]);

  useEffect(() => {
    if (country && props.clickedCountry === country.alpha2Code) {
      setScore(score + 1);
      const randomNumber = Math.floor(Math.random() * countries.length);
      setCountry(countries[randomNumber]);
      dispatch(
        showMessageWithTimeout("success", true, "Nice! That's correct!")
      );
    }
    if (
      !gameOver &&
      props.clickedCountry !== "" &&
      props.clickedCountry !== country.alpha2Code
    ) {
      setGameOver(true);

      if (props.category === "flag") {
        dispatch(dispatchScore(id, 1, score));
      } else {
        dispatch(dispatchScore(id, 2, score));
      }

      dispatch(showMessageWithTimeout("danger", true, "Too bad, wrong guess."));
    }
  }, [props]);

  useEffect(() => {
    dispatch(fetchAllCountries());
  }, [dispatch]);

  useEffect(() => {
    if (countries) {
      const randomNumber = Math.floor(Math.random() * countries.length);
      setCountry(countries[randomNumber]);
    }
  }, [countries]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <h1
        style={{
          marginBottom: 30,
        }}
        className="display-2"
      >
        Click on the correct country
      </h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: 500,
          }}
        >
          <div style={{ width: 300 }}>
            {" "}
            {countries && country ? (
              props.category === "country" ? (
                <h2>{country.name}</h2>
              ) : (
                <Image height="150px" width="250px" src={country.flag} />
              )
            ) : null}
          </div>
          <div
            style={{
              backgroundColor: "red",
              height: 90,
              width: 90,
              borderRadius: 75,
              textAlign: "center",
              // alignSelf: "flex-end",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <h2
              style={{
                fontSize: 24,
                textAlign: "center",
                alignSelf: "center",
              }}
            >
              Score: {score}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}
