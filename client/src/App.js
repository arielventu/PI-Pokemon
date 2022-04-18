import React from 'react';
import { BrowserRouter as Route} from 'react-router-dom';
import './App.css';
import LandingPage from './components/LandingPage/';
import NavBar from './components/NavBar/';
import CardContainer from './components/CardContainer/';


function App() {
  return (
    <React.Fragment>
      <Route exact path="/" component={LandingPage} />
      <Route path="/home" component={NavBar} />
      <Route exact path="/home" component={CardContainer} />
      <Route path="/home" component={Favorites} />
      <Route path="/movie/:id" component={Movie} />
      </React.Fragment>
  );
}

export default App;
