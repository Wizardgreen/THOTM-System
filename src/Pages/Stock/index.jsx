import React, { useState, useEffect } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { isLoaded } from "react-redux-firebase";
import OrderModal from "./OrderModal";

export default function Stock() {
  const [itemList, setItemList] = useState([]);
  const [memberList, setMemberList] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const { t } = useTranslation();
  const fetchedItemList = useSelector((state) => state.firebase.data.stock);
  const fetchedMemberList = useSelector((state) => state.firebase.data.member);
  const headers = [
    { id: "name", label: t("item.name"), width: 400 },
    { id: "sku", label: "SKU", width: 100 },
    {
      id: "pack",
      label: t("item.pack"),
      width: 70,
      align: "center",
    },
    {
      id: "cost",
      label: t("item.cost"),
      width: 100,
    },
    {
      id: "price",
      label: t("item.price"),
      width: 100,
    },
    {
      id: "inStock",
      label: t("item.inStock"),
      width: 70,
      align: "center",
    },
    { id: "none" },
  ];

  useEffect(() => {
    if (isLoaded(fetchedItemList)) {
      const data = Object.values(fetchedItemList).map((item) => {
        return {
          ...item,
          inStock: 0,
          price: item.price.slice(4),
          cost: item.cost.slice(4),
        };
      });
      setItemList(data);
    }

    if (isLoaded(fetchedMemberList)) {
      const stockInfo = { id: "stock", name: "現貨", nickname: "現貨" };
      setMemberList([stockInfo].concat(Object.values(fetchedMemberList)));
    }
  }, [fetchedItemList, fetchedMemberList]);
  return (
    <TableContainer style={{ marginTop: 40 }} component={Paper}>
      {memberList.length > 0 && (
        <OrderModal
          open={selectedItem !== null}
          memberList={memberList}
          item={selectedItem}
          onClose={() => setSelectedItem(null)}
        />
      )}
      <Table size="small">
        <TableHead>
          <TableRow>
            {headers.map((column) => (
              <TableCell
                key={column.id}
                align={column.align}
                style={{ width: column.width }}
              >
                {column.label}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {itemList.length > 0 &&
            itemList.map((item) => {
              return (
                <TableRow key={item.sku} hover>
                  <TableCell align="left">{item.engName}</TableCell>
                  <TableCell align="left">{item.sku}</TableCell>
                  <TableCell align="center">{item.pack}</TableCell>
                  <TableCell align="left">{item.cost}</TableCell>
                  <TableCell align="left">{item.price}</TableCell>
                  <TableCell align="center">{item.inStock}</TableCell>
                  <TableCell align="center">
                    <Button
                      variant="contained"
                      color="secondary"
                      onClick={() => setSelectedItem(item)}
                    >
                      加入
                    </Button>
                  </TableCell>
                </TableRow>
              );
            })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
