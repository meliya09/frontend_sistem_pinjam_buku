import AssignmentIcon from '@mui/icons-material/Assignment';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import * as React from 'react';
import { Link } from "react-router-dom";



export const mainListItems = (
 
  // const classes = useStyles();
  <React.Fragment>
    <ListItemButton component={Link} to='/dashboard' activeStyle={{ backgroundColor: 'blue' }}>
      <ListItemIcon>
        <HomeIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItemButton>
    
    <ListItemButton component={Link} to="/murid">
      <ListItemIcon>
        <PersonIcon />
      </ListItemIcon>
      <ListItemText primary="Murid" />
    </ListItemButton>
    <ListItemButton component={Link} to="">
      <ListItemIcon>
        <PersonIcon />
      </ListItemIcon>
      <ListItemText primary="Staff" />
    </ListItemButton>
    <ListItemButton component={Link} to="">
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Buku" />
    </ListItemButton>
  </React.Fragment>
);
