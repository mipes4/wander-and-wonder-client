import axios from "axios";
import { API_URL } from "../config";

export function storeCountryData(data) {
  return { type: "ADD_COUNTRIES", payload: data };
}

export function fetchAllCountries() {
  return async (dispatch, getState) => {
    const response = await axios.get(`${API_URL}/rest/v2/all`);
    dispatch(storeCountryData(response.data));
  };
}
