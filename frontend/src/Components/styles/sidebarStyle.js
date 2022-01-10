import { makeStyles } from '@mui/styles';
const drawerWidth = 260;

export default makeStyles((theme) => ({
  card: {
    maxWidth: 1000,
    margin: "auto",
    marginTop: theme.spacing(5),
    paddingBottom: theme.spacing(2),
    boxShadow:
      "0 7px 8px -4px rgba(0,0,0,.2),0 12px 17px 2px rgba(0,0,0,.14),0 5px 22px 4px rgba(0,0,0,.12)",
  },

  subNavBar: {
    display: "flex",
    justifyContent: "center",
  },
  eventText: {
    color: "#ccc",
  },
  btnGroup: {
    display: "flex",
    justifyContent: "space-between",
  },
  text: {
    fontSize: "16px",
    fontWeight: "bold",
    color: "#00756A",
    textDecorate: "none",
  },
  taskbtn: {
    border: "1px solid #00756A",
    width: "150px",
    height: "22%",
    position: "end",
    left: 0,
    bottom: 0,
    margin: "2%",

    "&:hover": {
      border: "1px solid #00756A",
      backgroundColor: "#fff",
      color: "#000",
    },
  },

  buttonContainer: {
    textAlign: "center",
    margin: "3% 0",
    padding: "3%",
    display: "flex",
    justifyContent: "center",
  },
  textfeild: {
    height: "10%",
    width: "100%",
    color: "#ccc",
  },
  taskText: {
    textAlign: "center",
    padding: "5%",
    fontWeight: "bold",
  },

  task: {
    boxShadow: "1px 1px 5px #ccc",
    margin: "2%",
    fontSize: "16px",
    color: "#ccc",
    padding: "5%",
    borderRadius: "6px",
    width: "100%",
  },
  taskClass: {
    display: "flex",
    justifyContent: "space-around",
    textAlign: "center",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    marginRight: "auto",
  },
  drawer: {
    width: 300,
  },
  content: {
    padding: theme.spacing(3),
  },

  appbarclass: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
  },
  root: {
    display: "flex",
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    // padding: theme.spacing(3),
  },
  sidebarIcon: {
    margin: "10px",
  },
  sidebarCompanyName: {
    textAlign: "center",
    paddingTop: "7%",
  },
}));
