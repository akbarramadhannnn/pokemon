import Title from './TitleStyle';

const Index = ({
  children,
  fontSize,
  fontWeight,
  paddingTopBottom,
  paddingRightLeft,
  align
}) => {
  return (
    <Title
      fontSize={fontSize}
      fontWeight={fontWeight}
      paddingTopBottom={paddingTopBottom}
      paddingRightLeft={paddingRightLeft}
      align={align}
    >
      {children}
    </Title>
  );
};

export default Index;
