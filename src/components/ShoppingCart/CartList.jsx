import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableFooter from "@material-ui/core/TableFooter";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Fab from "@material-ui/core/Fab";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";
import SaveAltIcon from "@material-ui/icons/SaveAlt";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch } from "react-redux";
import { deleteOrder } from "store/slice/shoppingCart/actions";
import XLSX from "xlsx-style";

const useStyles = makeStyles({
  tableContainer: {
    maxWidth: 700,
  },
  download: {
    width: "100% !important",
  },
});
export default function CartList() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const orderList = useSelector((state) => state.shoppingCart.orderList);
  const fetchedItemList = useSelector((state) => state.firebase.data.stock);
  const fetchedMemberList = useSelector((state) => state.firebase.data.member);
  const headers = [
    { id: "name", label: t("item.name"), width: 400 },
    { id: "buyer", label: t("item.buyer") },
    { id: "quantity", label: t("item.quantity"), width: 100 },
    { id: "" },
  ];

  const onClickDelete = (orderId) => {
    dispatch(deleteOrder({ orderId }));
  };
  const onInputChange = (event) => {
    const reader = new FileReader();
    reader.onload = function (e) {
      const data = new Uint8Array(e.target.result);
      const workbook = XLSX.read(data, { type: "array" });
      console.log(workbook);
    };
    reader.readAsArrayBuffer(event.target.files[0]);
  };

  const createCSV = () => {
    const itemList = Object.assign({}, fetchedItemList);
    // 把預購資料帶入表單
    orderList.forEach(({ sku, userId, quantity: newQuantity }) => {
      const orderItem = itemList[sku];
      const quantity = orderItem.quantity
        ? Number(newQuantity) + Number(orderItem.quantity)
        : Number(newQuantity);
      const currentBuyer =
        userId === "stock"
          ? "現貨"
          : fetchedMemberList[userId].nickname ||
            fetchedMemberList[userId].name;
      const buyerList = orderItem.buyer
        ? `${orderItem.buyer}/ ${currentBuyer}`
        : currentBuyer;

      itemList[sku] = {
        ...orderItem,
        quantity,
        buyer: buyerList,
        sum: `NT$	${orderItem.cost.slice(4).replace(",", "") * newQuantity}`,
      };
    });

    // 將表單轉為可輸出的格式
    const head = [
      "簡碼",
      "產品編號",
      "英文品名",
      "中文品名",
      "包裝數量",
      "售價",
      "進價",
      "訂購數量",
      "小計",
      "系列",
      "種族",
      "訂購者",
    ];
    const content = Object.values(itemList).map((item) => [
      item.shortCode,
      item.sku,
      item.engName,
      item.chtName,
      item.pack,
      item.price.replace(",", ""),
      item.cost.replace(",", ""),
      item.quantity,
      item.sum,
      item.faction,
      item.series.replace(",", ""),
      item.buyer,
    ]);

    const workbook = XLSX.utils.book_new();
    const workSheetData = [head].concat(content);
    const workSheet = XLSX.utils.aoa_to_sheet(workSheetData);
    const time = new Date();
    const month = time.getMonth() + 1;
    const formatMonth = month >= 10 ? month : `0${month}`;
    const date = time.getDate();
    XLSX.utils.book_append_sheet(workbook, workSheet, "BSF");
    // XLSX.writeFile(
    //   workbook,
    //   `格林GW模型現貨商品訂購單_${formatMonth}${date}.xlsx`
    // );
    console.log(workbook);
  };

  return (
    <TableContainer className={classes.tableContainer} component={Paper}>
      <Table size="small">
        <TableHead>
          <TableRow>
            {headers.map((column) => (
              <TableCell key={column.id} style={{ width: column.width }}>
                {column.label}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {orderList.map((order) => (
            <TableRow key={order.orderId} hover>
              <TableCell>{fetchedItemList[order.sku].engName}</TableCell>
              <TableCell>
                {order.userId === "stock"
                  ? "現貨"
                  : fetchedMemberList[order.userId].nickname ||
                    fetchedMemberList[order.userId].name}
              </TableCell>
              <TableCell>{order.quantity}</TableCell>
              <TableCell>
                <Button
                  size="small"
                  onClick={() => onClickDelete(order.orderId)}
                >
                  <DeleteIcon />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell>
              <input type="file" onChange={onInputChange} />
            </TableCell>
            <TableCell />
            <TableCell />
            <TableCell align="right">
              <Fab
                className={classes.download}
                onClick={createCSV}
                color="secondary"
                variant="extended"
                size="small"
              >
                <SaveAltIcon />
              </Fab>
            </TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  );
}
