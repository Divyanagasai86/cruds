import React from "react";
import AddUser from "../AddUser/AddUser";
import UserList from "../UserList/UserList";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <div className="right-container">
        <AddUser />
      </div>
      <div className="left-container">
        <UserList />
      </div>
    </div>
  );
};

export default Home;
