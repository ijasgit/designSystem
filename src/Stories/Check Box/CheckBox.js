import React from 'react'
import Checkbox from '@mui/material/Checkbox';
import { FormGroup,FormControlLabel } from '@mui/material';


const CheckBox = (props) => {
  const {variant="selected",label="selected",color="success" } =props ;
  return (
<FormGroup>
  <FormControlLabel control={<Checkbox  />} label="Enable" />
  <FormControlLabel control={<Checkbox color='success' />} label="Selected" />

  <FormControlLabel disabled control={<Checkbox />} label="Disabled" />
  <FormControlLabel  control={<Checkbox default checked color="default"/>} label="Disabled selected" />
</FormGroup>
  )
}

export default CheckBox