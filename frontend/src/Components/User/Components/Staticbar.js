import React from 'react'
import useStyles from "./Styles/StaticBarStyle";

export default function Staticbar() {
    const classes = useStyles();

    return (
        <div className={classes.mainDiv}></div>
    )
}
