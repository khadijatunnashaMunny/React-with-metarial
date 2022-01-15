import { Card, Typography } from "@mui/material";
import useStyles from "./Styles/StatusStyle";
import React from "react";

export default function Status() {
  const classes = useStyles();
  return (
    <div>
      <Card className={classes.card}>
        <Typography
          variant="h5"
          component="h2"
          gutterBottom
          style={{ padding: "10px" }}
        >
         
          Job Seeking Status
        </Typography>
        <div className={classes.contentDiv}>
          <Typography className={classes.referral}>Hired</Typography>
        </div>
      </Card>
    </div>
  );
}
