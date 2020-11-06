import { GET_MEMBER_LIST } from "./types";

export function getMemberList() {
  return async (dispatch, _, getFirebase) => {
    const payload = await getFirebase()
      .ref("member")
      .once("value")
      .then((snapshot) => snapshot.val());

    return dispatch({
      type: GET_MEMBER_LIST,
      payload,
    });
  };
}
