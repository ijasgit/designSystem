import React from "react";
import './RadioButton.css';
import Radio from '@mui/material/Radio';
import {  lightBlue } from '@mui/material/colors';

  const RadioButton = (props)=>{
    const [selectedValue, setSelectedValue] = React.useState('a');
    const handleChange = (event) => {
        setSelectedValue(event.target.value);
      };

    const {

        variant='RadioButton1',
       
        ...rest

    } = props


    return(
        <div className={variant}>
            <label>
            <Radio
         checked={selectedValue === 'a'}
         onChange={handleChange}
         value="a"
         name="radio-buttons"
         inputProps={{ 'aria-label': 'A' }}
        //  color="default"
         disabled
         />Disabled
            </label>


         <label>
         <Radio
        checked={selectedValue === 'b'}
        onChange={handleChange}
        value="b"
        name="radio-buttons"
        inputProps={{ 'aria-label': 'B' }}
        sx={{
            color: 'default' [800],
            '&.Mui-checked': {
              color: lightBlue[600],
            },
          }}
      />Enable
         </label>
      

      <label>
      <Radio
        checked={selectedValue === 'c'}
        onChange={handleChange}
        value="c"
        name="radio-buttons"
        inputProps={{ 'aria-label': 'C' }}
        
        sx={{
            color:lightBlue[800],
            '&.Mui-checked': {
              color: lightBlue[600],
            },
          }}
      />Selected
      </label>
      
      <label>
      <Radio
        checked={selectedValue === 'd'}
        onChange={handleChange}
        value="d"
        name="radio-buttons"
        inputProps={{ 'aria-label': 'D' }}
        color="default"
      />Disable Selected
      </label>
      

        </div>
    )
  }

  export default RadioButton;
