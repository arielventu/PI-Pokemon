import React from 'react';
import { connect } from 'react-redux';
import { getMovieDetail } from '../../actions';

import './Movie.css';

class Movie extends React.Component {

    componentDidMount(){
        this.props.detailMovie(this.props.match.params.id)
    }

    render() {
        // console.log(this.props)
        return (
            <div className="movie-detail">
                 <h3>Title: {this.props.movie.Title}</h3>
                 <h3>Type: {this.props.movie.Type}</h3>
                 <img src={this.props.movie.Poster} alt=''></img>
                 <h3>Year: {this.props.movie.Year}</h3>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
      movies: state.moviesLoaded,
      movie: state.movieDetail
    };
  }
  
  function mapDispatchToProps(dispatch) {
    return {
      detailMovie: (id) => dispatch(getMovieDetail(id)),
    };
  }

export default connect(mapStateToProps, mapDispatchToProps)(Movie);
  


