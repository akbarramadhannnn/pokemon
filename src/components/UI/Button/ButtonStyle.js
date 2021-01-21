import styled from 'styled-components';

const Button = styled.button`
  background: #00ace6;
  color: #ffffff;
  padding: 15px 30px;
  outline: none;
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  border-radius: 3px;
  border: 0;

  &:hover {
    cursor: pointer;
    opacity: .7;
  }
`;

export default Button;
