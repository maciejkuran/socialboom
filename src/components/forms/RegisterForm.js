import classes from './RegisterForm.module.css';
import Card from '../UI/Card';
import logo from '../../img/socialboom logo.png';
import SecondaryButton from '../UI/SecondaryButton';
import barca from '../../img/barca.jpg';
import boomGraphic from '../../img/boom.png';

const RegisterForm = props => {
  return (
    <div className={classes.container}>
      <Card className={classes.register}>
        <img className={classes['register__boomGraphic']} src={boomGraphic}></img>
        <div className={classes['register__brand-logo']}>
          <img className={classes['register__brand-logo--img']} src={logo}></img>
        </div>
        <h3>Fake registration!</h3>
        <p>Feel free to input random values</p>
        <form className={classes['register__form']}>
          <div className={classes['register__form__wrapper']}>
            <input placeholder="Name" type="text"></input>
            <label>*</label>
          </div>

          <div className={classes['register__form__wrapper']}>
            <input placeholder="Last Name" type="text"></input>
            <label>*</label>
          </div>

          <div className={classes['register__form__wrapper']}>
            <input placeholder="Country" type="text"></input>
            <label>*</label>
          </div>

          <label
            className={classes['register__form__input--file--label']}
            htmlFor={classes['register__form__input--file']}
          >
            Add profile image
          </label>
          <input
            id={classes['register__form__input--file']}
            type="file"
            accept="image/png, image/jpeg"
          ></input>
          <img className={classes['register__form__input--file--output-img']} src={barca}></img>
          <SecondaryButton type="submit" className={classes['register__form__submit-btn']}>
            READY!
          </SecondaryButton>
        </form>
      </Card>
    </div>
  );
};

export default RegisterForm;
