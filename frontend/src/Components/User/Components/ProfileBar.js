import { Button, Card, Typography } from "@mui/material";
import React from "react";
import useStyles from "./Styles/ProfileBarStyle"

export default function ProfileBar() {
  const classes = useStyles();

  return (
    <div>
      <Card className={classes.card}>
        <Typography
          variant="h5"
          component="h2"
          gutterBottom
          className={classes.title}
        >
          Profile completeness
        </Typography>
        <div className={classes.progressBarVertical}>
          <div
            className={classes.progressNowVertical}
          ></div>
        </div>
        <Typography
         className={classes.number}
        >
          87% <br />
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
          >
            Submit Profile
          </Button>
        </Typography>
      </Card>
    </div>
  );
}
