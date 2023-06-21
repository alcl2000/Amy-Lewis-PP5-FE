import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Switch, Route} from "react-router-dom";
import  {Container} from "react-bootstrap"
import './api/axiosDefaults'
import { useCurrentUser } from "./contexts/CurrentUserContexts";
import SignUpForm from './pages/auth/SignUpForm'
import SignInForm from './pages/auth/SignInForm'
import HomePage from './pages/home/HomePage';
import ProjectCreateForm from './pages/projects/ProjectCreateForm';
import ProfileDetail from './pages/profiles/ProfileDetail'

function App() {
    const currentUser = useCurrentUser();
    /*JSX Return Statement */
    return (
        <div className="App">
            <NavBar />
            <Container>
                <Switch>
                    <Route exact path='/register' render={() => <SignUpForm />} />
                    <Route exact path='/signin' render={() => <SignInForm />} />
                    <Route exact path='/' render={() => <HomePage />} />
                    <Route exact path='/projects/create' render={() => <ProjectCreateForm />} />
                    <Route exact path='/profiles/:id' render={() => <ProfileDetail />} />
                </Switch>
            </Container>
        </div>
    );
}

export default App;