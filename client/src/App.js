import React from "react";
import { Route } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage";
import NavBar from "./components/NavBar/NavBar";
import SearchBar from "./components/SearchBar/SearchBar";
import CardContainer from "./components/CardContainer/CardContainer";
// import NavBar from "./components/NavBar/NavBar";
// import Buscador from "./components/SearchBar/SearchBar";
// import Users from "./components/CardContainer/CardContainer";
// import UserPosts from "./components/CardDetail/CardDetail";
// import CommentsPost from "./components/CreatePokemon/CreatePokemon";

function App() {
  return (
      <React.Fragment>
        <Route exact path='/' component={LandingPage} />
        <Route exact path='/home' component={NavBar} />
        <Route exact path='/home' component={SearchBar} />
        <Route exact path='/home' component={CardContainer} />
        {/* <Route path='/users/:id/posts' component={UserPosts} />
        <Route path='/users/:id/posts' component={CommentsPost} />
        <Route path='/home' component={Buscador} /> */}
         
         
         
          
      </React.Fragment>
  )
}

export default App
