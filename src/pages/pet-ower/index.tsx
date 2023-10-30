import { styled, lighten } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import AddIcon from '@mui/icons-material/Add';
import MoreVertIcon from '@mui/icons-material/MoreVert';

import { useAuth } from '@/redux/hooks/use-auth';
import ImageButton from '@/components/image-button';
import Card from '@/components/card';

const StyledAvatar = styled(Avatar)(({ theme }) => ({
  width: theme.spacing(8),
  height: theme.spacing(8),
  marginBottom: theme.spacing(1),
}));

const Backdrop = styled(Box)(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  borderRadius: theme.spacing(1.75),
  backgroundImage: `linear-gradient(to right top, ${lighten(
    theme.palette.primary.main,
    0.75
  )}, ${lighten(theme.palette.yellow.main, 0.75)})`,
}));

const StyledCard = styled(Card)({
  position: 'relative',
  backgroundColor: 'transparent',
  border: 0,
});

export function Component() {
  const auth = useAuth();

  return (
    <Grid container spacing={8}>
      <Grid item sm={4} xs={12}>
        <Stack rowGap={8}>
          <Stack alignItems="center">
            <StyledAvatar src={auth.user?.profile_picture} alt="Profile Picture" />
            <Typography variant="h5" fontWeight="bold">
              {[auth.user?.first_name, auth.user?.last_name].filter(Boolean).join(' ')}
            </Typography>
            <Typography>How can we help your pet today?</Typography>
          </Stack>
          <Stack spacing={2}>
            <Typography fontWeight="bold">MIJIN HUISDIEREN</Typography>
            <Box position="relative" display="flex" flexDirection="column" gap={2} p={3}>
              <Backdrop />
              <Box display="flex" gap={1}>
                <ImageButton
                  title="Ragnar"
                  image="https://fastly.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U"
                />
                <ImageButton
                  title="Ragnar"
                  image="https://fastly.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U"
                />
                <ImageButton
                  title="Ragnar"
                  image="https://fastly.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U"
                />
              </Box>
              <Button variant="outlined" startIcon={<AddIcon />}>
                Add another pet
              </Button>
            </Box>
          </Stack>
        </Stack>
      </Grid>
      <Grid item sm={4} xs={12}>
        <Stack rowGap={8}>
          <Stack spacing={2}>
            <Typography fontWeight="bold">YOUR VETERINARY PRACTICE</Typography>
            <Box position="relative">
              <Backdrop />
              <StyledCard
                image="https://fastly.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U"
                title="The Keppens Vet Clinic"
                actions={<Button>Available to chat</Button>}
              >
                <Typography>+43-43-4444-3333</Typography>
              </StyledCard>
            </Box>
            <Box display="flex" alignItems="center" justifyContent="center" gap={2}>
              <Typography>Need to change vet?</Typography>
              <Button variant="outlined">Click here</Button>
            </Box>
          </Stack>
          <Stack spacing={2}>
            <Typography fontWeight="bold">MY OPEN CONSULTATION</Typography>
            <Box bgcolor="rgb(224, 242, 238)" p={4} height={100}>
              <Typography>Nog geen consultaties</Typography>
            </Box>
            <Button>Consultatie aanvragen</Button>
          </Stack>
        </Stack>
      </Grid>
      <Grid item sm={4} xs={12}>
        <Stack spacing={2}>
          <Typography fontWeight="bold">CONSULTATION HISTORY</Typography>
          <Card
            image="https://fastly.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U"
            title="Dr. Carly Fonck"
            secondaryAction={
              <IconButton>
                <MoreVertIcon />
              </IconButton>
            }
          >
            <Typography>Mijin lopende consultatie</Typography>
          </Card>
          <Card
            image="https://fastly.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U"
            title="Dr. Carly Fonck"
            secondaryAction={
              <IconButton>
                <MoreVertIcon />
              </IconButton>
            }
          >
            <Typography>Mijin lopende consultatie</Typography>
          </Card>
          <Card
            image="https://fastly.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U"
            title="Dr. Carly Fonck"
            secondaryAction={
              <IconButton>
                <MoreVertIcon />
              </IconButton>
            }
          >
            <Typography>Mijin lopende consultatie</Typography>
          </Card>
          <Button color="yellow">See all consultatin</Button>
        </Stack>
      </Grid>
    </Grid>
  );
}

Component.displayName = 'PetOwnerDashboard';
