import React, { useEffect } from "react";
import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core/styles";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import { red } from "@material-ui/core/colors";
import Box from "@material-ui/core/Box";
import { connect } from "react-redux";
import { getMovieComments } from "../../redux/actions/movie";
import StarIcon from "@material-ui/icons/Star";
const useStyles = makeStyles({
  root: {
    width: "100%",
    display: "flex",
    margin: "10px 0",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  avatar: {
    backgroundColor: red[500],
  },
  cardContent: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
});

const shortWord = (text) => {
  return text.substring(0, 65) + "...";
};

const Comments = ({ id, movieComments, getMovieComments }) => {
  const classes = useStyles();
  useEffect(() => {
    getMovieComments(id);
  }, [id, getMovieComments]);

  return (
    <>
      {!movieComments?.id
        ? "Loading..."
        : movieComments?.results?.map((comment) => (
            <Card
              className={classes.root}
              style={{ textAlign: "center" }}
              key={comment.author}
            >
              <CardHeader
                avatar={
                  <Avatar
                    aria-label="recipe"
                    className={classes.avatar}
                    src={
                      "https://image.tmdb.org/t/p/original" +
                      comment.author_details.avatar_path
                    }
                  >
                    R
                  </Avatar>
                }
              />
              <CardContent className={classes.cardContent}>
                <Box width="50%">
                  <Typography component="span">
                    {shortWord(comment.content)}
                  </Typography>
                </Box>
                <Box>
                  <Typography component="span" style={{ display: "flex" }}>
                    <StarIcon style={{ color: "#ffc220" }} />
                    {comment.author_details.rating}
                  </Typography>
                </Box>
                <Box width="25%">
                  <Typography component="span">{comment.author}</Typography>
                  {<br />}
                  <Typography component="span" color="textSecondary">
                    {comment.created_at}
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          ))}
    </>
  );
};

const mapStateToProps = (state) => ({
  movieComments: state.movie.movieComments,
});

export default connect(mapStateToProps, { getMovieComments })(Comments);
