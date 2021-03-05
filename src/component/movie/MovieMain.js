import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import NumberFormat from "react-number-format";
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
  cardContent: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    width: "100%",
  },
  mainFont: {
    fontSize: "1.3em",
  },
});
const MoiveMain = ({ title, revenue, status, budget }) => {
  const classes = useStyles();
  return (
    <Card className={classes.root} style={{ textAlign: "center" }}>
      <CardContent className={classes.cardContent}>
        <Box>
          <Typography component="span" className={classes.mainFont}>
            Title
          </Typography>
          {<br />}
          <Typography component="span" className={classes.mainFont}>
            {title}
          </Typography>
        </Box>

        <Box>
          <Typography component="span" className={classes.mainFont}>
            Status
          </Typography>
          {<br />}
          <Typography component="span" className={classes.mainFont}>
            {status}
          </Typography>
        </Box>
        <Box>
          <Typography component="span" className={classes.mainFont}>
            Budget
          </Typography>
          {<br />}
          <Typography component="span" className={classes.mainFont}>
            <NumberFormat
              value={budget}
              displayType={"text"}
              thousandSeparator={true}
              prefix={"$"}
            />
          </Typography>
        </Box>
        <Box>
          <Typography component="span" className={classes.mainFont}>
            Revenue
          </Typography>
          {<br />}
          <Typography component="span" className={classes.mainFont}>
            <NumberFormat
              value={revenue}
              displayType={"text"}
              thousandSeparator={true}
              prefix={"$"}
            />
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default MoiveMain;
