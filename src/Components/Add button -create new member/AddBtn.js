import React, {
  useEffect,
  forwardRef,
  useImperativeHandle,
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
import { addUser } from "../Featuers/User";
import { useDispatch, useSelector } from "react-redux";
import { format } from "date-fns";
import axios from "axios";

const AddBtn = ({handleSave, open, handleClose}) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get("/api/users");
      setData(response.data);

      console.log(response.data, "working");
    } catch (error) {
      console.error("Error fetching data:", error.response);
    }
  };
  console.log(data, "data");



  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [owner, setOwner] = useState("");

  const [status, setStatus] = useState("");
  const [manager, setManager] = useState("Kapil Dev");
  const [date] = useState(new Date());

  const handleSave1 = async (event) => {

    event.preventDefault();
 
    handleSave({ name: name, description: description, owner: ownerUUID })

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

 
  const [selectedValue, setSelectedValue] = useState("a");
  const [selectedValue1, setSelectedValue1] = useState("e");
  const [ownerUUID,setUUid]=useState("")

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };
  const handleChange1 = (event) => {
    setSelectedValue1(event.target.value);
  };

  const defprops={
    options:data,
    getOptionLabel:(options)=>options.label
  }
  const getdata = (value) => {
    setUUid(value.uuid)
    console.log(value.uuid, "valyess");
  };
  return (
    <div>
      {" "}
    
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
                    onChange={(event) => {
                      setName(event.target.value);
                    }}
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
                    onChange={(event) => {
                      setDescription(event.target.value);
                    }}
                  />
                </div>
                <div className="row3" style={{ marginBottom: " 38px" }}>
                 
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
                    options ={[{label:'select feild'}]}
                    
                    
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

                  <Autocomplete
                   
                    {...defprops}
                    sx={{ height: "32px", width: "375px", borderRadius: "4px" }}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        placeholder="Select case development custom field"
                        size="small"
                      />
                    )}
                    onChange={(event,value)=>getdata(value)}
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
                    onChange={handleChange1}
                    onClick={(event) => {
                      setStatus(event.target.value);
                    }}
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
                    checked={selectedValue1 === "Active"}
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
            <Buttons
              label="Save"
              variant="primary"
              onClick={handleSave1}       
            />
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default AddBtn;
