import { takeLatest, call, put } from "redux-saga/effects";
import { DATA } from "../constants";
import { SET_DATA_ACTION } from "../actions";
import axios from "axios";

const photoBaseUrl = "https://api.unsplash.com/photos/";

export const getPage = state => state.nextPage;

export function* handleDATALoad() {
  try {
    const axiosConfig = {
      method: "get",
      url: `${photoBaseUrl}random?count=25`,
      headers: {
        Authorization: `Client-ID ${process.env.REACT_APP_ACCESS_KEY}`
      }
    };
    const { data } = yield call(axios, axiosConfig);

    yield put(SET_DATA_ACTION(data));
  } catch (err) {
    console.error(err);
  }
}

export default function* watchDataLoad() {
  yield takeLatest(DATA.LOAD, handleDATALoad);
}
