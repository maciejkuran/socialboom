// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faHouseUser } from '@fortawesome/free-solid-svg-icons';
import RegisterForm from './components/forms/RegisterForm';
import Navbar from './components/navbar/Navbar';

function App() {
  // return <FontAwesomeIcon style={{ fontSize: '50px' }} icon={faHouseUser} />;
  return (
    <div>
      <Navbar></Navbar>
      <RegisterForm></RegisterForm>
    </div>
  );
}

export default App;
