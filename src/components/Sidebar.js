
import React from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import AssignmentIcon from '@mui/icons-material/Assignment';
import { Link } from 'react-router-dom';
import { SupportOutlined } from '@mui/icons-material';

function Sidebar({ open, onClose }) {
  return (
    <Drawer open={open} onClose={onClose}>
      <List>
        <ListItem button component={Link} to="/">
          <ListItemIcon><HomeIcon /></ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button component={Link} to="/attendants">
          <ListItemIcon><PeopleIcon /></ListItemIcon>
          <ListItemText primary="Atendentes" />
        </ListItem>
        <ListItem button component={Link} to="/clients">
          <ListItemIcon><AssignmentIcon /></ListItemIcon>
          <ListItemText primary="Clientes" />
        </ListItem>
        <ListItem button component={Link} to="/client-support">
          <ListItemIcon><SupportOutlined /></ListItemIcon>
          <ListItemText primary="Suporte" />
        </ListItem>
      </List>
    </Drawer>
  );
}

export default Sidebar;
