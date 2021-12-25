import React, { memo } from "react";
import Label from "./LabelStyle";

const Index = ({ text }) => {
  return <Label>{text}</Label>;
};

export default memo(Index);
