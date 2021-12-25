import React from "react";

const MyPokemonPage = React.lazy(() => import("../pages/mypokemon"));
const ListPage = React.lazy(() => import("../pages/list"));
const DetailPage = React.lazy(() => import("../pages/detail"));

const routes = [
  {
    path: "/",
    exact: true,
    component: MyPokemonPage,
  },
  {
    path: "/list",
    exact: true,
    component: ListPage,
  },
  {
    path: "/detail/:name",
    exact: true,
    component: DetailPage,
  },
];

export default routes;
