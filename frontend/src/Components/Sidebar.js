import React, { useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import { useTheme } from "@mui/material/styles";
import {
  Button,AppBar,CssBaseline,Drawer,Hidden,List,Toolbar,Typography,Menu,MenuItem,Box,
  Divider,
  IconButton,
} from "@mui/material";
import useStyles from "./styles/sidebarStyle";
import { Link } from "react-router-dom";
import {
  MdDashboard,
  MdExpandLess,
  MdExpandMore,
  MdPeople,
  MdReport,
} from "react-icons/md";
import { FaExternalLinkAlt, FaHireAHelper } from "react-icons/fa";
import { CgInternal } from "react-icons/cg";
import { IoLogoSlack } from "react-icons/io";
import { RiBarChartHorizontalFill } from "react-icons/ri";
import { RiBuilding4Line } from "react-icons/ri";
import { MdAccountBalance } from "react-icons/md";
import { ImProfile } from "react-icons/im";

export default function Sidebar(props) {
  const [anchorEl, setAnchorEl] = useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const [openAccountSubMenu, setOpenAccountSubMenu] = useState(false);
  const handleCompanyAccountSubMenu = () => {
    setOpenAccountSubMenu(!openAccountSubMenu);
  };
  const [openCompanySettingsSubMenu, setOpenCompanySettingsSubMenu] = useState(
    false
  );

  const handleClose = () => {
    setAnchorEl(null);
  };
  const drawerWidth = 240;

  const { window, page } = props;

  const classes = useStyles();


  const theme = useTheme();
 
  const [mobileOpen, setMobileOpen] = React.useState(false);

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
   
          <List>
            <Button className={classes.text}>
              <Link
                to="/talent-pool"
               
              >
                {" "}
                <span className={classes.sidebarIcon}>
                  <MdPeople />
                </span>
                Talent pool
              </Link>
            </Button>
          </List>

          <List>
            <Button className={classes.text}>
              <Link
                to="/campaign"
                style={{
                  color: page == 3 ? "#00756A" : "#444",
                  fontWeight: page == 3 ? "700" : "400",
                }}
              >
                {" "}
                <span className={classes.sidebarIcon}>
                  <CgInternal />
                </span>
                Internal Campaigns
              </Link>
            </Button>
          </List>
          <List>
            <Button className={classes.text}>
              <Link
                to=""
              
              >
                {" "}
                <span className={classes.sidebarIcon}>
                  <FaExternalLinkAlt />{" "}
                </span>
                External Campaigns
              </Link>
            </Button>
          </List>
 
   

      <Divider />
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
  
    <Box sx={{ display: 'flex' }}>
    <CssBaseline />
    <AppBar
      position="fixed"
      sx={{
        width: { sm: `calc(100% - ${drawerWidth}px)` },
        ml: { sm: `${drawerWidth}px` },
      }}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ mr: 2, display: { sm: 'none' } }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" noWrap component="div">
          Responsive drawer
        </Typography>
      </Toolbar>
    </AppBar>
    <Box
      component="nav"
      sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
      aria-label="mailbox folders"
    >
      {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
      <Drawer
        container={container}
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
        }}
      >
        {drawer}
      </Drawer>
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: 'none', sm: 'block' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
        }}
        open
      >
        {drawer}
      </Drawer>
    </Box>

  </Box>
  );
}
