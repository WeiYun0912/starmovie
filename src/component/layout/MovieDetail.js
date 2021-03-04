import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core";
import { connect } from "react-redux";
import { getMovieDetail } from "../../redux/actions/movie";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import GetAppIcon from "@material-ui/icons/GetApp";

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
  movieDetail,
  getMovieDetail,
}) => {
  const classes = useStyles();
  useEffect(() => {
    getMovieDetail(id);
  }, [getMovieDetail, id]);

  return (
    <>
      {movieDetail.loading ? (
        "Loading..."
      ) : (
        <div
          className={classes.wrapper}
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.5) , rgba(0,0,0,0.5)) , url(https://image.tmdb.org/t/p/w780${movieDetail?.movieDetail?.backdrop_path})`,
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
                {movieDetail?.movieDetail?.title}
              </Typography>
              <Typography variant="h4" style={{ width: "1000px" }}>
                {movieDetail?.movieDetail?.overview}
              </Typography>
              {/* <Box>
                <img
                  src="https://lumiere-a.akamaihd.net/v1/images/gallery_toystory_14_e6fb55e7.jpeg"
                  className={classes.gallery}
                  alt=""
                />
                <img
                  src="https://lumiere-a.akamaihd.net/v1/images/gallery_toystory_15_a3b6b583.jpeg"
                  className={classes.gallery}
                  alt=""
                />
                <img
                  src="https://lumiere-a.akamaihd.net/v1/images/open-uri20150608-27674-1u7xm3_9c8abe11.jpeg"
                  className={classes.gallery}
                  alt=""
                />
              </Box> */}
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
              <img
                src={
                  "https://image.tmdb.org/t/p/w400" +
                  movieDetail?.movieDetail?.poster_path
                }
                className={classes.poster}
                alt=""
              />
            </Box>
          </Box>
        </div>
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  movieDetail: state.movie,
});

export default connect(mapStateToProps, { getMovieDetail })(MovieDetail);
