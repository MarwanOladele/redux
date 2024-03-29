import {
  FETCH_USER_FAILURE,
  FETCH_USER_SUCESS,
  FETCH_USER_REQUEST,
} from "./userTypes";
import axios from "axios";
import { useDispatch } from "react-redux";

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

// export const fetchUser = () => {
//   // const dispatch = useDispatch();
//   return (dispatch) => {
//     dispatch(fetchUserRequest());
//     axios
//       .get("https://jsonplaceholder.typicode.com/users")
//       .then((res) => {
//         const data = res.json;
//         dispatch(fetchUserSucess(data));
//       })
//       .catch((err) => {
//         const error = err.message;
//         dispatch(fetchUserFailure(error));
//       });
//   };
// };

export const fetchUser = async () => {
  const response = await axios
    .get("https://jsonplaceholder.typicode.com/users")
    .catch((error) => console.log(error));

    console.log(response.data);
};
