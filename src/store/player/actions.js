import { apiUrl } from "../../config/constants";
import axios from "axios";
import { selectToken, selectPlayer } from "./selectors";
import {
  appLoading,
  appDoneLoading,
  showMessageWithTimeout,
  setMessage,
} from "../appState/actions";

export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const TOKEN_STILL_VALID = "TOKEN_STILL_VALID";
export const LOG_OUT = "LOG_OUT";
export const SAVE_SCORE = "SAVE_SCORE";
export const GAME_OVER = "GAME_OVER";
export const SELECT_CATEGORY = "SELECT_CATEGORY";

export const gameCateory = (categoryName) => {
  return { type: SELECT_CATEGORY, payload: categoryName };
};

const loginSuccess = (playerWithToken) => {
  return {
    type: LOGIN_SUCCESS,
    payload: playerWithToken,
  };
};

export const handleGameOver = (data) => {
  return {
    type: GAME_OVER,
    payload: data,
  };
};

const saveScore = (score) => {
  return {
    type: SAVE_SCORE,
    payload: score,
  };
};

const tokenStillValid = (playerWithoutToken) => ({
  type: TOKEN_STILL_VALID,
  payload: playerWithoutToken,
});

export const logOut = () => ({ type: LOG_OUT });

export const signUp = (name, email, password) => {
  return async (dispatch, getState) => {
    dispatch(appLoading());
    try {
      const response = await axios.post(`${apiUrl}/signup`, {
        name,
        email,
        password,
      });

      dispatch(loginSuccess(response.data));
      dispatch(showMessageWithTimeout("success", true, "account created"));
      dispatch(appDoneLoading());
    } catch (error) {
      if (error.response) {
        console.log(error.response.data.message);
        dispatch(setMessage("danger", true, error.response.data.message));
      } else {
        console.log(error.message);
        dispatch(setMessage("danger", true, error.message));
      }
      dispatch(appDoneLoading());
    }
  };
};

export const login = (email, password) => {
  return async (dispatch, getState) => {
    dispatch(appLoading());
    try {
      const response = await axios.post(`${apiUrl}/login`, {
        email,
        password,
      });

      dispatch(loginSuccess(response.data));
      dispatch(showMessageWithTimeout("success", false, "welcome back!", 1500));
      dispatch(appDoneLoading());
    } catch (error) {
      if (error.response) {
        console.log(error.response.data.message);
        dispatch(setMessage("danger", true, error.response.data.message));
      } else {
        console.log(error.message);
        dispatch(setMessage("danger", true, error.message));
      }
      dispatch(appDoneLoading());
    }
  };
};

export const getPlayerWithStoredToken = () => {
  return async (dispatch, getState) => {
    // get token from the state
    const token = selectToken(getState());

    // if we have no token, stop
    if (token === null) return;

    dispatch(appLoading());
    try {
      // if we do have a token,
      // check wether it is still valid or if it is expired
      const response = await axios.get(`${apiUrl}/me`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      // token is still valid
      dispatch(tokenStillValid(response.data));
      dispatch(appDoneLoading());
    } catch (error) {
      if (error.response) {
        console.log(error.response.message);
      } else {
        console.log(error);
      }
      // if we get a 4xx or 5xx response,
      // get rid of the token by logging out
      dispatch(logOut());
      dispatch(appDoneLoading());
    }
  };
};

export const dispatchScore = (id, categoryId, score) => {
  return async (dispatch, getState) => {
    try {
      console.log("SCORE", score);
      console.log("PLAYERID", id);
      console.log("categoryId", categoryId);

      const response = await axios.post(
        `${apiUrl}/scores/player/${id}/${categoryId}`, // NEEDS UPDATE WITH CORRECT ENDPOINT
        {
          score,
        }
      );
      dispatch(saveScore(score));
      dispatch(handleGameOver(true));
      console.log("RESPONSEDATA", response.data);
    } catch (error) {
      if (error.response) {
        console.log(error.response.message);
      } else {
        console.log(error);
      }
    }
  };
};
