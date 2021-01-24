import {
  Backdrop,
  Content,
  ButtonArea,
  ButtonClose,
  ButtonSubmit,
  WrapperButton,
} from './ModalStyle';

const Index = ({ children, onClose, onSubmit, disabledSubmit }) => {
  return (
    <Backdrop>
      <Content>
        {children}
        <ButtonArea>
          {onClose && (
            <WrapperButton>
              <ButtonClose onClick={onClose}>Close</ButtonClose>
            </WrapperButton>
          )}

          {onSubmit && (
            <WrapperButton>
              <ButtonSubmit onClick={onSubmit} disabled={disabledSubmit}>
                Submit
              </ButtonSubmit>
            </WrapperButton>
          )}
        </ButtonArea>
      </Content>
    </Backdrop>
  );
};

export default Index;
