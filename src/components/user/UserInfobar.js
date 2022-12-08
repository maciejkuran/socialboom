import classes from './UserInfobar.module.css';
import Card from '../UI/Card';
import PrimaryButton from '../UI/PrimaryButton';
import imgPlaceholder from '../../img/user-placeholder.png';
import AddPost from '../forms/AddPost';
import { useState } from 'react';

const UserInfobar = props => {
  const [addPostForm, setAddPostForm] = useState(false);

  const showAddPostFormHandler = () => {
    setAddPostForm(true);
  };

  const submitedPostData = data => {
    props.onSubmitGetPostData(data);
  };

  return (
    <div className={classes.container}>
      <Card className={classes.infobar}>
        <div className={classes['infobar__left']}>
          {props.userData.profileImage === '' ? (
            <img src={imgPlaceholder}></img>
          ) : (
            <img src={props.userData.profileImage}></img>
          )}
          <span>{props.userData.username}</span>
        </div>
        <div className={classes['infobar__right']}>
          <h1>{`${props.userData.name} ${props.userData.lastName}`}</h1>
          <span className={classes['infobar__right__country']}>{props.userData.country}</span>
          <div className={classes['infobar__right__stats']}>
            <div>
              <span className={classes['infobar__right__stats__number']}>
                {props.postList.length}
              </span>
              <span className={classes['infobar__right__stats__label']}>Boom</span>
            </div>
            <div>
              <span className={classes['infobar__right__stats__number']}>0</span>
              <span className={classes['infobar__right__stats__label']}>Followers</span>
            </div>
            <div>
              <span className={classes['infobar__right__stats__number']}>0</span>
              <span className={classes['infobar__right__stats__label']}>Following</span>
            </div>
          </div>
          <PrimaryButton onClick={showAddPostFormHandler}>Make Boom! 💣</PrimaryButton>
        </div>
      </Card>

      {addPostForm && (
        <AddPost onSubmitGetPostData={submitedPostData} setAddPostForm={setAddPostForm} />
      )}
    </div>
  );
};

export default UserInfobar;
