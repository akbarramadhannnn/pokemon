import styled, { css } from 'styled-components';

const Title = styled.h1`
  color: ${(props) => (props.color ? `${props.color}` : '#2b2f3c')};
  font-size: ${(props) => (props.fontSize ? `${props.fontSize}px` : '28px')};
  margin: 0;
  padding-top: ${(props) =>
    props.paddingTop ? `${props.paddingTop}px` : '0px'};
  padding-right: ${(props) =>
    props.paddingRight ? `${props.paddingRight}px` : '0px'};
  padding-bottom: ${(props) =>
    props.paddingBottom ? `${props.paddingBottom}px` : '0px'};
  padding-left: ${(props) =>
    props.paddingLeft ? `${props.paddingLeft}px` : '0px'};
  text-align: ${(props) => (props.align ? `${props.align}` : 'left')};
  ${(props) =>
    props.fontWeight &&
    css`
      font-weight: props.fontWeight;
    `}
`;

export default Title;
