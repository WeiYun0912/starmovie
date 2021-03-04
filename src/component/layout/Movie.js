import React, { useEffect } from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { getMoives } from "../../redux/actions/movie";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ScheduleIcon from "@material-ui/icons/Schedule";
import { Link } from "react-router-dom";
import loadingImage from "../../assets/images/loading.gif";
const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin: "20px 0",
  },
  media: {
    height: "50vh",
  },
});

const Movie = ({ movielist, getMoives, page }) => {
  const classes = useStyles();
  console.log(page);
  useEffect(() => {
    getMoives(page);
  }, [getMoives, page]);

  return (
    <>
      {movielist.loading
        ? "Loading..."
        : movielist.movielist.results.map((movie) => (
            <Card key={movie.id} className={classes.root}>
              <Link
                to={"starmovie/detail/" + movie.id}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image={
                      "https://image.tmdb.org/t/p/original/" + movie.poster_path
                    }
                    title="Contemplative Reptile"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      {movie.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="div"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        margin: "10px 0",
                      }}
                    >
                      <ScheduleIcon />
                      {movie.release_date}
                    </Typography>

                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Veritatis adipisci facere blanditiis?
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Link>
              <CardActions>
                <Button
                  size="small"
                  color="primary"
                  startIcon={<ThumbUpIcon />}
                >
                  {movie.vote_average}
                </Button>
                <Button
                  size="small"
                  color="secondary"
                  startIcon={<FavoriteIcon />}
                >
                  {movie.vote_count}
                </Button>
              </CardActions>
            </Card>
          ))}
    </>
  );
};

const mapStateToProps = (state) => ({
  movielist: state.movie,
});

export default connect(mapStateToProps, { getMoives })(Movie);
