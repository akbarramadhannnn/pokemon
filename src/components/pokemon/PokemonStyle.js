import styled from "@emotion/styled";

const List = styled.div`
  position: relative;
  background: #ffffff;
  // min-height: 150px;
  padding: 20px 0px;
  width: 100%;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.1) 3px 3px 3px;

  a {
    color: #333333;
    &:hover {
      cursor: pointer;
    }
  }
`;

const WrapImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: transparent;
  width: 100%;

  img {
    // width: 110px;
    height: 110px;
  }
`;

const Info = styled.div`
  position: relative;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 19px;
  margin-top: 10px;
`;

const WrapButton = styled.div`
  position: absolute;
  top: 10px;
  right: 0;
  margin-right: 10px;
`;

const ButtonRemove = styled.button`
  outline: none;
  background: red;
  border: none;
  border-radius: 4px;
  color: #fff;

  &:hover {
    cursor: pointer;
  }
`;

export { List, WrapImage, Title, Info, WrapButton, ButtonRemove };
