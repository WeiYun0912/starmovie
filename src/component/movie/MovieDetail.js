import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core";
import { connect } from "react-redux";
import { getMovieDetail } from "../../redux/actions/movie";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import GetAppIcon from "@material-ui/icons/GetApp";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import Comments from "./Comments";
import Rate from "./Rate";
import MoiveMain from "./MovieMain";
import Cast from "./Cast";
const useStyles = makeStyles((theme) => ({
  wrapper: {
    width: "100%",
    height: "80vh",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  },
  button: {
    marginTop: "16px",
    marginRight: "16px",
  },
  poster: {
    marginTop: "150px",
    minWidth: "400px",
    width: "400px",
  },
  gallery: {
    width: "300px",
    margin: "10px",
  },
}));
const MovieDetail = ({
  match: {
    params: { id },
  },
  movie,
  getMovieDetail,
}) => {
  const classes = useStyles();
  useEffect(() => {
    getMovieDetail(id);
  }, [getMovieDetail, id]);

  return (
    <>
      {movie.loading ? (
        "Loading..."
      ) : (
        <>
          <div
            className={classes.wrapper}
            style={{
              backgroundImage: `linear-gradient(rgba(0,0,0,0.5) , rgba(0,0,0,0.5)) , url(https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces${movie?.movieDetail?.backdrop_path})`,
            }}
          >
            <Box
              display="flex"
              justifyContent="space-around"
              alignItems="center"
              color="#fff"
              height="60vh"
              width="80%"
              margin="0 auto"
            >
              <Box>
                <Typography variant="h1">
                  {movie?.movieDetail?.title}
                </Typography>
                <Typography variant="h4" style={{ width: "1000px" }}>
                  {movie?.movieDetail?.overview}
                </Typography>
                <Button
                  className={classes.button}
                  variant="contained"
                  color="primary"
                  size="large"
                  startIcon={<PlayArrowIcon />}
                >
                  Watch Now
                </Button>
                <Button
                  className={classes.button}
                  variant="contained"
                  color="secondary"
                  size="large"
                  startIcon={<GetAppIcon />}
                >
                  Download
                </Button>
              </Box>
              <Box>
                <LazyLoadImage
                  src={
                    "https://image.tmdb.org/t/p/w400" +
                    movie?.movieDetail?.poster_path
                  }
                  className={classes.poster}
                  placeholderSrc="https://via.placeholder.com/500/fafafa/000000?text=Loading"
                />
              </Box>
            </Box>
          </div>
        </>
      )}

      <Box
        width="80%"
        margin="0 auto"
        boxShadow="0px 0px 24px 2px rgba(94,94,94,1);"
      >
        <MoiveMain
          title={movie?.movieDetail?.title}
          revenue={movie?.movieDetail?.revenue}
          status={movie?.movieDetail?.status}
          budget={movie?.movieDetail?.budget}
        />
      </Box>
      <Box
        width="80%"
        margin="0 auto"
        boxShadow="0px 0px 24px 2px rgba(94,94,94,1);"
        overflow="auto hidden"
        whiteSpace="nowrap"
        padding="10px 0"
      >
        <Cast id={id} />
      </Box>
      <Box width="80%" margin="0 auto">
        <Box
          display="flex"
          width="100%"
          justifyContent="center"
          alignItems="flex-start"
          alignContent="flex-start"
        >
          <Box
            display="flex"
            width="100%"
            alignItems="flex-start"
            alignContent="flex-start"
            flexWrap="wrap"
          >
            <Box width="70%">
              <Comments id={id} />
            </Box>
            <Box width="30%">
              <Rate
                voteAverage={movie?.movieDetail?.vote_average * 10}
                voteCount={movie?.movieDetail?.vote_count}
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

const mapStateToProps = (state) => ({
  movie: state.movie,
});

export default connect(mapStateToProps, { getMovieDetail })(MovieDetail);
