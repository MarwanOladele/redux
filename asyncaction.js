const redux = require("redux");

const createStore = redux.createStore;
const combineReducers = redux.combineReducers;

const initialState = {
  isLoading: false,
  data: [],
  error: "Error 404",
};

const FETCH_USER_REQUEST = "FETCH_USER_REQUEST";

const fetchUserRequest = () => {
  return { 
    type: FETCH_USER_REQUEST,
    info: "First Redux Action",
  };
};
