import classes from './SecondaryButton.module.css';

const SecondaryButton = props => {
  return (
    <button
      type={props.type || 'button'}
      className={`${classes['secondary-button']} ${props.className}`}
    >
      {props.children}
    </button>
  );
};

export default SecondaryButton;
