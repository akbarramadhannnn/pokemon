import React, { memo } from "react";
import { Wrap, Text } from "./TextStyle";

const Index = ({ children, center, color }) => {
  return (
    <Wrap center={center}>
      <Text color={color}>{children}</Text>
    </Wrap>
  );
};

export default memo(Index);
