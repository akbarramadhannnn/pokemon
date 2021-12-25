import styled from "@emotion/styled";
import { css } from "@emotion/react";

const Wrap = styled.div`
  margin-bottom: 30px;
  ${(props) =>
    props.center &&
    css`
      display: flex;
      justify-content: center;
      align-items: center;
    `}
`;

const Text = styled.p`
  margin: 0px;
  ${(props) =>
    props.color &&
    css`
      color: ${props.color};
    `}
  line-height: 25px;
  font-weight: 500;
`;

export { Wrap, Text };
