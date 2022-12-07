import classes from './UserPostList.module.css';
import UserSinglePost from './UserSinglePost';

const UserPostList = () => {
  return (
    <div className={classes['post-list']}>
      <h2>Boom wall</h2>
      <div className={classes['post-list__grid']}>
        <UserSinglePost />
        <UserSinglePost />
      </div>
    </div>
  );
};

export default UserPostList;
