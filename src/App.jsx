import * as React from 'react';
import Button from '@mui/material/Button';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import ThreeDRotation from '@mui/icons-material/ThreeDRotation';
import {useColorScheme} from '@mui/material/styles';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import SettingsBrightnessIcon from '@mui/icons-material/SettingsBrightness';
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
        style={{display: 'flex', margin: '2px'}
      >
       
        <MenuItem value="light" style={{display: 'flex', alignItems: 'center', gap: '8px'}}>
        <LightModeIcon fontSize='small'/>
        Light</MenuItem>
        <MenuItem value="dark" style={{display: 'flex', alignItems: 'center', gap: '8px'}}>
        <DarkModeIcon fontSize='small'/>
        Dark</MenuItem>
        <MenuItem value="system" style={{display: 'flex', alignItems: 'center', gap: '8px'}}>
        <SettingsBrightnessIcon fontSize='small'/>
        System</MenuItem>
      </Select>
    </FormControl>
  );
}

function ModeToggle() {
  const { mode, setMode } = useColorScheme();
  // const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  // const prefersLightMode = useMediaQuery('(prefers-color-scheme: light)');
  return (
    <Button
      onClick={() => {
        setMode(mode === 'light' ? 'dark' : 'light');
      }}
    >
      {mode === 'light' ? 'Turn dark' : 'Turn light'}
    </Button>
  );
}

function App() {
  
  return (
    <>
    <ModeSelect/>
    <ModeToggle />
    <hr />
    <div>Tung</div>
    <Button variant="text">Text</Button>
    <Button variant="contained">Contained</Button>
    <Button variant="outlined">Outlined</Button>
    <AccessAlarmIcon></AccessAlarmIcon>
    <ThreeDRotation></ThreeDRotation>
    </>
  )
}

export default App
