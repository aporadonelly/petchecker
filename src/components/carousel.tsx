import { Children } from 'react';
import ReactSlick, { Settings } from 'react-slick';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

interface CarouselProps extends Settings {
  spacing?: number;
  ArrowProps?: IconButtonProps;
  children: React.ReactNode;
}

const ArrowButton = styled(IconButton)<{ direction: 'left' | 'right' }>(({ direction }) => ({
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  ...(direction === 'left' && {
    left: -50,
  }),
  ...(direction === 'right' && {
    right: -50,
  }),
}));

const Slider = styled(ReactSlick)<{ spacing?: number }>(({ theme, spacing = 0 }) => ({
  position: 'initial',
  border: '4px solid black',
  overflow: 'hidden',
  '& .slick-list': {
    margin: theme.spacing(0, spacing * -1),
  },
  '& .slick-slide > div': {
    padding: theme.spacing(0, spacing),
  },
  '& .slick-dots': {
    display: 'flex !important',
    alignItems: 'center',
    justifyContent: 'center',
    bottom: 12,
    '& li': {
      position: 'relative',
      display: 'inline-block',
      flex: '0 1 auto',
      boxSizing: 'content-box',
      width: '16px',
      height: 4,
      marginInline: '4px',
      padding: '0',
      textAlign: 'center',
      textIndent: '-999px',
      verticalAlign: 'top',
      transition: 'all 0.3s',
      '& button': {
        position: 'relative',
        display: 'block',
        width: '100%',
        height: 4,
        padding: '0',
        color: 'transparent',
        fontSize: '0',
        background: '#ffffff',
        border: '0',
        borderRadius: '1px',
        outline: 'none',
        cursor: 'pointer',
        opacity: '0.3',
        transition: 'all 0.3s',
        '&::before': { content: 'none' },
        '&::after': { position: 'absolute', inset: '-4px', content: '""' },
      },
      '&.slick-active': {
        width: 24,
        '& button': { background: '#ffffff', opacity: '1' },
      },
    },
  },
}));

function PrevArrow(props: IconButtonProps) {
  const { className, onClick } = props;

  if (className?.includes('slick-disabled')) return null;
  return (
    <ArrowButton direction="left" onClick={onClick}>
      <ArrowBackIcon />
    </ArrowButton>
  );
}

function NextArrow(props: IconButtonProps) {
  const { className, onClick } = props;

  if (className?.includes('slick-disabled')) return null;
  return (
    <ArrowButton direction="right" onClick={onClick}>
      <ArrowForwardIcon />
    </ArrowButton>
  );
}

function Carousel(props: CarouselProps) {
  const { spacing, ArrowProps, children, ...other } = props;

  const arrayChildren = Children.toArray(children);

  return (
    <Box position="relative">
      <Slider
        {...other}
        spacing={spacing}
        prevArrow={<PrevArrow {...ArrowProps} />}
        nextArrow={<NextArrow {...ArrowProps} />}
      >
        {arrayChildren}
      </Slider>
    </Box>
  );
}

export default Carousel;
