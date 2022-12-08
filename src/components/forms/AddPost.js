import classes from './AddPost.module.css';
import Card from '../UI/Card';
import SecondaryButton from '../UI/SecondaryButton';
import CloseButton from '../UI/CloseButton';
import BackgroundOverlay from '../UI/BackgroundOverlay';
import { useState } from 'react';

const AddPost = props => {
  const generateDate = () => {
    const now = new Date();

    const options = {
      hour: 'numeric',
      minute: 'numeric',
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      weekday: 'long',
    };

    return new Intl.DateTimeFormat('en-US', options).format(now);
  };

  const hideAddPostFormHandler = () => {
    props.setAddPostForm(false);
  };

  const [post, setPost] = useState({
    content: '',
    tags: '',
    image: '',
    id: String(Math.round(Math.random() * 9999 + 1) * 21 + 10),
    date: generateDate(),
  });

  const getContentHandler = e => {
    setPost(prev => {
      return { ...prev, content: e.target.value.trim() };
    });
  };

  const getTagsHandler = e => {
    setPost(prev => {
      return { ...prev, tags: e.target.value.trim() };
    });
  };

  const getImageHandler = e => {
    const reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);

    reader.addEventListener('load', () => {
      setPost(prev => {
        return { ...prev, image: reader.result };
      });
    });
  };

  const submitPostHandler = e => {
    e.preventDefault();
    props.onSubmitGetPostData(post);
    props.setAddPostForm(false);
  };

  return (
    <div>
      <Card className={classes['add-post']}>
        <h3>Make a boom! 💣</h3>

        <form onSubmit={submitPostHandler}>
          <div className={classes['add-post__wrapper']}>
            <textarea
              onChange={getContentHandler}
              rows="2"
              placeholder="What's on your mind?"
              required
            ></textarea>
          </div>
          <div className={classes['add-post__wrapper']}>
            <input
              onChange={getTagsHandler}
              type="text"
              placeholder="#seperate #tags #with #space"
              required
            ></input>
          </div>
          <div className={classes['add-post__align']}>
            <label
              className={classes['add-post__input--file--label']}
              htmlFor={classes['add-post__input--file']}
            >
              Add profile image
            </label>
            <input
              onChange={getImageHandler}
              id={classes['add-post__input--file']}
              type="file"
              accept="image/png, image/jpeg"
            ></input>
            {post.image !== '' ? (
              <img className={classes['add-post__input--file--output-img']} src={post.image}></img>
            ) : (
              ''
            )}
          </div>
          <SecondaryButton type="submit" className={classes['add-post__submit-btn']}>
            READY!
          </SecondaryButton>
        </form>
        <CloseButton onClick={hideAddPostFormHandler} />
      </Card>
      <BackgroundOverlay onClick={hideAddPostFormHandler} />
    </div>
  );
};

export default AddPost;
