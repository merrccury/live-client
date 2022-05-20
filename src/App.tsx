import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Login } from "./features/login/Login";
import { SignUp } from "./features/signup/Signup";
import "./App.css";

// import your route components too

const Main = () => {
  return (
    <>
      <h2>main</h2>
      <Link to="/login">Login</Link>
      <br />
      <Link to="/signup">Signup</Link>
    </>
  );
};

function App() {
  return (
    <React.Fragment>
      <div className={"load-rainbow"}>
        <div />
      </div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Main />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />}></Route>
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
