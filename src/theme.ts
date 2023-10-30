import { ThemeOptions, createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#00ACBD',
      contrastText: '#FFF',
    },
    yellow: {
      main: '#FDEB88',
    },
    divider: '#CCC',
  },
  mixins: {
    toolbar: {
      minHeight: 70,
    },
  },
  typography: {
    fontFamily: ['Poppins', 'serif'].join(','),
  },
});

export default createTheme(theme, {
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          borderRadius: 0,
        },
      },
      defaultProps: {
        elevation: 0,
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: theme.spacing(1.75),
        },
      },
      defaultProps: {
        elevation: 0,
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          borderRadius: theme.spacing(1),
          '&.Mui-selected': {
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.common.white,
            '&:hover': {
              backgroundColor: theme.palette.primary.main,
              color: theme.palette.common.white,
            },
          },
        },
      },
    },
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          color: 'inherit',
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: theme.palette.grey[700],
        },
        shrink: {
          transform: 'scale(1)',
        },
      },
      defaultProps: {
        shrink: true,
      },
    },
    MuiInputBase: {
      styleOverrides: {
        formControl: {
          'label + &': {
            marginTop: 30,
          },
        },
      },
      defaultProps: {
        margin: 'none',
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        notchedOutline: {
          borderColor: theme.palette.grey[700],
          borderRadius: theme.spacing(1.75),
        },
      },
      defaultProps: {
        notched: false,
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          marginTop: theme.spacing(1),
          marginLeft: 0,
        },
      },
    },
    MuiTextField: {
      defaultProps: {
        variant: 'outlined',
        margin: 'normal',
        fullWidth: true,
        InputProps: {
          notched: false,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          fontWeight: theme.typography.fontWeightBold,
          textTransform: 'none',
        },
        outlined: {
          borderWidth: 3,
          borderRadius: '50rem',
          '&:hover': {
            borderWidth: 3,
          },
        },
        contained: {
          borderRadius: '50rem',
        },
      },
      defaultProps: {
        variant: 'contained',
        size: 'large',
        disableElevation: true,
      },
    },
  },
} as ThemeOptions);
