import React from "react";

import GridItem from "./GridItem";
import styled from "styled-components";

const Grid = (data, ...rest) => {
  const GridWrapper = styled.section`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    padding: 25px;
    grid-gap: 25px;
    grid-auto-flow: dense;
    align-items: stretch;
    width: 100vw;
    box-sizing: border-box;
  `;

  return (
    <GridWrapper>
      {data &&
        data.data.map((item, index) => {
          return <GridItem key={index + item.id} detail={item} />;
        })}
    </GridWrapper>
  );
};

export default Grid;
