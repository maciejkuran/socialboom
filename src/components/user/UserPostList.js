import classes from './UserPostList.module.css';
import UserSinglePost from './UserSinglePost';

const UserPostList = props => {
  return (
    <div className={classes['post-list']}>
      {props.postList.length > 0 && <h2>Boom wall</h2>}
      <div className={classes['post-list__grid']}>
        {props.postList.map(post => {
          return (
            <UserSinglePost
              content={post.content}
              tags={post.tags}
              image={post.image}
              date={post.date}
              id={post.id}
              userData={props.userData}
              key={post.id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default UserPostList;
