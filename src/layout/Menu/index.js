import React, { useCallback } from "react";
import { withRouter, Link } from "react-router-dom";
import { Menu, List } from "./MenuStyle";

const Index = ({ location }) => {
  const { pathname } = location;
  const isActive = useCallback(
    (url) => {
      if (url === pathname) {
        return "active";
      }
      return "";
    },
    [pathname]
  );
  return (
    <Menu>
      <List>
        <Link to="/" className={isActive("/")}>
          My Pokemon
        </Link>
      </List>
      <List>
        <Link to="/list" className={isActive("/list")}>
          Pokemon List
        </Link>
      </List>
    </Menu>
  );
};

export default withRouter(Index);
