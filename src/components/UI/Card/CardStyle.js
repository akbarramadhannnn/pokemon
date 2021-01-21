import styled from 'styled-components';

const Card = styled.div`
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
`;

export default Card;
