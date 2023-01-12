import React, { useEffect } from "react";
import {
  fetchUserSucess,
  fetchUserRequest,
  fetchUserFailure,
} from "../redux/action/User/userAction";
// import { fetchUser } from "../redux/action/User/userAction";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";

const UserContainer = () => {
  const dispatch = useDispatch();

  const fetchUser = () => {
    dispatch(fetchUserRequest());
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        dispatch(fetchUserSucess(response.data));
      })
      .catch((error) => dispatch(fetchUserFailure(error.message)));
  };

  useEffect(() => {
    fetchUser();
  }, []);

  const loading = useSelector((state) => state.UserReducer.isLoading);
  const error = useSelector((state) => state.UserReducer.error);
  const users = useSelector((state) => state.UserReducer.user);

  console.log(users);
  console.log(loading);
  console.log(error);

  return (
    <div>
      {loading ? (
        <h1>Loading</h1>
      ) : (
        users.map((user) => {
          return (
            <div key={user.id}>
              <h1>{user.name}</h1>
              <p>{user.username}</p>
              <p>{user.email}</p>
            </div>
          );
        })
      )}
    </div>
  );
};

export default UserContainer;
