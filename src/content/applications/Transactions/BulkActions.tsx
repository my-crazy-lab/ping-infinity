import { useState, useRef } from 'react';
import {
  Box,
  Menu,
  IconButton,
  Button,
  ListItemText,
  ListItem,
  List,
  Typography,
  MenuItem,
  Checkbox,
  FormControl,
  InputLabel,
  Select
} from '@mui/material';
import { styled } from '@mui/material/styles';

import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import MoreVertTwoToneIcon from '@mui/icons-material/MoreVertTwoTone';

const ButtonError = styled(Button)(
  ({ theme }) => `
     background: ${theme.colors.error.main};
     color: ${theme.palette.error.contrastText};

     &:hover {
        background: ${theme.colors.error.dark};
     }
    `
);

function BulkActions() {
  const [onMenuOpen, menuOpen] = useState<boolean>(false);
  const moreRef = useRef<HTMLButtonElement | null>(null);
  const [selectedValue, setSelectedValue] = useState<string>('');

  const openMenu = (): void => {
    menuOpen(true);
  };

  const closeMenu = (): void => {
    menuOpen(false);
  };

  const handleSelectChange = (event: any): void => {
    setSelectedValue(event.target.value);
  };

  return (
    <>
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Box display="flex" alignItems="center">
          <Typography variant="h5" color="text.secondary">
            Bulk actions:
          </Typography>
          <ButtonError
            sx={{ ml: 1 }}
            startIcon={<DeleteTwoToneIcon />}
            variant="contained"
          >
            Delete
          </ButtonError>
        </Box>
        <IconButton
          color="primary"
          onClick={openMenu}
          ref={moreRef}
          sx={{ ml: 2, p: 1 }}
        >
          <MoreVertTwoToneIcon />
        </IconButton>
      </Box>

      <Menu
        keepMounted
        anchorEl={moreRef.current}
        open={onMenuOpen}
        onClose={closeMenu}
        anchorOrigin={{
          vertical: 'center',
          horizontal: 'center'
        }}
        transformOrigin={{
          vertical: 'center',
          horizontal: 'center'
        }}
        PaperProps={{
          style: {
            maxHeight: 300,
            width: '25ch',
            backgroundColor: '#f5f5f5',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
          }
        }}
        MenuListProps={{
          autoFocusItem: true,
          dense: true
        }}
        TransitionProps={{
          onEntering: (node, isAppearing) => {
            console.log('Entering transition', { node, isAppearing });
          },
          onExiting: (node) => {
            console.log('Exiting transition', { node });
          }
        }}
      >
        <List sx={{ p: 1 }} component="nav">
          <ListItem button>
            <ListItemText primary="Bulk delete selected" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Bulk edit selected" />
          </ListItem>
          <ListItem button>
            <Checkbox
              checked={selectedValue === 'option1'}
              onChange={handleSelectChange}
              value="option1"
              color="primary"
            />
            <ListItemText primary="Select option 1" />
          </ListItem>
          <ListItem button>
            <Checkbox
              checked={selectedValue === 'option2'}
              onChange={handleSelectChange}
              value="option2"
              color="primary"
            />
            <ListItemText primary="Select option 2" />
          </ListItem>
          <ListItem>
            <FormControl fullWidth>
              <InputLabel id="select-label">Options</InputLabel>
              <Select
                labelId="select-label"
                value={selectedValue}
                onChange={handleSelectChange}
              >
                <MenuItem value="option1">Option 1</MenuItem>
                <MenuItem value="option2">Option 2</MenuItem>
                <MenuItem value="option3">Option 3</MenuItem>
              </Select>
            </FormControl>
          </ListItem>
        </List>
      </Menu>
    </>
  );
}

export default BulkActions;
