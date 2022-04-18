export const GET_ALL_POSTS = 'GET_ALL_POSTS';
export const GET_ALL_USERS = 'GET_ALL_USERS';
export const GET_ALL_USERS_POST = 'GET_ALL_USERS_POST';
export const GET_ALL_COMMENTS_POST = 'GET_ALL_COMMENTS_POST';

export function getAllUsers() {
    return function(dispatch) {
      return fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(json => dispatch({ type: GET_ALL_USERS, payload: json}))
    };
  }
  
  export function getAllUserPosts(id) {
    return function(dispatch) {
      return fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
    .then((response) => response.json())
    .then(json => dispatch({ type: GET_ALL_USERS_POST, payload: json}))
    };
  }

  export function getAllPosts() {
    return function(dispatch) {
      return fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then(json => dispatch({ type: GET_ALL_POSTS, payload: json}))
    };
  }

  export function getAllCommentsPost() {
    return function(dispatch) {
      return fetch("https://jsonplaceholder.typicode.com/comments")
    .then((response) => response.json())
    .then(json => dispatch({ type: GET_ALL_COMMENTS_POST, payload: json}))
    };
  }