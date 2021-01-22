import { Fragment, useState } from 'react';
import {
  SwitchWrapper,
  DrawerWrapper,
  ContentArea,
  ListArea,
  CloseArea,
  HeadingArea,
  List
} from './SwitchStyle';

const Index = () => {
  const [showDrawer, setDrawer] = useState(false);

  const klikShowDrawer = () => {
    const body = document.body;
    body.style.overflowY = 'hidden';
    setTimeout(() => {
      setDrawer(true);
    }, 100);
  };

  const klikCloseDrawer = () => {
    const body = document.body;
    body.style.overflowY = 'scroll';
    setTimeout(() => {
      setDrawer(false);
    }, 100);
  };

  return (
    <Fragment>
      {showDrawer && (
        <DrawerWrapper>
          <ListArea>
            <ContentArea>
              <CloseArea onClick={klikCloseDrawer}>
                <p>Close</p>
              </CloseArea>

              <HeadingArea>
                <h1>My Pokemon List</h1>
              </HeadingArea>

              <List>
                  List
              </List>
            </ContentArea>
          </ListArea>
        </DrawerWrapper>
      )}
      {!showDrawer && (
        <SwitchWrapper onClick={klikShowDrawer}>
          <p>Icon</p>
        </SwitchWrapper>
      )}
    </Fragment>
  );
};

export default Index;
