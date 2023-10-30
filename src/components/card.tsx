import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import MuiCard, { CardProps as MuiCardProps } from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';

interface CardProps extends MuiCardProps {
  image: string;
  title: string;
  secondaryAction?: React.ReactNode;
  actions?: React.ReactNode | React.ReactNode[];
}

const StyledCard = styled(MuiCard)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: '25% auto',
  alignItems: 'center',
  gap: theme.spacing(2),
  border: '1px solid',
  borderColor: theme.palette.divider,
  padding: theme.spacing(2),
}));

const StyledCardHeader = styled(CardHeader)({
  paddingTop: 0,
  paddingBottom: 0,
});

const StyledCardContent = styled(CardContent)(({ theme }) => ({
  flex: '1 0 auto',
  paddingTop: theme.spacing(1),
  paddingBottom: theme.spacing(1),
}));

const StyledCardActions = styled(CardActions)({});

const StyledCardMedia = styled(CardMedia)(({ theme }) => ({
  borderRadius: '50%',
  width: '100%',
  height: 0,
  paddingBottom: '100%',
  backgroundColor: theme.palette.divider,
}));

function Card(props: React.PropsWithChildren<CardProps>) {
  const { image, title, secondaryAction, actions, children, ...otherProps } = props;

  return (
    <StyledCard {...otherProps}>
      <StyledCardMedia image={image} />
      <Stack>
        <StyledCardHeader title={title} action={secondaryAction} />
        <StyledCardContent>{children}</StyledCardContent>
        <StyledCardActions>{actions}</StyledCardActions>
      </Stack>
    </StyledCard>
  );
}

export default Card;
