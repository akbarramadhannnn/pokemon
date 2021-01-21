import styled from 'styled-components';

const Col = styled.div`
  position: relative;
  margin-top: ${(props) => (props.marginTop ? `${props.marginTop}px` : '0px')};
  margin-right: ${(props) =>
    props.marginRight ? `${props.marginRight}px` : '0px'};
  margin-bottom: ${(props) =>
    props.marginBottom ? `${props.marginBottom}px` : '0px'};
  margin-left: ${(props) =>
    props.marginLeft ? `${props.marginLeft}px` : '0px'};
`;

export default Col;
