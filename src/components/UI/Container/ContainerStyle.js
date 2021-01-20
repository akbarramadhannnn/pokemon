import styled, { css } from 'styled-components';

const Container = styled.div`
  position: relative;
  padding-top: ${(props) => (props.paddingTop ? `${props.paddingTop}px` : '0')};
  padding-right: ${(props) =>
    props.paddingRight ? `${props.paddingRight}px` : '0'};
  padding-bottom: ${(props) =>
    props.paddingBottom ? `${props.paddingBottom}px` : '0'};
  padding-left: ${(props) =>
    props.paddingLeft ? `${props.paddingLeft}px` : '0'};
  ${(props) =>
    props.center &&
    css`
      text-align: center;
    `}
`;

export default Container;
