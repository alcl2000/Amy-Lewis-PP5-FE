import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Switch, Route} from "react-router-dom";
import  {Container} from "react-bootstrap"
import './api/axiosDefaults'
import SignUpForm from './pages/auth/SignUpForm'

function App() {
  return (
    <div className="App">
      <NavBar />
      <Container>
        <Route exact path='/signin' render={() => <SignUpForm />}/>
      </Container>
    </div>
  );
}

export default App;