import React, { useEffect } from "react";
import { fetchUser } from "../redux/action/User/userAction";
import { useSelector, useDispatch } from "react-redux";

const UserContainer = () => {
  useEffect(() => {
    fetchUser();
  }, []);

  const loading = useSelector((state) => state.UserReducer.isLoading);
  const error = useSelector((state) => state.UserReducer.error);
  const users = useSelector((state) => state.UserReducer.user);
  console.log(users);

  return <div>{loading ? <h1>Loading</h1> : <h1>Marwan</h1>}</div>;
};

export default UserContainer;
