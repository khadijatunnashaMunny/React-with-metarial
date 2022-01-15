import { Typography,Button,Avatar} from '@mui/material';
import React from 'react'
import useStyles from "./Styles/UserInfoStyle";

export default function UserInfo() {
    const classes = useStyles();

    return (
        <div style={{ maxWidth: "100%" }}>
          <div className={classes.mainContainer}>
            <div className={classes.containerForPhotoInfo}>
              <div className={classes.photoContainer}>
                <Avatar
                  alt="remy"
                  className={classes.large}
                  src="https://res.cloudinary.com/wagon/image/upload/c_fill,h_460,q_auto,w_488/v1605879358/jcoffmyvuvo18eovdkuf.webp"
                 
                />
              </div>
              <div className={classes.infoContainer}>
                <Typography variant="h4" style={{ color: "#00756A" }}>
                 Name
                </Typography>
                <Typography variant="subtitle2"  style={{ color: "#8692A6" }}>
                  test@gmail.com
                </Typography>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
              >
                Share Profile
              </Button>
            </div>
          </div>
        </div>
      ); 
}



