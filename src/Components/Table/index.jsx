import React from "react";
import MaterialTable from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import { useTranslation } from "react-i18next";

export const CellType = {
  Text: "text",
  Button: "btn",
};

export default function Table({ header = [], data = [] }) {
  const { t } = useTranslation();
  const renderCell = (head, cell) => {
    let content = null;
    switch (head.type) {
      case CellType.Text:
        content = cell[head.name];
        break;
      case CellType.Button:
        content = (
          <Button
            variant="contained"
            color="secondary"
            onClick={() => head.func(cell)}
          >
            {t(head.btnText)}
          </Button>
        );
    }

    return content === null ? null : (
      <TableCell align="left" key={cell.id + head.name}>
        {content}
      </TableCell>
    );
  };
  return (
    <TableContainer style={{ marginTop: 40 }} component={Paper}>
      <MaterialTable size="small">
        <TableHead>
          <TableRow>
            {header.map((head) => (
              <TableCell
                key={head.name}
                align="left"
                style={{ width: head.width }}
              >
                {t(head.label)}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item) => {
            return (
              <TableRow key={item.id}>
                {header.map((head) => renderCell(head, item))}
              </TableRow>
            );
          })}
        </TableBody>
      </MaterialTable>
    </TableContainer>
  );
}
