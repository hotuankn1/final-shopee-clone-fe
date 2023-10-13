import { createTheme } from '@mui/material/styles'
import {experimental_extendTheme as extendTheme} from '@mui/material/styles';

declare module '@mui/material/styles' {
    interface CustomPalette {
        danger: {
            main: string
        };
    }
    interface Palette extends CustomPalette {}
    interface PaletteOptions extends CustomPalette {}
}
export const theme  = createTheme({
    palette: {
        primary: {
            main: '#FA541C',
            contrastText: '#FFF'
        },
        success: {
            main: '#389E0D'
        },
        danger:{
            main: '#F5222D'
        }
    },

    typography: {
        fontFamily: ['Gilroy'].join(','),
        h2: {
            fontSize: 32,
            fontWeight: 500,
            letterSpacing: 0.32
        },
        h3: {
            fontSize: 24,
            fontWeight: 500,
            letterSpacing: 0.24
        },
        h4: {
            fontSize: 16,
            fontWeight: 500,
        },
        body1: {
            fontSize: 24,
            fontWeight: 400,
            letterSpacing: 0.24
        },
        body2: {
            fontSize: 16,
            fontWeight: 400,
        }
    },

})  


export const themeVar = extendTheme({
    colorSchemes: {
      light: {
        palette: {
          primary: {
            main: '#FA541C',
            contrastText: '#FFF'
          },
          success: {
            main: '#389E0D'
          },
          danger: {
            main: '#F5222D'
          }
        }
      },
    },
  });