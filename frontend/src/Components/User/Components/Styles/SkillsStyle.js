import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
    mainDiv: {
        padding: "10px 0px"
    },
    contentDiv: {
        display: "flex",
        alignItems: "center"
    },
    skill: {
        color: "#444444" , 
    },
    proficiency: {
        color: "#CCCCCC",
        fontSize: "12px"
    },
    card: {
      height: "200px",
      paddingBottom: theme.spacing(2),
        boxShadow: "1px 1px 5px #ccc",
      
    },
    skillsContainer: {
        height:"150px",
        overflow: "hidden",
        overflowY: "auto",
        "&webkitScrollbar": {
            webkitBoxShadow: "inset 0 0 6px rgba(0,0,0,0.3)"
        }
    }
}));
  