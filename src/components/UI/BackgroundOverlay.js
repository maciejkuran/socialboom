import classes from './BackgroundOverlay.module.css';

const BackgroundOverlay = props => {
  return (
    <div
      onClick={props.onClick}
      className={`${classes['background-overlay']} ${props.className}`}
    ></div>
  );
};

export default BackgroundOverlay;
