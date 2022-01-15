import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
    mainDiv: {
        padding: "10px 10px"
    },
    contentDiv: {
        display: "flex"
    },
    card: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(2),
        boxShadow: "1px 1px 5px #ccc",
      },
      typeNamePost: {
        marginLeft: "20px",
        color: "#000",
        fontWeight: "700",
      },
      typePost: {
        marginLeft: "18px",
        color: "#000",
        fontWeight: "500",
      },
      type: {
        fontSize: "16px",
        marginLeft: "20px",
        color: "#444",
      },
      logo: {
        marginLeft: "50px",
        fontSize: "20px",
        "@media (max-width: 720px)": {
          marginLeft: "0px",
        },
      },
  }));