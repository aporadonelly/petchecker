import { styled } from '@mui/material/styles';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';

interface ImageButtonProps {
  title: string;
  image: string;
}

const StyledButtonBase = styled(ButtonBase)(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.spacing(1.75),
  padding: theme.spacing(1),
  height: 200,
  width: 150,
  overflow: 'hidden',
}));

const ImageSrc = styled('span', { shouldForwardProp: (prop) => prop !== 'image' })<{
  image: string;
}>(({ image }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundImage: `url(${image})`,
}));

const ImageBackdrop = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: theme.palette.common.black,
  opacity: 0.15,
}));

const ImageTitle = styled(Typography)(({ theme }) => ({
  position: 'relative',
  alignSelf: 'flex-end',
  color: theme.palette.common.white,
})) as typeof Typography;

function ImageButton(props: ImageButtonProps) {
  const { title, image } = props;

  return (
    <StyledButtonBase>
      <ImageSrc image={image} />
      <ImageBackdrop />
      <ImageTitle component="span" variant="subtitle1" color="common.white">
        {title}
      </ImageTitle>
    </StyledButtonBase>
  );
}

export default ImageButton;
