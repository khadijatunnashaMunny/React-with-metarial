import { Chip,Card, CardContent, Typography } from  "@mui/material";
import React, { useEffect, useState } from "react";
import useStyles from "./Styles/LanguageStyle"

export default function Language(languageList) {
  const classes = useStyles();
  const [language, setLanguage] = useState([
    {
      _id: "",
      language: "",
      proficiency: "",
    },
  ]);
 
  return (
    <div className={classes.mainDiv}>
      <Card className={classes.card} >
        <CardContent>
          <Typography variant="h5" component="h2">
            Language
          </Typography>
          <br />
          <div style={{display: 'flex', flexWrap:"wrap"}}> 
          <Typography>HTML</Typography><br/>
         </div>
        </CardContent>
      </Card>
    </div>
  );
}
