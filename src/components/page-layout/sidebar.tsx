import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton, { ListItemButtonProps } from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import PersonIcon from '@mui/icons-material/Person';
import LogoutIcon from '@mui/icons-material/Logout';

import { persistor } from '@/redux/store';
import { useAuth } from '@/redux/hooks/use-auth';
import usePage from '@/hooks/use-page';

export interface SidebarItem extends ListItemButtonProps {
  label: string;
  icon: React.ReactNode;
}

export interface SidebarProps {
  items: SidebarItem[];
}

function Sidebar(props: SidebarProps) {
  const { items } = props;

  const auth = useAuth();
  const { isSidebarOpen, toggleSidebar } = usePage();

  return (
    <Drawer
      open={isSidebarOpen}
      onClose={() => toggleSidebar()}
      anchor="right"
      sx={{
        '& .MuiDrawer-paper': {
          width: {
            xs: '80vw',
            sm: 300,
          },
          borderRadius: 0,
        },
      }}
    >
      <Toolbar>
        <ListItem disableGutters>
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
        </ListItem>
      </Toolbar>
      <Divider />
      <Box flexGrow={1}>
        <List disablePadding>
          {items.map(({ label, icon, ...listItemButtonProps }, index) => (
            <ListItem key={index}>
              <ListItemButton {...listItemButtonProps}>
                <ListItemIcon>{icon}</ListItemIcon>
                <ListItemText primary={label} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
      <Divider />
      <Toolbar disableGutters>
        <ListItem onClick={() => persistor.purge()}>
          <ListItemButton>
            <ListItemIcon>
              <LogoutIcon />
            </ListItemIcon>
            <ListItemText primary="Logout" />
          </ListItemButton>
        </ListItem>
      </Toolbar>
    </Drawer>
  );
}

export default Sidebar;
