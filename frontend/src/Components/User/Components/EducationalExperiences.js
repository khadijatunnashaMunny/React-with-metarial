import { Card, CardContent, Typography } from  "@mui/material";
import { FaGraduationCap } from "react-icons/fa";
import React, { useEffect, useState } from "react";
import useStyles from './Styles/EducationalExperienceStyle';

export default function EducationalExperiences(eduExp) {
  const classes = useStyles();
  const [allEdu, setAllEdu] = useState([
    {
      start: "",
      end: null,
      created: "",
      _id: "",
      school: "",
      degree: "",
      status: "",
    },
  ]);
 
  return (
    <div className={classes.mainDiv}>
      <Card className={classes.card}>
        <CardContent>
          <Typography variant="h5" component="h2">
            Educational Experience
          </Typography>
          <br />
              <div className={classes.contentDiv} >
                <div>
                  <FaGraduationCap className={classes.logo} />
                </div>
                <div>
                  <Typography color="primary" className={classes.typeNamePost}>
                    education.school
                  </Typography>
                  <div className={classes.contentDiv}>
                    <Typography color="primary" className={classes.typePost}>
                      education.degree
                    </Typography>
                    &nbsp; &nbsp;|&nbsp; &nbsp;
                    <Typography color="primary" className={classes.typePost}>
                      education.start &nbsp; to &nbsp;
                      education.end != null ? education.end : "Present"
                    </Typography>
                  </div>
                  <br />
                  <Typography color="primary" className={classes.type}>
                    education.experience
                  </Typography>
                  <Typography
                    color="primary"
                    className={classes.type}
                  ></Typography>

                  <br />
                </div>
              </div>
        </CardContent>
      </Card>
    </div>
  );
}
