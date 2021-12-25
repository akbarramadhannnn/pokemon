import React, { memo } from "react";
import {
  Backdrop,
  Content,
  ButtonArea,
  ButtonClose,
  ButtonSubmit,
  WrapperButton,
} from "./ModalStyle";

const Index = ({ children, buttonLeft, buttonRight }) => {
  return (
    <Backdrop>
      <Content>
        {children}
        <ButtonArea>
          {buttonLeft && buttonLeft.isShow && (
            <WrapperButton>
              <ButtonClose onClick={buttonLeft.onClick}>
                {buttonLeft.text}
              </ButtonClose>
            </WrapperButton>
          )}

          {buttonRight && buttonRight.isShow && (
            <WrapperButton>
              <ButtonSubmit onClick={buttonRight.onClick}>
                {buttonRight.text}
              </ButtonSubmit>
            </WrapperButton>
          )}
        </ButtonArea>
      </Content>
    </Backdrop>
  );
};

export default memo(Index);
