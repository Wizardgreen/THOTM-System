import React from "react";
import PropTypes from "prop-types";
import MaterialTable from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Button from "components/Button";
import TableCell from "./TableCell";
import mapping from "utils/mapping";

export const Cell = {
  Text: "text",
  Button: "btn",
};

const renderCell = (head, data) => {
  let content = null;
  const map = head.map;
  const value = data[head.name];
  switch (head.type) {
    case Cell.Text:
      content = map ? mapping({ key: value, map }) : value;
      break;
    case Cell.Button:
      content = (
        <Button
          variant="contained"
          color="secondary"
          onClick={() => head.func(data)}
        >
          {head.btnText}
        </Button>
      );
      break;
    default:
      return null;
  }

  return content === null ? null : (
    <TableCell align="left" key={data.id + head.name}>
      {content}
    </TableCell>
  );
};

export default function Table({ header = [], dataList = [] }) {
  return (
    <TableContainer style={{ marginTop: 40 }} component={Paper}>
      <MaterialTable size="small" stickyHeader>
        <TableHead>
          <TableRow>
            {header.map((head) => (
              <TableCell
                key={head.name}
                align="left"
                style={{ width: head.width }}
              >
                {head.label}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {dataList.map((item) => {
            return (
              <TableRow hover key={item.id}>
                {header.map((head) => renderCell(head, item))}
              </TableRow>
            );
          })}
        </TableBody>
      </MaterialTable>
    </TableContainer>
  );
}

Table.propTypes = {
  header: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      label: PropTypes.string,
      type: PropTypes.oneOf(Object.values(Cell)).isRequired,
      width: PropTypes.number,
    })
  ),
  data: PropTypes.array,
};
