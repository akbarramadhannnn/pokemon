import ProgressBar, { Bar } from './ProgressBarStyle';

const Index = ({ children, value }) => {
  if(value > 100) {
    value = 100
  }
  
  return (
    <ProgressBar>
      <Bar value={value}>{children}</Bar>
    </ProgressBar>
  );
};

export default Index;
