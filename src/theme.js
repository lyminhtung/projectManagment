import { BorderColor } from '@mui/icons-material';
import { cyan, deepOrange, orange, teal } from '@mui/material/colors';
import { experimental_extendTheme as extendTheme } from '@mui/material/styles';
const theme = extendTheme({
  projectCustom:{
    appBarHeight:'58px',
    boardBarHeight:'60px'
  },
  colorSchemes: {
    light: {
      palette: {
        primary: teal,
        secondary: deepOrange
      },
    },
    dark: {
      palette: {        
        primary: cyan,
        secondary: orange
      },
    },
  },
   components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform:'none'
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root:  {
          '.MuiOutlinedInput-notchedOutline':{
            borderColor: 'white'
          },
          '&:hover':{
            '.MuiOutlinedInput-notchedOutline':{
              boderColor: 'black !important'
            }
          },
          '& fieldset':{
            borderWidth:'1px !important'
          }
          
          },
      },
    },
  },
  
});

export default theme;
