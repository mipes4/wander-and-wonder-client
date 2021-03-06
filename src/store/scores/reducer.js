import { act } from "react-dom/test-utils";

const initialState = {
  flagCatScores: [],
  countryCatScores: [],
  europeCatScores: [],
  categories: [],
};
export default function scoresSliceReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_COUNTRY_SCORES":
      return {
        ...state,
        countryCatScores: action.payload,
      };
    case "ADD_FLAG_SCORES":
      return {
        ...state,
        flagCatScores: action.payload,
      };
    case "ADD_EUROPE_SCORES":
      return {
        ...state,
        europeCatScores: action.payload,
      };
    case "FETCH_CATEGORY":
      return {
        ...state,
        categories: action.payload,
      };

    default:
      return state;
  }
}
