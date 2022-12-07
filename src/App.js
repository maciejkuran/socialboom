import RegisterForm from './components/forms/RegisterForm';
import UserAccount from './components/user/UserAccount';
import { useState } from 'react';

function App() {
  const [registered, setRegistered] = useState(false);
  const [userData, setUserData] = useState('');

  const getUserData = data => {
    setUserData(data);
  };

  return (
    <div>
      <UserAccount />
      <RegisterForm onSubmitData={getUserData} />
    </div>
  );
}

export default App;
