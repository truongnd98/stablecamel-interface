import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#293845',
    },
    secondary: {
      main: '#8c00ef',
    },
  },
  typography: {
    fontFamily: 'Inter var, sans-serif',
    body1: {
      fontSize: 14,
    },
    h5: {
      fontSize: 18,
      fontWeight: 600,
      '@media (max-width: 1280px)': {
        fontSize: 16,
      },
    },
    h3: {
      fontSize: 35,
    },
  },
  components: {
    MuiTabs: {
      styleOverrides: {
        flexContainer: {
          gap: '12px',
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          borderBottom: 'none',
          fontSize: 14,
        },
      },
    },
    MuiTableHead: {
      styleOverrides: {
        root: {
          fontSize: 18,
        },
      },
    },
    MuiListItemText: {
      styleOverrides: {
        root: {
          color: '#293845',
        },
        // primary: {
        //   fontSize: 13
        // }
      },
    },
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          color: '#293845',
        },
      },
    },
    MuiAlert: {},
  },
});

declare module '@mui/material/Alert' {
  interface AlertPropsColorOverrides {
    secondary: true;
  }
}
