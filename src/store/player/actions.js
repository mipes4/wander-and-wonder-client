import { apiUrl } from "../../config/constants";
import axios from "axios";
import { selectToken } from "./selectors";
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
        dispatch(setMessage("danger", true, error.response.data.message));
      } else {
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
        dispatch(setMessage("danger", true, error.response.data.message));
      } else {
        dispatch(setMessage("danger", true, error.message));
      }
      dispatch(appDoneLoading());
    }
  };
};

export const getPlayerWithStoredToken = () => {
  return async (dispatch, getState) => {
    const token = selectToken(getState());
    if (token === null) return;
    dispatch(appLoading());
    try {
      const response = await axios.get(`${apiUrl}/me`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      dispatch(tokenStillValid(response.data));
      dispatch(appDoneLoading());
    } catch (error) {
      if (error.response) {
      } else {
      }
      dispatch(logOut());
      dispatch(appDoneLoading());
    }
  };
};

export const dispatchScore = (id, categoryId, score) => {
  return async (dispatch, getState) => {
    try {
      const response = await axios.post(
        `${apiUrl}/scores/player/${id}/${categoryId}`,
        {
          score,
        }
      );

      dispatch(saveScore(score));
      dispatch(handleGameOver(true));
    } catch (error) {
      if (error.response) {
      } else {
      }
    }
  };
};
