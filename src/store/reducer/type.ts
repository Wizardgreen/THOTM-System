import { compose } from "redux";
import { FirebaseReducer } from "react-redux-firebase";
import rootReducer from "./index";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

export interface Commodity {
  sku: string;
  chtName: string;
  cost: string;
  count: string;
  engName: string;
  faction: string;
  // inStock: string;
  pack: string;
  price: string;
  // quantity: string;
  series: string;
  shortCode: string;
}

export interface Member {
  birthday: string;
  email: string;
  expiryDate: string;
  id: string;
  inhabit: string;
  isMemberCardReceive: boolean;
  joinDate: string;
  journeyBegin: string;
  lineId: string;
  name: string;
  nickname: string;
  note: string;
  phone: string;
  program: string;
  storage: string;
}

interface Schema {
  stock: { [key: string]: Commodity };
  member: { [key: string]: Member };
}

export interface RootStateType {
  stock: {};
  firebase: FirebaseReducer.Reducer<{}, Schema>;
}

export type StoreType = ReturnType<typeof rootReducer>;
