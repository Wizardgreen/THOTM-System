import React, { useState, useEffect, FunctionComponent } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { useTranslation } from "react-i18next";
import { Commodity } from "../../store/reducer/type";
import { useTypedSelector } from "../../store";
import {
  useFirebaseConnect,
  isLoaded,
  isEmpty,
  useFirebase,
} from "react-redux-firebase";

interface OrderableCommodity extends Commodity {
  quantity: number;
  inStock: number;
}

export default function Stock() {
  useFirebaseConnect(["stock"]);
  const [stockList, setStockList] = useState<Commodity[]>([]);
  const { t } = useTranslation();
  const fetchedStock = useTypedSelector((state) => state.firebase.data.stock);
  useEffect(() => {
    if (isLoaded(fetchedStock)) {
      setStockList(() => {
        const keys = Object.keys(fetchedStock);
        return keys.map((key) => fetchedStock[key]);
      });
    }
  }, [fetchedStock, isLoaded]);

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>{t("pages.stock.name")}</TableCell>
            <TableCell align="right">SKU</TableCell>
            <TableCell align="right">{t("pages.stock.pack")}</TableCell>
            <TableCell align="right">{t("pages.stock.cost")}</TableCell>
            <TableCell align="right">{t("pages.stock.price")}</TableCell>
            <TableCell align="right">{t("pages.stock.quantity")}</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {isLoaded(stockList) ? (
            Object.keys(stockList).map((key) => {
              return (
                <TableRow key={key}>
                  {/* <TableCell component="th" scope="row">
                    {stockList[key].engName}
                  </TableCell>
                  <TableCell align="right">{key}</TableCell>
                  <TableCell align="right">{stockList[key].pack}</TableCell>
                  <TableCell align="right">{stockList[key].cost}</TableCell>
                  <TableCell align="right">{stockList[key].price}</TableCell> */}
                </TableRow>
              );
            })
          ) : (
            <div>loading</div>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
