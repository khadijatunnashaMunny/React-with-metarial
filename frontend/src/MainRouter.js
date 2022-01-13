import React from "react";
import Home from "./Components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./Components/Sidebar";
import  Filter  from './Components/Filter' ;
import UserDashboard from './Components/User/Components/UserDashboard'

function MainRouter() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/filter" element={<Filter />} />
          <Route path="/userDashboard" element={<UserDashboard />} />

        </Routes>
      </Router>
    </div>
  );
}

export default MainRouter;
