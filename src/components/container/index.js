import React, { memo } from "react";
import { Container } from "./ContainerStyle";

const Index = ({ children, center, marginTop, marginBottom }) => {
  return (
    <Container
      center={center}
      marginTop={marginTop}
      marginBottom={marginBottom}
    >
      {children}
    </Container>
  );
};

export default memo(Index);
