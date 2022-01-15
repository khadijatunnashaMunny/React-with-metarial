import React from "react";

import { Chip, Typography,Grid } from "@mui/material";
import Menubar from "../../Menubar";
import Staticbar from './Staticbar'
import UserInfo from './UserInfo'
import Status from "./Status";
import ProfileBar from "./ProfileBar";
import Personalinfo from "./Personalinfo";
import AboutMe from "./AboutMe";
import VideoPresentation from "./VideoPresentation";
import Language from "./Language";
import Skills from "./Skills";
import EducationalExperiences from "./EducationalExperiences";
import JobExperience from "./JobExperience";


export default function UserDashboard() {

  return (
    <div>
      <Menubar />
      <main style={{padding:'0px',margin:'0px'}}>
      
        <Staticbar/>
        <UserInfo></UserInfo>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            <Grid container>
              <Grid item lg={3} xs={12} style={{ padding: "0px 10px" }}>
                <Status/>
                <ProfileBar/>
                <Personalinfo/>
              
              </Grid>
              <Grid item lg={9} >
                <Grid item>
                  <AboutMe/>
                </Grid>
                <Grid item>
                  <Grid container style={{ padding: "0px 10px" }}>
                    <Grid item lg={4} xs={12}>
                     <VideoPresentation/>
                    </Grid>
                     <Grid item lg={4} xs={12}>
                      <Language/>
                    </Grid>
                    
                    <Grid item lg={4} xs={12}>
                      <Skills/>                    
                      </Grid>
                  </Grid>
                </Grid>
                <Grid item sm={12}>
                  <JobExperience/>
                </Grid>
                <Grid item sm={12}>
                  <EducationalExperiences/>
                </Grid>
              </Grid>
            </Grid>
          </div>
      </main>
    </div>
  );
}
