import React, { Fragment } from "react";
import { Header, Content } from "./layoutStyle";

import Menu from './Menu';

const Index = ({ children }) => {
  return (
    <Fragment>
      <Header>
        <Menu />
      </Header>
      
      <Content>{children}</Content>
    </Fragment>
  );
};

export default Index;
