import RegisterForm from './components/forms/RegisterForm';
import UserAccount from './components/user/UserAccount';
import { useState, Fragment } from 'react';

function App() {
  const [registered, setRegistered] = useState(false);
  const [userData, setUserData] = useState('');

  const getUserDataOnSubmitForm = data => {
    setUserData(data);
    setRegistered(true);
  };

  return (
    <Fragment>
      {registered && <UserAccount userData={userData} />}

      {!registered && <RegisterForm onSubmitData={getUserDataOnSubmitForm} />}
    </Fragment>
  );
}

export default App;
