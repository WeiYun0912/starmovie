import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getMovieDetail } from "../../redux/actions/movie";

const MovieDetail = ({
  match: {
    params: { id },
  },
  movieDetail,
  getMovieDetail,
}) => {
  useEffect(() => {
    getMovieDetail(id);
  }, [getMovieDetail, id]);

  return (
    <>
      <h1>HelloWorld</h1>
      {movieDetail.loading ? "loading..." : console.log(movieDetail)}
    </>
  );
};

const mapStateToProps = (state) => ({
  movieDetail: state.movie,
});

export default connect(mapStateToProps, { getMovieDetail })(MovieDetail);
