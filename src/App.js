import DropDownMenu from './components/dropDownMenu/DropDownMenu';
import RegistrationForm from './components/registratioinForm/RegistrationForm';


function App() {
  return (
    <div className="container">
      {/* Task #1 */}
      <div>
        <DropDownMenu/>
      </div>
      
      {/* Task #2 */}
      <div>
        <RegistrationForm/>
      </div>
    </div>
  );
}

export default App;
