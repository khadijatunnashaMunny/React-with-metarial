import { Card, CardContent, Typography } from "@mui/material";
import React ,{useState} from "react";

import { AiOutlineMail } from "react-icons/ai";
import { DiStackoverflow } from "react-icons/di";
import { FaLinkedin, FaXing } from "react-icons/fa";
import { FiMapPin, FiPhone } from "react-icons/fi";
import { AiFillGithub } from "react-icons/ai";
import useStyles from "./Styles/PersonalinfoStyle";

export default function Personalinfo() {
  const classes = useStyles();
  const [allSocialLink, setAllSocialLink] = useState({
    linkedin: "",
    github: "",
    stackoverflow: "",
    xing: "",
  });

 
  return (
    <div>
      <Card className={classes.card}>
        <CardContent>
          <Typography variant="h5" component="h2">
            Personal Information
          </Typography>
          <br />
          <div className={classes.contentDiv}>
            <AiOutlineMail />
            <Typography className={classes.type} color="textSecondary">
              <a href="/">email</a>
            </Typography>
          </div>
          <div className={classes.contentDiv}>
            <FiMapPin />
            <Typography className={classes.type} color="textSecondary">
              location
            </Typography>
          </div>
          <div className={classes.contentDiv}>
            <FiPhone />
            <Typography className={classes.type} color="textSecondary">
              phone
            </Typography>
          </div>
          <br />
        
    
        </CardContent>
      </Card>
    </div>
  );
}
