import * as React from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import DashboardIcon from '@mui/icons-material/Dashboard';
import InventoryIcon from '@mui/icons-material/Inventory';
import SecurityIcon from '@mui/icons-material/Security';
import ReportIcon from '@mui/icons-material/Report';
import GroupIcon from '@mui/icons-material/Group';
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';

export default function Navigation({ setView }) {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List
      sx={{ width: '100%', maxWidth: 250, bgcolor: 'background.paper', paddingTop: 5 }}
      component="nav"
      aria-labelledby="nested-list-subheader"
    >
      <ListItemButton onClick={() => setView('dashboard')}>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItemButton>

      <ListItemButton onClick={() => setView('inventory')}>
        <ListItemIcon>
          <InventoryIcon />
        </ListItemIcon>
        <ListItemText primary="Inventory" />
      </ListItemButton>

      <ListItemButton onClick={() => setView('security')}>
        <ListItemIcon>
          <SecurityIcon />
        </ListItemIcon>
        <ListItemText primary="Security" />
      </ListItemButton>

      <ListItemButton onClick={() => setView('report')}>
        <ListItemIcon>
          <ReportIcon />
        </ListItemIcon>
        <ListItemText primary="Report" />
      </ListItemButton>

      <ListItemButton onClick={() => setView('users')}>
        <ListItemIcon>
          <GroupIcon />
        </ListItemIcon>
        <ListItemText primary="Users" />
      </ListItemButton>

      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary="Orders" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>

      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }} onClick={() => setView('purchase orders')}>
            <ListItemIcon>
              <ReceiptLongIcon  />
            </ListItemIcon>
            <ListItemText primary="Purchases" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }} onClick={() => setView('return orders')}>
            <ListItemIcon>
              <KeyboardReturnIcon />
            </ListItemIcon>
            <ListItemText primary="Returns" />
          </ListItemButton>
        </List>
      </Collapse>
    </List>
  );
}