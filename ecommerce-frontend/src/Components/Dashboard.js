import { Button,Typography,Grid,Card,CardContent,TextField} from '@mui/material';
import React from 'react'
import useStyles from "./styles/DashboardStyle";
import { GiOfficeChair } from "react-icons/gi";
import { IoMdEye } from "react-icons/io";
import { AiFillHeart, AiFillTool, AiOutlinePlusSquare } from "react-icons/ai";
import { FaUserGraduate, FaUserTie } from "react-icons/fa";
import { BsBriefcaseFill } from "react-icons/bs";
export default function Dashboard() {
    const classes = useStyles();

    return (
        <div>
            <main>
            <div >
             
            {/* <Grid container spacing={0}>
              <Grid item lg={4}>
                <Card className={classes.talentProfile}>
                  <CardContent>
                    <div className={classes.imageDiv}>
                     <typography>image</typography>
                    </div>
                    <Typography className={classes.talentHeading} variant="h6">
                      Talent Name
                    </Typography>
                    <Typography className={classes.talentSubHeading}>
                      Lead Software Engineer
                    </Typography>
                    <div className={classes.talentDetail}>
                      <Typography varient="h6">
                        <AiFillTool /> C, C++, JavaScript, HTML, CSS
                      </Typography>
                      <Typography varient="h6">
                        <GiOfficeChair /> 4 years 5 months of total experience
                      </Typography>
                      <Typography varient="h6">
                        <FaUserTie /> Present Front End Developer at Tech Hack
                        Canada
                      </Typography>
                      <Typography varient="h6">
                        <FaUserGraduate /> Graduated From The University of
                        Ukraine, Ukraine at 2015
                      </Typography>
                    </div>
                  </CardContent>
                  <CardContent
                    className={classes.overlay}
                    style={{
                      width: "100%",
                    }}
                  >
                    <div className={classes.CardbtnGroup}>
                      <div className={classes.cardBtn}>
                        <a href="talent-profile-1">
                        <Button variant="contained" >
                          <IoMdEye className={classes.cardIcon} />
                        </Button>                        
                        </a>
                      </div>
                      <div className={classes.cardBtn}>
                        <Button
                          variant="contained"
                          style={{ background: "#FFF176" }}
                        >
                          Shortlist
                        </Button>
                      </div>
                      <div className={classes.cardBtn}>
                        <Button color="primary" variant="contained">
                          Hire
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item lg={4}>
                <Card className={classes.talentProfile}>
                  <CardContent>
                    <div className={classes.imageDiv}>
                    <typography>image</typography>
                    </div>
                    <Typography className={classes.talentHeading} variant="h6">
                      Talent Name
                    </Typography>
                    <Typography className={classes.talentSubHeading}>
                      Lead Software Engineer
                    </Typography>
                    <div className={classes.talentDetail}>
                      <Typography varient="h6">
                        <AiFillTool /> C, C++, JavaScript, HTML, CSS
                      </Typography>
                      <Typography varient="h6">
                        <GiOfficeChair /> 4 years 5 months of total experience
                      </Typography>
                      <Typography varient="h6">
                        <FaUserTie /> Present Front End Developer at Tech Hack
                        Canada
                      </Typography>
                      <Typography varient="h6">
                        <FaUserGraduate /> Graduated From The University of
                        Ukraine, Ukraine at 2015
                      </Typography>
                    </div>
                  </CardContent>
                  <CardContent
                    className={classes.overlay}
                    style={{
                      width: "100%",
                    }}
                  >
                    <div className={classes.CardbtnGroup}>
                    <div className={classes.cardBtn}>
                      <a href="talent-profile-1">
                        <Button variant="contained" >
                          <IoMdEye className={classes.cardIcon} />
                        </Button>                        
                        </a>
                      </div>
                      <div className={classes.cardBtn}>
                        <Button
                          variant="contained"
                          style={{ background: "#FFF176" }}
                        >
                          Shortlist
                        </Button>
                      </div>
                      <div className={classes.cardBtn}>
                        <Button color="primary" variant="contained">
                          Hire
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item lg={4}>
                <Card className={classes.talentProfile}>
                  <CardContent>
                    <div className={classes.imageDiv}>
                    <typography>image</typography>
                    </div>
                    <Typography className={classes.talentHeading} variant="h6">
                      Talent Name
                    </Typography>
                    <Typography className={classes.talentSubHeading}>
                      Lead Software Engineer
                    </Typography>
                    <div className={classes.talentDetail}>
                      <Typography varient="h6">
                        <AiFillTool /> C, C++, JavaScript, HTML, CSS
                      </Typography>
                      <Typography varient="h6">
                        <GiOfficeChair /> 4 years 5 months of total experience
                      </Typography>
                      <Typography varient="h6">
                        <FaUserTie /> Present Front End Developer at Tech Hack
                        Canada
                      </Typography>
                      <Typography varient="h6">
                        <FaUserGraduate /> Graduated From The University of
                        Ukraine, Ukraine at 2015
                      </Typography>
                    </div>
                  </CardContent>
                  <CardContent
                    className={classes.overlay}
                    style={{
                      width: "100%",
                    }}
                  >
                    <div className={classes.CardbtnGroup}>
                    <div className={classes.cardBtn}>
                      <a href="talent-profile-1">
                        <Button variant="contained" >
                          <IoMdEye className={classes.cardIcon} />
                        </Button>                        
                        </a>
                      </div>
                      <div className={classes.cardBtn}>
                        <Button
                          variant="contained"
                          style={{ background: "#FFF176" }}
                        >
                          Shortlist
                        </Button>
                      </div>
                      <div className={classes.cardBtn}>
                        <Button color="primary" variant="contained">
                          Hire
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Grid>
              </Grid>
           */}
       <Grid>
          <Grid item md={12} xs={12} style={{ marginLeft: "auto" }}>
            <div className={classes.searchDiv}>
              <Typography className={classes.filterTitle}>
                Search by word
              </Typography>
              <TextField
                label="Search"
                variant="outlined"
                // onChange={(e) => setMaxSalary(e.target.value)}
                name="search"
                style={{ width: "100%", marginTop: "20px" }}
              />
            </div>
            <Grid container spacing={0} style={{ paddingLeft: "20px" }}>
            <Grid item md={12} lg={4} sm={12} xs={12} className={classes.cardContainer}>
      <div className={classes.card}>
        <div className="card-body">
          <div className={classes.talentImageSection}>
            <img
              className={classes.talentImage}
              src="https://res.cloudinary.com/wagon/image/upload/c_fill,h_460,q_auto,w_488/v1605879358/jcoffmyvuvo18eovdkuf.webp"
              alt=""
            />
          </div>
          <div className={classes.infoContainer}>
            <h3 className={classes.talentName}>Talent Name </h3>
            <small className={classes.position}>Lead Software Engineer</small>
            <ul style={{ paddingLeft: 0 }}>
              <Grid container alignItems="center" className={classes.infoList}>
                <Grid item xs={1} className={classes.AS_alignCenter}>
                  <AiFillTool className={classes.listIcon} />
                </Grid>
                <Grid item xs={11} className={classes.AS_alignCenter}>
                  <span>C, C++, JavaScript, HTML, CSS</span>
                </Grid>
              </Grid>
              <Grid container alignItems="center" className={classes.infoList}>
                <Grid item xs={1} className={classes.AS_alignCenter}>
                  <BsBriefcaseFill className={classes.listIcon} />
                </Grid>
                <Grid item xs={11} className={classes.AS_alignCenter}>
                  <Typography variant="body1">
                    4 years of total experience
                  </Typography>
                </Grid>
              </Grid>
              <Grid container alignItems="center" className={classes.infoList}>
                <Grid item xs={1} className={classes.AS_alignCenter}>
                  <FaUserTie className={classes.listIcon} />
                </Grid>
                <Grid item xs={11} className={classes.AS_alignCenter}>
                  <Typography variant="body1">
                    Front end engineer, Back end engineer
                  </Typography>
                </Grid>
              </Grid>
              <Grid container alignItems="center" className={classes.infoList}>
                <Grid item xs={1} className={classes.AS_alignCenter}>
                  <FaUserGraduate className={classes.listIcon} />
                </Grid>
                <Grid item xs={11} className={classes.AS_alignCenter}>
                  <Typography variant="body1">
                    Graduated from The university never exists
                  </Typography>
                </Grid>
              </Grid>
            </ul>
          </div>
        </div>
        <div className={classes.cardFooter}>
          <div className={classes.cardFooterIconHeart}>
            <AiFillHeart />
          </div>
          <div className={classes.cardFooterIconPlus}>
            <AiOutlinePlusSquare />
            <span style={{ fontSize: 16, marginLeft: 5 }}>Shortlist</span>
          </div>
          <div className={classes.cardFooterIconHire}>
            <BsBriefcaseFill />
            <span style={{ fontSize: 16, marginLeft: 5 }}>Hire</span>
          </div>
        </div>
      </div>
    </Grid>
            </Grid>
          </Grid>
        </Grid>

            </div>

            </main>
        </div>
    )
}

