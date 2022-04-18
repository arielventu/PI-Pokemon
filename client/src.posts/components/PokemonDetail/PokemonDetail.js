import React from 'react';
import { connect } from 'react-redux';
import './PokemonDetail.css';
import { getAllUserPosts, getAllUsers } from '../../actions';


export class UserPosts extends React.Component {

  componentDidMount(){
    this.props.getAllUserPosts(this.props.match.params.id)
    this.props.getAllUsers(this.props)
  }

  render() {
    
    const userid = this.props.match.params.id

    return (
      <div className="details">
        <h3 className="title">Posts del usuario {this.props.users.map((user) => { 
            return (
              <div key={user.id}> 
                <label>{user.id === Number(userid) ? user.name : null}</label>
              </div>
            )
          })}
        </h3>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    userPosts: state.userPosts,
    users: state.users
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getAllUserPosts : (id) => dispatch(getAllUserPosts(id)), 
    getAllUsers: () => dispatch(getAllUsers())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(UserPosts);

