import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { connect } from "react-redux";
import { getMovieCasts } from "../../redux/actions/movie";
const useStyles = makeStyles(() => ({
  slide: {
    display: "inline-block",
    margin: "0 10px",
    width: 150,
  },
  root: {
    height: 250,
  },
  media: {
    height: 140,

    margin: "0 auto",
  },
}));

const Case = ({ id, movieCasts, getMovieCasts }) => {
  const classes = useStyles();

  useEffect(() => {
    getMovieCasts(id);
  }, [id, getMovieCasts]);
  return (
    <>
      {console.log(movieCasts)}
      {!movieCasts?.cast
        ? "Loading..."
        : movieCasts?.cast?.slice(0, 10).map((cast) => (
            <div className={classes.slide}>
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
    </>
  );
};

const mapStateToProps = (state) => ({
  movieCasts: state.movie.movieCasts,
});

export default connect(mapStateToProps, { getMovieCasts })(Case);
