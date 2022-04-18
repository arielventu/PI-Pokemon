import React from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { getAllUsers } from "../../actions/index";
import './CardContainer.css';

export class CardContainer extends React.Component {
  
  componentDidMount(){
    this.props.getAllUsers(this.props)
  }


  render() {
    // console.log(this.props.users)
    return (
      <div className="details">
        <h4 className="title">Usuarios del blog</h4>
        <table>
          <thead>
            <tr className="header">
              <th>Nombre</th>
              <th>Usuario</th>
              <th>Ver</th>
            </tr>
          </thead>
          <tbody>
           {
             this.props.users.map((users) => {
               return (
                <tr>
                    <td>
                      <label>{users.name}</label>                 
                    </td>
                    <td>
                      <label>{users.username}</label>                 
                    </td>
                    <td>
                      <Link to={`/users/${users.id}/posts`} className="button">Posts</Link>
                    </td>
                </tr>  
                )
              })
           }
          </tbody>
        </table>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    users: state.users
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getAllUsers: () => dispatch(getAllUsers()), 
    // detailMovie: (id) => dispatch(getMovieDetail(id)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);



