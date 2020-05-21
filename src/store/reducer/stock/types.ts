export const GET_STOCK_LIST_REQUEST = "GET_STOCK_LIST_REQUEST";
export const GET_STOCK_LIST_SUCCESS = "GET_STOCK_LIST_SUCCESS";
export const GET_STOCK_LIST_FAIL = "GET_STOCK_LIST_FAIL";

export interface GetStockListRequestAction {
  type: typeof GET_STOCK_LIST_REQUEST;
}

export interface GetStockListSuccessAction {
  type: typeof GET_STOCK_LIST_SUCCESS;
}

export interface GetStockListFailAction {
  type: typeof GET_STOCK_LIST_FAIL;
}

export type StockListActionTypes =
  | GetStockListRequestAction
  | GetStockListSuccessAction
  | GetStockListFailAction;
