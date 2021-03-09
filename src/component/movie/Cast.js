import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { connect } from "react-redux";
import { getMovieCasts } from "../../redux/actions/movie";
const useStyles = makeStyles(() => ({
  root: {
    height: 270,
    width: 150,
    margin: "10px 0",
    textAlign: "center",
  },
  slide: {
    margin: "0 20px",
  },
  media: {
    height: 160,
    margin: "0 auto",
  },
  wrapper: {
    transition: "1s",
    width: "80%",
    margin: "0 auto",
    display: "flex",
    overflowX: "auto",
    position: "relative",
    "&::-webkit-scrollbar": {
      width: "8px",
      height: "8px",
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: "rgba(219,219,219,1)",
      borderRadius: "20px",
    },
    "&::after": {
      content: '""',
      width: "80px",
      height: "100%",
      position: "absolute",
      top: "0",
      right: "-20px",
      backgroundImage:
        "linear-gradient(to right, rgba(255,255,255,0) 0%, black 100%);",
      pointerEvents: "none",
    },
  },
  isFading: {
    "&::after": {
      transition: "linear 0.3s",
      opacity: "1",
    },
  },

  isHidden: {
    "&::after": {
      transition: "linear 0.3s",
      opacity: "0",
    },
  },
}));

const Case = ({ id, movieCasts, getMovieCasts }) => {
  const classes = useStyles();
  const [shadow, setShadow] = useState(true);
  useEffect(() => {
    getMovieCasts(id);
  }, [id, getMovieCasts]);

  const scrollHandler = (e) => {
    if (e.target.scrollLeft > 15) {
      setShadow((s) => (s = false));
    } else {
      setShadow((s) => (s = true));
    }
  };
  return (
    <>
      <div
        className={`${classes.wrapper} ${
          shadow ? classes.isFading : classes.isHidden
        }`}
        onScroll={scrollHandler}
      >
        {!movieCasts?.cast
          ? "Loading..."
          : movieCasts?.cast?.slice(0, 10).map((cast) => (
              <div className={classes.slide} key={cast.name}>
                <Card className={classes.root}>
                  <CardActionArea>
                    <CardMedia
                      className={classes.media}
                      image={
                        "https://image.tmdb.org/t/p/w185/" + cast.profile_path
                      }
                      title="Contemplative Reptile"
                    />
                    <CardContent>
                      <Typography gutterBottom component="p">
                        {cast.name}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                      >
                        {cast.character}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </div>
            ))}
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  movieCasts: state.movie.movieCasts,
});

export default connect(mapStateToProps, { getMovieCasts })(Case);
