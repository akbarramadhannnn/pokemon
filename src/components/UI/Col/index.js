import Col from './ColStyle';

const Index = ({
  children,
  marginTop,
  marginRight,
  marginBottom,
  marginLeft,
  center,
  width
}) => {
  return (
    <Col
      marginTop={marginTop}
      marginRight={marginRight}
      marginBottom={marginBottom}
      marginLeft={marginLeft}
      center={center}
      width={width}
    >
      {children}
    </Col>
  );
};

export default Index;
