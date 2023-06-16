import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Switch, Route} from "react-router-dom";
import  {Container} from "react-bootstrap"
import './api/axiosDefaults'
import SignUpForm from './pages/auth/SignUpForm'
import SignInForm from './pages/auth/SignInForm'
import HomePage from './pages/home/HomePage';

function App() {
    /*JSX Return Statement */
    return (
        <div className="App">
            <NavBar />
            <Container>
                <Switch>
                    <Route exact path='/register' render={() => <SignUpForm />}/>
                    <Route exact path='/signin' render={() => <SignInForm />}/>
                    <Route render={() => <HomePage />} />
                </Switch>
            </Container>
        </div>
    );
}

export default App;