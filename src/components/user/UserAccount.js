import Navbar from '../navbar/Navbar';
import WelcomePopup from '../popups/WelcomePopup';
import UserInfobar from '../user/UserInfobar';
import UserPostList from './UserPostList';
import { useState } from 'react';

const preMadePosts = [
  {
    content: `Did you know that Barcelona ❤ is one of the world's leading tourist destinations?  The capital of the community of Catalonia in Spain and Spain's second most populated city 👨‍👩‍👦‍👦.`,
    tags: '#Barcelona #trip #tourist',
    image:
      'https://images.unsplash.com/photo-1592303985550-82e3f38f1a25?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
    id: 434999,
    date: 'Thursday, December 1, 2022 at 12:01 PM',
  },
];

const UserAccount = props => {
  const [postList, setPostList] = useState([...preMadePosts]);

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
