import {
  LOG_OUT,
  LOGIN_SUCCESS,
  TOKEN_STILL_VALID,
  SAVE_SCORE,
  GAME_OVER,
  SELECT_CATEGORY,
} from "./actions";

const initialState = {
  token: localStorage.getItem("token"),
  name: null,
  email: null,
  gameOver: false,
  score: 0,
  category: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      localStorage.setItem("token", action.payload.token);
      return { ...state, ...action.payload };

    case LOG_OUT:
      localStorage.removeItem("token");
      return { ...initialState, token: null };

    case TOKEN_STILL_VALID:
      return { ...state, ...action.payload };

    case GAME_OVER:
      if (action.payload === true) {
        return { ...state, gameOver: action.payload };
      } else {
        return { ...state, gameOver: action.payload, score: 0 };
      }

    case SAVE_SCORE:
      return { ...state, score: action.payload };

    case SELECT_CATEGORY:
      return { ...state, category: action.payload };

    default:
      return state;
  }
};
