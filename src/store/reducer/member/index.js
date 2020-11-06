import { GET_MEMBER_LIST } from "./types";
const initialState = {};

const checkLocalStorage = () => {};

export default function global(state = initialState, action) {
  switch (action.type) {
    case GET_MEMBER_LIST:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
}
