import { DATA } from "../../constants";

const loadingReducer = (state = false, action) => {
  switch (action.type) {
    case DATA.LOAD:
      return true;
    case DATA.LOAD_SUCCESS:
      return false;
    case DATA.LOAD_FAIL:
      return false;
    default:
      return state;
  }
};

export default loadingReducer;
