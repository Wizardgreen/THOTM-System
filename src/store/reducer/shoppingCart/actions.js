import { ADD_ORDER, DELETE_ORDER, ADD_ITEM_TO_ORDER_LIST } from "./types";

export const addOrder = ({ sku, orderId, userId, quantity }) => {
  return {
    type: ADD_ORDER,
    orderId,
    userId,
    sku,
    quantity,
  };
};

export const deleteOrder = ({ orderId }) => {
  return {
    type: DELETE_ORDER,
    orderId,
  };
};
