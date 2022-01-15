import { makeStyles } from '@mui/styles';
export default makeStyles((theme) => ({
    title: {
        padding:"10px"
    },
    number:{
        textAlign: "center",
        fontWeight: "bold"
    },
    card: {
      marginTop: theme.spacing(1),
      paddingBottom: theme.spacing(2),
      boxShadow: "1px 1px 5px #ccc",
    },
    progressBarVertical: {
      position: "relative",
      display: "inline-block",
      height: 24,
      width: "100%",
      background:
        "linear-gradient(to right, #ccc 99.9%, transparent 99.9%), radial-gradient(circle at 50% 50%, #ccc 25%, transparent 30%)",
      backgroundPosition: " 0% 50%, 0% 50%",
      backgroundSize: "100% 5px, 55px 20px",
      /* 5px is the thickness of the bar, 50px is 1/8th of the height */
      backgroundRepeat: "no-repeat, repeat-x",
    },
    progressNowVertical: {
      position: "absolute",
      height: "100%",
      background:
        "linear-gradient(to right, #00756A 99.9%, transparent 99.9%), radial-gradient(circle at 50% 50%, #00756A 25%, transparent 30%)",
      backgroundPosition: "0% 50%, 0% 50%",
      backgroundSize: "100% 5px, 55px 20px",
      backgroundRepeat: "no-repeat, repeat-x",
      zIndex: "1",
    },
    button: {},
  }));