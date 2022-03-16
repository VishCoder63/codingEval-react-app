import axios from "axios";
import {
  FILTER_DATA,
  GET_CLICKED_MOVIE_REQ,
  GET_CLICKED_MOVIE_SUCCESS,
  GET_MOVIE_FAILURE,
  GET_MOVIE_REQ,
  GET_MOVIE_SUCCESS,
} from "./actionTypes";
import { useDispatch } from "react-redux";

export const getMovieRequest = () => ({
  type: GET_MOVIE_REQ,
});
export const getMovieSuccess = (payload) => ({
  type: GET_MOVIE_SUCCESS,
  payload,
});
export const getMovieFailure = () => ({
  type: GET_MOVIE_FAILURE,
});
export const filterByGenre = (payload) => ({
  type: FILTER_DATA,
  payload,
});

// thunk call to fetch movie list
export const getMovieData = () => {
  return (dispatch) => {
    dispatch(getMovieRequest());
    axios
      .get("https://movie-fake-server.herokuapp.com/data")
      .then((res) => {
        dispatch(getMovieSuccess(res.data));
      })
      .catch(() => {
        dispatch(getMovieFailure());
      });
  };
};

export const getClickedMovieRequest = () => ({
  type: GET_CLICKED_MOVIE_REQ,
});
export const getClickedMovieSuccess = (payload) => {
  // console.log(payload.data);
  return {
    type: GET_CLICKED_MOVIE_SUCCESS,
    payload,
  };
};
export const getClickedMovieFailure = () => ({
  type: GET_MOVIE_FAILURE,
});

export const getClickedMovieData = (id) => {
  return (dispatch) => {
    dispatch(getClickedMovieRequest());
    axios
      .get(`https://movie-fake-server.herokuapp.com/data/${id}`)
      .then((res) => {
        dispatch(getClickedMovieSuccess(res.data));
      })
      .catch((err) => {
        console.log(err)
        dispatch(getClickedMovieFailure());
      });
  };
};
