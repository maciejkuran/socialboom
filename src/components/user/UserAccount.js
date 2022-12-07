import Navbar from '../navbar/Navbar';
import WelcomePopup from '../popups/WelcomePopup';
import UserInfobar from '../user/UserInfobar';
import AddPost from '../forms/AddPost';
import UserPostList from './UserPostList';

const UserAccount = () => {
  return (
    <div>
      <Navbar />
      <WelcomePopup />
      <UserInfobar />
      {/* <AddPost /> */}
      <UserPostList />
    </div>
  );
};

export default UserAccount;
