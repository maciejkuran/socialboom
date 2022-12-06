// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faHouseUser } from '@fortawesome/free-solid-svg-icons';
import RegisterForm from './components/forms/RegisterForm';
import Navbar from './components/navbar/Navbar';
import WelcomePopup from './components/popups/WelcomePopup';
import UserInfobar from './components/user/UserInfobar';

function App() {
  // return <FontAwesomeIcon style={{ fontSize: '50px' }} icon={faHouseUser} />;
  return (
    <div>
      <Navbar />
      <WelcomePopup />
      <UserInfobar />
      <RegisterForm />
    </div>
  );
}

export default App;
