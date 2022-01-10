import { makeStyles } from '@mui/styles';
const drawerWidth = 240;

export default makeStyles((theme) => ({
  // necessary for content to be below app bar Start
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
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

  // necessary for content to be below app bar End

  filterContainer: {
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.15)",
    padding: 25,
    height: "100%",
    "@media (min-width: 960px)": {
      position: "fixed",
      overflow: "auto",
      width: "100%",
    },
    "&::-webkit-scrollbar": {
      width: 5,
    },
    "&::-webkit-scrollbar-track": {
      boxShadow: "inset 0 0 5px #a5aaad",
      borderRadius: "10px",
    },

    "&::-webkit-scrollbar-thumb": {
      background: "#56CABB",
      borderRadius: "10px",
    },
    "&::-webkit-scrollbar-thumb:hover": {
      background: "#a5aaad",
    },
  },

  filterExpectedSalary: {
    display: "flex",
  },
  filterTitle: {
    fontSize: "18px",
    fontWeight: "bold",
    marginTop: "20px",
  },
  searchDiv: {
    padding: "2%",
  },
  talentSubHeading: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: "14px",
  },
  icon: {
    marginRight: "10px",
    height: "20px",
    width: "20px",
  },
  cardIconDetail: {
    display: "flex",
  },
  cardIcon: {
    fontSize: "24px",
    color: "#444",
    transition: "all 0.3s ease-in-out",
    "&:hover": {
      color: "#00765A",
    },
  },
  filteredDiv: {
    marginTop: "10px",
    display: "flex",
    flexWrap: "wrap",
  },
  filteresCriteria: {
    backgroundColor: "#E5F5C1",
    padding: "3%",
    margin: "1%",
    borderRadius: "20px",
    fontWeight: "bold",
  },
  FilterText: {
    color: "#676767",
    marginLeft: "10px",
  },
  filterHeading: {
    fontWeight: "bold",
    fontSize: "16px",
    color: "#676767",
    padding: "1%",
  },
  textfeildDropdown: {
    width: "100%",
  },

  filterSection: {
    // width: "100%",
    margin: "0%",
    padding: "2%",
    // boxShadow: "1px 1px 5px #ccc",
  },
  imageDiv: {
    justifyContent: "center",
    textAlign: "center",
    margin: "5%",
  },
  talentImage: {
    width: "20%",
    height: "20%",
    borderRadius: "50%",
  },

  talentDetail: {
    width: "80%",
    margin: "auto",
    marginTop: theme.spacing(5),
    paddingBottom: theme.spacing(1),
    boxShadow: "1px 1px 5px #ccc",
    backgroundColor: "#F7F8FA",
  },
  talentProfile: {
    height: "500px",
    position: "relative",
    margin: "5%",
    borderRadius: "6px",
    // paddingBottom: theme.spacing(1),
    boxShadow: "1px 1px 5px #ccc",
    "&:hover $overlay": {
      opacity: 1,
    },
  },
  overlay: {
    position: "absolute",
    top: "0px",
    width: "100%",
    height: "500px",
    opacity: 0,
    transition: ".5s ease-in-out",
    backgroundColor: "rgba(0,0,0, 0.6)",
  },
  CardbtnGroup: {
    display: "flex",
    justifyContent: "center",
    height:"450px",
    alignItems: "center",

  },
  cardBtn: {
    margin:'1%',

  },


  hoverText: {
    textAlign: "center",
    alignItems: "center",
  },

  talentHeading: {
    textAlign: "center",
  },

  appbarclass: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
  },
  topList: {
    width: "300px",
    margin: "3%",
    boxShadow: "1px 1px 3px #ccc",
    borderRadius: "6px",
    padding: "3%",
  },

  topListText: {
    fontSize: "16px",
    color: "#ccc",
  },
  text: {
    fontSize: "16px",
    marginBottom: "3%",
    color: "#ccc",
    textTransform: "uppercase",
    margin: "0%",
  },

  taskbtn: {
    border: "1px solid #00756A",
    width: "80%",
    height: "20%",
    position: "end",
    left: 0,
    bottom: 0,

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
    color: "#696969",
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
  roleSelectField: {
    marginBottom: "30px",
    "@media(max-width:960px)": {
      marginBottom: "0px",
    },
  },
  roleSelectFieldEnglishProficiency: {
    marginBottom: "60px",
    "@media(max-width:960px)": {
      marginBottom: "0px",
    },
  },
}));
