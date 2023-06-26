import React from "react";
import { TextareaAutosize } from "@mui/base";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import TextFields from "../../Stories/Text Fields/TextFields";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import HeadingPoppins from "../../Stories/Typography/Heading-poppins/HeadingPoppins";
import SUBTITLE1 from "../../Stories/Typography/SUBTITLE1-POPPINS/SUBTITLE1";
import { TextField, private_excludeVariablesFromRoot } from "@mui/material";
import Radio from "@mui/material/Radio";
import { lightBlue } from "@mui/material/colors";
import LinkLato from "../../Stories/Typography/Link-Lato/LinkLato";
import Buttons from "../../Stories/Buttons/Buttons";
import "../../Components/NavBar/NavBar.css";
import { addUser } from "../Featuers/User";
import{useDispatch,useSelector} from 'react-redux';
import { useState } from "react";
import { format } from 'date-fns';



const AddBtn = () => {
  
       const diapatch= useDispatch ();
      //  console.log(diapatch)
       const userList =useSelector((state)=>state.users)
       console.log(userList)

       const [name,setName] = useState ('');
       const[status,setStatus] =  useState ("");      
       const [iid,setiid]=useState(0)  
       const [manager,setManager] = useState ("Kapil Dev");
       const [date] = useState(new Date());

       const handleSave = () => {
        const formattedDate = format(date, 'MMM dd, hh:mm a');
        setiid(iid+1)
    
        diapatch(
          addUser({
            id: iid,
            name,
            status,
            manager,
            date: formattedDate, // Pass the formatted date here
            show:false,
          })
        );
        setName('');
        setStatus('');
        handleClose();
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
    
      const [open, setOpen] = React.useState(false);
      const handleOpen = () => setOpen(true);
      const handleClose = () => setOpen(false);
      const [selectedValue, setSelectedValue] = React.useState("a");
      const [selectedValue1, setSelectedValue1] = React.useState("e");
    
      const handleChange = (event) => {
        setSelectedValue(event.target.value);
      };
      const handleChange1 = (event) => {
        setSelectedValue1(event.target.value);
      };
    
  return (
    <div>
      {" "}
      <div className="btn-1">
        <Buttons label="Add Portfolio" variant="primary" onClick={handleOpen} />
        <div style={{ position: "absolute", top: "6px", left: "549px" }}>
          <AddOutlinedIcon
            className="addout-1"
            fontSize="small"
          ></AddOutlinedIcon>
        </div>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
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
                    letterSpacing={0}
                    lineHeight="18px"
                    variant="primary"
                  />
                  <TextField
                    id="outlined-basic"
                    //   style={{ width: 375}}
                    size="small"
                    variant="outlined"
                    placeholder="Enter Portfolio Name"
                    onChange={(event) =>
                      {setName(event.target.value)}
                      
                    }
                    inputProps={{
                      style: {
                        height: "20px",
                        width: "375px",
                      },
                    }}
                  />
                </div>
                <div className="row2">
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
                  {/* <TextField
          id="outlined-basic"
          //   style={{ width: 375}}
          size="small"
          variant="outlined"
          inputProps={{
            style: {
              height: "112px",

              width: "375px",
            },
          }}
        /> */}
                  <TextareaAutosize
                    placeholder="Enter Portfolio Description"
                    maxRows="8"
                    minRows="8"
                    style={{
                      width: "100%",
                      resize: "none",
                      height: "88px",
                      fontSize: "14px",
                    }}
                  />
                </div>
                <div className="row3" style={{ marginBottom: " 38px" }}>
                  {" "}
                  <SUBTITLE1
                    fontFamily="Poppins"
                    fontSize={12}
                    fontWeight={500}
                    label="REGION"
                    letterSpacing={0}
                    lineHeight="18px"
                    variant="primary"
                  />
                  <TextFields
                    borderRadius="4px"
                    height=""
                    label=""
                    placeholder="Select Field"
                    width="375px"
                  />
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
                  <SUBTITLE1
                    fontFamily="Poppins"
                    fontSize={12}
                    fontWeight={500}
                    label="CUSTOM FIELD"
                    letterSpacing={0}
                    lineHeight="18px"
                    variant="primary"
                  />
                  <TextFields
                    borderRadius="4px"
                    height="32px"
                    label=""
                    placeholder="Select case development custom field"
                    width="375px"
                    onChange={(event) =>
                      {setManager(event.target.value)}
                      
                      
                    }
                  />
                </div>
                <div className="row2">
                  <SUBTITLE1
                    fontFamily="Poppins"
                    fontSize={12}
                    fontWeight={500}
                    label="ACCESS"
                    letterSpacing={0}
                    lineHeight="18px"
                    variant="primary"
                  />
                  <Radio
                    checked={selectedValue === "b"}
                    onChange={handleChange}
                    value="b"
                    name="radio-buttons"
                    inputProps={{ "aria-label": "B" }}
                    sx={{
                      color: "default"[800],
                      "&.Mui-checked": {
                        color: lightBlue[600],
                        
                      },
                    }}
                  />{" "}
                  <label>
                    <LinkLato
                      fontFamily="Lato"
                      fontSize={12}
                      fontWeight={400}
                      lable="Private"
                      letterSpacing={0}
                      lineHeight="14px"
                      variant="primary"
                    />
                  </label>
                  <Radio
                    checked={selectedValue === "c"}
                    onChange={handleChange}
                    value="c"
                    name="radio-buttons"
                    inputProps={{ "aria-label": "C" }}
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
                      lable="Public"
                      letterSpacing={0}
                      lineHeight="14px"
                      variant="primary"
                    />
                  </label>
                </div>
                <div className="row3">
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
                    checked={selectedValue1 === "Inactive"}
                    
                    onChange={handleChange1 }
                    onClick={(event) =>
                      {setStatus(event.target.value)}
                      
                      
                    }                  
                    value="Inactive"
                    name="radio-buttons"
                    inputProps={{ "aria-label": "E" }}
                    sx={{
                      color: "default"[800],
                      "&.Mui-checked": {
                        color: lightBlue[600],
                        
                      },
                     
                    }}
                  />{" "}
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
                    checked={selectedValue1 === "Active" }
                    onChange={handleChange1}
                    onClick={(event) => {
                      setStatus(event.target.value);
                      //event.target.style.color = 'red'; 
                    }}
                    value="Active"
                    name="radio-buttons"
                    inputProps={{ "aria-label": "D" }}
                    sx={{
                      color: "default"[800],
                      "&.Mui-checked": {
                        color: lightBlue[600],
                      },
                    }}
                  />{" "}
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
              </div>
            </div>
          </div>
          <div className="footer">
            <Buttons label="Cancel" variant="secondary" onClick={handleClose} />
            <Buttons label="Save" variant="primary"  onClick={handleSave} 
            //  onClick={()=>{diapatch( addUser({
            //   id: userList[userList.length -1 ].id + 1, name,  status ,manager,date 
            // }))
            // handleClose()
            // }} 
             />
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default AddBtn;
