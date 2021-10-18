import React from "react";
// Router
import { Switch, Route, useLocation } from "react-router-dom";
// Styled
import styled from "styled-components";
// Pages
import Login from "./pages/Login";
import Home from "./pages/Home";
import Recipes from "./pages/Recipes";
import Profile from "./pages/Profile";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

function App() {
  const location = useLocation();

  return (
    <StyContenedor>
      <NavBar />
      <Switch location={location} key={location.pathname}>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/recipes">
          <Recipes />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
      </Switch>
      <Footer />
    </StyContenedor>
  );
}

const StyContenedor = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100vh;
  width: 100vw;
`;

export default App;
