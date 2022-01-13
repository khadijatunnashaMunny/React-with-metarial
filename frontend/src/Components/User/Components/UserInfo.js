import { Typography } from '@mui/material';
import React from 'react'
import useStyles from "./Styles/UserInfoStyle";

export default function UserInfo() {
    const classes = useStyles();

    return (
        <div style={{ maxWidth: "100%" }}>
            <div className={classes.mainContainer}>
                <div className={classes.containerForPhotoInfo}>
                <Typography>name</Typography>

                </div>
                <div className={classes.infoContainer}>
                    <Typography>name</Typography>
                </div>
            </div>
        </div>

        )
}
