import classes from './CloseButton.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

const CloseButton = props => {
  return (
    <button
      aria-label="close button"
      onClick={props.onClick}
      className={`${classes['button-close']} ${props.className}`}
    >
      <FontAwesomeIcon icon={faXmark} />
    </button>
  );
};

export default CloseButton;
