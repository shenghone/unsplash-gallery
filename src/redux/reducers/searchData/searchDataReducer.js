import { SEARCH_RESULT } from "../../constants";

const searchDataReducer = (state = [], action) => {
  if (action.type === SEARCH_RESULT.LOAD_SUCCESS) {
    if (action.data.length === 0) {
      return [...action.data];
    }
    return [...state, ...action.data];
  }
  return state;
};

export default searchDataReducer;
