import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Blog from "./components/Blog";
import Navbar from "./components/Navbar";
import Admin from "./components/Admin";
// import PrivateRoute from "./components/PrivateRoute";
import PrivateRoute2 from "./components/PrivateRoute2";
import HistoryAPI from "./HistoryAPI";
import { AuthContextProvider } from "./context/AuthContext";
import "./App.css";

function App() {
  return (
    <AuthContextProvider>
      <BrowserRouter>
        <Navbar />
        <Switch>
          {/* <Route exact path="/">
            <Home />
          </Route> */}
          <Route exact path="/" component={Home} />

          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/blog">
            <Blog />
          </Route>

          <PrivateRoute2 component={Admin} path="/admin" />

          <Route exact path="/historyAPI" component={HistoryAPI} />
        </Switch>
      </BrowserRouter>
    </AuthContextProvider>
  );
}

export default App;
