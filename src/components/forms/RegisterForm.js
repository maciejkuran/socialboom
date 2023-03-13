import classes from './RegisterForm.module.css';
import Card from '../UI/Card';
import logo from '../../img/socialboom logo.png';
import SecondaryButton from '../UI/SecondaryButton';
import boomGraphic from '../../img/boom.png';
import { useState } from 'react';

const RegisterForm = props => {
  const [getForm, setForm] = useState({
    name: '',
    lastName: '',
    country: '',
    profileImage: '',
    username: '',
  });

  const getNameHandler = e => {
    setForm(prev => {
      return {
        ...prev,
        name: e.target.value.trim(),
      };
    });
  };

  const getLastNameHandler = e => {
    setForm(prev => {
      return {
        ...prev,
        lastName: e.target.value.trim(),
      };
    });

    createUsername();
  };

  const getCountryHandler = e => {
    setForm(prev => {
      return { ...prev, country: e.target.value };
    });
  };

  const createUsername = () => {
    const randomNb = (min, max) => {
      return Math.trunc(Math.random() * (max - min + 1) + min);
    };

    setForm(prev => {
      return {
        ...prev,
        username: `${getForm.name.toLowerCase()}${getForm.lastName
          .slice(0, 5)
          .toLowerCase()
          .trim()}${randomNb(10, 99)}`,
      };
    });
  };

  const getFileHandler = e => {
    const reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);

    reader.addEventListener('load', () => {
      setForm(prev => {
        return { ...prev, profileImage: reader.result };
      });
    });
  };

  const submitFormHandler = e => {
    e.preventDefault();

    props.onSubmitData(getForm);
  };

  return (
    <div className={classes.container}>
      <Card className={classes.register}>
        <img className={classes['register__boomGraphic']} src={boomGraphic}></img>
        <div className={classes['register__brand-logo']}>
          <img className={classes['register__brand-logo--img']} src={logo}></img>
        </div>
        <h3>Fake Sign up!</h3>
        <p>This data is not processed anywhere.</p>
        <form onSubmit={submitFormHandler} className={classes['register__form']}>
          <div className={classes['register__form__wrapper']}>
            <input onChange={getNameHandler} placeholder="Name" type="text" required></input>
            <label>*</label>
          </div>

          <div className={classes['register__form__wrapper']}>
            <input
              onChange={getLastNameHandler}
              placeholder="Last Name"
              type="text"
              required
            ></input>
            <label>*</label>
          </div>

          <div className={classes['register__form__wrapper']}>
            <input onChange={getCountryHandler} placeholder="Country" type="text" required></input>
            <label>*</label>
          </div>

          <label
            className={classes['register__form__input--file--label']}
            htmlFor={classes['register__form__input--file']}
          >
            Add profile image
          </label>
          <input
            onChange={getFileHandler}
            id={classes['register__form__input--file']}
            type="file"
            accept="image/png, image/jpeg"
            placeholder="image"
          ></input>
          {getForm.profileImage !== '' ? (
            <img
              className={classes['register__form__input--file--output-img']}
              src={getForm.profileImage}
            ></img>
          ) : (
            ''
          )}

          <SecondaryButton type="submit" className={classes['register__form__submit-btn']}>
            READY!
          </SecondaryButton>
        </form>
      </Card>
    </div>
  );
};

export default RegisterForm;
