import Navbar from '../navbar/Navbar';
import WelcomePopup from '../popups/WelcomePopup';
import UserInfobar from '../user/UserInfobar';
import AddPost from '../forms/AddPost';
import UserPostList from './UserPostList';
import DemoNotice from '../popups/DemoNotice';

const UserAccount = () => {
  return (
    <div>
      <Navbar />
      <WelcomePopup />
      <UserInfobar />
      {/* <AddPost /> */}
      <UserPostList />
      {/* <DemoNotice /> */}
    </div>
  );
};

export default UserAccount;
