import styled from 'styled-components';

const WrapperPokemonDetail = styled.div`
  position: relative;
  padding: 30px 30px;
`;

export const Container = styled.div`
  position: relative;
  padding: 30px 30px;
`;

export const WrapperContent = styled.div`
  position: relative;
  display: flex;

  @media (min-width: 481px) and (max-width: 767px) {
    justify-content: center;
    flex-wrap: wrap;
  }

  @media (min-width: 320px) and (max-width: 480px) {
    justify-content: center;
    flex-wrap: wrap;
  }
`;

export const ImageArea = styled.div`
  width: 450px;
  height: 300px;
  margin-right: 40px;

  img {
    width: 100%;
    height: 100%;
  }

  @media (min-width: 481px) and (max-width: 767px) {
    margin-right: 0px;
  }

  @media (min-width: 320px) and (max-width: 480px) {
    margin-right: 0px;
  }
`;

export const InfoArea = styled.div`
  width: 100%;

  @media (min-width: 320px) and (max-width: 480px) {
    padding: 20px 0px;
  }
`;

export const InfoAreaTop = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;

  @media (min-width: 481px) and (max-width: 767px) {
    flex-wrap: wrap;
  }

  @media (min-width: 320px) and (max-width: 480px) {
    flex-wrap: wrap;
  }
`;

export const InfoAreaBottom = styled.div`
  position: relative;
  display: flex;
  margin-bottom: 10px;

  @media (min-width: 481px) and (max-width: 767px) {
    flex-wrap: wrap;
  }

  @media (min-width: 320px) and (max-width: 480px) {
    flex-wrap: wrap;
  }
`;

export const TitleArea = styled.div`
  width: 40%;

  @media (min-width: 481px) and (max-width: 767px) {
    width: 100%;
  }

  @media (min-width: 320px) and (max-width: 480px) {
    width: 100%;
  }
`;

export const ProgressBar = styled.div`
  background: #e5e5e5;
  width: 100%;
  border-radius: 6px;

  .bar {
    width: ${(props) => `${props.value}%`};
    border-radius: 6px;
    background: #11c4dd;
    display: flex;
    justify-content: center;
    color: white;
    height: 100%;
  }
`;

export default WrapperPokemonDetail;
