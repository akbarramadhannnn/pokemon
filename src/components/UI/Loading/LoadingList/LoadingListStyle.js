import styled from 'styled-components';

const Card = styled.div`
  position: relative;
  background: #ffffff;
  min-height: 220px;
  width: 100%;
  border-radius: 6px;
  box-shadow: rgba(0, 0, 0, 0.1) 3px 3px 20px;

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
    width: 100%;
    height: 70%;
    border-radius: 6px 6px 0px 0px;
  }

  .box-line {
    width: 150px;
    height: 20px;
    margin: 15px 150px 70px 70px;
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

export default Card;
