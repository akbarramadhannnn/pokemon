import { Card } from 'components';
import WrapperPokemonDetail, {
  Container,
  WrapperContent,
  ImageArea,
  InfoArea,
} from './LoadingDetailStyle';

const Index = () => {
  return (
    <WrapperPokemonDetail>
      <Card>
        <Container>
          <WrapperContent>
            <ImageArea>
              <div className="shine box-image"></div>
            </ImageArea>

            <InfoArea>
              <div className="shine box-line"></div>
              <div className="shine box-line"></div>
              <div className="shine box-line"></div>
              <div className="shine box-line"></div>
              <div className="shine box-line"></div>
              <div className="shine box-line"></div>
            </InfoArea>
          </WrapperContent>
        </Container>
      </Card>
    </WrapperPokemonDetail>
  );
};

export default Index;
