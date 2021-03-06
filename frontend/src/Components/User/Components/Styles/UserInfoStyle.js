import { makeStyles } from '@mui/styles';

export default makeStyles((theme) =>( {
  large: {
    width: "200px",
    height: "200px",
    border: "5px solid #F7F8FA",
  },
  mainContainer: {
    marginLeft: "20%",
    marginRight: "20%",
    display: "flex",
    alignItems: "center",
    maxWidth: "60%",
    justifyContent: "space-between",
    marginTop: "-3.5%",
    "@media (max-width: 720px)": {
      flexDirection: "column",
      marginTop: "-20%",
    },
  },
  photoContainer: {
    display: "flex",
    flexDirection: "column",
  },
  infoContainer: {
    display: "flex",
    flexDirection: "column",
    "@media (max-width: 720px)": {
      textAlign: "center",
      marginBottom:'20px'
    },
  },
  button: {
    width: "253px",
    borderRadius: "40px",
    backgroundColor: "#00756A",
    color: "white",
  },
  containerForPhotoInfo: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "@media (max-width: 720px)": {
      display: "flex",
      flexDirection: "column",
    },
  },
}))