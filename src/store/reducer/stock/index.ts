import { GET_STOCK_LIST_REQUEST, StockListActionTypes } from "./types";

const initState = {};

export default function (state = initState, action: StockListActionTypes) {
  switch (action.type) {
    case GET_STOCK_LIST_REQUEST:
      return state;
    default:
      return state;
  }
}
