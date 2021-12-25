import styled from "@emotion/styled";

const Header = styled.header`
  position: relative;
  box-shadow: rgb(0 0 0 / 7%) 0px 4px 6px -1px;
  display: flex;
  flex-direction: column;
  background: #fff;
  height: 70px;
  // padding: 0px 150px;
  width: 100%;
  box-sizing: border-box;

  @media (min-width: 1281px) {
    // background: red;
    padding: 0px 350px;
  }
  
  @media (min-width: 1025px) and (max-width: 1280px) {
    // background: blue;
    padding: 0px 250px;
  }
  
  @media (min-width: 768px) and (max-width: 1024px) {
    // background: yellow;
    padding: 0px 150px;
  }
  
  @media (min-width: 481px) and (max-width: 767px) {
    // background: green;
    padding: 0px 50px;
  }
  
  @media (min-width: 320px) and (max-width: 480px) {
    // background: purple;
    padding: 0px 15px;
  }

  // @media screen and (max-width: 768px) {
  //   padding: 0px 15px;
  // }
`;

const Content = styled.div`
  padding: 0px 150px;
  margin-top: 20px;

  @media (min-width: 1281px) {
    // background: red;
    padding: 0px 350px;
  }
  
  @media (min-width: 1025px) and (max-width: 1280px) {
    // background: blue;
    padding: 0px 250px;
  }
  
  @media (min-width: 768px) and (max-width: 1024px) {
    // background: yellow;
    padding: 0px 150px;
  }
  
  @media (min-width: 481px) and (max-width: 767px) {
    // background: green;
    padding: 0px 50px;
  }
  
  @media (min-width: 320px) and (max-width: 480px) {
    // background: purple;
    padding: 0px 15px;
  }

  // @media screen and (max-width: 768px) {
  //   padding: 0px 15px;
  // }
`;

export { Header, Content };
