import axios from "axios";
import { COUNTRIES_API_URL } from "../../config/constants";

export function storeCountryData(data) {
  return { type: "ADD_COUNTRIES", payload: data };
}

export function storeEuropeData(data) {
  return { type: "ADD_EUROPE", payload: data };
}

export function fetchAllCountries() {
  return async (dispatch, getState) => {
    const response = await axios.get(`${COUNTRIES_API_URL}/rest/v2/all`);
    dispatch(storeCountryData(response.data));
  };
}

export function fetchCountriesEurope() {
  return async (dispatch, getState) => {
    const response = await axios.get(
      `${COUNTRIES_API_URL}/rest/v2/region/europe`
    );
    dispatch(storeEuropeData(response.data));
  };
}
