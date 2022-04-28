import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import LandingPage from './components/LandingPage/';
import Home from './components/Home';
// import NavBar from './components/NavBar/';
import SearchBar from './components/SearchBar/';
import PokemonDetail from './components/PokemonDetail/';
import PokemonCreate from './components/PokemonCreate/';



function App() {
  return (
    <React.Fragment>
      <Route exact path="/" component={LandingPage} />
      <Route path="/home" component={Home} />
      <Route path="/home" component={SearchBar} />
      <Route exact path="/pokemon/:id" component={PokemonDetail} />
      {/* <Route exact path="/home" component={NavBar} /> */}
      <Route path="/pokemon/create" component={PokemonCreate} />
    </React.Fragment>
  );
}

export default App;
