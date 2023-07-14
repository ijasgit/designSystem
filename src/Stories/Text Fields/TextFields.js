import React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

const TextFields = (props) => {
  const {
    label = "select",
    height = "32px",
    width = "375px",
    borderRadius = "4px",
    placeholder,
    options,
  } = props;
  return (
    <div>
      <Autocomplete
       options={options}
      
        
        sx={{ width: width, borderRadius }}
        renderInput={(params) => (
          <TextField
          
            {...params}
            placeholder={placeholder}
            label={label}
            size="small"
        
          />
        )}
      />
    </div>
  );
};

export default TextFields;
