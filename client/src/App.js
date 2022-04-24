import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
// import Loading from './components/Loading';
import LandingPage from './components/LandingPage/';
import NavBar from './components/NavBar/';
import Filters from './components/Filters/';
import Home from './components/Home';
import SearchBar from './components/SearchBar/';
// import PokemonDetail from './components/PokemonDetail/';
// import PokemonCreate from './components/PokemonCreate/';



function App() {
  return (
    <React.Fragment>
      {/* <Route path="/" component={Loading} /> */}
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/home" component={NavBar} />
      <Route exact path="/home" component={Filters} />
      <Route exact path="/home" component={SearchBar} />
      <Route exact path="/home" component={Home} />
      {/* <Route path="/pokemon/:id" component={PokemonDetail} /> */}
      {/* <Route path="/pokemon/create" component={PokemonCreate} /> */}
    </React.Fragment>
  );
}

export default App;
