import React,{useState} from 'react';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import  Dashboard  from './Dashboard';
import  filter  from './Filter';
import {  Chip,
  FormControlLabel,
  Grid,Toolbar,List,IconButton,Drawer,Divider,ListItemText,CssBaseline,Box,AppBar,
Hidden,Link,
 Typography,
  Button} from '@mui/material';
  import {
    MdDashboard,
 
  } from "react-icons/md";
  import { IoLogoSlack } from "react-icons/io";

import useStyles from "./styles/sidebarStyle";

function Sidebar(props) {
  const classes = useStyles();

  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <div className={classes.toolbar}>
        <div className={classes.sidebarCompanyName}>
          <Button className={classes.text}>
            <Link to="/dashboard">
              <span className={classes.sidebarIcon}>
                <IoLogoSlack />{" "}
              </span>
              Company Name
            </Link>
          </Button>
        </div>
      </div>
      <Divider />
      <List>
        <Button className={classes.text}>
          <Link
            to="/dashboard"
          >
            <span className={classes.sidebarIcon}>
              <MdDashboard />{" "}
            </span>
            Dashboard
          </Link>
        </Button>
      </List>
     

      <Divider />
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <div className={classes.appbarclass}>
            <div className={classes.taskClass}>
              <Typography variant="h5">Techhack</Typography>
            </div>

        
          </div>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}></main>
    </div>
  );
}



export default Sidebar;
