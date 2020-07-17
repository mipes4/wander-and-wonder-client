import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllCountries } from "../../store/countries/actions";
import { selectCountries } from "../../store/countries/selectors";
import { dispatchScore } from "../../store/player/actions";
import { selectPlayer, selectPlayerId } from "../../store/player/selectors";
import { showMessageWithTimeout } from "../../store/appState/actions";
import { selectToken } from "../../store/player/selectors";
import { useHistory } from "react-router-dom";

import { Image } from "react-bootstrap";

import { findByLabelText } from "@testing-library/react";

export default function Country(props) {
  const dispatch = useDispatch();
  const { countries } = useSelector(selectCountries);
  const [country, setCountry] = useState({});
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  console.log("countries:", countries);
  const id = useSelector(selectPlayerId);
  console.log("IDDDDDDD", id);

  const token = useSelector(selectToken);
  const history = useHistory();

  const alphaCodes = countries.map((c) => c.alpha2Code.toLowerCase());
  console.log("alphacodes:", alphaCodes);
  console.log("clickedCountry in Game?", props.clickedCountry);

  useEffect(() => {
    if (token === null) history.push("/login");
  }, [token, history]);

  useEffect(() => {
    console.log("props changes:", props.clickedCountry);

    if (country && props.clickedCountry === country.alpha2Code) {
      setScore(score + 1);
      const randomNumber = Math.floor(Math.random() * countries.length);
      setCountry(countries[randomNumber]);
      dispatch(
        showMessageWithTimeout("success", true, "Nice! That's correct!")
      );
      console.log("What is randomNumber?", randomNumber);
    }
    if (
      !gameOver &&
      props.clickedCountry !== "" &&
      props.clickedCountry !== country.alpha2Code
    ) {
      console.log("CLICKED COUNTRY", props.clickedCountry);
      console.log("COUNTRY.alpha2Code", country.alpha2Code);
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
      // console.log(randomNumber, countries[randomNumber]);
    }
  }, [countries]);

  console.log("Score?", score);
  console.log(country, props.clickedCountry);

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
                country.name
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
