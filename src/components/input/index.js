import React, { memo } from "react";
import Input from "./InputStyle";

const Index = ({ value, onChange }) => {
  return <Input value={value} onChange={onChange} />;
};

export default memo(Index);
