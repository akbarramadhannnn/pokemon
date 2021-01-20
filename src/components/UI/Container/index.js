import Container from './ContainerStyle';

const Index = ({
  children,
  paddingTop,
  paddingRight,
  paddingBottom,
  paddingLeft,
  center
}) => {
  return (
    <Container
      paddingTop={paddingTop}
      paddingRight={paddingRight}
      paddingBottom={paddingBottom}
      paddingLeft={paddingLeft}
      center={center}
    >
      {children}
    </Container>
  );
};

export default Index;
