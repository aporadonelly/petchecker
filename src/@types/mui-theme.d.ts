import '@mui/material/styles';
import '@mui/material/Button';
import '@mui/material/ButtonGroup';

import type { PaletteColor, PaletteColorOptions } from '@mui/material/styles/createPalette';

declare module '@mui/material/styles' {
  interface Palette {
    yellow: PaletteColor;
  }

  interface PaletteOptions {
    yellow: PaletteColorOptions;
  }
}

declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    yellow: true;
  }
}

declare module '@mui/material/ButtonGroup' {
  interface ButtonGroupPropsColorOverrides {
    yellow: true;
  }
}
