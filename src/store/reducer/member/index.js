import { GET_MEMBER_LIST } from "./types";

export default function member(state = {}, action) {
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
