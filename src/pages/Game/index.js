import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllCountries } from "../../store/countries/actions";
import { selectCountries } from "../../store/countries/selectors";

export default function Game() {
  const dispatch = useDispatch();
  const { countries } = useSelector(selectCountries);
  console.log(countries);
  const [country, setCountry] = useState({});

  useEffect(() => {
    dispatch(fetchAllCountries());
  }, [dispatch]);

  useEffect(() => {
    if (countries) {
      const randomNumber = Math.floor(Math.random() * countries.length);
      setCountry(countries[randomNumber]);
      console.log(randomNumber, countries[randomNumber]);
    }
  }, [countries]);

  return (
    <div>
      <h1>Game</h1>
      {countries && country ? country.alpha2Code : null}
    </div>
  );
}
