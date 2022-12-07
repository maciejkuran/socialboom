import RegisterForm from './components/forms/RegisterForm';
import UserAccount from './components/user/UserAccount';
import { useState } from 'react';

function App() {
  const [registered, setRegistered] = useState(false);
  const [userData, setUserData] = useState('');

  const getUserDataOnSubmitForm = data => {
    setUserData(data);
    setRegistered(true);

    console.log(data);
  };

  return (
    <div>
      {registered && <UserAccount userData={userData} />}

      {!registered && <RegisterForm onSubmitData={getUserDataOnSubmitForm} />}
    </div>
  );
}

export default App;
