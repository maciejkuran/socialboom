import classes from './UserInfobar.module.css';
import Card from '../UI/Card';
import PrimaryButton from '../UI/PrimaryButton';
import profileImg from '../../img/maciej kuran.jpg';

const UserInfobar = () => {
  return (
    <div className={classes.container}>
      <Card className={classes.infobar}>
        <div className={classes['infobar__left']}>
          <img src={profileImg}></img>
          <span>maciejkuran</span>
        </div>
        <div className={classes['infobar__right']}>
          <h1>Maciej Kuran-Janowski</h1>
          <span className={classes['infobar__right__country']}>Poland</span>
          <div className={classes['infobar__right__stats']}>
            <div>
              <span className={classes['infobar__right__stats__number']}>0</span>
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
          <PrimaryButton>Make Boom! 💣</PrimaryButton>
        </div>
      </Card>
    </div>
  );
};

export default UserInfobar;
