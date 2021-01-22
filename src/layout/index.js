import { Fragment } from 'react';
import { Switch } from 'components'
const Index = ({ children }) => {
  return (
    <Fragment>
      {children}
      <Switch />
    </Fragment>
  );
};

export default Index;
