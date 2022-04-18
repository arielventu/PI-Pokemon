import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import LandingPage from './components/LandingPage/index';
// import NavBar from './components/NavBar/';
// import CardContainer from './components/CardContainer/';
// import SearchBar from './components/SearchBar/';
// import PokemonDetail from './components/PokemonDetail/';
// import PokemonCreate from './components/PokemonCreate/';



function App() {
  return (
    <React.Fragment>
      <Route exact path="/" component={LandingPage} />
      {/* <Route path="/home" component={NavBar} />
      <Route path="/home" component={CardContainer} />
      <Route path="/home" component={SearchBar} />
      <Route path="/pokemon/:id" component={PokemonDetail} />
      <Route path="/pokemon/create" component={PokemonCreate} /> */}
    </React.Fragment>
  );
}

export default App;
