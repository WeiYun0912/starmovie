import {
  GET_MOVIE,
  GET_MOVIE_COMMENTS,
  GET_MOVIE_DETAIL,
} from "../actions/types";
const initState = {
  movielist: [],
  loading: true,
};

const movie = (state = initState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_MOVIE:
      return {
        ...state,
        movielist: payload,
        loading: false,
      };
    case GET_MOVIE_DETAIL:
      return {
        ...state,
        movieDetail: payload,
        loading: false,
      };
    case GET_MOVIE_COMMENTS:
      return {
        ...state,
        movieComments: payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default movie;
