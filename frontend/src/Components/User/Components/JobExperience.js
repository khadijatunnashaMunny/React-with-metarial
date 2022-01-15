import { Chip, Card, CardContent, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { BiBuildingHouse } from "react-icons/bi";
import useStyles from "./Styles/JobExperienceStyle";

export default function JobExperience(jobExp) {
  const classes = useStyles();
  const [allJobs, setAllJobs] = useState([
    {
      company: "",
      position: "",
      start: "",
      end: "",
      experience: "",
      status: "",
      technology: [],
    },
  ]);
  

  return (
    <div className={classes.mainDiv}>
      <Card className={classes.card}>
        <CardContent>
          <Typography variant="h5" component="h2">
            Job Experience
          </Typography>
          <br />
       
              <div className={classes.contentDiv} >
                <div>
                  <BiBuildingHouse className={classes.logo} />
                </div>
                <div>
                  <Typography color="primary" variant="body1" className={classes.typeNamePost}>
                    jobs.company
                  </Typography>
                  <div className={classes.contentDiv}>
                    <Typography color="primary" variant="body1" className={classes.typePost}>
                      jobs.position
                    </Typography>
                    &nbsp; &nbsp;|&nbsp; &nbsp;
                    <Typography color="primary" variant="body1" className={classes.typePost}>
                      jobs.start
                      jobs.end.length
                    </Typography>
                  </div>
                  <Typography variant="body1" className={classes.achievements}>
                    Achievements
                  </Typography>
                  <Typography color="primary"  className={classes.type}>
                   jobs.experience
                  </Typography>
                  <Typography color="primary" variant="body1" className={classes.type}>
                    job technology
                  </Typography>
                </div>
              </div>
          
        </CardContent>
      </Card>
    </div>
  );
}
