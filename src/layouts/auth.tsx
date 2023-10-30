import { Outlet } from 'react-router-dom';
import { styled, alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
}));

const Main = styled(Box)(({}) => ({
  display: 'flex',
  width: '100%',
}));

const Footer = styled(Box)(({ theme }) => ({
  borderTop: '1px solid',
  borderTopColor: alpha(theme.palette.divider, 0.5),
  padding: theme.spacing(4, 0),
  width: '100%',
}));

function AuthLayout() {
  return (
    <Stack alignItems="center" spacing={8}>
      <AppBar position="relative">
        <Container maxWidth="lg">
          <Toolbar>
            <ListItem>
              <ListItemAvatar>
                <Avatar variant="square" src="/images/maskable_icon.png" alt="Logo" />
              </ListItemAvatar>
              <ListItemText
                primary="Petcheckr"
                primaryTypographyProps={{
                  variant: 'h4',
                  fontWeight: 'bold',
                }}
              />
            </ListItem>
          </Toolbar>
        </Container>
      </AppBar>
      <Main component="main">
        <Container maxWidth="sm">
          <StyledPaper variant="outlined">
            <Outlet />
          </StyledPaper>
        </Container>
      </Main>
      <Footer component="footer">
        <Container>
          <Grid container alignItems="center">
            <Grid item xs>
              <Typography variant="body2">Copyright&copy;petcheckr 2023</Typography>
            </Grid>
            <Grid item>
              <Typography variant="body2">Privcy & Algemene voorwaarden</Typography>
            </Grid>
          </Grid>
        </Container>
      </Footer>
    </Stack>
  );
}

export default AuthLayout;
