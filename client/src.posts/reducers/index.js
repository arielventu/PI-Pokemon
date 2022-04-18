import { GET_ALL_USERS, GET_ALL_POSTS, GET_ALL_USERS_POST, GET_ALL_COMMENTS_POST } from "../actions";

const initialState = {
  users: [],
  posts: [],
  userPosts: [],
  commentsPost: [],
};

export default function rootReducer(state = initialState, {payload, type}) {
  switch (type) {
   case GET_ALL_USERS:
     return {
       ...state,
       users: payload,
     };
     case GET_ALL_POSTS:
     return {
       ...state,
       posts: payload,
     };
     case GET_ALL_USERS_POST:
     return {
       ...state,
       userPosts: payload,
     };
     case GET_ALL_COMMENTS_POST:
     return {
       ...state,
       commentsPost: payload,
     };
     default:
     return state;
  }
}