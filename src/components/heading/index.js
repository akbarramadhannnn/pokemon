import React, { memo } from "react";
import { Heading } from "./HeadingStyle";

const Index = ({ children }) => {
  return <Heading>{children}</Heading>;
};

export default memo(Index);
