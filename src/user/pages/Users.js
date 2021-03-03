import React from "react";

import UsersList from "../components/UsersList";
const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "Hassan Youssef",
      places: 3,
      image: 'https://i.ibb.co/tXJc66p/HASSANYOUSSEF.jpg',
    },
  ];
  return <UsersList items={USERS} />;
};

export default Users;
