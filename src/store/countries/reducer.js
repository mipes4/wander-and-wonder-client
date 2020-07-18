const initialState = {
  countries: [],
  europe: [],
};
export default function countriesSliceReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_COUNTRIES":
      return {
        ...state,
        countries: action.payload,
      };
    case "ADD_EUROPE":
      return {
        ...state,
        europe: action.payload,
      };
    default:
      return state;
  }
}
