import React, { useEffect, useState, useRef, forwardRef } from "react";
import axios from "axios";
// import AddBtn from "../../Components/Add button -create new member/AddBtn";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
// import SearchBar from "../Search Bar/SearchBar";
import AddBtn from "../../Components/Add button -create new member/AddBtn";
// import { GiSettingsKnobs } from "react-icons/gi";
// import { TbShare2 } from "react-icons/tb";
// import { HiSortDescending } from "react-icons/hi";
import "../../Stories/Table/DataTable.css";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addSoftware } from "../../Components/Featuers/SoftwareSlice";
import { useDispatch } from "react-redux";
import "../../Components/NavBar/NavBar.css";
import { blue } from "@mui/material/colors";

const DataTable = (props) => {
  const nav = useNavigate();
  

  const { variant = "primary", height, width, data,deleterow,editrow , ...rest} = props;
  const [rows, setRows] = useState(data);


  const delete1row = (uuid,index) => {
    deleterow(uuid);
  };

  const edit1row=(uuid)=>{
    editrow(uuid)
   
  }

  const check = (id, index) => {
    let data = rows.slice();
    data[index].show = !data[index].show;
    setRows(data);
  };



  const diapatch = useDispatch();

  const NavtoSoftware = (name) => {
    const Name = name;
    diapatch(
      addSoftware({
        name: Name,
      })
    );
    nav("/software");
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          margin: "0px 32px 21px 32px",
        }}
      >
        <div style={{ display: "flex", columnGap: "32px" }}>
    
          <div
            style={{
              position: "relative",
              display: "flex",
            }}
          >
           
          </div>
        </div>
      </div>
      {data && data.length && (
        <div
          style={{
            width: "1161px",
            marginLeft: "31px",
            overflow: "auto",
            maxHeight: "485px",
          }}
        >
          <TableContainer component={Paper}>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  
                  <TableCell>Name</TableCell>
                  <TableCell align="right">Status</TableCell>
                  <TableCell align="right">Created date</TableCell>
                  <TableCell align="right">Manager</TableCell>
                  <TableCell align="right"></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row, index) => (
                  <TableRow
                    key={index}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                   
                    <TableCell
                      component="th"
                      scope="row"
                      onClick={() => NavtoSoftware(row.name)}
                    >
                      <p
                        style={{ color: "blue", cursor: "pointer" }}
                        className="link-hover"
                      >
                        {row.name}
                      </p>
                    </TableCell>
                    <TableCell
                      align="right"
                      style={{
                        color: row.status === "Active" ? "#15AC52" : "#C03767",
                      }}
                    >
                      {row.status}
                    </TableCell>
                    <TableCell align="right">{row.create_date}</TableCell>
                    <TableCell align="right">{row.manager}</TableCell>

                    <TableCell align="right">
                      {row.protein}
                      <MoreHorizIcon onClick={() => check(row.id, index)} />
                      {row.show ? (
                        
                        <Paper>
                          <MenuList>
                          <MenuItem onClick={()=>edit1row(row.uuid)}>Edit</MenuItem>
                            <MenuItem onClick={()=>delete1row(row.uuid,index)}>Delete</MenuItem>
                        

                          </MenuList>
                        </Paper>
                      ) : null}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      )}
    </div>
  );
};

export default DataTable;
