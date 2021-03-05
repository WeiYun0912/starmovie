import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  ratePercent: {
    fontSize: "2em",
    color: "#fff",
    fontWeight: "800",
  },
});

const Rate = ({ voteAverage, voteCount }) => {
  console.log(voteAverage);
  const classes = useStyles();
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      style={{
        backgroundImage:
          "linear-gradient(to bottom, #323232 0%, #3F3F3F 40%, #1C1C1C 150%), linear-gradient(to top, rgba(255,255,255,0.40) 0%, rgba(0,0,0,0.25) 200%)",
        backgroundBlendMode: "multiply",
      }}
      margin="10px 5px"
      borderRadius="4px"
      padding="1.9em"
    >
      <Typography variant="h4" style={{ color: "#fff", margin: "10px" }}>
        Vote Avarage
      </Typography>
      <Box position="relative" display="inline-flex">
        <CircularProgress
          variant="determinate"
          size={200}
          value={100}
          style={{ color: "#ffff28" }}
        />
        <Box
          top={0}
          left={0}
          bottom={0}
          right={0}
          position="absolute"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Typography
            className={classes.ratePercent}
            component="h1"
            color="textSecondary"
          >
            {voteAverage}
            <sup style={{ fontSize: "16px" }}>%</sup>
          </Typography>
        </Box>
      </Box>
      <Typography variant="h4" style={{ color: "#fff", margin: "10px" }}>
        Vote Count
      </Typography>
      <Box position="relative" display="inline-flex">
        <CircularProgress
          variant="determinate"
          size={200}
          value={100}
          style={{ color: "#ffa500" }}
        />
        <Box
          top={0}
          left={0}
          bottom={0}
          right={0}
          position="absolute"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Typography
            className={classes.ratePercent}
            component="h1"
            color="textSecondary"
          >
            {voteCount}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Rate;
