import React, { memo } from "react";
import { Button } from "./ButtonStyle";

const Index = ({ children, onClick, type }) => {
  return (
    <Button onClick={onClick} type={type}>
      {children}
    </Button>
  );
};

export default memo(Index);
