import {
  FETCH_USER_FAILURE,
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
  POST_USER_SUCCESS,
  POST_USER_FAILURE,
  POST_USER_REQUEST,
} from "./userTypes";

const userState = {
  Users: [],
  loading: true,
  error: "",
};

const userReducer = (state = userState, { type, payload }) => {
  switch (type) {
    case FETCH_USER_REQUEST:
      return { ...state, loading: true };
    case FETCH_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        Users: payload,
      };
    case FETCH_USER_FAILURE:
      return {
        ...state,
        loading: false,
        Users: payload,
      };
    case POST_USER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case POST_USER_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case POST_USER_FAILURE:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};

export default userReducer;
