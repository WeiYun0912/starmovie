import {
  GET_MOVIE,
  GET_MOVIE_DETAIL,
  GET_MOVIE_COMMENTS,
  GET_MOVIE_CASTS,
  ERROR_MOVIE,
} from "./types";
import axios from "axios";
import { API_KEY } from "../../config/index";
export const getMoives = (page) => async (dispatch) => {
  try {
    const req = await axios.get(
      `discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}`
    );
    dispatch({
      type: GET_MOVIE,
      payload: req.data,
    });
  } catch (e) {
    dispatch({
      type: ERROR_MOVIE,
      payload: console.log(e),
    });
  }
};

export const getMovieDetail = (id) => async (dispatch) => {
  try {
    const req = await axios.get(
      `movie/${id}?api_key=${API_KEY}&language=en-US`
    );
    dispatch({
      type: GET_MOVIE_DETAIL,
      payload: req.data,
    });
  } catch (e) {
    dispatch({
      type: ERROR_MOVIE,
      payload: console.log(e),
    });
  }
};

export const getMovieComments = (id) => async (dispatch) => {
  try {
    const req = await axios.get(
      `movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`
    );
    dispatch({
      type: GET_MOVIE_COMMENTS,
      payload: req.data,
    });
  } catch (e) {
    dispatch({
      type: ERROR_MOVIE,
      payload: console.log(e),
    });
  }
};

export const getMovieCasts = (id) => async (dispatch) => {
  try {
    const req = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}&language=en-US`
    );
    dispatch({
      type: GET_MOVIE_CASTS,
      payload: req.data,
    });
  } catch (e) {
    dispatch({
      type: ERROR_MOVIE,
      payload: console.log(e),
    });
  }
};
