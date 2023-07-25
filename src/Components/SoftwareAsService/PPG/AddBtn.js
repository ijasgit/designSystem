import React, { useEffect,forwardRef,useImperativeHandle } from "react";
import { TextareaAutosize } from "@mui/base";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import TextFields from "../../../Stories/Text Fields/TextFields";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import HeadingPoppins from "../../../Stories/Typography/Heading-poppins/HeadingPoppins";
import SUBTITLE1 from "../../../Stories/Typography/SUBTITLE1-POPPINS/SUBTITLE1";
import { TextField,  } from "@mui/material";
import Radio from "@mui/material/Radio";
import { lightBlue } from "@mui/material/colors";
import LinkLato from "../../../Stories/Typography/Link-Lato/LinkLato";
import Buttons from "../../../Stories/Buttons/Buttons";
import "../../NavBar/NavBar.css";
import{useDispatch,useSelector} from 'react-redux';
import { useState } from "react";
import { format } from 'date-fns';
import { addPPG, addSoftware } from "../../Featuers/SoftwareSlice";
import "./CreateNewPortfolio.css"



const AddBtn = (props,ref) => {
  
       const diapatch= useDispatch ();
      //  console.log(diapatch)
       const userList =useSelector((state)=> state.software.ppgDataTable)

       
       const [name,setName] = useState ('');
       const[status,setStatus] =  useState ("");      
       const [manager,setManager] = useState ("Kapil Dev");
       const [date] = useState(new Date());


       const handleSave = () => {
        const formattedDate = format(date, 'MMM dd, hh:mm a');

        
    
        diapatch(
          addPPG({
            id:userList.length+1 ,
            name,
            status,
            manager,
            date: formattedDate, // Pass the formatted date here
            show:false,
          })
        );
        setName('');
  
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
    
      const [open, setOpen] = useState(false);
      const handleOpen = () => setOpen(true);
      const handleClose = () => setOpen(false);
      const [selectedValue, setSelectedValue] = useState("a");
      const [selectedValue1, setSelectedValue1] = useState("e");
    
      const handleChange = (event) => {
        setSelectedValue(event.target.value);
      };
      const handleChange1 = (event) => {
        setSelectedValue1(event.target.value);
      };

      useImperativeHandle(ref,()=>({
        handleOpen
      }))
    
  return (
    <div>
      {" "}
      <div className="btn-1">
        <Buttons label="Add PPG" variant="primary" onClick={handleOpen} >
          
        </Buttons>
        
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
                  label="Create Product Platform Group"
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
                    label="PRODUCT PLATFORM NAME"
                    letterSpacing={0}
                    lineHeight="18px"
                    variant="primary"
                  />
                  <TextField
                    id="outlined-basic"
                    //   style={{ width: 375}}
                    size="small"
                    variant="outlined"
                    placeholder="Enter Product Platform Name"
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
                    label="TYPE"
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
                    label="OWNER"
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
                    label="ROLE 1"
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
                    
                  />
                  
                </div>
                <div className="row3">
                  <SUBTITLE1
                    fontFamily="Poppins"
                    fontSize={12}
                    fontWeight={500}
                    label="Select user"
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
                  />
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

export default forwardRef(AddBtn) ;
