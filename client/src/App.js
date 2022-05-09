import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import LandingPage from './components/LandingPage/';
import Home from './components/Home';
import NavBar from './components/NavBar/';
import PokemonDetail from './components/PokemonDetail/';
import PokemonDetailByName from './components/PokemonDetail/byName';
import PokemonCreate from './components/PokemonCreate/';
import NotFound from './components/NotFound'



function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        </Switch>
      <NavBar />
      <Switch>
        {/* <Route exact path="/home" component={NavBar} /> */}
        <Route exact path="/home" component={Home} />
        <Route exact path="/pokemon/:id" component={PokemonDetail} />
        <Route exact path="/pokemon/search/:name" component={PokemonDetailByName} />
        <Route exact path="/create" component={PokemonCreate} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
