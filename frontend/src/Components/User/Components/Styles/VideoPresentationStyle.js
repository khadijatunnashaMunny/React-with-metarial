import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
    mainDiv: {
        padding: "10px 0px"
    },
    card: {
        height: "200px",
        paddingBottom: theme.spacing(2),
        boxShadow: "1px 1px 5px #ccc",
      },
  iFrame: {
    "@media (max-width: 1280px)": {
      width: "100%",
      height: "50%"
    },
 }
  
 }))