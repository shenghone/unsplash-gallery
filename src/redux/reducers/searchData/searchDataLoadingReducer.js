import { SEARCH_RESULT } from "../../constants";

const searchDataLoadingReducer = (state = false, action) => {
  switch (action.type) {
    case SEARCH_RESULT.LOAD:
      return true;
    case SEARCH_RESULT.LOAD_SUCCESS:
      return false;
    case SEARCH_RESULT.LOAD_FAIL:
      return false;
    case SEARCH_RESULT.NO_RESULT_ERROR:
      return false;
    default:
      return state;
  }
};

export default searchDataLoadingReducer;
