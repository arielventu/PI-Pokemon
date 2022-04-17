import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import './Buscador.css';
import { addMovieFavorite, getMovies } from "../../actions";



export class Buscador extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ""
    };
  }
  handleChange(event) {
    this.setState({ title: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.getMovies(this.state.title)
  }
 
  
  render() {
    const { title } = this.state;
    return (
      <div>
        <h2>Buscador</h2>
        <form className="form-container" onSubmit={(e) => this.handleSubmit(e)}>
          <div>
            <label className="label" htmlFor="title">Película: </label>
            <input
              type="text"
              id="title"
              autoComplete="off"
              value={title}
              onChange={(e) => this.handleChange(e)}
              />
          </div>
          <button type="submit">BUSCAR</button>
        </form>
        <ul>
         {/* Aqui tienes que escribir tu codigo para mostrar la lista de peliculas */}
         {
          this.props.movies.map((movie) => { //Este movie es el q pasa x props redux en el mapstatetoprops
            return (
              <div key={movie.imdbID}> {/* Este key es para evitar el warning de React */}
                <Link to={`/movie/${movie.imdbID}`}>
                  <label>{movie.Title}</label>
                </Link>
                <button onClick={() => this.props.addMovieFavorite(movie)}>Fav</button>
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
    movies: state.moviesLoaded
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addMovieFavorite: movie => dispatch(addMovieFavorite(movie)),
    getMovies: (title) => dispatch(getMovies(title))
  };
}
// export default Buscador;
export default connect(mapStateToProps, mapDispatchToProps)(Buscador);
