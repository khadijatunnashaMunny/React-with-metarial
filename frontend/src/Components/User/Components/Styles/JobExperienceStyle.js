import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
  mainDiv: {
    padding: "0px 10px",
  },
  contentDiv: {
    display: "flex",
  },
  card: {
    paddingBottom: theme.spacing(2),
    boxShadow: "1px 1px 5px #ccc",
  },
  typeNamePost: {
    marginLeft: "20px",
    color: "#000",
    fontWeight: "700",
  },
  typePost: {
    marginLeft: "20px",
    color: "#000",
    fontWeight: "500",
  },
  type: {
    fontSize: "16px",
    color: "#444",
  },
  logo: {
    marginLeft: "50px",
    fontSize: "20px",
    "@media (max-width: 720px)": {
      marginLeft: "0px",
      fontSize: "20px",
    },
  },
  achievements: {
    fontWeight: "700",
    margin: "20px",
  },
  chip: {
    backgroundColor: "#CCE3E1",
    marginBottom: "5px"
  }
}));

