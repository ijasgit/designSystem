import React, { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Checkbox from "@mui/material/Checkbox";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";

const DataTable = () => {
  const [rows, setRows] = useState([
    {
      id: 1,
      name: "Frozen yoghurt",
      calories: 159,
      fat: 6.0,
      carbs: 24,
      protein: 4.0,
      show: false,
    },
    {
      id: 2,
      name: "Ice cream sandwich",
      calories: 237,
      fat: 6.0,
      carbs: 24,
      protein: 4.0,
      show: false,
    },
    {
      id: 3,
      name: "Eclair",
      calories: 262,
      fat: 6.0,
      carbs: 24,
      protein: 4.0,
      show: false,
    },
    {
      id: 4,
      name: "Cupcake",
      calories: 305,
      fat: 6.0,
      carbs: 24,
      protein: 4.0,
      show: false,
    },
    {
      id: 5,
      name: "Gingerbread",
      calories: 356,
      fat: 16.0,
      carbs: 24,
      protein: 4.0,
      show: false,
    },
  ]);
  // const [show, setShow] = useState([{ index: false }]);
  const check = (id, index) => {
    let data = rows.slice();
    data[index].show = !data[index].show;
    setRows(data);
  };

  console.log(rows);
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell>
                <Checkbox />
              </TableCell>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">
                {row.protein}
                <MoreHorizIcon onClick={() => check(row.id, index)} />
                {row.show ? (
                  <Paper>
                    <MenuList>
                      <MenuItem>Profile</MenuItem>
                      <MenuItem>My account</MenuItem>
                      <MenuItem>Logout</MenuItem>
                    </MenuList>
                  </Paper>
                ) : null}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default DataTable;
