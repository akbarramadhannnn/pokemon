import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { client } from "./graphql";
import { ApolloProvider } from "@apollo/client";
import "./index.css";
import App from "./App";
import GlobalStyle from "./GlobalStyle";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <ApolloProvider client={client}>
    <GlobalStyle />
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ApolloProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
