import styled from '@emotion/styled';

export const Backdrop = styled.div`
  position: fixed;
  right: 0;
  top: 0;
  background: rgba(0, 0, 0, 0.5);
  height: 100vh;
  width: 100%;
  z-index: 1000;
`;

export const Content = styled.div`
  position: fixed;
  z-index: 200;
  border: 1px solid #eee;
  background-color: white;
  padding: 30px 30px;
  box-sizing: border-box;
  top: 30%;
  left: 25%;
  width: 50%;
  border-radius: 4px;

  @media (min-width: 481px) and (max-width: 767px) {
    top: 40%;
    left: 8.5%;
    width: 84%;
  }
  @media (min-width: 320px) and (max-width: 480px) {
    top: 40%;
    left: 8.5%;
    width: 84%;
  }
`;

export const ButtonArea = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 10px;

  @media (min-width: 320px) and (max-width: 480px) {
    justify-content: center;
  }
`;

export const WrapperButton = styled.div`
  margin-right: 20px;
  &:last-child {
    margin-right: 0;
  }
`;

export const ButtonClose = styled.button`
  width: 90px;
  outline: none;
  border: 0;
  height: 38px;
  border-radius: 3px;
  background: white;
  border: 1px solid #1269dc;
  color: #1269dc;

  &:hover {
    cursor: pointer;
  }
`;

export const ButtonSubmit = styled.button`
  width: 90px;
  outline: none;
  border: 0;
  height: 38px;
  border-radius: 3px;
  background: #1269dc;
  color: white;

  &:hover {
    cursor: pointer;
  }

  &[disabled] {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
