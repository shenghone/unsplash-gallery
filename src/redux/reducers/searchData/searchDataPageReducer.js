import { SEARCH_RESULT } from "../../constants";

const searchDataPageReducer = (state = 0, action) => {
  if (action.type === SEARCH_RESULT.LOAD_SUCCESS) {
    return state + 1;
  }
  return state;
};

export default searchDataPageReducer;
