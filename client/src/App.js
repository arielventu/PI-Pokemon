import React from 'react';
import { BrowserRouter as Route} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <React.Fragment>
      <Route exact path="/home" component={NavBar} />
      <Route exact path="/home" component={CardContainer} />
      <Route path="/home" component={Favorites} />
      <Route path="/movie/:id" component={Movie} />
      </React.Fragment>
  );
}

export default App;
