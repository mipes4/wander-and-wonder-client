import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllCountries } from "../../store/countries/actions";
import { selectCountries } from "../../store/countries/selectors";
import { selectToken } from "../../store/player/selectors";
import { useHistory } from "react-router-dom";

export default function Country(props) {
  const dispatch = useDispatch();
  const { countries } = useSelector(selectCountries);
  // console.log(countries);
  const [country, setCountry] = useState({});
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const token = useSelector(selectToken);
  const history = useHistory();

  console.log("clickedCountry in Game?", props.clickedCountry);

  useEffect(() => {
    if (token === null) history.push("/login");
  }, [token, history]);

  useEffect(() => {
    console.log("props changes:", props.clickedCountry);

    if (country && props.clickedCountry === country.name) {
      setScore(score + 1);
      const randomNumber = Math.floor(Math.random() * countries.length);
      setCountry(countries[randomNumber]);
      console.log("What is randomNumber?", randomNumber);
    } else {
      setScore(score);
      setGameOver(true);
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
  return (
    <div>
      <h1>Game</h1>
      {countries && country ? country.name : null}
    </div>
  );
}
