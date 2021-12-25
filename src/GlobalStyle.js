import { Global, css } from "@emotion/react";

const GlobalStyle = () => (
  <Global
    styles={css`
      body {
        margin: 0;
        padding: 0;
        font-family: "Poppins", sans-serif;
        background: #fbf9fa;
      }

      a {
        text-decoration: none;
      }

      h1,
      h2,
      h3,
      h4,
      h5 {
        margin: 0px;
      }
    `}
  />
);

export default GlobalStyle;
