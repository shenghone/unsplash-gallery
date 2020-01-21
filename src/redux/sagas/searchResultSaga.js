import { takeLatest, select, call, put } from "redux-saga/effects";
import { SEARCH_RESULT } from "../constants";
import { SET_SEARCH_DATA_ACTION, SET_RESULT_ERROR_ACTION } from "../actions";
import axios from "axios";

const baseURL = "https://api.unsplash.com/";
const getKeyword = state => state.keyword;

function* handleSearch() {
  let keyword = yield select(getKeyword);

  const axiosConfig = {
    method: "get",
    url: `${baseURL}search/photos?query=${keyword}&page=1&per_page=25`,
    headers: {
      Authorization: `Client-ID ${process.env.REACT_APP_ACCESS_KEY}`
    }
  };
  try {
    if (keyword === "") {
      yield put(SET_RESULT_ERROR_ACTION("Enter a keyword to search"));
    } else {
      const {
        data: { results }
      } = yield call(axios, axiosConfig);
      if (results.length !== 0) {
        yield put(SET_RESULT_ERROR_ACTION(null));
        yield put(SET_SEARCH_DATA_ACTION(results));
      } else {
        yield put(
          SET_RESULT_ERROR_ACTION(`Cannot find picture with keyword ${keyword}`)
        );
      }
    }
  } catch (err) {
    console.error(err);
  }
  /* 
  };*/
}

export default function* searchResultWatcher() {
  yield takeLatest(SEARCH_RESULT.LOAD, handleSearch);
}
