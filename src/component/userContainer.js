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

  const fetchUser = async () => {
    dispatch(fetchUserRequest());

    const response = await axios
      .get("https://jsonplaceholder.typicode.com/users")
      .catch((error) => dispatch(fetchUserFailure(error.message)));
      dispatch(fetchUserSucess(response.data));

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
        users.map((user) => <h1 key={user.id}>{user.name}</h1>)
      )}
    </div>
  );
};

export default UserContainer;
