import { useState, useEffect } from "react";
import Table, { Cell } from "components/Table";
import { useSelector } from "react-redux";
import { isLoaded } from "react-redux-firebase";
import OrderModal from "./OrderModal";

export function Stock() {
  const [itemList, setItemList] = useState([]);
  const [memberList, setMemberList] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const fetchedItemList = useSelector((state) => state.firebase.data.stock);
  const fetchedMemberList = useSelector((state) => state.firebase.data.member);
  const tableHeader = [
    { name: "name", label: "item.name", type: Cell.Text, width: 400 },
    { name: "sku", label: "SKU", type: Cell.Text, width: 100 },
    { name: "pack", label: "item.pack", type: Cell.Text, width: 70 },
    { name: "cost", label: "item.cost", type: Cell.Text, width: 100 },
    { name: "price", label: "item.price", type: Cell.Text, width: 100 },
    { name: "inStock", label: "item.inStock", type: Cell.Text, width: 70 },
    {
      name: "none",
      type: Cell.Button,
      btnText: "加入",
      func: (cell) => setSelectedItem(cell),
    },
  ];

  useEffect(() => {
    if (isLoaded(fetchedItemList)) {
      const data = Object.values(fetchedItemList).map((item) => {
        return {
          ...item,
          id: item.sku,
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
    <div className="stock-page">
      <Table header={tableHeader} data={itemList} />
      {memberList.length > 0 && (
        <OrderModal
          open={selectedItem !== null}
          memberList={memberList}
          item={selectedItem}
          onClose={() => setSelectedItem(null)}
        />
      )}
    </div>
  );
}
