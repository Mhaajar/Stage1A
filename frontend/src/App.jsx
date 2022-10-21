import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import "./css/style.css";

import "./charts/ChartjsConfig";

// Import pages
import Dashboard from "./pages/Dashboard";
import LoginPage from "./pages/LoginPage";
import ProtectedRoute from "./ProtectedRoute";
import Home from "./pages/Home";
import Patient from "./pages/Patient";
import RecieveData from "./pages/recieveData";
import Driver from "./pages/driver";

function App() {
  const location = useLocation();

  useEffect(() => {
    document.querySelector("html").style.scrollBehavior = "auto";
    window.scroll({ top: 0 });
    document.querySelector("html").style.scrollBehavior = "";
  }, [location.pathname]); // triggered on route change

  return (
    <>
          <Routes>

            <Route path="/login" element={<LoginPage />} />
            <Route path="/recieve" element={<RecieveData/>}/>
            {/*<Route path="/driver" element={<Driver/>}/>*/}
           
            <Route path="/home" element={
              <ProtectedRoute role="Doctor" >
                <Home/>
              </ProtectedRoute>
            }/>
            
            <Route path="/" element={
              <ProtectedRoute role="admin">
                <Dashboard />
             </ProtectedRoute> 
            } />

            <Route path="/Patient" element={
              <ProtectedRoute role="Doctor">
                <Patient/>
              </ProtectedRoute>
            }/>

            { <Route path="/driver" element={
              <ProtectedRoute role="Traiteur">
                <Driver/>
              </ProtectedRoute>
            }/>}


        </Routes>
      
    </>
  );
}

export default App;
