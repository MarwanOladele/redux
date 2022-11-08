const redux = require("redux");
const createStore =  redux.createStore


const initialState = {
  isLoading: false,
  data: [],
  error: "Error 404",
};

const FETCH_USER_REQUEST = "FETCH_USER_REQUEST";
const FETCH_USER_SUCESS = "FETCH_USER_SUCESS";
const FETCH_USER_FAILURE = "FETCH_USER_FAILURE";

const fetchUserRequest = () => {
  return {
    type: FETCH_USER_REQUEST,
  };
};

const fetchUserSucess = (users) => {
  return {
    type: FETCH_USER_SUCESS,
    payload: users,
  };
};

const fetchUserFailure = (error) => {
  return {
    type: FETCH_USER_FAILURE,
    payload: error,
  };
};

const reducer = (state = initialState, action) => {
  if (action.type == FETCH_USER_REQUEST) {
    return {
      ...state,
      isLoading: true,
    };
  }

  if (action.type == FETCH_USER_SUCESS) {
    return {
      ...state,
      isLoading: false,
      data: action.payload,
      error: "Error 404",
    }
  }

  if (action.type == FETCH_USER_FAILURE) {
    return {
      ...state,
      isLoading: false,
      error: action.error,
    }
  }
  return state
}


const store = createStore(reducer)