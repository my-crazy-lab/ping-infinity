import { useState, ChangeEvent } from 'react';
import {
  Box,
  Typography,
  Card,
  Grid,
  ListItem,
  List,
  ListItemText,
  Divider,
  Switch,
  ListItemAvatar,
  Avatar,
  ListItemSecondaryAction,
  IconButton
} from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import EmailIcon from '@mui/icons-material/Email';
import ErrorIcon from '@mui/icons-material/Error';
import UpdateIcon from '@mui/icons-material/Update';
import DeleteIcon from '@mui/icons-material/Delete';

function NotificationsTab() {
  const [state, setState] = useState({
    checkedA: true,
    checkedB: false,
    checkedC: true,
    checkedD: false
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked
    });
  };

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Box pb={2}>
          <Typography variant="h3">Account</Typography>
          <Typography variant="subtitle2">
            Choose what notifications you want to receive
          </Typography>
        </Box>
        <Card>
          <List>
            <ListItem
              alignItems="flex-start"
              button
              dense
              selected
              secondaryAction={
                <IconButton edge="end" aria-label="delete">
                  <DeleteIcon />
                </IconButton>
              }
            >
              <ListItemAvatar>
                <Avatar>
                  <NotificationsIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primaryTypographyProps={{ variant: 'h5', gutterBottom: true }}
                secondaryTypographyProps={{ variant: 'subtitle2', lineHeight: 1 }}
                primary="Widthdraw Activity"
                secondary="Receive an email when a widthdrawal is made"
              />
              <ListItemSecondaryAction>
                <Switch
                  color="primary"
                  checked={state.checkedA}
                  onChange={handleChange}
                  name="checkedA"
                />
              </ListItemSecondaryAction>
            </ListItem>
            <Divider component="li" />
            <ListItem
              alignItems="center"
              button
              dense
              secondaryAction={
                <IconButton edge="end" aria-label="delete">
                  <DeleteIcon />
                </IconButton>
              }
            >
              <ListItemAvatar>
                <Avatar>
                  <EmailIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primaryTypographyProps={{ variant: 'h5', gutterBottom: true }}
                secondaryTypographyProps={{ variant: 'subtitle2', lineHeight: 1 }}
                primary="Weekly Report"
                secondary="Receive account status weekly report in your inbox"
              />
              <ListItemSecondaryAction>
                <Switch
                  color="primary"
                  checked={state.checkedB}
                  onChange={handleChange}
                  name="checkedB"
                />
              </ListItemSecondaryAction>
            </ListItem>
          </List>
        </Card>
      </Grid>
      <Grid item xs={12}>
        <Box pb={2}>
          <Typography variant="h3">Orders</Typography>
          <Typography variant="subtitle2">
            Receive email notifications related to your orders activity
          </Typography>
        </Box>
        <Card>
          <List>
            <ListItem
              alignItems="flex-start"
              button
              dense
              secondaryAction={
                <IconButton edge="end" aria-label="delete">
                  <DeleteIcon />
                </IconButton>
              }
            >
              <ListItemAvatar>
                <Avatar>
                  <ErrorIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primaryTypographyProps={{ variant: 'h5', gutterBottom: true }}
                secondaryTypographyProps={{ variant: 'subtitle2', lineHeight: 1 }}
                primary="Failed Payment"
                secondary="Get a message when a payment fails"
              />
              <ListItemSecondaryAction>
                <Switch
                  color="primary"
                  checked={state.checkedC}
                  onChange={handleChange}
                  name="checkedC"
                />
              </ListItemSecondaryAction>
            </ListItem>
            <Divider component="li" />
            <ListItem
              alignItems="center"
              button
              dense
              secondaryAction={
                <IconButton edge="end" aria-label="delete">
                  <DeleteIcon />
                </IconButton>
              }
            >
              <ListItemAvatar>
                <Avatar>
                  <UpdateIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primaryTypographyProps={{ variant: 'h5', gutterBottom: true }}
                secondaryTypographyProps={{ variant: 'subtitle2', lineHeight: 1 }}
                primary="Order Status Update"
                secondary="Whenever an order is updated, get a notification on your phone"
              />
              <ListItemSecondaryAction>
                <Switch
                  color="primary"
                  checked={state.checkedD}
                  onChange={handleChange}
                  name="checkedD"
                />
              </ListItemSecondaryAction>
            </ListItem>
          </List>
        </Card>
      </Grid>
    </Grid>
  );
}

export default NotificationsTab;
