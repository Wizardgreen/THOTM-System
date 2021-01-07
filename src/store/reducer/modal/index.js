//
import { OPEN_MODAL, CLOSE_MODAL } from "./types";

const initalState = {
  open: false,
};

export default function modal(state = initalState, action) {
  switch (action.type) {
    case OPEN_MODAL:
      return {
        ...state,
        open: true,
      };
    case CLOSE_MODAL:
      return initalState;
    default:
      return state;
  }
}
