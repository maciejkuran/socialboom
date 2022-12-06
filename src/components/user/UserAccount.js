import WelcomePopup from '../popups/WelcomePopup';
import UserInfobar from '../user/UserInfobar';
import AddPost from '../forms/AddPost';

const UserAccount = () => {
  return (
    <div>
      <WelcomePopup />
      <UserInfobar />
      <AddPost />
    </div>
  );
};

export default UserAccount;
