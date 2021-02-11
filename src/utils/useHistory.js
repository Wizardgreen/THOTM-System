import { useHistory as rrdUseHistory } from "react-router-dom";

export default function useHistory() {
  const history = rrdUseHistory();
  return history;
}
