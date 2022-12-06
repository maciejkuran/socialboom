import classes from './WelcomePopup.module.css';
import Card from '../UI/Card';
import CloseButton from '../UI/CloseButton';

const WelcomePopup = () => {
  return (
    <div className={classes.container}>
      <Card className={classes.welcome}>
        <h3>Welcome to socialboom Maciej 👋!</h3>
        <p>
          Connect your thoughts with other users.<br></br>
          Share now what's on your 🧠 . Make your first BOOM!
        </p>
        <CloseButton />
      </Card>
    </div>
  );
};

export default WelcomePopup;
