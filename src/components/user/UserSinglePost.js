import classes from './UserSinglePost.module.css';
import Card from '../UI/Card';
import profilePlaceholder from '../../img/user-placeholder.png';

const UserSinglePost = props => {
  return (
    <div className={classes.container}>
      <Card className={classes.post}>
        <div className={classes['post__info']}>
          {props.userData.profileImage !== '' ? (
            <img src={props.userData.profileImage}></img>
          ) : (
            <img src={profilePlaceholder}></img>
          )}
          <div>
            <h4>{`${props.userData.name} ${props.userData.lastName}`}</h4>
            <span>{props.date}</span>
          </div>
        </div>
        <p>{props.content}</p>
        <p className={classes['post__hash-tags']}>{props.tags}</p>
        <img className={classes['post__img']} src={props.image}></img>
      </Card>
    </div>
  );
};

export default UserSinglePost;
