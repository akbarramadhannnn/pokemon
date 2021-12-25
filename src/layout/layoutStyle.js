import styled from "@emotion/styled";

const Header = styled.header`
  position: relative;
  box-shadow: rgb(0 0 0 / 7%) 0px 4px 6px -1px;
  display: flex;
  flex-direction: column;
  background: #fff;
  height: 70px;
  padding: 0px 150px;
  width: 100%;
  box-sizing: border-box;

  @media screen and (max-width: 768px) {
    padding: 0px 15px;
  }
`;

const Content = styled.div`
  padding: 0px 150px;
  margin-top: 20px;

  @media screen and (max-width: 768px) {
    padding: 0px 15px;
  }
`;

export { Header, Content };
