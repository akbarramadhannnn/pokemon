import React, { memo } from "react";
import { Link, withRouter } from "react-router-dom";
import {
  List,
  WrapImage,
  Title,
  Info,
  WrapButton,
  ButtonRemove,
} from "./PokemonStyle";

const Index = ({ data, onRemove, location }) => {
  const pathname = location.pathname;
  return (
    <List>
      {onRemove && (
        <WrapButton>
          <ButtonRemove onClick={() => onRemove(data.id)}>X</ButtonRemove>
        </WrapButton>
      )}
      <Link to={pathname === "/" ? `/` : `/detail/${data.name}`}>
        <WrapImage>
          <img src={data.image} alt="Pokemon" />
        </WrapImage>

        <Info>
          <Title>{data.name}</Title>
          {data.count !== undefined && <p>Owned : {data.count}</p>}
        </Info>
      </Link>
    </List>
  );
};

export default memo(withRouter(Index));
