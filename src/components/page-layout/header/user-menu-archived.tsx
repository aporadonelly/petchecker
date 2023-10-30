import { Fragment } from 'react';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import { styled } from '@mui/material/styles';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';
import Avatar from '@mui/material/Avatar';
import PersonIcon from '@mui/icons-material/Person';
import PetsIcon from '@mui/icons-material/Pets';
import ReceiptIcon from '@mui/icons-material/Receipt';
import HelpIcon from '@mui/icons-material/Help';
import LogoutIcon from '@mui/icons-material/Logout';

import { persistor } from '@/redux/store';
import { useAuth } from '@/redux/hooks/use-auth';

const StyledListItem = styled(ListItem)({
  paddingTop: 0,
  paddingBottom: 0,
  width: 'auto',
});

function UserMenu() {
  const auth = useAuth();

  return (
    <PopupState variant="popover" popupId="user-menu-popup">
      {(popupState) => (
        <Fragment>
          <StyledListItem>
            <ListItemButton {...bindTrigger(popupState)}>
              <ListItemAvatar>
                <Avatar src={auth.user?.profile_picture} alt="Profile Picture">
                  <PersonIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={[auth.user?.first_name, auth.user?.last_name].filter(Boolean).join(' ')}
                secondary={auth.user?.role}
                primaryTypographyProps={{
                  fontWeight: 'medium',
                }}
                secondaryTypographyProps={{
                  variant: 'body2',
                  color: 'inherit',
                  fontWeight: 'bold',
                }}
              />
            </ListItemButton>
          </StyledListItem>
          <Menu
            {...bindMenu(popupState)}
            slotProps={{
              paper: {
                elevation: 0,
                sx: {
                  border: '1px solid',
                  borderColor: 'divider',
                  borderRadius: 3,
                  borderTop: 0,
                  borderTopLeftRadius: 0,
                  borderTopRightRadius: 0,
                  width: {
                    xs: '100%',
                    sm: 200,
                  },
                },
              },
            }}
            elevation={0}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
          >
            <MenuItem>
              <ListItemIcon>
                <PersonIcon />
              </ListItemIcon>
              Profile
            </MenuItem>
            <MenuItem>
              <ListItemIcon>
                <PetsIcon />
              </ListItemIcon>
              My Pets
            </MenuItem>
            <MenuItem>
              <ListItemIcon>
                <ReceiptIcon />
              </ListItemIcon>
              Billing
            </MenuItem>
            <MenuItem>
              <ListItemIcon>
                <HelpIcon />
              </ListItemIcon>
              Help & Info
            </MenuItem>
            <Divider />
            <MenuItem onClick={() => persistor.purge()}>
              <ListItemIcon>
                <LogoutIcon />
              </ListItemIcon>
              Logout
            </MenuItem>
          </Menu>
        </Fragment>
      )}
    </PopupState>
  );
}

export default UserMenu;
