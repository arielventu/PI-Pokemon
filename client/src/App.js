import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import LandingPage from './components/LandingPage/';
import Home from './components/Home';
// import NavBar from './components/NavBar/';
// import Filters from './components/Filters/';
// import SearchBar from './components/SearchBar/';
// import PokemonDetail from './components/PokemonDetail/';
// import PokemonCreate from './components/PokemonCreate/';



function App() {
  return (
    <React.Fragment>
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/home" component={Home} />
      {/* <Route exact path="/home" component={NavBar} />
      <Route exact path="/home" component={SearchBar} />
      <Route exact path="/home" component={Filters} /> */}
      {/* <Route path="/pokemon/:id" component={PokemonDetail} /> */}
      {/* <Route path="/pokemon/create" component={PokemonCreate} /> */}
    </React.Fragment>
  );
}

export default App;
