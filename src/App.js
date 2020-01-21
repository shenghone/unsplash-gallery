import React, { useCallback, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Grid from "./components/Grid";
import Description from "./components/Description";
import styled from "styled-components";
import LoadingButton from "./components/LoadingButton";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { DATA } from "./redux/constants";
import _ from "lodash";

const AppWrapper = styled.div`
  width: 100vw;
  display: grid;
  position: absolute;
`;

function App() {
  const { pathname } = useLocation();
  const data = useSelector(state => state.data);

  const searchResult = useSelector(state => state.searchResult);
  const dispatch = useDispatch();
  const LOAD_DATA = useCallback(() => dispatch({ type: DATA.LOAD }), [
    dispatch
  ]);
  console.log(process.env.REACT_APP_ACCESS_KEY);
  useEffect(() => {
    LOAD_DATA();
  }, [LOAD_DATA]);
  const getCoverPic = pics => {
    return _.sample(pics);
  };
  const getContent = pathname => {
    if (pathname === "/") {
      return (
        <AppWrapper>
          <Grid data={data} />
          <LoadingButton />
        </AppWrapper>
      );
    } else if (pathname === "/search") {
      return (
        <AppWrapper>
          <Grid data={searchResult} />
          {searchResult.length > 0 ? <LoadingButton /> : null}
        </AppWrapper>
      );
    }
  };
  return (
    <>
      {data && <Description defaultCover={getCoverPic(data)} />}
      {getContent(pathname)}
    </>
  );
}

export default App;
