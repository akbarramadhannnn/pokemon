import Card from './LoadingListStyle';
import { Grid, Container } from 'components';

const Index = () => {
  const limit = Array(20).fill(0);

  return (
    <Container
      paddingTop={20}
      paddingRight={20}
      paddingBottom={20}
      paddingLeft={20}
    >
      <Grid>
        {limit.map((_, i) => {
          return (
            <Card key={i}>
              <div className="shine box-image"></div>
              <div className="shine box-line"></div>
            </Card>
          );
        })}
      </Grid>
    </Container>
  );
};

export default Index;
