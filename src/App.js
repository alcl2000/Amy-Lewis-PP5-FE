import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Switch, Route} from "react-router-dom";
import  {Container} from "react-bootstrap"
import './api/axiosDefaults'
import SignUpForm from './pages/auth/SignUpForm'
import SignInForm from './pages/auth/SignInForm'

function App() {
  return (
    <div className="App">
      <NavBar />
      <Container>
        <Route exact path='/register' render={() => <SignUpForm />}/>
        <Route exact path='/signin' render={() => <SignInForm />}/>
      </Container>
    </div>
  );
}

export default App;