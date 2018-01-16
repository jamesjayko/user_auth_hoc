import "materialize-css/dist/css/materialize.min.css";
import React from "react";
import Nav from "./nav";
import { Route } from "react-router-dom";
import Home from "./home";
import About from "./about";
import ProtectedList from "./protected_stuff";
import SecretList from "./secret_list";
import auth from '../hoc/auth';

const App = () => (
  <div>
    <div className="container">
      <Nav />
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/secret-list" component={SecretList} />
      <Route path="/protected-stuff" component={auth(ProtectedList)} />
    </div>
  </div>
);

export default App;
