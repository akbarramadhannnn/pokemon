import styled from "@emotion/styled";
import { css } from "@emotion/react";

const Button = styled.button`
  ${(props) =>
    props.type === "btn" &&
    css`
      background: #1269dc;
      color: #fff;
      padding: 12px 40px;
      outline: none;
      font-family: "Roboto", sans-serif;
      font-size: 16px;
      border-radius: 10px;
      border: 0;
      margin-right: 10px;

      &:last-child {
        margin-right: 0px;
      }

      &:hover {
        cursor: pointer;
        opacity: 0.7;
      }
    `}

  ${(props) =>
    props.type === "outline" &&
    css`
      background: #fff;
      color: #1269dc;
      padding: 12px 40px;
      outline: none;
      border: 1px solid #1269dc;
      font-family: "Roboto", sans-serif;
      font-size: 16px;
      border-radius: 10px;
      margin-right: 10px;

      &:last-child {
        margin-right: 0px;
      }

      &:hover {
        cursor: pointer;
        opacity: 0.7;
      }
    `}
`;

export { Button };
