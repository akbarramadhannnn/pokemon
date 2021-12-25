import styled from "@emotion/styled";

const Menu = styled.ul`
  background: transparent;
  width: 100%;
  height: 100%;
  list-style-type: none;
  display: flex;
  align-items: center;
  padding: 0px;
  box-sizing: border-box;

  @media (min-width: 320px) and (max-width: 480px) {
    justify-content: center;
  }
`;

const List = styled.li`
  margin-right: 20px;

  a {
    color: #1b1b1b;

    &.active {
      color: #1269dc;
    }
  }
`;

export { Menu, List };
