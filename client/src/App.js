import React from "react";
import { Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Buscador from "./components/SearchBar/SearchBar";
import Users from "./components/CardContainer/CardContainer";
import UserPosts from "./components/CardDetail/CardDetail";
import CommentsPost from "./components/CreatePokemon/CreatePokemon";

function App() {
  return (
      <React.Fragment>
         <Route path='/'>
            <NavBar />
         </Route>
         <Route exact path='/'>
            <Users />
         </Route>
         <Route path='/users/:id/posts' component={UserPosts} />
         <Route path='/users/:id/posts' component={CommentsPost} />
         <Route path='/home' component={Buscador} />
         
         
         
          
      </React.Fragment>
  )
}

export default App
