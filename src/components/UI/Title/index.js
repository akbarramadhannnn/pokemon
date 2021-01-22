import Title from './TitleStyle';

const Index = ({
  children,
  fontSize,
  fontWeight,
  paddingTop,
  paddingRight,
  paddingBottom,
  paddingLeft,
  align,
  color,
}) => {
  return (
    <Title
      fontSize={fontSize}
      fontWeight={fontWeight}
      paddingTop={paddingTop}
      paddingRight={paddingRight}
      paddingBottom={paddingBottom}
      paddingLeft={paddingLeft}
      align={align}
      color={color}
    >
      {children}
    </Title>
  );
};

export default Index;
