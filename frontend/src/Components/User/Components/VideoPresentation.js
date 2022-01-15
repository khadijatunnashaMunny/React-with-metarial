import { Card, CardContent, Typography } from  "@mui/material";
import  useStyles  from "./Styles/VideoPresentationStyle";
import React from "react";

export default function VideoPresentation(videoLink) {
  let link = videoLink?.videoLink?.split("/") || ''
  const classes = useStyles();
  
  return (
    <div className={classes.mainDiv}>
      <Card className={classes.card}>
        <CardContent>
          <Typography variant="h5" component="h2">
            Video Presentation
          </Typography>
        </CardContent>
        <br />
        <div>
          {<iframe
            src={`https://www.youtube.com/embed/${link[link.length-1]}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className={classes.iFrame}
          ></iframe>}
        </div>
      </Card>
    </div>
  );
}
