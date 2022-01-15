import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
    mainDiv: {
        padding: "10px 10px",
        
        "@media (max-width: 1260px)": {
            padding: "0px",
        }
    },
    contentDiv: {
        // display: "inline",
        
    },
    card: {
        height: "200px",
        paddingBottom: theme.spacing(2),
        boxShadow: "1px 1px 5px #ccc",
    },
    language: {
        color: "#444444"
    },
    proficiency: {
        color: "#CCCCCC",
        fontSize: "12px"
    },
  }));