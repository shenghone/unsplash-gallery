import { SEARCH_RESULT } from "../../constants";

const searchDataErrorReducer = (state = null, action) => {
  if (action.type === SEARCH_RESULT.NO_RESULT_ERROR) {
    return action.message;
  }
  return state;
};

export default searchDataErrorReducer;
