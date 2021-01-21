import styled, { css } from 'styled-components';

const Title = styled.h1`
  color: #2b2f3c;
  font-size: ${(props) => (props.fontSize ? `${props.fontSize}px` : '28px')};
  margin: 0;
  padding: ${(props) =>
    props.paddingTopBottom ? `${props.paddingTopBottom}px` : '0px'};
  ${(props) =>
    props.paddingRightLeft ? `${props.paddingRightLeft}px` : '0px'};
  text-align: ${(props) => (props.align ? `${props.align}` : 'left')};
  ${(props) =>
    props.fontWeight &&
    css`
      font-weight: props.fontWeight;
    `}
`;

export default Title;
