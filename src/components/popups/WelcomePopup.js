import classes from './WelcomePopup.module.css';
import Card from '../UI/Card';
import CloseButton from '../UI/CloseButton';
import { useState } from 'react';

const WelcomePopup = props => {
  const [popup, setPopup] = useState(true);

  const closePopupHandler = () => {
    setPopup(false);
  };

  return (
    popup && (
      <div className={classes.container}>
        <Card className={classes.welcome}>
          <h3>Welcome to socialboom {props.userData.name} 👋!</h3>
          <p>
            Connect your thoughts with other users.<br></br>
            Share now what's on your 🧠. Make your first BOOM!
          </p>
          <CloseButton onClick={closePopupHandler} />
        </Card>
      </div>
    )
  );
};

export default WelcomePopup;
