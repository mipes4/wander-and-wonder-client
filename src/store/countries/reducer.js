const initialState = {
  countries: [],
};
export default function countriesSliceReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_COUNTRIES":
      return {
        ...state,
        countries: action.payload,
      };
    default:
      return state;
  }
}
