import classes from './PrimaryButton.module.css';

const PrimaryButton = props => {
  return (
    <button
      onClick={props.onClick}
      type={props.type || 'button'}
      className={`${classes['primary-button']} ${props.className}`}
    >
      {props.children}
    </button>
  );
};

export default PrimaryButton;
