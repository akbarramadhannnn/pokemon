import styled from 'styled-components';

export const SwitchWrapper = styled.div`
  position: fixed;
  right: 0;
  top: 44%;
  background: #00ace6;
  height: 100px;
  width: 50px;
  border-radius: 4px;
  z-index: 100;

  &:hover {
    cursor: pointer;
  }
`;

export const DrawerWrapper = styled.div`
  position: fixed;
  right: 0;
  top: 0;
  background: rgba(0, 0, 0, 0.5);
  height: 100vh;
  width: 100%;
  z-index: 100;
`;

export const ContentArea = styled.div`
  position: relative;
  padding-top: 0px;
  padding-right: 20px;
  padding-bottom: 20px;
  padding-left: 20px;
`;

export const ListArea = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  background: #ffffff;
  height: 100vh;
  width: 40%;
  z-index: 110;
`;

export const CloseArea = styled.div`
  width: 100%;

  p {
    font-size: 16px;

    &:hover {
      cursor: pointer;
      color: #00ace6;
    }
  }
`;

export const HeadingArea = styled.div`
  width: 100%;

  h1 {
    font-size: 30px;
  }
`;

export const List = styled.div`
  background: black;
  width: 100%;
  min-height: 561px;

  p {
    font-size: 16px;

    &:hover {
      cursor: pointer;
      color: #00ace6;
    }
  }
`;
