import { combineReducers } from "redux";
import loadingReducer from "./data/loadingReducer";
import dataReducer from "./data/dataReducer";
import pageReducer from "./data/pageReducer";
import searchDataLoadingReducer from "./searchData/searchDataLoadingReducer";
import searchDataPageReducer from "./searchData/searchDataPageReducer";
import searchDataReducer from "./searchData/searchDataReducer";
import keywordReducer from "./searchData/keywordReducer";
import searchDataErrorReducer from "./searchData/searchDataErrorReducer";

const rootReducer = combineReducers({
  isLoading: loadingReducer,
  data: dataReducer,
  nextPage: pageReducer,
  searchDataIsLoading: searchDataLoadingReducer,
  searchResult: searchDataReducer,
  moreSearchResult: searchDataPageReducer,
  keyword: keywordReducer,
  noResultMessage: searchDataErrorReducer
});

export default rootReducer;
