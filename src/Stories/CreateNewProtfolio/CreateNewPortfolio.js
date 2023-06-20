import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import HeadingPoppins from "../Typography/Heading-poppins/HeadingPoppins";
import SUBTITLE1 from "../Typography/SUBTITLE1-POPPINS/SUBTITLE1";
import { TextField } from "@mui/material";
import Radio from "@mui/material/Radio";
import { lightBlue } from "@mui/material/colors";
import LinkLato from "../Typography/Link-Lato/LinkLato";
import Buttons from "../Buttons/Buttons";
import "./CreateNewPortfolio.css";
import { TextareaAutosize } from "@mui/base";
// import Buttons from "../Stories/Buttons/Buttons";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import "../../Components/NavBar/NavBar.css"

const CreateNewPortfolio = () => {
  const style = {
    position: "absolute",
    width: "846px",
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
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <Buttons label="Add Portfolio" variant="primary" onClick={handleOpen} />
      <AddOutlinedIcon className="addout-1" fontSize="small"></AddOutlinedIcon>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title">
            <div style={{ margin: "18px 0px 0px 16px" }}>
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
              margin: "16px 0px 0px 18px",
              columnGap: "12px",
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
              <div className="row1">
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
                  maxRows="10"
                  minRows="10"
                  style={{ width: "100%", resize: "none" }}
                />
              </div>
              <div className="row3">
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
                <TextField
                  id="outlined-basic"
                  //   style={{ width: 375}}
                  size="small"
                  variant="outlined"
                  inputProps={{
                    style: {
                      height: "20px",
                      width: "375px",
                    },
                  }}
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
              <div className="row1">
                <SUBTITLE1
                  fontFamily="Poppins"
                  fontSize={12}
                  fontWeight={500}
                  label="CUSTOM FIELD"
                  letterSpacing={0}
                  lineHeight="18px"
                  variant="primary"
                />
                <TextField
                  id="outlined-basic"
                  //   style={{ width: 375}}
                  size="small"
                  variant="outlined"
                  inputProps={{
                    style: {
                      height: "20px",
                      width: "375px",
                    },
                  }}
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
                  checked={selectedValue1 === "e"}
                  onChange={handleChange1}
                  value="e"
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
                  checked={selectedValue1 === "d"}
                  onChange={handleChange1}
                  value="d"
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
          <div
            className="footer"
            // style={{
            //   display: "flex",
            //   justifyContent: "space-between",
            //   margin: "35px 30px 25px 30px",
            // }}
          >
            <Buttons label="Cancel" variant="secondary" />
            <Buttons label="Save" variant="primary" />
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default CreateNewPortfolio;
