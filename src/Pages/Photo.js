import React from "react";
import { useParams } from "react-router-dom";

const Photo = () => {
  const params = useParams();
  console.log(params);
  return <h4>hehe</h4>;
};

export default Photo;
