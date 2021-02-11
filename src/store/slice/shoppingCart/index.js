import { ADD_ORDER, DELETE_ORDER, ADD_ITEM_TO_ORDER_LIST } from "./types";

const initState = {
  itemCount: 0,
  orderList: [],
};

export default function shoppingCart(state = initState, action) {
  let orderList = [];
  switch (action.type) {
    case ADD_ORDER:
      orderList = state.orderList.concat([
        {
          orderId: action.orderId,
          userId: action.userId,
          sku: action.sku,
          quantity: action.quantity,
        },
      ]);
      return {
        ...state,
        itemCount: orderList.length,
        orderList,
      };
    case DELETE_ORDER:
      orderList = state.orderList.filter(
        (order) => order.orderId !== action.orderId
      );
      return {
        ...state,
        itemCount: orderList.length,
        orderList,
      };
    case ADD_ITEM_TO_ORDER_LIST:
      return state;
    default:
      return state;
  }
}
