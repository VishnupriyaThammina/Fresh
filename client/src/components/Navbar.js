// Import the missing AddIcon
import React, { useState, useEffect,useRef  } from "react";
import { Link } from "react-router-dom";
import { Add as AddIcon } from "@material-ui/icons";
import {  ListItemIcon, Collapse , Button} from "@material-ui/core";

import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Box,
  Menu,
  MenuItem,
  Grid,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { ShoppingCart, Menu as MenuIcon } from "@material-ui/icons";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  navbar: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    marginRight: theme.spacing(2),
  },
  menuItem: {
    "&:hover": {
      backgroundColor:"#dcdedc",
      color:"black",
      transition: " 0.6s",
    },
  },
  drawer: {
    width: drawerWidth,
  },
  drawerPaper: {
    width: drawerWidth,
  },
}));

const categories = [
  {
    name: "Skincare",
    options: [
      { label: "Facewashes", url: "/skincare/facewashes" },
      { label: "Moisturiser", url: "/skincare/moisturiser" },
      { label: "Serums", url: "/skincare/serums" },
      { label: "Sunscreen", url: "/skincare/sunscreen" },
    ],
  },
  {
    name: "Lip Care",
    options: [
      { label: "Item 1", url: "/lipcare/item1" },
      { label: "Item 2", url: "/lipcare/item2" },
      { label: "Item 3", url: "/lipcare/item3" },
    ],
  },
  {
    name: "Body Care",
    options: [
      { label: "Item 1", url: "/lipcare/item1" },
      { label: "Item 2", url: "/lipcare/item2" },
      { label: "Item 3", url: "/lipcare/item3" },
    ],
  },
  {
    name: "Hand Care",
    options: [
      { label: "Item 1", url: "/lipcare/item1" },
      { label: "Item 2", url: "/lipcare/item2" },
      { label: "Item 3", url: "/lipcare/item3" },
    ],
  },
  // Add more categories as needed
];

export default function Navbar() {
  const classes = useStyles();
  const theme = useTheme();

  const [menuOpen, setMenuOpen] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState(null);
  const navbarRef = useRef(null);
 

  const handleMenuOpen = (event, categoryName) => {
    setMenuOpen(event.currentTarget);
    setActiveCategory(categoryName);
    handleDrawerOpen(); // Add this line to open the drawer
  };
  

  const handleMenuClose = () => {
    setMenuOpen(null);
    setActiveCategory(null);
  };

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };
  
  

  

  

  return (
    <div className={classes.navbar} ref={navbarRef}>
    <AppBar position="static" style={{backgroundColor:"#FEFBF6"}} >
      {/* Use "to='/'" to navigate to the home page */}
      <Toolbar>
      <>
      <IconButton color="white" aria-label="menu"  onClick={handleDrawerOpen}>
        <MenuIcon /> 
      </IconButton>
      <Drawer
        className={classes.drawer}
        variant="temporary"
        anchor="left"
        open={drawerOpen}
        onClose={handleDrawerClose}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <List>
          {categories.map((category) => (
            <React.Fragment key={category.name}>
              <ListItem button onClick={(event) => handleMenuOpen(event, category.name)}>
                <ListItemText primary={category.name} />
                <ListItemIcon>
                  <AddIcon />
                </ListItemIcon>
              </ListItem>
              <Collapse in={activeCategory === category.name}>
                <List disablePadding>
                  {category.options.map((option) => (
                    <ListItem
                      key={option.label}
                      button
                      component={Link}
                      to={option.url}
                      className={classes.menuItem}
                    >
                      <ListItemText primary={option.label} />
                    </ListItem>
                  ))}
                </List>
              </Collapse>
            </React.Fragment>
          ))}
        </List>
      </Drawer>
    <Typography variant="body1" style={{color:"black"}}> Menu </Typography>

    </>
      </Toolbar>

    </AppBar>
  </div>
  );
}
