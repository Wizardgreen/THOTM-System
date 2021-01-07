import PropTypes from "prop-types";
import MaterialTable from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Button from "components/Button";
import Link from "components/Link";
import TableCell from "./TableCell";
import mapping from "utils/mapping";
import { isFunction } from "utils/lodash";

export const Cell = {
  Text: "text",
  Button: "btn",
  Link: "link",
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
          variant="outlined"
          color="secondary"
          onClick={() => head.func(data)}
        >
          {head.label}
        </Button>
      );
      break;
    case Cell.Link:
      content = (
        <Link
          text={head.text}
          path={isFunction(head.path) ? head.path(data) : head.path}
        />
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

export function Table({ header = [], dataList = [] }) {
  return (
    <TableContainer component={Paper}>
      <MaterialTable stickyHeader>
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
