import styled from 'styled-components';

const WrapperPokemonDetail = styled.div`
  position: relative;
  padding: 30px 30px;

  .shine {
    background: #f6f7f8;
    background-image: linear-gradient(
      to right,
      #f6f7f8 0%,
      #edeef1 20%,
      #f6f7f8 40%,
      #f6f7f8 100%
    );
    background-repeat: no-repeat;
    background-size: 100% auto;
    display: inline-block;
    position: relative;

    animation-duration: 1s;
    animation-fill-mode: forwards;
    animation-iteration-count: infinite;
    animation-name: placeholderShimmer;
    animation-timing-function: linear;
  }

  .box-image {
    width: 300px;
    height: 300px;
    border-radius: 5px 5px 0px 0px;
  }

  .box-line {
    width: 100%;
    height: 30px;
    margin-bottom: 16.5px;
    border-radius: 6px;
  }

  @keyframes placeholderShimmer {
    0% {
      background-position: -468px 0;
    }

    100% {
      background-position: 850px 0;
    }
  }
`;

export const Card = styled.div`
  position: relative;
  background: #ffffff;
  min-height: 150px;
  width: 100%;
  border-radius: 6px;
  box-shadow: rgba(0, 0, 0, 0.1) 3px 3px 20px;
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

export default WrapperPokemonDetail;
