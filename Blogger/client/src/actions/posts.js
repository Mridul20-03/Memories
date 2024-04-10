import * as api from '../api';
import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from '../constants/actionTypes';

// Action creators that return action

export const deletePost = (id) => async (dispatch) => {
    try {
      await api.deletePost(id);
  
      dispatch({ type: DELETE, payload: id });
    } catch (error) {
      console.log(error.message);
    }
  };


export const likePost = (id) => async (dispatch) => {
    try{
        const { data } = await api.likePost(id);
        dispatch({ type: LIKE, payload: data });
    } catch(err){
        if (err.code === 'ERR_NETWORK') {
            console.log('Network error occurred. Please check your internet connection.');
            // You can dispatch an action to update your Redux state with an error message for the user
        } else {
            console.log('An error occurred while liking the post:', err);
            // Handle other types of errors accordingly
        }
    }
}


export const updatePost = (id, post) => async (dispatch) => {
    try {
      const { data } = await api.updatePost(id, post);
  
      dispatch({ type: UPDATE, payload: data });
    } catch (error) {
      console.log(error.message);
    }
  };

export const getPosts = () => async (dispatch) => {
    try {
      const { data } = await api.fetchPosts();
  
      dispatch({ type: FETCH_ALL, payload: data });
    } catch (error) {
      console.log(error.message);
    }
  };
  
  export const createPost = (post) => async (dispatch) => {
    try {
      const { data } = await api.createPost(post);
  
      dispatch({ type: CREATE, payload: data });
    } catch (error) {
      console.log(error.message);
    }
  };
  

