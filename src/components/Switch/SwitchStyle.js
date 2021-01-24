import styled from 'styled-components';

export const SwitchWrapper = styled.div`
  position: fixed;
  right: 0;
  top: 44%;
  background: transparent;
  height: auto;
  width: 60px;
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
  
  @media (min-width: 768px) and (max-width: 1024px) {
    width: 65%;
  }
  @media (min-width: 481px) and (max-width: 767px) {
    width: 65%;
  }
  @media (min-width: 320px) and (max-width: 480px) {
    width: 65%;
  }
`;

export const CloseArea = styled.div`
  width: 100%;
  text-align: right;

  p {
    font-size: 16px;

    &:hover {
      cursor: pointer;
      color: #00ace6;
    }

    @media (min-width: 320px) and (max-width: 480px) {
      font-size: 14px;
    }
  }
`;

export const HeadingArea = styled.div`
  width: 100%;

  h1 {
    font-size: 30px;

    @media (min-width: 320px) and (max-width: 480px) {
      font-size: 20px;
    }
  }
`;

export const List = styled.div`
  position: relative;
  background: transparent;
  width: 100%;
  max-height: 561px;
  overflow: auto;

  p {
    font-size: 16px;

    &:hover {
      cursor: pointer;
      color: #00ace6;
    }
  }

  @media (min-width: 320px) {
    max-height: 85vh;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  grid-gap: 25px;
  align-items: stretch;
  padding-right: 13px;
  padding-top: 13px;
  padding-bottom: 13px;
`;

export const Card = styled.div`
  position: relative;
  background: #ffffff;
  min-height: 150px;
  width: 100%;
  border-radius: 6px;
  box-shadow: rgba(0, 0, 0, 0.1) 3px 3px 20px;

  a {
    &:hover {
      cursor: pointer;
    }
  }

  img {
    width: 110px;
    height: 110px;

    @media (min-width: 320px) and (max-width: 480px) {
      width: 80px;
      height: 80px;
    }
  }
`;

export const NotFound = styled.div`
  text-align: center;
  padding: 210px 0px;

  h4 {
    color: #c0c0c0;
  }
`;

export const AreaButtonRemove = styled.div`
  text-align: right;
  padding: 10px 10px;

  button {
    width: 30px;
    height: 30px;
    background: red;
    border: 0;
    outline: none;
    font-size: 22px;
    color: #ffffff;

    &:hover {
      cursor: pointer;
    }

    @media (min-width: 320px) and (max-width: 480px) {
      width: 20px;
      height: 20px;
      font-size: 17px;
    }
  }

  @media (min-width: 320px) and (max-width: 480px) {
    padding: 5px 5px;
  }
`;

export const Icon = styled.div`
  position: relative;
  width: 100%;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 12px;
  box-shadow: rgba(0, 0, 0, 0.2) 3px 3px 20px;
  border-radius: 6px;
  background: #ffffff;
  span {
    display: block;
    width: 35px;
    height: 8px;
    margin-bottom: 5px;
    border-radius: 5px;
    background: #d3d3d3;
    transition: all 0.3s ease;

    &:last-child {
      margin-bottom: 0;
    }
  }
`;
