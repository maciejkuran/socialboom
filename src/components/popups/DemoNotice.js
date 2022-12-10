import classes from './DemoNotice.module.css';
import Card from '../UI/Card';
import CloseButton from '../UI/CloseButton';
import BackgroundOverlay from '../UI/BackgroundOverlay';
import { Fragment } from 'react';

const DemoNotice = props => {
  const hideDemoNoticePopupHandler = () => {
    props.setDemoNoticePopup(false);
  };

  return (
    <Fragment>
      <Card className={classes['demo-notice']}>
        <h3>Sorry, it's a demo version! This feature is not available. 👀</h3>
        <CloseButton onClick={hideDemoNoticePopupHandler} />
      </Card>
      <BackgroundOverlay onClick={hideDemoNoticePopupHandler} />
    </Fragment>
  );
};

export default DemoNotice;
