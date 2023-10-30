import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MenuIcon from '@mui/icons-material/Menu';

import usePage from '@/hooks/use-page';

function Header() {
  const { toggleSidebar } = usePage();

  return (
    <AppBar elevation={0}>
      <Toolbar>
        <Box flexGrow={1} />
        <IconButton color="inherit" aria-label="open notifications" edge="start">
          <NotificationsIcon />
        </IconButton>
        <IconButton
          color="inherit"
          aria-label="open sidebar"
          onClick={() => toggleSidebar()}
          edge="end"
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
