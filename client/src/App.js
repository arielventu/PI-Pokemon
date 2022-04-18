import React from 'react';
import { BrowserRouter as Route} from 'react-router-dom';
import './App.css';
import LandingPage from './components/LandingPage/';
import NavBar from './components/NavBar/';
import CardContainer from './components/CardContainer/';
import SearchBar from './components/SearchBar/';



function App() {
  return (
    <React.Fragment>
      <Route exact path="/" component={LandingPage} />
      <Route path="/home" component={NavBar} />
      <Route path="/home" component={CardContainer} />
      <Route path="/home" component={SearchBar} />
      <Route path="/pokemon/:id" component={PokemonDetail} />
      <Route path="/pokemon/create" />
      </React.Fragment>
  );
}

export default App;
