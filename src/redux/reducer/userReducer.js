import {
  FETCH_USER_FAILURE,
  FETCH_USER_SUCESS,
  FETCH_USER_REQUEST,
} from "../action/User/userTypes";

const initialState = {
  isLoading: true,
  user: [],
  error: "",
};

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_FAILURE:
      return {
        ...state,
        isLoading: true,
        error: action.payload
      };
    case FETCH_USER_SUCESS:
      return {
        ...state,
        isLoading: false,
        user: action.payload,
      };
    case FETCH_USER_REQUEST:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default UserReducer;
