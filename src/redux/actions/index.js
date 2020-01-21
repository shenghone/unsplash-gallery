import { DATA, SEARCH_RESULT, SET_KEYWORD } from "../constants";

export const LOAD_DATA_ACTION = () => ({
  type: DATA.LOAD
});

export const SET_DATA_ACTION = data => ({
  type: DATA.LOAD_SUCCESS,
  data
});

export const LOAD_SEARCH_DATA_ACTION = () => ({
  type: SEARCH_RESULT.LOAD
});

export const SET_SEARCH_DATA_ACTION = data => ({
  type: SEARCH_RESULT.LOAD_SUCCESS,
  data
});

export const SET_RESULT_ERROR_ACTION = message => ({
  type: SEARCH_RESULT.NO_RESULT_ERROR,
  message
});

export const SET_KEYWORD_ACTION = keyword => ({
  type: SET_KEYWORD,
  keyword
});
