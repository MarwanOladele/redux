import {
  FETCH_USER_FAILURE,
  FETCH_USER_SUCESS,
  FETCH_USER_REQUEST,
} from "./userTypes";

export const fetchUserRequest = () => {
  return {
    type: FETCH_USER_REQUEST,
  };
};

export const fetchUserSucess = (user) => {
  return {
    type: FETCH_USER_SUCESS,
    payload: user,
  };
};

export const fetchUserFailure = (err) => {
  return {
    type: FETCH_USER_FAILURE,
    payload: err,
  };
};
