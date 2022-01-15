import { Chip, Card, CardContent, Typography } from "@mui/material";
import useStyles  from "./Styles/SkillsStyle";
import React, { useEffect, useState } from "react";


export default function Skills(skillsList) {
  const [skills, setSkills] = useState([
    {
      skill: "",
      proficiency: "",
    },
  ]);
 
  const classes = useStyles();

  return (
    <div className={ classes.mainDiv}>
      <Card className={classes.card}>
        <CardContent>
          <Typography variant="h5" component="h2">
            Skills
          </Typography>
          <br />
          <div style={{display: 'flex', flexWrap:"wrap"}}> 
          <Typography>Skills list</Typography>
         </div>
        </CardContent>
      </Card>
    </div>
  );
}
