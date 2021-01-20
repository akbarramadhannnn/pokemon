import { Fragment } from 'react';

const Index = ({ children }) => {
  return (
    <Fragment>
      <h2>Header</h2>
      {children}
    </Fragment>
  );
};

export default Index;
