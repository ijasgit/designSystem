import React, {
  useEffect,
  useState,
} from "react";
import { TextareaAutosize } from "@mui/base";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import TextFields from "../../Stories/Text Fields/TextFields";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import HeadingPoppins from "../../Stories/Typography/Heading-poppins/HeadingPoppins";
import SUBTITLE1 from "../../Stories/Typography/SUBTITLE1-POPPINS/SUBTITLE1";
import Radio from "@mui/material/Radio";
import { lightBlue } from "@mui/material/colors";
import LinkLato from "../../Stories/Typography/Link-Lato/LinkLato";
import Buttons from "../../Stories/Buttons/Buttons";
import "../../Components/NavBar/NavBar.css";

import { format } from "date-fns";
import axios from "axios";

const AddBtn = ({handleSave, open, handleClose,Ename,Edescription,Estatus,Eportfolio_owner,Eportfolio_ownerName,handleownername,handleSetEname,handleSetDes,handlestatus,}) => {
  const [data, setData] = useState([]);




  useEffect(() => {
    fetchUsers();
  }, []);

  const handleClose1=()=>{
    handleClose()
    setnamecond(false)
    setdescond(false)
    setownercond(false)
    setstatuscond(false)
  


  }


  const [owner, setOwner] = useState("");
  // const [selectedValue, setSelectedValue] = useState("a");
  // const [selectedValue1, setSelectedValue1] = useState(false);
  const [ownerUUID, setUUid] = useState("");
  const [date] = useState(new Date());
  const formattedDate = format(date, "MMM dd,hh:mm a");
  const [namecond, setnamecond] = useState(false);
  const [descond, setdescond] = useState(false);

  const [ownercond, setownercond] = useState(false);
  const [statuscond, setstatuscond] = useState(false);
  const [nameInput, setNameInput] = useState("");
  const[discriptionInput,setdiscriptionInput]=useState("");
  const[statusInput,setStatusInput]=useState("")
  console.log()
  

  const handleNameInputChange = (event) => {
    const inputValue = event.target.value;
    setNameInput(inputValue);

    if (inputValue === "") {
      setnamecond(true);
    } else {
      setnamecond(false);
    }
    
  };



  
 
  const handleDiscriptionInputChange = (event) => {
    const inputValue = event.target.value;
    setdiscriptionInput(inputValue);

    if(inputValue==""){
    
      setdescond(true)
    }
    else{
      setdescond(false)

    }
    
  };
  // const handleStatusInputChange = (event) => {
  //   const inputValue = event.target.value;
  //   setStatusInput(inputValue);

  //   if(inputValue==""){

  //     setstatuscond(true)
  //   }
  //   else{
  //     setstatuscond(false)
  //   }
    
  // };
 
 


  const fetchUsers = async () => {
    try {
      const response = await axios.get("/api/users");
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error.response);
    }
  };

  const handleSave1 = async (event) => {
    event.preventDefault();
    if(Ename==""){
    
      setnamecond(true)
    }
    else{
      setnamecond(false)

    }
    
    if(Edescription==""){
    
      setdescond(true)
    }
    else{
      setdescond(false)

    }
    
    if(Eportfolio_ownerName==""){

      setownercond(true)
    }
    else{
      setownercond(false)
    
    }
    // if(Estatus==""){

    //   setstatuscond(true)
    // }
    // else{
    //   setstatuscond(false)
    // }
    if(Ename!=""&&Edescription!=""&&Eportfolio_ownerName!="")
    {
      console.log(Ename,Edescription,Estatus,Eportfolio_owner,"edited data")
      handleSave({ name: Ename, description: Edescription, owner: Eportfolio_owner,status:Estatus,formattedDate:formattedDate,ownername:Eportfolio_ownerName, })
      setnamecond(false)
      setdescond(false)
      setownercond(false)
      setstatuscond(false)


    }
    else{
      console.log("not woring")
    }
  };
  

  const style = {
    position: "absolute",
    width: "878px",
    height: "460px",
    left: "217px",
    top: "130px",

    background: "#FFFFFF",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.15)",
    borderRadius: "5px",
  };

  const p = {
    fontSize: "12px",
    color: "red",
    margin: "0px",
  };

 
  // const handleChange1 = (event) => {
    
  //   setSelectedValue1(event.target.value);
  // };

  const defprops={
    options:data,
    getOptionLabel:(options)=>options.label,

  }
  const getdata = (value) => {
    setUUid(value.uuid);
    setOwner(value.label);
  };
  return (
    <div>
     
      <Modal
        open={open}
        onClose={handleClose1}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div id="mainBox" style={{ margin: " 40px 32px 0px 32px" }}>
            <Typography id="modal-modal-title">
              <div>
                <HeadingPoppins
                  fontFamily="Poppins"
                  fontSize={16}
                  fontWeight={500}
                  label="Create New Portfolio"
                  letterSpacing={0}
                  lineHeight="24px"
                  variant="primary"
                />
              </div>
            </Typography>
            <div
              className="main"
              style={{
                display: "flex",

                columnGap: "32px",
              }}
            >
              <div
                className="col1"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  rowGap: "24px",
                }}
              >
                <div className="row1" style={{ marginTop: " 28px" }}>
                  {" "}
                  <SUBTITLE1
                    fontFamily="Poppins"
                    fontSize={12}
                    fontWeight={500}
                    label="NAME"
                    // value={name}
                    letterSpacing={0}
                    lineHeight="18px"
                    variant="primary"
                    // value={eName}
                  />
                  <TextField
                    id="outlined-basic"
                    value={Ename}
                    size="small"
                    variant="outlined"
                    placeholder="Enter Portfolio Name"
                    onChange={(event) => {
                      handleSetEname(event.target.value);
                       handleNameInputChange(event);
                    }}
                    inputProps={{
                      style: {
                        height: "20px",
                        width: "375px",
                      },
                    }}
                  />
                  {namecond ? <p style={p}>*Enter name</p> : null}
                </div>
                <div className="row2" style={{ marginTop: "5px" }}>
                  {" "}
                  <SUBTITLE1
                    fontFamily="Poppins"
                    fontSize={12}
                    fontWeight={500}
                    label="DESCRIPTION"
                    letterSpacing={0}
                    lineHeight="18px"
                    variant="primary"
                  />
                  <TextareaAutosize
                    placeholder="Enter Portfolio Description"
                    maxRows="8"
                    minRows="8"
                    value={Edescription}

                    style={{
                      width: "100%",
                      resize: "none",
                      height: "88px",
                      fontSize: "14px",
                    }}
                    onChange={(event) => {
                      handleSetDes(event.target.value);
                      handleDiscriptionInputChange(event)
                     
                    }}
                  />
                  {descond ? (
                    <p style={{ ...p, marginTop: "-5px" }}>
                      *Enter Description{" "}
                    </p>
                  ) : null}
                </div>
                <div className="row3">
                  <SUBTITLE1
                    fontFamily="Poppins"
                    fontSize={12}
                    fontWeight={500}
                    label="OWNER"
                    letterSpacing={0}
                    lineHeight="18px"
                    variant="primary"
                  />

                  <Autocomplete
             
                    {...defprops}
                  value={{label:Eportfolio_ownerName}}
                    sx={{ height: "32px", width: "400px", borderRadius: "4px" }}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        placeholder="Select case development custom field"
                        size="small"
                     
                   
                      />
                    )}
                    onChange={(event,value)=>{if(value&&value.uuid){
                      handleownername(value)  
                      setownercond(false); 
                                    
                      
                    }
                  else{
                    setOwner("")
                    setownercond(true); 
                  }
                  }}
                  />
                  {ownercond ? (
                    <p style={{ ...p, marginTop: "10px" }}>*Select owner </p>
                  ) : null}
                </div>
              </div>
              <div
                className="col2"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  rowGap: "24px",
                }}
              >
                <div className="row1" style={{ marginTop: " 28px" }}>
                  {" "}
                  <SUBTITLE1
                    fontFamily="Poppins"
                    fontSize={12}
                    fontWeight={500}
                    label="MANAGER"
                    letterSpacing={0}
                    lineHeight="18px"
                    variant="primary"
                  />
                  <TextField
                    id="outlined-basic"
                    size="small"
                    variant="outlined"
                    placeholder="Select Manager"
                    inputProps={{
                      style: {
                        height: "20px",
                        width: "355px",
                      },
                    }}
                  />
                </div>

                <div className="row3" style={{ marginTop: "30px" }}>
                  <SUBTITLE1
                    fontFamily="Poppins"
                    fontSize={12}
                    fontWeight={500}
                    label="STATUS"
                    letterSpacing={0}
                    lineHeight="18px"
                    variant="primary"
                  />
                  <Radio
                    checked={Estatus?null:!Estatus}
                    // onChange={handleChange1}
                    
                    onClick={(event) => {
                      handlestatus(false);
                      // handleStatusInputChange(event)

                    }}
                    // value="Inactive"
                    name="radio-buttons"
                    inputProps={{ "aria-label": "E" }}
                    sx={{
                      color: "default"[800],
                      "&.Mui-checked": {
                        color: lightBlue[600],
                      },
                    }}
                  />  
               
                  <label>
                    <LinkLato
                      fontFamily="Lato"
                      fontSize={12}
                      fontWeight={400}
                      lable="Inactive"
                      letterSpacing={0}
                      lineHeight="14px"
                      variant="primary"
                    />
                  </label>
                  <Radio
                    checked={Estatus?Estatus:null}
                    // onChange={handleChange1}
                    onClick={(event) => {
                      handlestatus(true);
                      // handleStatusInputChange(event)
                    }}
                    // value="Active"
                    name="radio-buttons"
                    inputProps={{ "aria-label": "D" }}
                    sx={{
                      color: "default"[800],
                      "&.Mui-checked": {
                        color: lightBlue[600],
                      },
                    }}
                  />  
                  <label>
                    <LinkLato
                      fontFamily="Lato"
                      fontSize={12}
                      fontWeight={400}
                      lable="Active"
                      letterSpacing={0}
                      lineHeight="14px"
                      variant="primary"
                    />
                  </label>
                </div>
                {statuscond ? (
                  <p style={{ ...p, marginTop: "-25px" }}>*Select Status </p>
                ) : null}
              </div>
            </div>
          </div>
          <div className="footer" style={{ marginTop: "20px" }}>
            <Buttons label="Cancel" variant="secondary" onClick={handleClose1} />
            <Buttons label="Save" variant="primary" onClick={handleSave1} />
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default AddBtn;
