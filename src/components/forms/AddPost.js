import classes from './AddPost.module.css';
import Card from '../UI/Card';
import barca from '../../img/barca.jpg';
import SecondaryButton from '../UI/SecondaryButton';
import CloseButton from '../UI/CloseButton';
import BackgroundOverlay from '../UI/BackgroundOverlay';

const AddPost = props => {
  const hideAddPostFormHandler = () => {
    props.setAddPostForm(false);
  };

  return (
    <div>
      <Card className={classes['add-post']}>
        <h3>Make a boom! 💣</h3>
        <div className={classes['add-post__wrapper']}>
          <textarea rows="2" placeholder="What's on your mind?"></textarea>
        </div>
        <div className={classes['add-post__wrapper']}>
          <input type="text" placeholder="#seperate #tags #with #space"></input>
        </div>
        <div className={classes['add-post__align']}>
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
        </div>
        <SecondaryButton type="submit" className={classes['register__form__submit-btn']}>
          READY!
        </SecondaryButton>
        <CloseButton onClick={hideAddPostFormHandler} />
      </Card>
      <BackgroundOverlay onClick={hideAddPostFormHandler} />
    </div>
  );
};

export default AddPost;
