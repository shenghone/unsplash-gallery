import React, { useCallback } from "react";
import { DATA, SEARCH_RESULT } from "../redux/constants";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

const LoadingButton = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const ADD_PAGE = useCallback(() => dispatch({ type: DATA.LOAD }), [dispatch]);
  const ADD_SEARCH_RESULT_PAGE = useCallback(
    () => dispatch({ type: SEARCH_RESULT.LOAD }),
    [dispatch]
  );
  const handleIncrement = () => {
    if (location.pathname === "/") {
      ADD_PAGE();
    } else if (location.pathname === "/search") {
      ADD_SEARCH_RESULT_PAGE();
    }
  };

  const LoadingButtonWrapper = styled.div`
    display: grid;

    justify-self: center;
    margin: 1rem auto;
    width: 90%;
    > button {
      padding: 8px;
      border-radius: 4px;
      font-size: 10px;
      outline: none;
      letter-spacing: 3px;
      cursor: pointer;
    }
  `;
  return (
    <LoadingButtonWrapper>
      <button onClick={() => handleIncrement()}>load more</button>
    </LoadingButtonWrapper>
  );
};

export default LoadingButton;
