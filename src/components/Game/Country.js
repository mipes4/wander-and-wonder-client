import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllCountries } from "../../store/countries/actions";
import { selectCountries } from "../../store/countries/selectors";
import { dispatchScore } from "../../store/player/actions";
import { selectPlayer, selectPlayerId } from "../../store/player/selectors";

export default function Country(props) {
  const dispatch = useDispatch();
  const { countries } = useSelector(selectCountries);
  const [country, setCountry] = useState({});
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const id = useSelector(selectPlayerId);
  console.log("IDDDDDDD", id);

  useEffect(() => {
    if (country && props.clickedCountry === country.name) {
      setScore(score + 1);
      const randomNumber = Math.floor(Math.random() * countries.length);
      setCountry(countries[randomNumber]);
      console.log("What is randomNumber?", randomNumber);
    }
    if (
      !gameOver &&
      props.clickedCountry !== "" &&
      props.clickedCountry !== country.name
    ) {
      console.log("CLICKED COUNTRY", props.clickedCountry);
      console.log("COUNTRY.NAME", country.name);
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
