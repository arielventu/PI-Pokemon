import React from 'react';
import { Route } from 'react-router-dom';
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
    <React.Fragment>
      <switch>
      <Route exact path="/" component={LandingPage} />
      <Route path="/home" component={NavBar} />
      <Route path="/home" component={Home} />
      <Route exact path="/pokemon/:id" component={PokemonDetail} />
      <Route exact path="/pokemon/search/:name" component={PokemonDetailByName} />
      <Route exact path="/create" component={PokemonCreate} />
        <Route component={NotFound} />
      </switch>
    </React.Fragment>
  );
}

export default App;
