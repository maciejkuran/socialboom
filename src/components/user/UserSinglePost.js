import classes from './UserSinglePost.module.css';
import Card from '../UI/Card';
import profilePlaceholder from '../../img/user-placeholder.png';
import postImg from '../../img/barca.jpg';

const UserSinglePost = () => {
  return (
    <div className={classes.container}>
      <Card className={classes.post}>
        <div className={classes['post__info']}>
          <img src={profilePlaceholder}></img>
          <div>
            <h4>Maciej Kuran-Janowski</h4>
            <span>4 April 2022</span>
          </div>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <p className={classes['post__hash-tags']}>#travel #Spain #AwesomeTime</p>
        <img className={classes['post__img']} src={postImg}></img>
      </Card>
    </div>
  );
};

export default UserSinglePost;
