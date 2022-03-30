import {
  POST_USER_SUCCESS,
  POST_USER_FAILURE,
  POST_USER_REQUEST,
  FETCH_USER_FAILURE,
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
} from "./userTypes";
import axios from "axios";

export const fetchUserRequest = () => {
  return {
    type: FETCH_USER_REQUEST,
  };
};

export const fetchUserSuccess = (users) => {
  return {
    type: FETCH_USER_SUCCESS,
    payload: users,
  };
};

export const fetchUserFailure = (error) => {
  return {
    type: FETCH_USER_FAILURE,
    payload: error,
  };
};

export const fetchUsers = () => {
  return (dispatch) => {
    dispatch(fetchUserRequest());
    axios
      .get("http://localhost:9898/api/v1/users")
      .then((response) => {
        const users = response.data.Users;
        dispatch(fetchUserSuccess(users));
      })
      .catch((error) => {
        const errMsg = error.message;
        dispatch(fetchUserFailure(errMsg));
      });
  };
};

export const postUserRequest = () => {
  return {
    type: POST_USER_REQUEST,
  };
};
export const postUserSucess = () => {
  return {
    type: POST_USER_SUCCESS,
  };
};
export const postUserFailure = () => {
  return {
    type: POST_USER_FAILURE,
  };
};
export const postUser = (User) => {
  return (dispath) => {
    dispath(postUserRequest());
    axios
      .post("http://localhost:9898/api/v1/users/post", User)
      .then((response) => {
        postUserSucess();
      })
      .catch((error) => {
        postUserFailure(error);
      });
  };
};
