import { BorderColor } from '@mui/icons-material';
// import { cyan, deepOrange, orange, teal } from '@mui/material/colors';
import { experimental_extendTheme as extendTheme } from '@mui/material/styles';
const theme = extendTheme({
  projectCustom:{
    appBarHeight:'58px',
    boardBarHeight:'60px'
  },
  // colorSchemes: {
  //   light: {
  //     palette: {
  //       primary: teal,
  //       secondary: deepOrange,
  //     },
  //   },
  //   dark: {
  //     palette: {        
  //       primary: cyan,
  //       secondary: orange
  //     },
  //   },
  // },
   components: {
    MuiPaper: {
      styleOverrides: {
        root: {
            marginTop:'30px'
          
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform:'none',
          borderWidth:'0.5px',
          
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root:  {
          // '&.MuiOutlinedInput-notchedOutline':{
          //   borderColor: 'primary.main !important'
          // },
          // '&:hover':{
          //   '.MuiOutlinedInput-notchedOutline':{
          //     boderColor: 'primary.main !important'
          //   }
          // },
          '& fieldset':{
            borderWidth:'0.5px !important'
          }          
        },
      },
    },
  },
  
});

export default theme;
