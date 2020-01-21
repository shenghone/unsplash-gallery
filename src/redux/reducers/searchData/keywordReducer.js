import { SET_KEYWORD } from "../../constants";

export default function(state = "", action) {
  if (action.type === SET_KEYWORD) {
    return (state = action.keyword);
  }
  return state;
}
