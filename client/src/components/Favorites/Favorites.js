import React, { Component } from "react";
import { connect } from "react-redux";
import { removeMovieFavorite } from "../../actions";
import { Link } from 'react-router-dom';
import './Favorites.css';

export class ConnectedList extends Component {

  render() {
    return (
      <div>
        <h2>Películas Favoritas</h2>
        <ul>
          {/* Aqui deberias poner tu lista de peliculas! */}
          {
          this.props.moviesFav.map((movieFav) => { //Este movie es el q pasa x props redux en el mapstatetoprops
            return ( 
              <div key={movieFav.imdbID}> {/* Este key es para evitar el warning de React */}
                <Link to={`/movie/${movieFav.imdbID}`}>
                  <label>{movieFav.Title}</label>
                </Link>
                <button onClick={() => this.props.deleteFav(movieFav.imdbID)}>X</button>
              </div>
            )
          })
         }
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    moviesFav: state.moviesFavourites
  };
}

function mapDispatchToProps(dispatch) {
  return {
    deleteFav: (id) => dispatch(removeMovieFavorite(id))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ConnectedList);

//export default (ConnectedList);
