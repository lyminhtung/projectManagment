import * as React from 'react';
import {useColorScheme} from '@mui/material/styles';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import SettingsBrightnessIcon from '@mui/icons-material/SettingsBrightness';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';


function ModeSelect() {
   const { mode, setMode } = useColorScheme();
  const handleChange = (event) => {   
    setMode(event.target.value)
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 120,  }} size="small">
      <InputLabel id="label-select-dark-light-mode">Mode</InputLabel>
      <Select
        labelId="label-select-dark-light-mode"
        id="select-dark-light-mode"
        value={mode}
        label="Mode"
        onChange={handleChange}
        style={{display: 'flex', alignItems: 'center'}}
      >
       
        <MenuItem value="light" style={{display: 'flex', alignItems: 'center', gap: '8px'}}>
          <LightModeIcon fontSize='small'/>
          Light
        </MenuItem>
        <MenuItem value="dark" style={{display: 'flex', alignItems: 'center', gap: '8px'}}>
          <DarkModeIcon fontSize='small'/>
          Dark
        </MenuItem>
        <MenuItem value="system" style={{display: 'flex', alignItems: 'center', gap: '8px'}}>
          <SettingsBrightnessIcon fontSize='small'/>
          System
        </MenuItem>
      </Select>
    </FormControl>
  );
}
function App() {
  return (
    <>
    <Container disableGutters maxWidth={false} sx={{height:'100vh', backgroundColor: 'primary.main'}}>
      <Box sx={{
        backgroundColor : 'primary.light',
        width : '100%',
        height : (theme) => theme.projectCustom.appBarHeight,
        display: 'flex',
        alignItems: 'center'
       }}>
        <ModeSelect/>
      </Box>
      <Box sx={{
        backgroundColor : 'primary.dark',
        width : '100%',
        height : (theme) => theme.projectCustom.boardBarHeight,
        display: 'flex',
        alignItems: 'center'
       }}>
        Boadrd Bar
      </Box>
      <Box sx={{
        backgroundColor : 'white',
        width : '100%',
        height :(theme) => `calc(100vh - ${theme.projectCustom.appBarHeight} - ${theme.projectCustom.boardBarHeight})` ,
        display: 'flex',
        alignItems: 'center'
       }}>
        Board contain
      </Box>
    </Container>     
    </>
  )
}
export default App
