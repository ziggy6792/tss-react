import { createTheme, adaptV4Theme } from '@mui/material';
import { Theme } from '@mui/material/styles';

declare module '@mui/material/styles/createPalette' {
  interface CommonColors {
    chetwodeBlue: string;
    sanmarino: string;
    lavender: string;
    silver: string;
    white: string;
    red: string;
    bhaBlue: string;
    matisse: string;
  }
}

const createMuiTheme = () => {
  let theme = createTheme(
    adaptV4Theme({
      palette: {
        background: {
          paper: 'rgba(255, 255, 255, 1)',
          default: 'rgba(243, 247, 253, 1)',
        },
        primary: {
          main: '#227AAE',
        },
        secondary: {
          light: 'rgba(173, 173, 173, 1)',
          main: 'rgba(113, 113, 113, 1)',
          dark: 'rgba(16, 153, 255, 1)',
          contrastText: 'rgba(255, 255, 255, 1)',
        },
        error: {
          light: '#e57373',
          main: 'rgba(235, 87, 87, 1)',
          dark: '#d32f2f',
          contrastText: 'rgba(83, 83, 83, 1)',
        },
        text: {
          primary: 'rgba(83, 83, 83, 1)',
          secondary: 'rgba(113, 113, 113, 1)',
          disabled: 'rgba(189, 189, 189, 1)',
        },
        common: {
          black: 'rgba(113, 113, 113, 1)',
          white: 'rgba(83, 83, 83, 1)',
          chetwodeBlue: '#7a89dd',
          lavender: '#A06AB4',
          sanmarino: '#414EA4',
          red: '#bb0000',
          silver: '#C0C0C0',
          bhaBlue: '#00639D',
          matisse: '#1E75A8',
        },
      },
      typography: { fontFamily: 'Roboto', fontSize: 14 },
    })
  );

  theme = createTheme(theme, {
    palette: {
      text: {
        hint: 'rgba(16, 153, 255, 1)',
      },
    },
  });

  // Override components styles
  theme = createTheme(theme, {
    components: {
      MuiButtonBase: {
        styleOverrides: {
          root: {
            '&:focus': { outline: 'none' },
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          containedSecondary: {
            color: theme.palette.common.white,
          },
        },
      },
      MuiTablePagination: {
        root: {
          styleOverrides: {
            display: 'flex',
            justifyContent: 'center',
          },
        },
      },
    },
  });
  return theme;
};

const theme = createMuiTheme();

export default theme;
