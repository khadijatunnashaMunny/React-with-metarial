import { makeStyles } from '@mui/styles';
export default makeStyles((theme) => ({
    card: {
      marginTop: theme.spacing(5),
      paddingBottom: theme.spacing(2),
      boxShadow: "1px 1px 5px #ccc",
    },
    progressBarVertical: {
    position: "relative",
    display: "inline-block",
    height: 24,
    width: '100%',
    background: "linear-gradient(to right, #ccc 99.9%, transparent 99.9%), radial-gradient(circle at 50% 50%, #ccc 25%, transparent 30%)",
    backgroundPosition:" 0% 50%, 0% 50%",
    backgroundSize: "100% 5px, 50px 20px",
    backgroundRepeat: "no-repeat, repeat-x"
    },
    progressNowVertical: {
      position: "absolute",
    height: "100%",
    background: "linear-gradient(to right, #00756A 99.9%, transparent 99.9%), radial-gradient(circle at 50% 50%, #00756A 25%, transparent 30%)",
    backgroundPosition: "0% 50%, 0% 50%",
    backgroundSize: "100% 5px, 50px 20px",
    backgroundRepeat: "no-repeat, repeat-x",
    zIndex: '1',
    },
    referral: {
        fontWeight: "bold",
        color: '#00756A'
    },
    contentDiv: {
        display: 'flex',
        alignItems: 'center',
        marginLeft: '10px'
    }
  }));
    