import React, { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Header from "./component/Header";
import Login from "./component/Login";
import Dashboard from "./component/Dashboard";
import Card from "./component/Card";
import { Details } from "./component/Details";
import AddProposal from "./component/AddProposal";
import EditProposal from "./component/EditProposal";
import Cookies from "js-cookie";
import connectContract from './connectContract'
const App = () => {
  const [isAuth, setIsAuth] = useState(false);
  useEffect(() => {
    // Check if the user is authenticated
    const user = Cookies.get('user');
    
    if (user) {
        setIsAuth(true);
        console.log(user, isAuth)
    }
  }, []);
  connectContract();
  return (
    <>
      <Header />
      <Routes>
          <Route path="/login" element = {!isAuth?<Login/>:<Navigate to="/"/>} />
          <Route path="/card" element = {!isAuth?<Navigate to ="/login"/>:<Dashboard/>} />
          {/* <Route path="/dashbord" Component={Dashboard} /> */}
          <Route path="/details/:id" element = {!isAuth?<Navigate to ="/login"/>:<Details/>} />
          <Route path="/add-proposal" element = {!isAuth?<Navigate to ="/login"/>:<AddProposal/>} />
          <Route path="/editproposal/:id" element = {!isAuth?<Navigate to ="/login"/>:<EditProposal/>} />
          <Route path="/" element = {!isAuth?<Navigate to ="/login"/>:<Card/>} />
      </Routes>
      {/* <Hero /> */}
      {/* <Dashboard /> */}
      {/* <Card /> */}
    </>
  );
};

export default App;
