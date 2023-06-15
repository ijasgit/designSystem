import React from "react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import "./SearchBar.css";

const SearchBar = (props) => {
  const {
    variant="large",
    height = "32px",
    width = "333px",
    borderRadius = "4px",
    placeholder="search",
    fontSize="",
    backgroundColor,
    ...rest
  } = props;

  return (
    <div className="searchBar">
      <TextField
        
        id="input-with-icon-textfield"
        placeholder={placeholder}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchOutlinedIcon sx={{ fontSize: {fontSize} }}/>
            </InputAdornment>
          ),
          style: {
            height,
            width,
            borderRadius,
            backgroundColor
          },
        }}
        variant="outlined"
      />
    </div>
  );
};

export default SearchBar;
