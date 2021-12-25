import styled from "@emotion/styled";

const Container = styled.div`
  background: #fff;
  border-radius: 10px;
  padding: 20px;
  box-shadow: rgba(0, 0, 0, 0.1) 3px 3px 3px;
`;

const Content = styled.div`
  //   background: red;
  position: relative;
  display: grid;
  grid-template-columns: 1fr 5fr;
  grid-gap: 15px;
  margin-bottom: 20px;
  height: 100%;
  width: 100%;

  @media (min-width: 768px) and (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const WrapImage = styled.div`
  width: 300px;
  height: 300px;

  @media screen and (max-width: 768px) {
    width: 150px;
    height: 150px;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
`;

const WrapInfo = styled.div`
  width: 100%;
`;

const Row = styled.div`
  //   background: red;
  position: relative;
  display: grid;
  grid-template-columns: 1fr 0.2fr 5fr;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Title = styled.div`
  font-size: 18px;
  color: #36454f;
  font-weight: bold;
  line-height: 22px;
`;

const Dot = styled.div`
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const WrapText = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  max-height: 120px;
  overflow-x: scroll;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const WrapButton = styled.div`
  text-align: right;

  @media screen and (max-width: 768px) {
    text-align: center;
    display: flex;
    justify-content: space-between;
  }
`;

export {
  Container,
  Content,
  WrapImage,
  Image,
  WrapInfo,
  Row,
  Title,
  Dot,
  WrapText,
  WrapButton,
};
