import axios from "axios";
import { apiUrl } from "../../config/constants";

export function storeScoresData(id, data) {
  console.log("type of id:", typeof id);
  if (id === 1) {
    return { type: "ADD_FLAG_SCORES", payload: data };
  } else {
    return { type: "ADD_COUNTRY_SCORES", payload: data };
  }
}

export function storeCategoryData(data) {
  return { type: "FETCH_CATEGORY", payload: data };
}

export function fetchAllScoresbyCategory(id) {
  return async (dispatch, getState) => {
    const response = await axios.get(`${apiUrl}/scores/category/${id}`);
    console.log("reposnse:", response.data);
    dispatch(storeScoresData(id, response.data));
  };
}

export async function fetchAllCategories(dispatch, getState) {
  const response = await axios.get(`${apiUrl}/categories`);
  console.log("reposnse:", response.data);
  dispatch(storeCategoryData(response.data));
}
