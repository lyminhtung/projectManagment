import { BorderColor } from '@mui/icons-material';
// import { cyan, deepOrange, orange, teal } from '@mui/material/colors';
import { experimental_extendTheme as extendTheme } from '@mui/material/styles';
const APP_BAR_HEIGHT='58px'
const BOARD_BAR_HEIGHT='60px'
const BOARD_CONTENT_HEIGHT = `calc(100vh - ${APP_BAR_HEIGHT} - ${BOARD_BAR_HEIGHT})`;
const theme = extendTheme({
  projectCustom:{
    appBarHeight:APP_BAR_HEIGHT,
    boardBarHeight:BOARD_BAR_HEIGHT,
    boardContentHeight:BOARD_CONTENT_HEIGHT
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
    MuiTypography: {
      styleOverrides: {
        root: {
          '&.MuiTypography-body1':{
            fontSize:'0.875rem'
          }
        }
      }
    },
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          '*::-webkit-scrollbar':{
            width:'8px',
            height:'8px'
          },
          '*::-webkit-scrollbar-thumb':{
            backgroundColor:'#dcdde1',
            borderRadius:'4px'
          },
          '*::-webkit-scrollbar-thumb:hover':{
            backgroundColor:'white',
          }
        }
      }
    }
  },
  
});

export default theme;
