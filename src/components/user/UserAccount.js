import Navbar from '../navbar/Navbar';
import WelcomePopup from '../popups/WelcomePopup';
import UserInfobar from '../user/UserInfobar';
import UserPostList from './UserPostList';
import { useState } from 'react';

const UserAccount = props => {
  const [postList, setPostList] = useState([]);

  const addPostToList = post => {
    setPostList([post, ...postList]);
  };

  return (
    <div>
      <Navbar />
      <WelcomePopup userData={props.userData} />
      <UserInfobar
        postList={postList}
        onSubmitGetPostData={addPostToList}
        userData={props.userData}
      />
      <UserPostList userData={props.userData} postList={postList} />
    </div>
  );
};

export default UserAccount;
