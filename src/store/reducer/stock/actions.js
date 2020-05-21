import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import { GET_STOCK_LIST_REQUEST, GetStockListRequestAction } from "./types";

export function stockListRequest(): GetStockListRequestAction {
  return { type: GET_STOCK_LIST_REQUEST };
}

// export function getStockList(): ThunkAction<Promise<void>, {}, {}, AnyAction> {
// return (dispatch, getState) => {
// dispatch(stockListRequest());
// return fetch();
// };
// }
