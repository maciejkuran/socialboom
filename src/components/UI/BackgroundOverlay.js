import classes from './BackgroundOverlay.module.css';

const BackgroundOverlay = props => {
  return <div className={`${classes['background-overlay']} ${props.className}`}></div>;
};

export default BackgroundOverlay;
