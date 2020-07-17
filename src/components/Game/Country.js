import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllCountries } from "../../store/countries/actions";
import { selectCountries } from "../../store/countries/selectors";

import { dispatchScore } from "../../store/player/actions";
import { selectPlayer, selectPlayerId } from "../../store/player/selectors";

import { selectToken } from "../../store/player/selectors";
import { useHistory } from "react-router-dom";

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

  const alphaCodes = countries.map((c) => c.alpha2Code);
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
      dispatch(dispatchScore(id, 2, score));
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
    <div>
      <h1>Game</h1>
      {countries && country ? country.name : null}
    </div>
  );
}
